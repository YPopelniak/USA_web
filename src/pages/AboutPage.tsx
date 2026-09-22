import { useMemo } from "react";
import { useSeo } from "@/lib/seo";
import { seo } from "@/content";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";
import { About } from "@/sections/About";
import { Process } from "@/sections/Process";
import { Equipment } from "@/sections/Equipment";
import { WhyUs } from "@/sections/WhyUs";
import { Credentials } from "@/sections/Credentials";
import { GoogleReviews } from "@/sections/GoogleReviews";
import { Faq } from "@/sections/Faq";
import { FinalCta } from "@/sections/FinalCta";
export default function AboutPage() {
  const schema = useMemo(
    () => [
      localBusinessSchema(),
      breadcrumbSchema([{ name: "About", path: "/about" }]),
      faqSchema(),
    ],
    [],
  );
  useSeo({ ...seo.about, path: "/about", schema });

  return (
    <>
      <About />
      <Credentials />
      <WhyUs />
      <Equipment />
      <Process />
      <GoogleReviews />
      <Faq />
      <FinalCta />
    </>
  );
}
