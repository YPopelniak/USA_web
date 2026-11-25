import { ExternalLink } from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { GoogleGlyph, Stars } from "@/components/Stars";
import { company, googleReviews as g } from "@/content";

/** Google rating and reviews; data lives in content.ts. */
export function GoogleReviews() {
  /* An empty five-star block is worse than no block. */
  if (!g.items.length || !g.total) return null;

  return (
    <section className="overflow-hidden bg-surface py-16 lg:py-24">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="type-title max-w-xl text-[32px] sm:text-[42px]">{g.title}</h2>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
              <a
                href={g.profileUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-3"
              >
                <GoogleGlyph className="size-7" />
                <span className="text-[40px] font-extrabold leading-none">
                  {g.rating.toFixed(1)}
                </span>
                <span className="flex flex-col gap-1">
                  <Stars rating={g.rating} />
                  <span className="inline-flex items-center gap-1 text-[13px] text-ink-muted transition-colors group-hover:text-brand-600">
                    {g.total} Google reviews
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </span>
                </span>
              </a>
              <a
                href={company.googleReviewUrl}
                target="_blank"
                rel="noreferrer noopener"
                data-cta-location="reviews-write"
                className="inline-flex items-center justify-center rounded-[var(--radius-action)] bg-brand-500 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Write a review
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <div
          className="mt-12"
          style={{ ["--marquee-edge" as string]: "var(--color-surface)" }}
        >
          <Marquee speed={Math.max(40, g.items.length * 12)}>
            {g.items.map((r) => (
              <article
                key={r.author}
                className="flex h-[244px] w-[320px] shrink-0 flex-col rounded-[var(--radius-card)] border border-black/[0.08] bg-white p-6 sm:w-[360px]"
              >
                <div className="flex items-center justify-between">
                  <Stars rating={r.rating} size="size-4" />
                  <GoogleGlyph className="size-4" />
                </div>

                <p className="mt-4 line-clamp-5 text-[15px] leading-relaxed text-ink">
                  “{r.text}”
                </p>

                <div className="mt-auto flex items-center gap-3 pt-4">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[13px] font-bold text-brand-600">
                    {r.initial}
                  </span>
                  <p className="min-w-0 truncate text-[14px] font-semibold">{r.author}</p>
                </div>
              </article>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}
