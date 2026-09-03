#!/usr/bin/env python3
"""
Aggregate Claude Code token usage from local session logs and write to JSON.
Reads ~/.claude/projects/**/*.jsonl, aggregates by date, writes token-usage.json.

Run manually or via a daily cron/launchd job:
    python3 scripts/fetch_usage.py [--push]

Pass --push to also git commit + push the result automatically.
"""

import json
import os
import glob
import sys
import socket
import subprocess
import time
from datetime import datetime, timezone, timedelta
from collections import defaultdict

CLAUDE_DIR = os.path.expanduser("~/.claude/projects")
REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_PATH = os.path.join(REPO_ROOT, "client/public/token-usage.json")
CURSOR_STATIC_PATH = os.path.join(REPO_ROOT, "scripts/cursor-usage-static.json")
STATUS_PATH = os.path.expanduser("~/.claude/usage-sync-status.json")


def _read_status() -> dict:
    try:
        with open(STATUS_PATH) as f:
            return json.load(f)
    except (OSError, json.JSONDecodeError):
        return {}


def _write_status(**fields) -> None:
    status = _read_status()
    status.update(fields)
    try:
        with open(STATUS_PATH, "w") as f:
            json.dump(status, f, indent=2)
    except OSError:
        pass


def already_synced_today() -> bool:
    """True if a push already succeeded on today's (local) date."""
    return _read_status().get("last_success_date") == datetime.now().strftime("%Y-%m-%d")


def warn_if_stale(max_quiet_days: int = 7) -> None:
    """Surface a long silent gap before it costs data.

    Claude Code keeps transcripts for 30 days, so a day is only recoverable
    while a sync lands inside that window. A run that keeps no-opping (offline
    ticks, a broken plist) is otherwise completely silent until a month of
    usage has already been lost.
    """
    last = _read_status().get("last_success_date")
    if not last:
        return
    try:
        quiet = (datetime.now().date() - datetime.strptime(last, "%Y-%m-%d").date()).days
    except ValueError:
        return
    if quiet > max_quiet_days:
        msg = f"no successful sync for {quiet} days (data is lost after 30)"
        print(f"WARNING: {msg}")
        notify("Usage sync stale", msg)


def github_reachable() -> bool:
    """Quick TCP check so network-less DarkWake ticks no-op instead of failing."""
    try:
        with socket.create_connection(("github.com", 443), timeout=5):
            return True
    except OSError:
        return False


def notify(title: str, message: str) -> None:
    """Best-effort macOS desktop notification."""
    try:
        subprocess.run(
            ["osascript", "-e", f'display notification "{message}" with title "{title}"'],
            check=False,
        )
    except OSError:
        pass


