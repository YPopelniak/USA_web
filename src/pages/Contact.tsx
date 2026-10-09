import { useMemo } from "react";
import { useSeo } from "@/lib/seo";
import { company, seo } from "@/content";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/sections/ContactForm";
import chicagoSkyline from "@/assets/photos/why-us-chicago.webp";

export default function Contact() {
  const schema = useMemo(
    () => [
      localBusinessSchema(),
      breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
    ],
    [],
  );
  useSeo({ ...seo.contact, path: "/contact", schema });

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Call or send a message"
        body={`Same crew either way. ${company.hours}.`}
        crumbs={[{ label: "Contact" }]}
        backgroundImage={chicagoSkyline}
        backgroundAlt=""
        imagePosition="center 46%"
        softScrim
      />

      <div className="container-page py-12 lg:py-16">
        <ContactForm showIntro={false} />
      </div>
    </>
  );
}
