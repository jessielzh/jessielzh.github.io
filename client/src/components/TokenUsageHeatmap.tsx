import { useEffect, useRef, useState } from "react";

interface DailyEntry {
  date: string;
  total_tokens: number;
  models: Record<string, number>;
}

interface UsageData {
  updated_at: string;
  /** Last fully-synced day; days after this are "no data yet", not zeros. */
  coverage_through?: string;
  daily: DailyEntry[];
}

function toLocalDateString(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatTokens(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toString();
}

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en", {
    month: "short",
    day: "numeric",
  });
}

function getLevel(value: number, max: number): number {
  if (value === 0 || max === 0) return 0;
  const r = value / max;
  if (r < 0.1) return 1;
  if (r < 0.25) return 2;
  if (r < 0.5) return 3;
  if (r < 0.75) return 4;
  return 5;
}

const LEVEL_CLASSES = [
  "bg-muted",
  "bg-primary/15",
  "bg-primary/30",
  "bg-primary/55",
  "bg-primary/75",
  "bg-primary",
];

const GAP = 3;
const TARGET_CELL = 14; // target cell width in px
const CELL_STEP = TARGET_CELL + GAP;

export function TokenUsageHeatmap() {
  const [data, setData] = useState<UsageData | null>(null);
  const [error, setError] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [tooltip, setTooltip] = useState<{
    date: string;
    value: number;
    pending: boolean;
    x: number;
    y: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/token-usage.json")
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  if (error) return null;

  if (!data || data.daily.length === 0) {
    return (
      <p className="text-xs font-mono text-muted-foreground">
        {data ? "No usage data yet." : "Loading usage data…"}
      </p>
    );
  }

  const numWeeks =
    containerWidth > 0
      ? Math.min(52, Math.max(8, Math.floor(containerWidth / CELL_STEP)))
      : 26;

  const dailyMap = new Map(data.daily.map((d) => [d.date, d]));
  const maxTokens = Math.max(...data.daily.map((d) => d.total_tokens), 1);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Days after coverage_through aren't synced yet — render them as "no data
  // yet" rather than confident zeros. Absent field → trust everything (no regression).
  const coverageDate = new Date((data.coverage_through ?? "9999-12-31") + "T00:00:00");

  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - startDate.getDay());
  startDate.setDate(startDate.getDate() - (numWeeks - 1) * 7);

  const weeks: Array<
    Array<{ date: string; value: number; level: number; isFuture: boolean; isPending: boolean }>
  > = [];
  const cur = new Date(startDate);
  for (let w = 0; w < numWeeks; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const ds = toLocalDateString(cur);
      const entry = dailyMap.get(ds);
      const value = entry?.total_tokens ?? 0;
      const isFuture = cur > today;
      const isPending = !isFuture && cur > coverageDate;
      week.push({
        date: ds,
        value,
        level: isFuture || isPending ? 0 : getLevel(value, maxTokens),
        isFuture,
        isPending,
      });
      cur.setDate(cur.getDate() + 1);
    }
    weeks.push(week);
  }

  const updatedMs = new Date(data.updated_at).getTime();
  const isStale =
    Number.isFinite(updatedMs) && Date.now() - updatedMs > 36 * 3600 * 1000;

  // Stats
  const totalTokens = data.daily.reduce((s, d) => s + d.total_tokens, 0);
  const firstDate = new Date(data.daily[0].date + "T00:00:00");
  const daySpan = Math.max(1, Math.round((today.getTime() - firstDate.getTime()) / 86400000) + 1);
  const avgTokensPerDay = Math.round(totalTokens / daySpan);

  const handleCellEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    date: string,
    value: number,
    isFuture: boolean,
    pending: boolean
  ) => {
    if (isFuture) return;
    const container = containerRef.current;
    if (!container) return;
    const cRect = container.getBoundingClientRect();
    const cellRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltip({
      date,
      value,
      pending,
      x: cellRect.left - cRect.left + cellRect.width / 2,
      y: cellRect.top - cRect.top,
    });
  };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { label: "Total Tokens", value: formatTokens(totalTokens) },
          { label: "Avg Tokens / Day", value: formatTokens(avgTokensPerDay) },
        ].map(({ label, value }) => (
          <div key={label} className="border border-border p-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
              {label}
            </div>
            <div className="font-bold font-mono text-base leading-none">{value}</div>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          style={{
            position: "absolute",
            left: tooltip.x,
            top: tooltip.y + 44 - 28, // offset for stats height approx
            transform: "translateX(-50%)",
            background: "var(--color-foreground)",
            color: "var(--color-background)",
            borderRadius: 4,
            padding: "3px 8px",
            fontSize: 11,
            fontFamily: "var(--font-mono)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {formatDate(tooltip.date)} —{" "}
          {tooltip.pending ? "no data yet" : formatTokens(tooltip.value)}
        </div>
      )}

      {/* Heatmap grid: CSS grid fills full width, aspect-ratio keeps cells square */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numWeeks}, 1fr)`,
          gap: GAP,
          width: "100%",
        }}
      >
        {weeks.map((week, wi) => (
          <div key={wi} style={{ display: "flex", flexDirection: "column", gap: GAP }}>
            {week.map(({ date, value, level, isFuture, isPending }) => (
              <div
                key={date}
                className={
                  isPending
                    ? "rounded-[2px] border border-dashed border-muted-foreground/40"
                    : `${LEVEL_CLASSES[level]} rounded-[2px]`
                }
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  opacity: isFuture ? 0 : 1,
                }}
                onMouseEnter={(e) => handleCellEnter(e, date, value, isFuture, isPending)}
                onMouseLeave={() => setTooltip(null)}
              />
            ))}
          </div>
        ))}
      </div>

      <p
        style={{
          fontSize: 10,
          fontFamily: "var(--font-mono)",
          color: "var(--color-muted-foreground)",
          marginTop: 8,
        }}
      >
        Since{" "}
        {new Date(data.daily[0].date + "T00:00:00").toLocaleDateString("en", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
        {" · Updated "}
        {new Date(data.updated_at).toLocaleDateString("en", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
        {isStale && (
          <span style={{ color: "var(--color-destructive, #c0392b)" }}>
            {" · ⚠ may be stale"}
          </span>
        )}
      </p>
    </div>
  );
}
