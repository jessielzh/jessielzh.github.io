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
import subprocess
from datetime import datetime, timezone
from collections import defaultdict

CLAUDE_DIR = os.path.expanduser("~/.claude/projects")
REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_PATH = os.path.join(REPO_ROOT, "client/public/token-usage.json")
CURSOR_STATIC_PATH = os.path.join(REPO_ROOT, "scripts/cursor-usage-static.json")


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
                    date = ts[:10]  # "YYYY-MM-DD"
                    msg = obj.get("message") or {}
                    usage = msg.get("usage")
                    if not usage:
                        continue
                    model = msg.get("model") or "unknown"
                    yield date, model, usage
        except OSError:
            continue


def main():
    push = "--push" in sys.argv

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

    output = {
        "updated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "daily": daily,
    }

    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(output, f, separators=(",", ":"))
        f.write("\n")

    print(f"Wrote {len(daily)} days from {total_messages} messages → {OUTPUT_PATH}")

    if push:
        subprocess.run(["git", "-C", REPO_ROOT, "add", "client/public/token-usage.json"], check=True)
        result = subprocess.run(
            ["git", "-C", REPO_ROOT, "diff", "--staged", "--quiet"]
        )
        if result.returncode != 0:
            subprocess.run(
                ["git", "-C", REPO_ROOT, "commit", "-m", "chore: update Claude Code usage data"],
                check=True,
            )
            subprocess.run(["git", "-C", REPO_ROOT, "push"], check=True)
            print("Committed and pushed.")
        else:
            print("No changes to commit.")


if __name__ == "__main__":
    main()
