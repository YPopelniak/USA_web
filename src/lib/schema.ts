import {
  allServices,
  businessFacts,
  company,
  faqs,
  googleReviews,
  type LocationFaq,
  serviceAreaTowns,
  serviceGroups,
  site,
} from "@/content";

const ID = `${site.url}/#business`;

/**
 * The core LocalBusiness node. Every other block references it by @id so
 * crawlers see one business, not five.
 *
 * HomeAndConstructionBusiness is the correct parent type for a mixed
 * handyman / HVAC / appliance operation; HVACBusiness alone would understate
 * the other two service lines.
 */
export function localBusinessSchema() {
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "HVACBusiness"],
    "@id": ID,
    name: businessFacts.legalName,
    url: site.url,
    telephone: company.phoneE164,
    email: company.email,
    description: company.tagline,
    image: site.url + site.ogImage,
    priceRange: businessFacts.priceRange,
    currenciesAccepted: businessFacts.currenciesAccepted,
    paymentAccepted: businessFacts.paymentAccepted,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessFacts.streetAddress,
      addressLocality: businessFacts.addressLocality,
      addressRegion: businessFacts.addressRegion,
      addressCountry: businessFacts.addressCountry,
      ...(businessFacts.postalCode ? { postalCode: businessFacts.postalCode } : {}),
    },
    areaServed: serviceAreaTowns.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "Illinois" },
    })),
    openingHoursSpecification: businessFacts.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Repair services",
      itemListElement: allServices.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.short,
        },
      })),
    },
    sameAs: company.socials.map((s) => s.href),
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "EPA Section 608 Technician Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "U.S. Environmental Protection Agency",
        },
      },
    ],
  };

  if (businessFacts.founded) node.foundingDate = businessFacts.founded;

  /*
   * aggregateRating is emitted ONLY once a real Google place_id is wired up.
   * Publishing invented review counts is a Google structured-data violation
   * and risks a manual action — the placeholder numbers stay out of the markup.
   */
  if (googleReviews.placeId) {
    node.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: googleReviews.rating,
      reviewCount: googleReviews.total,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return node;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: company.name,
    publisher: { "@id": ID },
    inLanguage: "en-US",
  };
}

/** One Service node per category page. */
export function serviceGroupSchema(groupSlug: string) {
  const group = serviceGroups.find((g) => g.slug === groupSlug);
  if (!group) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: group.title,
    description: group.short,
    url: `${site.url}/${group.slug}`,
    serviceType: group.title,
    provider: { "@id": ID },
    areaServed: serviceAreaTowns.map((name) => ({ "@type": "City", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: group.title,
      itemListElement: group.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.short },
      })),
    },
  };
}

export function refrigeratorRepairServiceSchema() {
  const path = "/appliance-repair/refrigerator-repair";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: "Refrigerator and Freezer Repair",
    serviceType: "Residential refrigerator and freezer diagnosis and repair",
    description:
      "Residential refrigerator, freezer and ice-maker diagnosis and repair in Chicago and surrounding suburbs.",
    url: `${site.url}${path}`,
    provider: { "@id": ID },
    areaServed: serviceAreaTowns.map((name) => ({ "@type": "City", name })),
  };
}

export function washerDryerRepairServiceSchema() {
  const path = "/appliance-repair/washer-dryer-repair";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: "Washer and Dryer Repair",
    serviceType: "Residential washer and dryer diagnosis and repair",
    description:
      "Residential washing machine and dryer diagnosis and repair in Chicago and surrounding suburbs.",
    url: `${site.url}${path}`,
    provider: { "@id": ID },
    areaServed: serviceAreaTowns.map((name) => ({ "@type": "City", name })),
  };
}

export function dishwasherRepairServiceSchema() {
  const path = "/appliance-repair/dishwasher-repair";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: "Dishwasher Repair",
    serviceType: "Residential dishwasher diagnosis and repair",
    description:
      "Residential dishwasher diagnosis and repair in Chicago and surrounding suburbs.",
    url: `${site.url}${path}`,
    provider: { "@id": ID },
    areaServed: serviceAreaTowns.map((name) => ({ "@type": "City", name })),
  };
}

export function ovenStoveRepairServiceSchema() {
  const path = "/appliance-repair/oven-stove-repair";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: "Oven, Stove and Range Repair",
    serviceType: "Residential oven, stove, range and cooktop repair",
    description:
      "Residential gas and electric oven, stove, range and cooktop diagnosis and repair in Chicago and surrounding suburbs.",
    url: `${site.url}${path}`,
    provider: { "@id": ID },
    areaServed: serviceAreaTowns.map((name) => ({ "@type": "City", name })),
  };
}

export function faqSchema(items: readonly LocationFaq[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: site.url + c.path,
    })),
  };
}


