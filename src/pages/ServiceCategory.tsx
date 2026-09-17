import { useParams } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { ServiceLandingHero } from "@/components/ServiceLandingHero";
import { BookButton } from "@/components/BookButton";
import { CallButton } from "@/components/CallButton";
import { Reveal } from "@/components/Reveal";
import { ServiceRow } from "@/sections/Services";
import { Process } from "@/sections/Process";
import { ServiceAreasBand } from "@/sections/ServiceAreasBand";
import { Faq } from "@/sections/Faq";
import { FinalCta } from "@/sections/FinalCta";
import { useSeo } from "@/lib/seo";
import { groupSeo, serviceGroups } from "@/content";
import hvacHero from "@/assets/photos/landinghvac.png";
import applianceHero from "@/assets/photos/applience.png";
import applianceRepairHero from "@/assets/photos/repair.png";
import commercialHero from "@/assets/photos/commercial.png";
import NotFound from "./NotFound";

/** One component behind all four category routes — the data drives the page. */
export default function ServiceCategory() {
  const { group: slug } = useParams();
  const group = serviceGroups.find((g) => g.slug === slug);
  const meta = group ? groupSeo[group.slug] : undefined;

  useSeo(
    meta
      ? { ...meta, path: `/${slug}` }
      : { title: "Page Not Found", description: "", noindex: true },
  );

  if (!group) return <NotFound />;

  return (
    <>
      {group.slug === "hvac-services" ? (
        <ServiceLandingHero
          eyebrow="HVAC Services"
          heading="HVAC Repair & Service in Chicagoland"
          description="Fast diagnostics, expert repairs, maintenance, and installation for residential and commercial HVAC systems."
          image={hvacHero}
          imageAlt="USA Appliance & HVAC technician servicing an outdoor air conditioning unit"
          topic="HVAC service"
          thirdTrustItem="Residential & commercial"
          ratingLabel="Trusted local HVAC service"
        />
      ) : group.slug === "appliance-repair" ? (
        <ServiceLandingHero
          eyebrow="Appliance Repair"
          heading="Appliance Repair & Service in Chicagoland"
          description="Fast diagnostics and expert repairs for every major kitchen and laundry appliance."
          image={applianceRepairHero}
          imageAlt="USA Appliance & HVAC technician arriving to service kitchen and laundry appliances"
          topic="Appliance repair"
          thirdTrustItem="Kitchen & laundry"
          ratingLabel="Trusted local appliance service"
        />
      ) : group.slug === "installation" ? (
        <ServiceLandingHero
          eyebrow="Installation"
          heading="Appliance & HVAC Installation in Chicagoland"
          description="New equipment installed, connected, tested, and ready to run properly."
          image={applianceHero}
          imageAlt="USA Appliance & HVAC technician installing a built-in kitchen oven"
          topic="Installation"
          thirdTrustItem="Appliances & HVAC"
          ratingLabel="Trusted local installation service"
        />
      ) : group.slug === "commercial-services" ? (
        <ServiceLandingHero
          eyebrow="Commercial Services"
          heading="Commercial Appliance & HVAC Service in Chicagoland"
          description="Fast diagnostics and expert repairs for commercial kitchen, refrigeration, and HVAC equipment."
          image={commercialHero}
          imageAlt="USA Appliance & HVAC technician servicing commercial HVAC equipment beside a company van in Chicago"
          topic="Commercial service"
          thirdTrustItem="Restaurants & businesses"
          ratingLabel="Trusted local commercial service"
        />
      ) : (
        <PageHero
          kicker={group.navLabel}
          title={group.title}
          body={group.short}
          crumbs={[{ label: group.navLabel }]}
        >
          <div className="flex flex-wrap gap-3">
            <BookButton />
            <CallButton />
          </div>
        </PageHero>
      )}

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            {group.intro.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="type-lead mt-0 mb-5 max-w-[46ch] text-[17px] text-ink-muted"
              >
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {group.services.map((s) => (
                <ServiceRow key={s.slug} service={s} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Process />
      <ServiceAreasBand />
      <Faq />
      <FinalCta />
    </>
  );
}