def iter_assistant_messages():
    """Yield (date_str, model, usage_dict) for every assistant turn across all projects."""
    pattern = os.path.join(CLAUDE_DIR, "**", "*.jsonl")
    for path in glob.glob(pattern, recursive=True):
        try:
            with open(path, encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        obj = json.loads(line)
                    except json.JSONDecodeError:
                        continue
                    if obj.get("type") != "assistant":
                        continue
                    ts = obj.get("timestamp", "")
                    if not ts:
                        continue
                    # Timestamps are UTC ISO (…Z). Bucket by *local* date so the
                    # data lines up with the heatmap, which renders cells and
                    # "today" in local time. Fall back to the raw UTC prefix if
                    # parsing ever fails.
                    try:
                        date = (
                            datetime.fromisoformat(ts.replace("Z", "+00:00"))
                            .astimezone()
                            .strftime("%Y-%m-%d")
                        )
                    except ValueError:
                        date = ts[:10]  # "YYYY-MM-DD"
                    msg = obj.get("message") or {}
                    usage = msg.get("usage")
                    if not usage:
                        continue
                    model = msg.get("model") or "unknown"
                    yield date, model, usage
        except OSError:
            continue


def merge_previous(by_date: dict) -> int:
    """Carry forward days the local transcripts no longer cover.

    Claude Code prunes ~/.claude/projects transcripts after `cleanupPeriodDays`
    (30 by default), so a from-scratch rebuild silently drops every day older
    than that window — past months decayed to zeros on the heatmap. The
    published file is the long-term record, so re-read it and keep, per date,
    whichever version reports more tokens: the fresh scan wins for days still
    on disk (a day can still be accumulating), the old file wins for days that
    have aged out.
    """
    if not os.path.exists(OUTPUT_PATH):
        return 0
    try:
        with open(OUTPUT_PATH, encoding="utf-8") as f:
            previous = json.load(f).get("daily", [])
    except (OSError, json.JSONDecodeError) as exc:
        # The file exists but cannot be read. Rewriting now would publish only
        # the last 30 days and commit the loss, so bail out instead and let a
        # human look at it.
        err = f"cannot read {OUTPUT_PATH}: {exc}"
        print(f"ERROR: {err}. Refusing to overwrite the usage history.")
        _write_status(last_error=err)
        notify("Usage sync failed", "token-usage.json unreadable; history NOT overwritten")
        sys.exit(1)

    carried = 0
    for entry in previous:
        date = entry.get("date")
        if not date:
            continue
        if by_date.get(date, {}).get("total_tokens", 0) >= entry.get("total_tokens", 0):
            continue
        by_date[date] = {
            "uncached_input_tokens": entry.get("uncached_input_tokens", 0),
            "output_tokens": entry.get("output_tokens", 0),
            "cache_creation_tokens": entry.get("cache_creation_tokens", 0),
            "cache_read_tokens": entry.get("cache_read_tokens", 0),
            "total_tokens": entry.get("total_tokens", 0),
            "models": dict(entry.get("models") or {}),
            "cursor_tokens": entry.get("cursor_tokens", 0),
        }
        carried += 1
    return carried


def main():
    push = "--push" in sys.argv
    scheduled = "--scheduled" in sys.argv

    # In --scheduled mode (launchd, every 30 min) guard the frequent ticks up
    # front, before any work: skip if today already synced, and no-op quietly
    # if offline (e.g. a network-less DarkWake). This also avoids rewriting the
    # data file on skipped ticks. Manual `--push` runs bypass both guards.
    if push and scheduled:
        warn_if_stale()
        if already_synced_today():
            print("Already synced today; nothing to do.")
            return
        if not github_reachable():
            print("No network; will retry on next tick.")
            return

    # Aggregate by date
    by_date: dict[str, dict] = defaultdict(lambda: {
        "uncached_input_tokens": 0,
        "output_tokens": 0,
        "cache_creation_tokens": 0,
        "cache_read_tokens": 0,
        "total_tokens": 0,
        "models": defaultdict(int),
    })

    total_messages = 0
    for date, model, usage in iter_assistant_messages():
        d = by_date[date]
        uncached = usage.get("input_tokens") or 0
        output = usage.get("output_tokens") or 0
        cache_obj = usage.get("cache_creation") or {}
        cache_create = (
            (cache_obj.get("ephemeral_1h_input_tokens") or 0)
            + (cache_obj.get("ephemeral_5m_input_tokens") or 0)
        )
        # Fallback: older format stores cache_creation_input_tokens as flat field
        if cache_create == 0:
            cache_create = usage.get("cache_creation_input_tokens") or 0
        cache_read = usage.get("cache_read_input_tokens") or 0
        total = uncached + output + cache_create + cache_read

        d["uncached_input_tokens"] += uncached
        d["output_tokens"] += output
        d["cache_creation_tokens"] += cache_create
        d["cache_read_tokens"] += cache_read
        d["total_tokens"] += total
        d["models"][model] += total
        total_messages += 1

    # Merge static Cursor data
    if os.path.exists(CURSOR_STATIC_PATH):
        with open(CURSOR_STATIC_PATH) as f:
            cursor_entries = json.load(f)
        for entry in cursor_entries:
            date = entry["date"]
            tokens = entry["total_tokens"]
            if date in by_date:
                by_date[date]["cursor_tokens"] = by_date[date].get("cursor_tokens", 0) + tokens
                by_date[date]["total_tokens"] += tokens
            else:
                by_date[date] = defaultdict(int)
                by_date[date]["cursor_tokens"] = tokens
                by_date[date]["total_tokens"] = tokens
                by_date[date]["models"] = defaultdict(int)
        print(f"Merged {len(cursor_entries)} Cursor days from static file")

    # Preserve days that have aged out of the local transcript window
    carried = merge_previous(by_date)
    if carried:
        print(f"Carried forward {carried} day(s) from the published file")

    # Build sorted output list
    daily = []
    for date in sorted(by_date):
        d = by_date[date]
        entry = {
            "date": date,
            "uncached_input_tokens": d["uncached_input_tokens"],
            "output_tokens": d["output_tokens"],
            "cache_creation_tokens": d["cache_creation_tokens"],
            "cache_read_tokens": d["cache_read_tokens"],
            "total_tokens": d["total_tokens"],
            "models": dict(d["models"]),
        }
        if d.get("cursor_tokens"):
            entry["cursor_tokens"] = d["cursor_tokens"]
        daily.append(entry)

    # Last fully-complete day the pipeline vouches for. Computed in *local* time
    # to match the local-date buckets above and the heatmap's local "today";
    # a UTC basis lagged an extra day for east-of-UTC users syncing in the
    # morning. Days after this are "not synced yet" rather than genuine zeros —
    # the website renders them distinctly.
    coverage_through = (datetime.now().date() - timedelta(days=1)).isoformat()

    output = {
        "updated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "coverage_through": coverage_through,
        "daily": daily,
    }

    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(output, f, separators=(",", ":"))
        f.write("\n")

    print(f"Wrote {len(daily)} days from {total_messages} messages → {OUTPUT_PATH}")

    if push:
        now_iso = datetime.now().isoformat(timespec="seconds")
        today_str = datetime.now().strftime("%Y-%m-%d")

        subprocess.run(["git", "-C", REPO_ROOT, "add", "client/public/token-usage.json"], check=True)
        result = subprocess.run(
            ["git", "-C", REPO_ROOT, "diff", "--staged", "--quiet"]
        )
        if result.returncode != 0:
            subprocess.run(
                ["git", "-C", REPO_ROOT, "commit", "-m", "chore: update Claude Code usage data"],
                check=True,
            )
            print("Committed.")
        else:
            print("No changes to commit.")

        # Push any commits the remote is missing. This also catches up commits
        # from earlier runs whose push failed while offline.
        ahead = subprocess.run(
            ["git", "-C", REPO_ROOT, "rev-list", "--count", "@{upstream}..HEAD"],
            capture_output=True, text=True,
        )
        pending = int(ahead.stdout.strip() or "0")

        if pending == 0:
            print("Nothing to push.")
            _write_status(last_attempt=now_iso, last_success=now_iso,
                          last_success_date=today_str, last_error=None,
                          pending_commits=0)
            return

        # Retry with backoff — a run can land in a brief window before Wi-Fi is
        # fully up, and a single timeout must not strand commits.
        delays = [0, 15, 60, 180]
        for attempt, delay in enumerate(delays, 1):
            if delay:
                time.sleep(delay)
            if subprocess.run(["git", "-C", REPO_ROOT, "push"]).returncode == 0:
                print(f"Pushed {pending} commit(s).")
                _write_status(last_attempt=now_iso, last_success=now_iso,
                              last_success_date=today_str, last_error=None,
                              pending_commits=0)
                return
            print(f"Push attempt {attempt}/{len(delays)} failed.")

        # Network was reachable but every push attempt still failed — a genuine
        # failure worth surfacing.
        err = f"push failed after {len(delays)} attempts; {pending} commit(s) still local"
        print(f"ERROR: {err}. Will retry next run.")
        _write_status(last_attempt=now_iso, last_error=err, pending_commits=pending)
        notify("Usage sync failed", err)
        sys.exit(1)


if __name__ == "__main__":
    main()
