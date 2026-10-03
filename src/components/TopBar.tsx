import { company } from "@/content";
import { useOpenState } from "@/lib/useOpenState";
import { cn } from "@/lib/utils";
import { SocialIcon } from "./SocialIcon";

/**
 * Utility bar.
 *
 * No icons. An envelope, a map pin and a clock in a row is the single most
 * template-looking thing a site can put above its header — three borrowed
 * glyphs that repeat what the text beside them already says.
 *
 * The separator is the same rotated square used between town names in the
 * service-areas rows, so the bar speaks the site's own vocabulary instead of
 * an icon library's.
 *
 * The email address is deliberately not here: a plain mailto in the header is
 * the first thing address harvesters take. It lives in the footer, on the
 * contact page and in the structured data.
 */
function Diamond() {
  return (
    <span
      aria-hidden="true"
      className="mx-5 hidden size-1 shrink-0 rotate-45 bg-white/50 lg:inline-block"
    />
  );
}

function HoursStatus({ hours }: { hours: ReturnType<typeof useOpenState> }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={cn(
          "relative inline-flex size-1.5 shrink-0 rounded-full",
          hours.open ? "bg-emerald-500" : "bg-ink-muted/40",
        )}
      >
        {hours.open && (
          <span className="status-pulse absolute inset-0 rounded-full bg-emerald-500" />
        )}
      </span>
      <span className="text-white">{hours.label}</span>
      <span className="text-white/80">· {hours.detail}</span>
    </span>
  );
}

export function TopBar() {
  const hours = useOpenState();

  return (
    <div className="border-b border-white/10 bg-[#203247] text-[12px] text-white/80 sm:text-[13px]">
      <div className="container-page flex flex-col items-center gap-1 py-2.5 text-center lg:h-11 lg:flex-row lg:justify-between lg:py-0 lg:text-left">
        <p className="flex flex-col items-center gap-1 lg:flex-row lg:gap-0">
          <span>{company.address}</span>
          <Diamond />
          <HoursStatus hours={hours} />
          <Diamond />
          <span>Taking requests 24/7</span>
          <Diamond />
          <span>Licensed &amp; insured in Illinois · EPA 608</span>
        </p>

        <ul className="hidden items-center gap-4 lg:flex">
          {company.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="block text-white/80 transition-colors hover:text-white"
              >
                <SocialIcon name={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
