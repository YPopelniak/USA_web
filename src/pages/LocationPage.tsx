import { Link, useParams } from "react-router-dom";
import { Fragment, useMemo } from "react";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { CallButton } from "@/components/CallButton";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/sections/Faq";
import { FinalCta } from "@/sections/FinalCta";
import { useSeo } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";
import { getLocationPage, locationPagePath, site } from "@/content";
import NotFound from "./NotFound";

function Prose({ children }: { children: string[] }) {
  return (
    <div className="prose-measure space-y-4 text-[17px] leading-relaxed text-ink-muted">
      {children.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
    </div>
  );
}

export default function LocationPage() {
  const { slug } = useParams();
  const page = slug ? getLocationPage(slug) : undefined;
  const path = page ? `/service-areas/${page.slug}` : undefined;

  const schema = useMemo(
    () =>
      page && path
        ? [
            localBusinessSchema(),
            breadcrumbSchema([
              { name: "Service Areas", path: "/service-areas" },
              { name: page.town, path },
            ]),
            faqSchema(page.faqs),
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: page.h1,
              description: page.description,
              url: site.url + path,
              areaServed: {
                "@type": "City",
                name: page.town,
                containedInPlace: { "@type": "State", name: "Illinois" },
              },
              provider: { "@id": `${site.url}/#business` },
            },
          ]
        : [],
    [page, path],
  );

  useSeo(
    page && path
      ? {
          title: page.title,
          description: page.description,
          path,
          schema,
        }
      : { title: "Page Not Found", description: "", noindex: true },
  );

  if (!page) return <NotFound />;

  const nearbyLinks = page.nearby.towns.map((town) => ({
    town,
    href: locationPagePath(town),
  }));

  return (
    <>
      <PageHero
        kicker="Service areas"
        title={page.h1}
        body={page.opening.join(" ")}
        crumbs={[
          { label: "Service Areas", to: "/service-areas" },
          { label: page.town },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <BookButton label="Book online" />
          <CallButton />
        </div>
      </PageHero>

      <section className="bg-surface">
        <div className="container-page py-16 lg:py-24">
          <Reveal>
            <h2 className="type-title max-w-[20ch] text-[32px] sm:text-[42px]">
              {page.appliance.heading}
            </h2>
            <div className="mt-8">
              <Prose>{page.appliance.paragraphs}</Prose>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <Reveal>
          <h2 className="type-title max-w-[20ch] text-[32px] sm:text-[42px]">
            {page.hvac.heading}
          </h2>
          <div className="mt-8">
            <Prose>{page.hvac.paragraphs}</Prose>
          </div>
        </Reveal>
      </section>

      {page.jobs.length > 0 && (
        <section className="bg-surface">
          <div className="container-page py-16 lg:py-24">
            <Reveal>
              <h2 className="type-title max-w-[20ch] text-[32px] sm:text-[42px]">
                Recent jobs in {page.town}
              </h2>
              <ul className="prose-measure mt-8 space-y-5 text-[17px] leading-relaxed text-ink-muted">
                {page.jobs.map((job) => (
                  <li key={job.slice(0, 48)}>{job}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-ink py-16 text-white lg:py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="type-title max-w-[20ch] text-[32px] sm:text-[42px]">
              {page.visit.heading}
            </h2>
          </Reveal>
          <ol className="mt-10 max-w-3xl">
            {page.visit.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <li className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-white/12 py-7 last:border-b">
                  <span
                    className="text-[15px] tabular-nums text-brand-400"
                    style={{ fontVariationSettings: '"wdth" 108, "wght" 700' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="text-[21px] leading-tight"
                      style={{ fontVariationSettings: '"wdth" 110, "wght" 660' }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-[54ch] text-[15px] leading-relaxed text-white/60">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <Reveal>
          <h2 className="type-title max-w-[20ch] text-[32px] sm:text-[42px]">
            {page.why.heading}
          </h2>
          <div className="mt-8">
            <Prose>{page.why.paragraphs}</Prose>
          </div>
        </Reveal>
      </section>

      <section className="bg-surface">
        <div className="container-page py-16 lg:py-24">
          <Reveal>
            <h2 className="type-title max-w-[20ch] text-[32px] sm:text-[42px]">
              {page.nearby.heading}
            </h2>
            <p className="prose-measure mt-8 text-[17px] leading-relaxed text-ink-muted">
              We also take the same appliance and HVAC calls in{" "}
              {nearbyLinks.map((item, i) => {
                const sep =
                  i === nearbyLinks.length - 1
                    ? "."
                    : i === nearbyLinks.length - 2
                      ? ", and "
                      : ", ";
                const name = item.href ? (
                  <Link
                    to={item.href}
                    className="font-semibold text-brand-600 underline decoration-brand-500/30 underline-offset-4 hover:decoration-brand-600"
                  >
                    {item.town}
                  </Link>
                ) : (
                  item.town
                );
                return <Fragment key={item.town}>{name}{sep}</Fragment>;
              })}
            </p>
            <p className="prose-measure mt-6 text-[17px] leading-relaxed text-ink-muted">
              {page.serviceLinks.map((link, i) => {
                const sep =
                  i === page.serviceLinks.length - 1
                    ? "."
                    : i === page.serviceLinks.length - 2
                      ? ", and "
                      : ", ";
                return (
                  <Fragment key={`${link.to}-${link.label}`}>
                    <Link
                      to={link.to}
                      className="font-semibold text-brand-600 underline decoration-brand-500/30 underline-offset-4 hover:decoration-brand-600"
                    >
                      {link.label}
                    </Link>{sep}
                  </Fragment>
                );
              })}
            </p>
          </Reveal>
        </div>
      </section>

      <Faq
        items={page.faqs}
        title="FAQ"
        body="Straight answers for this town before you book."
      />

      <section className="container-page pb-4">
        <Reveal>
          <p className="mx-auto max-w-[54ch] text-center text-[17px] leading-relaxed text-ink-muted">
            {page.closing}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <BookButton label="Book online" />
            <CallButton />
          </div>
        </Reveal>
      </section>

      <FinalCta />
    </>
  );
}
