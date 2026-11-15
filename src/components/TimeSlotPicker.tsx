import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TZ = "America/Chicago";

/** Two-hour arrival windows inside business hours (Mon–Sat, 8:00 AM – 6:00 PM). */
const WINDOWS = [
  { start: 8, end: 10 },
  { start: 10, end: 12 },
  { start: 12, end: 14 },
  { start: 14, end: 16 },
  { start: 16, end: 18 },
];

/** A window has to start at least this many hours from now to be bookable today. */
const LEAD_HOURS = 1;
const WEEKS_AHEAD = 3;

type ChicagoNow = { key: string; hour: number };

function chicagoNow(): ChicagoNow {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  const key = `${get("year")}-${String(get("month")).padStart(2, "0")}-${String(get("day")).padStart(2, "0")}`;
  return { key, hour: get("hour") + get("minute") / 60 };
}

/** Calendar days are UTC-midnight dates so day arithmetic never crosses a DST edge. */
function dayFromKey(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function keyFromDay(day: Date) {
  return day.toISOString().slice(0, 10);
}

function addDays(day: Date, n: number) {
  return new Date(day.getTime() + n * 86_400_000);
}

function formatHour(h: number) {
  const suffix = h >= 12 ? "PM" : "AM";
  return `${h % 12 || 12}:00 ${suffix}`;
}

export function windowLabel(w: { start: number; end: number }) {
  return `${formatHour(w.start)} - ${formatHour(w.end)}`;
}

export function formatDayLabel(key: string) {
  return dayFromKey(key).toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

function windowsFor(key: string, now: ChicagoNow) {
  const day = dayFromKey(key);
  if (day.getUTCDay() === 0 || key < now.key) return [];
  if (key > now.key) return WINDOWS;
  return WINDOWS.filter((w) => w.start >= now.hour + LEAD_HOURS);
}

export function isSlotAvailable(date: string, window: string) {
  if (!date || !window) return false;
  return windowsFor(date, chicagoNow()).some((w) => windowLabel(w) === window);
}

export function TimeSlotPicker({
  date,
  window,
  onChange,
  error,
}: {
  date: string;
  window: string;
  onChange: (date: string, window: string) => void;
  error?: string;
}) {
  const now = useMemo(chicagoNow, []);
  const firstWeekStart = useMemo(() => {
    const today = dayFromKey(now.key);
    return addDays(today, -today.getUTCDay());
  }, [now]);

  const weekDays = (offset: number) =>
    Array.from({ length: 7 }, (_, i) => {
      const day = addDays(firstWeekStart, offset * 7 + i);
      const key = keyFromDay(day);
      return { key, day, open: windowsFor(key, now).length > 0 };
    });

  // Late on a Saturday the current week has nothing left, so start on next week.
  const firstOffset = weekDays(0).some((d) => d.open) ? 0 : 1;
  const [weekOffset, setWeekOffset] = useState(firstOffset);

  const days = weekDays(weekOffset);
  const dateInView = days.some((d) => d.key === date);
  const selectedKey = (dateInView && date) || days.find((d) => d.open)?.key || "";
  const slots = selectedKey ? windowsFor(selectedKey, now) : [];

  const monthLabel = days[3].day.toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "long",
    year: "numeric",
  });

  function pickDay(key: string) {
    onChange(key, key === date ? window : "");
  }

  return (
    <div
      data-invalid={Boolean(error)}
      tabIndex={-1}
      aria-describedby={error ? "book-slot-error" : undefined}
      className={cn(
        "rounded-xl border bg-white px-4 py-5 outline-none sm:px-6",
        error ? "border-[#e2186f]" : "border-[#e3e3e8]",
      )}
    >
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setWeekOffset((w) => w - 1)}
          disabled={weekOffset <= firstOffset}
          aria-label="Previous week"
          className="inline-flex size-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/[0.05] disabled:opacity-25"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <p className="text-[16px] font-semibold text-ink">{monthLabel}</p>
        <button
          type="button"
          onClick={() => setWeekOffset((w) => w + 1)}
          disabled={weekOffset >= firstOffset + WEEKS_AHEAD - 1}
          aria-label="Next week"
          className="inline-flex size-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/[0.05] disabled:opacity-25"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center">
        {days.map(({ key, day, open }) => {
          const selected = key === selectedKey;
          return (
            <button
              key={key}
              type="button"
              disabled={!open}
              onClick={() => pickDay(key)}
              aria-pressed={selected}
              aria-label={formatDayLabel(key)}
              className="group flex flex-col items-center gap-1.5 disabled:cursor-not-allowed"
            >
              <span className="text-[13px] text-ink-muted">
                {day.toLocaleDateString("en-US", { timeZone: "UTC", weekday: "short" })}
              </span>
              <span
                className={cn(
                  "inline-flex size-10 items-center justify-center rounded-lg text-[15px] transition-colors",
                  selected
                    ? "bg-brand-500 font-semibold text-white"
                    : open
                      ? "text-ink group-hover:bg-brand-50"
                      : "text-ink-muted/40",
                )}
              >
                {day.getUTCDate()}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "size-1 rounded-full",
                  open && !selected ? "bg-ink/60" : "bg-transparent",
                )}
              />
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-[13px] text-ink-muted">
        Time zone: Central Time (CT) · Arrival window at your home
      </p>

      {selectedKey && (
        <>
          <p className="mt-4 text-[15px] font-semibold text-ink">{formatDayLabel(selectedKey)}</p>
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {slots.map((w) => {
              const label = windowLabel(w);
              const selected = selectedKey === date && label === window;
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => onChange(selectedKey, label)}
                  className={cn(
                    "h-12 rounded-lg border text-[15px] transition-colors",
                    selected
                      ? "border-brand-500 bg-brand-500 font-semibold text-white"
                      : "border-[#d5d7de] text-ink hover:border-brand-500",
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
