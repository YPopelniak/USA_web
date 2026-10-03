import { Link, useParams } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { CallButton } from "@/components/CallButton";
import { Process } from "@/sections/Process";
import { ServiceAreasBand } from "@/sections/ServiceAreasBand";
import { FinalCta } from "@/sections/FinalCta";
import { useSeo } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { serviceGroups, site } from "@/content";
import { getServicePage, servicePagePath } from "@/service-pages";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { group: groupSlug, service: slug } = useParams();
  const page = groupSlug && slug ? getServicePage(groupSlug, slug) : undefined;
  const group = serviceGroups.find((item) => item.slug === page?.groupSlug);
  const path = page ? servicePagePath(page) : undefined;

  useSeo(
    page && path
      ? {
          title: page.seoTitle,
          description: page.description,
          path,
          schema: [
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `${site.url}${path}#service`,
              name: page.title,
              description: page.description,
              url: site.url + path,
              provider: { "@id": `${site.url}/#business` },
            },
            breadcrumbSchema([
              { name: group?.navLabel ?? "Services", path: `/${page.groupSlug}` },
              { name: page.title, path },
            ]),
          ],
        }
      : { title: "Page Not Found", description: "", noindex: true },
  );

  if (!page || !path || !group) return <NotFound />;

  const related = group.services.filter((item) => item.to && item.to !== path);

  return (
    <>
      <PageHero
        kicker={page.eyebrow}
        title={page.title}
        body={page.paragraphs[0]}
        crumbs={[
          { label: group.navLabel, to: `/${group.slug}` },
          { label: page.title },
        ]}
      >
        <div className="flex flex-wrap gap-3" data-cta-location="service">
          <BookButton label="Book Service" topic={page.title} />
          <CallButton />
        </div>
      </PageHero>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-[68ch]">
            {page.paragraphs.slice(1).map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mb-5 text-[17px] leading-relaxed text-ink-muted"
              >
                {paragraph}
              </p>
            ))}
            {page.note && (
              <p className="border border-black/[0.08] bg-surface px-5 py-4 text-[15px] leading-relaxed text-ink">
                {page.note}
              </p>
            )}
          </div>

          <div>
            <h2
              className="text-[22px] leading-snug"
              style={{ fontVariationSettings: '"wdth" 108, "wght" 700' }}
            >
              What this visit covers
            </h2>
            <ul className="mt-5 space-y-3">
              {page.includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[16px] leading-relaxed text-ink-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-brand-500"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-14 border-t border-black/[0.08] pt-10">
            <h2
              className="text-[22px] leading-snug"
              style={{ fontVariationSettings: '"wdth" 108, "wght" 700' }}
            >
              More in {group.navLabel}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={item.to!}
                    className="block border border-black/[0.08] bg-white px-5 py-4 transition-colors hover:border-brand-500/40 hover:text-brand-600"
                  >
                    <span className="block text-[16px] font-semibold">{item.title}</span>
                    <span className="mt-1 block text-[14px] leading-snug text-ink-muted">
                      {item.short}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <Process />
      <ServiceAreasBand />
      <FinalCta />
    </>
  );
}
