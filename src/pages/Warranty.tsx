import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useSeo } from "@/lib/seo";
import { company, seo, warranty } from "@/content";

export default function Warranty() {
  useSeo({ ...seo.warranty, path: "/warranty" });

  return (
    <>
      <PageHero
        kicker="Coverage"
        title="Written 60-day parts warranty"
        body={warranty.intro}
        crumbs={[{ label: "Warranty" }]}
      />

      <section className="container-page py-16 lg:py-24">
        <Reveal>
          <div className="max-w-[62ch]">
            <p className="text-[14px] text-ink-muted">
              Last updated {warranty.updated}
            </p>

            {warranty.sections.map((s) => (
              <div key={s.heading} className="mt-12 first:mt-10">
                <h2
                  className="text-[21px] leading-snug"
                  style={{ fontVariationSettings: '"wdth" 106, "wght" 680' }}
                >
                  {s.heading}
                </h2>

                {s.body.map((para) => (
                  <p
                    key={para.slice(0, 32)}
                    className="mt-4 text-[16px] leading-relaxed text-ink-muted"
                  >
                    {para}
                  </p>
                ))}

                {"list" in s && s.list && (
                  <ul className="mt-5 space-y-3">
                    {s.list.map((item) => (
                      <li
                        key={item.slice(0, 32)}
                        className="flex gap-3 text-[16px] leading-relaxed text-ink-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-brand-500"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="mt-12 border-t border-black/[0.08] pt-8">
              <h2
                className="text-[21px] leading-snug"
                style={{ fontVariationSettings: '"wdth" 106, "wght" 680' }}
              >
                Contact us
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
                Questions about this warranty, or a claim on a part we installed —{" "}
                <a
                  href={company.emailHref}
                  className="text-brand-600 underline underline-offset-4 transition-colors hover:text-brand-700"
                >
                  {company.email}
                </a>{" "}
                or{" "}
                <a
                  href={company.phoneHref}
                  className="text-brand-600 underline underline-offset-4 transition-colors hover:text-brand-700"
                >
                  {company.phone}
                </a>
                . {warranty.entity} serves {company.serviceArea}.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
