import { BadgeCheck, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { credentials } from "@/content";

const icons = [BadgeCheck, Shield, FileText];

export function Credentials() {
  return (
    <section className="border-y border-black/[0.08] bg-surface py-16 lg:py-24">
      <div className="container-page">
        <Reveal>
          <p
            className="text-[13px] uppercase tracking-[0.12em] text-brand-600"
            style={{ fontVariationSettings: '"wdth" 105, "wght" 700' }}
          >
            Credentials
          </p>
          <h2 className="type-title mt-4 max-w-xl text-[32px] sm:text-[42px]">
            {credentials.title}
          </h2>
          <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-ink-muted">
            {credentials.body}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-px bg-black/[0.07] sm:grid-cols-3">
          {credentials.items.map((item, i) => {
            const Icon = icons[i] ?? BadgeCheck;
            const inner = (
              <>
                <span className="inline-flex size-11 items-center justify-center bg-brand-50 text-brand-600">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3
                  className="mt-5 text-[18px] leading-snug"
                  style={{ fontVariationSettings: '"wdth" 106, "wght" 660' }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
                {"to" in item && item.to && (
                  <span className="mt-5 inline-block text-[14px] font-semibold text-brand-600">
                    Read the written terms
                  </span>
                )}
              </>
            );

            return (
              <li key={item.title}>
                <Reveal delay={i * 0.06} className="h-full">
                  {"to" in item && item.to ? (
                    <Link
                      to={item.to}
                      className="flex h-full flex-col bg-white p-7 transition-colors hover:bg-surface"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className="flex h-full flex-col bg-white p-7">{inner}</div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
