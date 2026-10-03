/**
 * Single source of truth for every piece of copy on the site.
 *
 * Contact details are real. Anything still unverified is marked
 * TODO(real-data) — those must be settled before launch, and a few of them
 * (address, hours, review counts) affect the schema.org output.
 */

export const company = {
  name: "USA Appliance & HVAC",
  logo: { main: "USA", accent: "Appliance & HVAC" },
  tagline: "Appliance & HVAC repair, installation and maintenance",
  /** Shown on the page. */
  phone: "224 360-1633",
  /** Dialled. Must stay international or mobile browsers mis-parse it. */
  phoneHref: "tel:+12243601633",
  /** E.164, for schema.org telephone. */
  phoneE164: "+12243601633",
  email: "info@usaappliancehvac.com",
  emailHref: "mailto:info@usaappliancehvac.com",
  addressShort: "Chicago, IL",
  /** Service-area business: no storefront address published. */
  address: "Chicago and surrounding areas",
  mapHref: "https://www.google.com/maps/search/?api=1&query=Chicago+IL",
  // TODO(real-data): confirm published hours and emergency availability
  hours: "Mon – Sat, 8:00 AM – 6:00 PM",
  serviceArea: "Chicago and surrounding areas",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/usaappliancehvac", icon: "instagram" },
    // wa.me takes the number in international format, digits only.
    { label: "WhatsApp", href: "https://wa.me/12243601633", icon: "whatsapp" },
  ],
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "Appliance Repair", to: "/appliance-repair" },
  { label: "HVAC Services", to: "/hvac-services" },
  { label: "Installation", to: "/installation" },
  { label: "Commercial", to: "/commercial-services" },
] as const;

export const navDropdown = {
  label: "More",
  items: [
    { label: "Service Areas", to: "/service-areas" },
    { label: "About Us", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ],
} as const;

export const hero = {
  title: ["Reliable Appliance and HVAC", "services in Chicago"],
  body: "Professional diagnostics, repair, installation and maintenance for residential and commercial customers across Chicago and the surrounding areas.",
};

export const about = {
  eyebrow: "Trusted local experts",
  title: "Appliance and HVAC work, handled by one company",
  body: [
    "USA Appliance & HVAC has spent seven years on appliance and HVAC equipment across Chicago and the surrounding areas — residential kitchens and laundry, and the professional-grade refrigeration and cooking equipment that restaurants and managed property run on.",
    "We help residential and commercial customers diagnose equipment problems, understand their repair options, and restore comfort and functionality as quickly as possible.",
  ],
  cta: { label: "About us", to: "/about" },
  stats: [
    // TODO(real-data): confirm before launch — these drive trust, so they
    // must be defensible if a customer asks.
    { value: "7+ years", label: "On Chicago equipment" },
    { value: "Residential", label: "& commercial customers" },
    { value: "All major", label: "Brands serviced" },
  ],
  assurances: [
    "Licensed & insured in Illinois",
    "EPA Section 608 certified technicians",
    "60-day parts warranty",
  ],
  tagline: "Same people. Greater comfort.",
};

export const process = {
  title: "How a service call works",
  steps: [
    {
      n: "01",
      title: "Book or call",
      body: "Pick a time online, or call and we will find the first opening that works.",
    },
    {
      n: "02",
      title: "Diagnosis",
      body: "A technician identifies the fault and explains what is wrong in plain terms.",
    },
    {
      n: "03",
      title: "Your options",
      body: "You get the repair cost, and an honest answer on whether repair or replacement makes sense.",
    },
    {
      n: "04",
      title: "Repair",
      body: "Most jobs are completed on the first visit with parts carried on the van. Installed replacement parts carry a written 60-day parts warranty.",
    },
  ],
};

export const whyUs = {
  title: "Why choose USA Appliance & HVAC",
  points: [
    {
      title: "Seven years on professional-grade equipment",
      body: "Not just home appliances — commercial refrigeration, walk-in coolers and restaurant cooking equipment have been part of the work from the start.",
    },
    {
      title: "Appliance and HVAC under one number",
      body: "A kitchen that needs a dishwasher fixed and a furnace serviced is one appointment, not two contractors.",
    },
    {
      title: "Residential and commercial",
      body: "From a home refrigerator to a restaurant line — the same crew, with the parts and access commercial work requires.",
    },
    {
      title: "Diagnosis before a quote",
      body: "We identify the actual fault first. You get the cost and a straight repair-or-replace recommendation before anything is ordered.",
    },
    {
      title: "Licensed, insured, EPA 608",
      body: "We are licensed and insured in Illinois. Refrigerant work is done by EPA Section 608 certified technicians. Ask to see proof of insurance or credentials on site.",
    },
    {
      title: "Written 60-day parts warranty",
      body: "Installed replacement parts carry a written 60-day parts warranty. The terms are published on this site so coverage is not only a verbal promise.",
    },
  ],
  cta: { label: "About us", to: "/about" },
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  to?: string;
};

export type ServiceGroup = {
  slug: string;
  title: string;
  navLabel: string;
  short: string;
  intro: string[];
  icon: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "appliance-repair",
    navLabel: "Appliance Repair",
    title: "Appliance repair",
    short: "Diagnosis and repair for every major kitchen and laundry appliance.",
    icon: "washing-machine",
    intro: [
      "Replacing an appliance is usually the more expensive option, and often an unnecessary one. We diagnose the actual fault first and tell you what the repair costs before anything is ordered.",
      "Common parts are carried on the van, so most repairs are finished on the first visit.",
    ],
    services: [
      {
        slug: "appliance-diagnosis-repair",
        title: "Appliance diagnosis and repair",
        short: "A technician identifies the fault and quotes the repair before work begins.",
        icon: "search-check",
        to: "/appliance-repair/appliance-diagnosis-repair",
      },
      {
        slug: "refrigerator-repair",
        title: "Refrigerator and freezer repair",
        short: "Cooling failures, leaks, noisy compressors and failed defrost cycles.",
        icon: "refrigerator",
        to: "/appliance-repair/refrigerator-repair",
      },
      {
        slug: "ice-maker-repair",
        title: "Ice maker repair",
        short: "No ice, slow production, jams and water line leaks.",
        icon: "snowflake",
        to: "/appliance-repair/ice-maker-repair",
      },
      {
        slug: "washer-dryer-repair",
        title: "Washer and dryer repair",
        short: "Drainage, drum, bearing, heating and vent problems.",
        icon: "washing-machine",
        to: "/appliance-repair/washer-dryer-repair",
      },
      {
        slug: "dishwasher-repair",
        title: "Dishwasher repair",
        short: "Leaks, poor cleaning, drainage faults and pump failures.",
        icon: "utensils",
        to: "/appliance-repair/dishwasher-repair",
      },
      {
        slug: "oven-stove-repair",
        title: "Oven, stove, range and cooktop repair",
        short: "Heating faults, ignition problems, controls and burners.",
        icon: "cooking-pot",
        to: "/appliance-repair/oven-stove-repair",
      },
      {
        slug: "appliance-installation",
        title: "Appliance installation and hookups",
        short: "Delivery-day installs, water lines, venting and levelling.",
        icon: "plug",
        to: "/appliance-repair/appliance-installation",
      },
    ],
  },
  {
    slug: "hvac-services",
    navLabel: "HVAC Services",
    title: "HVAC services",
    short: "Heating and cooling diagnosed, repaired and maintained.",
    icon: "wind",
    intro: [
      "Heating and cooling equipment rarely fails without warning — it gets louder, it short cycles, it stops holding a set temperature. Acting on those signs is far cheaper than an emergency call.",
      "We service and repair all major residential and commercial systems. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    services: [
      {
        slug: "hvac-diagnosis-repair",
        title: "HVAC diagnosis and repair",
        short: "Finding the actual cause instead of treating the symptom.",
        icon: "search-check",
        to: "/hvac-services/hvac-diagnosis-repair",
      },
      {
        slug: "air-conditioning-repair",
        title: "Air conditioning repair",
        short: "Weak airflow, short cycling, refrigerant leaks and failed compressors.",
        icon: "wind",
        to: "/hvac-services/air-conditioning-repair",
      },
      {
        slug: "heating-furnace-repair",
        title: "Heating and furnace repair",
        short: "No heat, ignition faults, blower problems and safety checks.",
        icon: "flame",
        to: "/hvac-services/heating-furnace-repair",
      },
      {
        slug: "hvac-installation",
        title: "HVAC installation",
        short: "Furnaces, condensers and ductless mini-split systems.",
        icon: "hard-hat",
        to: "/hvac-services/hvac-installation",
      },
      {
        slug: "hvac-maintenance",
        title: "Preventive HVAC maintenance",
        short: "Seasonal service that catches failures before the season starts.",
        icon: "calendar-check",
        to: "/hvac-services/hvac-maintenance",
      },
    ],
  },
  {
    slug: "installation",
    navLabel: "Installation",
    title: "Installation",
    short: "New equipment installed, connected and tested properly.",
    icon: "hard-hat",
    intro: [
      "A poor installation shortens the life of good equipment. Incorrect line-set sizing, an unlevel washer, a dryer venting into too much duct — each of these turns a fifteen-year appliance into a ten-year one.",
      "We install what we sell and what you supply, and we test it before we leave.",
    ],
    services: [
      {
        slug: "appliance-installation-hookups",
        title: "Appliance installation and hookups",
        short: "Refrigerators, washers, dryers, dishwashers, ranges and wall ovens.",
        icon: "plug",
        to: "/installation/appliance-installation-hookups",
      },
      {
        slug: "furnace-installation",
        title: "Furnace and heating installation",
        short: "High-efficiency replacements sized to the actual heat load.",
        icon: "flame",
        to: "/installation/furnace-installation",
      },
      {
        slug: "ac-installation",
        title: "Air conditioning installation",
        short: "Central systems and ductless mini-splits, including line-set work.",
        icon: "wind",
        to: "/installation/ac-installation",
      },
      {
        slug: "commercial-equipment-installation",
        title: "Commercial equipment installation",
        short: "Kitchen and refrigeration equipment installed to spec.",
        icon: "store",
        to: "/installation/commercial-equipment-installation",
      },
    ],
  },
  {
    slug: "commercial-services",
    navLabel: "Commercial",
    title: "Commercial services",
    short: "Kitchen and refrigeration equipment kept running.",
    icon: "store",
    intro: [
      "Commercial equipment failure is not an inconvenience, it is lost revenue and, with refrigeration, lost stock. Response time is the entire service.",
      "We work with restaurants, cafés, retail and property managers across the Chicago area.",
    ],
    services: [
      {
        slug: "commercial-appliance-repair",
        title: "Commercial appliance repair",
        short: "Diagnosis and repair for commercial-grade equipment.",
        icon: "wrench",
        to: "/commercial-services/commercial-appliance-repair",
      },
      {
        slug: "commercial-refrigeration",
        title: "Commercial refrigerator and freezer repair",
        short: "Walk-ins, reach-ins, prep tables and display cases.",
        icon: "refrigerator",
        to: "/commercial-services/commercial-refrigeration",
      },
      {
        slug: "commercial-kitchen-equipment",
        title: "Commercial kitchen equipment repair",
        short: "Ranges, fryers, ovens, dishmachines and holding equipment.",
        icon: "cooking-pot",
        to: "/commercial-services/commercial-kitchen-equipment",
      },
      {
        slug: "commercial-maintenance",
        title: "Commercial preventive maintenance",
        short: "Scheduled service that keeps equipment out of the failure window.",
        icon: "calendar-check",
        to: "/commercial-services/commercial-maintenance",
      },
    ],
  },
];

/** Flat index — used by routing, sitemap and the search-friendly listings. */
export const allServices: Array<Service & { group: string; groupSlug: string }> =
  serviceGroups.flatMap((g) =>
    g.services.map((s) => ({ ...s, group: g.title, groupSlug: g.slug })),
  );

/**
 * Equipment we service. Kept explicit because "all appliances" answers nothing
 * — a visitor is looking for their specific machine.
 */
/**
 * The service list — one source, two presentations.
 *
 * Desktop gets the expanding photo panels; touch gets these as cards with
 * product shots, because the panels rely on hover and have nothing to respond
 * to on a phone. Keeping both views on one array is the point: two lists would
 * drift apart the first time someone edits only one of them.
 *
 * "What can we help you with?"
 *
 * Added at the owner's request, for a concrete reason: customers assume the
 * crew only fixes washers and ring up to ask what else is covered. Six named
 * machines answer that before the phone call happens.
 *
 * Every entry points at a page that exists — no dead cards.
 */
export const helpWith = {
  kicker: "Our services",
  title: "What can we help you with?",
  body: "If your machine is not on this list, call and ask — the answer is usually yes.",
  items: [
    {
      title: "Refrigerator & freezer repair",
      slot: "help-refrigerator",
      panelSlot: "service-refrigerator-repair",
      note: "Not cooling, icing up, leaking",
      icon: "refrigerator",
      to: "/appliance-repair/refrigerator-repair",
    },
    {
      title: "Washer & dryer repair",
      slot: "help-washer-dryer",
      panelSlot: "service-washer-dryer-repair",
      note: "Will not drain, spin or heat",
      icon: "washing-machine",
      to: "/appliance-repair/washer-dryer-repair",
    },
    {
      title: "Dishwasher repair",
      slot: "help-dishwasher",
      panelSlot: "service-dishwasher-repair",
      note: "Leaks, poor cleaning, drainage",
      icon: "utensils",
      to: "/appliance-repair/dishwasher-repair",
    },
    {
      title: "Oven, stove & range repair",
      slot: "help-oven-range",
      panelSlot: "service-oven-stove-repair",
      note: "No heat, ignition, controls",
      icon: "cooking-pot",
      to: "/appliance-repair/oven-stove-repair",
    },
    {
      title: "HVAC repair & maintenance",
      slot: "help-hvac",
      panelSlot: "service-air-conditioning-repair",
      note: "Furnaces, A/C, mini-splits",
      icon: "wind",
      to: "/hvac-services",
    },
  ],
};

export const equipmentServiced = {
  title: "Appliances and HVAC systems we service",
  groups: [
    {
      label: "Kitchen",
      to: "/appliance-repair",
      items: [
        "Refrigerators & freezers",
        "Ice makers",
        "Dishwashers",
        "Ovens & wall ovens",
        "Ranges & stoves",
        "Cooktops & induction",
        "Range hoods",
        "Garbage disposals",
      ],
    },
    {
      label: "Laundry",
      to: "/appliance-repair",
      items: ["Washers", "Dryers", "Stacked units", "Dryer venting"],
    },
    {
      label: "HVAC",
      to: "/hvac-services",
      items: [
        "Gas furnaces",
        "Central air conditioning",
        "Ductless mini-splits",
        "Heat pumps",
        "Thermostats",
      ],
    },
    {
      label: "Commercial",
      to: "/commercial-services",
      items: [
        "Walk-in coolers & freezers",
        "Reach-in refrigeration",
        "Prep tables & display cases",
        "Commercial ranges & fryers",
        "Dishmachines",
        "Rooftop units",
      ],
    },
  ],
};

export const segments = {
  title: "Residential and commercial",
  items: [
    {
      key: "residential",
      title: "Residential",
      body: "Houses, condos and apartments. Kitchen and laundry appliances, furnaces, air conditioning and ductless systems — diagnosed, repaired and maintained.",
      points: [
        "Same-day service across most of our area",
        "Repair-or-replace advice you can act on",
        "Parts for all major brands on the van",
      ],
      // Rendered by <BookButton>, which derives its own label; kept so the
      // two cards share one shape.
      cta: { label: "Request a call", to: "/book" },
    },
    {
      key: "commercial",
      title: "Commercial",
      body: "Restaurants, cafés, retail and managed property. Refrigeration, cooking equipment and rooftop HVAC, with preventive maintenance that keeps them out of the failure window.",
      points: [
        "Priority response on refrigeration",
        "Scheduled preventive maintenance",
        "Documented service history per site",
      ],
      cta: { label: "Talk to us", to: "/contact" },
    },
  ],
};

export const contactSection = {
  title: "Request a service call",
  body: "Tell us what the equipment is doing and we will come back with a time window. A sentence about the symptom is usually enough to bring the right part on the first visit.",
};

export const faqs = [
  {
    q: "How quickly can you come out?",
    a: "Same-day service is available across most of our area when you call early. Booking online shows you the real openings rather than a promise.",
  },
  {
    q: "Do you charge for diagnosis?",
    a: "Yes — there is a fee for the diagnostic visit, and you are told the exact amount before a technician is dispatched. Nobody arrives without you knowing what the visit costs.",
  },
  {
    q: "Do you work on commercial equipment?",
    a: "Yes — commercial refrigeration, cooking equipment and rooftop HVAC, including scheduled preventive maintenance for restaurants and managed property.",
  },
  {
    q: "Which brands do you service?",
    a: "All major appliance and HVAC manufacturers — from Whirlpool, LG and Samsung to Sub-Zero, Viking and Thermador, and from Carrier and Trane to ductless Mitsubishi systems. If yours is not named here, call and ask; the answer is usually yes.",
  },
  {
    q: "What areas do you cover?",
    a: "Chicago and the surrounding suburbs. If you are on the edge of our range we will tell you up front rather than adding a travel charge later.",
  },
  {
    q: "Is it worth repairing or should I replace it?",
    a: "That depends on the repair cost against the remaining life of the unit. We give you both numbers on site, and we will tell you when replacing is the better call.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We are licensed and insured in Illinois. Applicable credentials and proof of insurance can be shown when the technician arrives.",
  },
  {
    q: "Do you have EPA 608 certification?",
    a: "Yes, for work that involves refrigerant — air conditioning, heat pumps, and refrigeration equipment. EPA Section 608 certification is not required for every appliance repair. Refrigerant work is handled by certified technicians.",
  },
  {
    q: "Do you warranty replacement parts?",
    a: "Installed replacement parts are covered by a 60-day parts warranty. The written terms are published on our Warranty page. Your technician will also explain the coverage that applies to the approved repair.",
  },
];

export const finalCta = {
  title: ["Something stopped working?", "We'll get you back up and running."],
  body: "Appliance and HVAC repair for homes and businesses across Chicago and the northwest suburbs. One trusted team. One number.",
  trust: "Requests 24/7 · Same-day availability · Licensed & insured",
};

export const footer = {
  blurb:
    "USA Appliance & HVAC — professional appliance and HVAC diagnostics, repair, installation and maintenance for residential and commercial customers across Chicago and the surrounding areas.",
  columns: [
    {
      title: "Services",
      links: [
        { label: "Appliance Repair", to: "/appliance-repair" },
        { label: "HVAC Services", to: "/hvac-services" },
        { label: "Installation", to: "/installation" },
        { label: "Commercial Services", to: "/commercial-services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Blog", to: "/blog" },
        { label: "Service Areas", to: "/service-areas" },
        { label: "Contact", to: "/contact" },
        { label: "Request service", to: "/book" },
        { label: "Warranty", to: "/warranty" },
      ],
    },
  ],
};

/**
 * Google Reviews — PLACEHOLDER until a Place ID exists.
 * Nothing here is published as schema.org aggregateRating: fabricated ratings
 * in structured data violate Google's policy and risk a manual action.
 */
export type GoogleReview = {
  author: string;
  initial: string;
  rating: number;
  when: string;
  text: string;
};

export const googleReviews: {
  kicker: string;
  title: string;
  placeId: string;
  profileUrl: string;
  rating: number;
  total: number;
  distribution: Array<{ stars: number; count: number }>;
  items: GoogleReview[];
} = {
  kicker: "Customer reviews",
  title: "What Chicago customers say",
  placeId: "", // TODO(real-data): Google Business Profile place_id
  profileUrl: "https://www.google.com/maps",
  rating: 0,
  total: 0,
  distribution: [],
  items: [],
};

export const crisp = {
  fallbackGreeting: "Hi! Tell us what the appliance is doing and we'll get you a time window.",
  fallbackName: "USA Appliance & HVAC",
  fallbackStatus: "Typically replies in a few minutes",
} as const;

/**
 * Housecall Pro online booking.
 * Set VITE_BOOKING_URL to the company's Housecall Pro booking link. Until then
 * every booking control falls back to the callback request modal, and the
 * button label follows suit — see lib/booking.ts.
 */
export const booking = {
  headline: "Request a service call",
  body: "Tell us what the equipment is doing and we come back with a time window. Residential and commercial, across Chicago and the surrounding areas.",
  provider: "Housecall Pro",
} as const;

/**
 * Privacy policy.
 *
 * Written from what the code actually does, not from a template: every
 * recipient named below is a service the site really calls — Formspree in
 * `lib/forms.ts`, Crisp in `lib/crisp.ts`, the Google Fonts stylesheet in
 * index.html, and Vercel as the host. If an integration is added or dropped,
 * this text is part of the change.
 *
 * There is deliberately no claim of GDPR or CCPA compliance and no invented
 * retention period. Saying less and meaning it is worth more than a longer
 * document that turns out to be false.
 *
 * TODO(legal): if the business is registered as an LLC, put the registered
 * name in `entity` — a policy naming the wrong controller is worse than none.
 */
export const privacy = {
  updated: "September 19, 2026",
  entity: company.name,
  intro:
    "This page explains what information USA Appliance & HVAC collects when you use this website, why we collect it, and who else sees it. We are a small service company in Chicago — we collect what we need to answer you, do the work, and understand which pages help people reach us.",
  sections: [
    {
      heading: "Information you give us",
      body: [
        "You only give us information when you choose to contact us. Nothing on this site requires an account, and there is nothing to sign up for.",
      ],
      list: [
        "Service request form: your name, email address, phone number, the service you need and your message.",
        "Request a call: your name, phone number and the time of day you prefer to be called.",
        "Live chat: whatever you type into the chat window, and any contact details you give there.",
        "Calling or emailing us directly: your phone number or email address and what you tell us.",
      ],
    },
    {
      heading: "Information collected automatically",
      body: [
        "Like any website, this one leaves traces even if you never contact us.",
      ],
      list: [
        "Our hosting provider records standard server logs: IP address, browser and device type, the pages requested and when.",
        "Google Analytics records which pages are viewed and whether someone clicks Call, Book, or submits a form. It does not receive the contents of those forms.",
        "The live chat widget stores a small identifier in your browser so a conversation survives a page reload, and its provider sees your IP address and browser details.",
        "Fonts are loaded from Google's font service, which means Google receives your IP address when a page loads.",
      ],
    },
    {
      heading: "How we use it",
      body: [
        "To reply to you, quote and schedule the work, carry it out, and keep ordinary records of jobs we have done. We also use it to reach you about an appointment already arranged.",
        "We use Google Analytics to see which pages and buttons lead to calls and service requests, so we can keep the site useful. We do not send marketing email or text messages, and we do not add you to a mailing list.",
      ],
    },
    {
      heading: "Who else sees it",
      body: [
        "We do not sell or rent personal information, and we do not share it for anyone else's advertising. It reaches other companies only because they run parts of this site on our behalf:",
      ],
      list: [
        "Formspree — delivers the forms on this site to our email inbox.",
        "Crisp — provides the live chat window.",
        "Vercel — hosts the site, serves its pages, and measures how fast they load.",
        "Google Analytics — measures visits and button clicks on this site.",
        "Google Fonts — serves the typeface the site is set in.",
      ],
      after: [
        "Each of those companies handles data under its own privacy terms. We may also disclose information where the law requires it.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "This site uses Google Analytics, which stores a measurement identifier in the browser so return visits can be counted. The live chat also stores a small identifier so a conversation survives a page reload. We do not use advertising or retargeting cookies.",
        "You can block or clear cookies in your browser settings; chat and analytics will simply start fresh. You can also use Google's ad settings or a browser privacy tool if you prefer not to be included in Analytics.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "We keep enquiries and job records for as long as we need them to serve you and to keep normal business and tax records. Information held inside the services listed above is also subject to their own retention.",
        "If you want your details removed sooner, email us and we will delete what we are not required to keep.",
      ],
    },
    {
      heading: "Your choices",
      body: [
        "You can ask us what we hold about you, ask us to correct it, or ask us to delete it. Email or call using the details below and we will respond. Depending on where you live you may have further rights under local law; tell us and we will honour them.",
      ],
    },
    {
      heading: "Children",
      body: [
        "This site is meant for adults arranging appliance and HVAC work. We do not knowingly collect information from children under 13.",
      ],
    },
    {
      heading: "Security",
      body: [
        "The site is served over HTTPS and we limit who can read the enquiries that reach us. No website can promise perfect security, and we will not pretend otherwise.",
      ],
    },
    {
      heading: "Changes",
      body: [
        "If this policy changes, the date at the top of the page changes with it. Material changes will be described here rather than made quietly.",
      ],
    },
  ],
};

export const credentials = {
  title: "Credentials and coverage",
  body: "Ask to see current documents when the technician arrives. We do not publish license or policy numbers on this site.",
  items: [
    {
      title: "EPA Section 608",
      body: "Refrigerant work on air conditioners, heat pumps, and refrigeration equipment is performed by EPA Section 608 certified technicians. Not every appliance repair involves refrigerant.",
    },
    {
      title: "Licensed and insured",
      body: "USA Appliance & HVAC is licensed and insured in Illinois. We carry applicable insurance for jobs in homes and businesses. Proof can be shown on site.",
    },
    {
      title: "Written 60-day parts warranty",
      body: "Installed replacement parts are covered by a 60-day parts warranty. The full written terms are published so the coverage is not only a verbal promise.",
      to: "/warranty",
    },
  ],
};

export const warranty = {
  updated: "September 19, 2026",
  entity: company.name,
  intro:
    "This page is the written 60-day parts warranty for replacement parts USA Appliance & HVAC installs on a paid repair. Read it before you approve work. Your technician will also explain the coverage that applies to the approved repair.",
  sections: [
    {
      heading: "What is covered",
      body: [
        "Installed replacement parts are warranted against defects in the part itself for 60 days from the date we install them, provided the equipment is used in a normal residential or commercial setting for the purpose it was designed.",
        "If a covered part fails during that period because of a defect in the part, we will replace that part. Call us to schedule the warranty visit.",
      ],
    },
    {
      heading: "What is not covered",
      body: [
        "This warranty is for replacement parts we installed on the approved repair. It does not cover:",
      ],
      list: [
        "Labor, diagnostic fees, trip charges, or a second visit unless we confirm those are included for a specific warranty claim.",
        "The original failed part that we replaced, or other parts on the same machine that were not replaced on that job.",
        "Damage from misuse, neglect, lack of maintenance, improper installation by someone else, flooding, fire, power surge, or other causes outside normal use.",
        "Cosmetic damage, filters, consumables, or work that was quoted and declined.",
        "Equipment we did not repair, or repairs performed by another company after our visit.",
      ],
    },
    {
      heading: "How to use this warranty",
      body: [
        "Call us with the original job details if a part we installed fails within 60 days. We will confirm the date of installation and whether the failure is a covered parts defect.",
        "Coverage applies to the specific part we installed. If diagnosis shows a different part failed, that is a new repair and is quoted separately.",
      ],
    },
    {
      heading: "Manufacturer warranties",
      body: [
        "Some parts still carry a manufacturer warranty. This 60-day parts warranty is our written coverage for the part we installed. It does not replace a remaining factory warranty, and it does not mean we are a factory-authorized service provider for any brand.",
      ],
    },
    {
      heading: "Changes",
      body: [
        "If these terms change, the date at the top of the page changes with it. The terms in effect on the date we install the part are the terms that apply to that part.",
      ],
    },
  ],
};

/** Preferred production origin. www redirects here. */
export const SITE_URL = "https://usaappliancehvac.com";

export const site = {
  /*
   * The apex is canonical.
   *
   * Canonicals, Open Graph, JSON-LD, the sitemap, and robots.txt must use this
   * origin. A sitemap URL that redirects is what Search Console reports as
   * "Couldn't fetch".
   */
  url: SITE_URL,
  locale: "en_US",
  ogImage: "/og-cover.jpg?v=2",
  twitterHandle: "",
} as const;

/** Towns covered. Used for schema.org areaServed and the Service Areas page. */
export const serviceAreaTowns = [
  "Chicago",
  "River North",
  "Gold Coast",
  "Streeterville",
  "West Loop",
  "The Loop",
  "Lincoln Park",
  "Lakeview",
  "Wicker Park",
  "Logan Square",
  "Evanston",
  "Skokie",
  "Niles",
  "Park Ridge",
  "Des Plaines",
  "Franklin Park",
  "Schiller Park",
  "Mount Prospect",
  "Arlington Heights",
  "Palatine",
  "Schaumburg",
  "Rolling Meadows",
  "Hoffman Estates",
  "Elk Grove Village",
  "Buffalo Grove",
  "Wheeling",
  "Northbrook",
  "Glenview",
  "Morton Grove",
  "Oak Park",
  "Cicero",
  "Berwyn",
  "Naperville",
] as const;

export function townToSlug(town: string) {
  return `${town
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}-il`;
}

export type LocationFaq = { q: string; a: string };

export type LocationPageCopy = {
  slug: string;
  town: string;
  zips: string[];
  title: string;
  description: string;
  h1: string;
  opening: string[];
  appliance: { heading: string; paragraphs: string[] };
  hvac: { heading: string; paragraphs: string[] };
  jobs: string[];
  visit: { heading: string; steps: { title: string; body: string }[] };
  why: { heading: string; paragraphs: string[] };
  nearby: { heading: string; towns: string[] };
  faqs: LocationFaq[];
  closing: string;
  serviceLinks: { label: string; to: string }[];
};

const northwestTowns = [
  "Arlington Heights",
  "Mount Prospect",
  "Palatine",
  "Schaumburg",
  "Rolling Meadows",
  "Hoffman Estates",
  "Elk Grove Village",
  "Buffalo Grove",
  "Wheeling",
] as const;

const locationServiceLinks: LocationPageCopy["serviceLinks"] = [
  {
    label: "Washer and dryer repair",
    to: "/appliance-repair/washer-dryer-repair",
  },
  {
    label: "Dishwasher repair",
    to: "/appliance-repair/dishwasher-repair",
  },
  {
    label: "Refrigerator and freezer repair",
    to: "/appliance-repair/refrigerator-repair",
  },
  {
    label: "Oven, stove and range repair",
    to: "/appliance-repair/oven-stove-repair",
  },
  { label: "Furnace repair", to: "/hvac-services/heating-furnace-repair" },
  { label: "Air conditioning repair", to: "/hvac-services/air-conditioning-repair" },
  { label: "HVAC installation", to: "/hvac-services/hvac-installation" },
];

const applianceBrandSentence =
  "Brands we service include Whirlpool, Maytag, KitchenAid, Amana, GE, Monogram, Café, Frigidaire, Electrolux, LG, Samsung, Bosch, Miele, Sub-Zero, Wolf, Viking, Thermador, JennAir, Dacor, Fisher & Paykel, Speed Queen, and more.";

const neighborGroups: readonly (readonly string[])[] = [
  ["Chicago", "The Loop", "River North", "Gold Coast", "Streeterville", "West Loop"],
  ["Lincoln Park", "Lakeview", "Wicker Park", "Logan Square", "Chicago"],
  ["Evanston", "Skokie", "Niles", "Morton Grove", "Glenview", "Northbrook", "Park Ridge"],
  ["Des Plaines", "Park Ridge", "Franklin Park", "Schiller Park", "Niles", "Mount Prospect"],
  [
    "Arlington Heights",
    "Mount Prospect",
    "Palatine",
    "Schaumburg",
    "Rolling Meadows",
    "Hoffman Estates",
    "Elk Grove Village",
    "Buffalo Grove",
    "Wheeling",
    "Des Plaines",
  ],
  ["Oak Park", "Cicero", "Berwyn", "Chicago"],
  ["Naperville", "Oak Park", "Berwyn"],
];

function nearbyTowns(town: string) {
  const group =
    neighborGroups.find((names) => names.includes(town)) ?? northwestTowns;
  return group.filter((name) => name !== town).slice(0, 6);
}

function visitSection(town: string): LocationPageCopy["visit"] {
  return {
    heading: `How a visit works in ${town}`,
    steps: [
      {
        title: "Book and arrival window",
        body: `Book online or call ${company.phone}. We give an arrival window, not a vague half day. Same-day visits are usually available when you call early and a slot is still open. Hours stay Monday through Saturday, 8:00 AM to 6:00 PM. We do not offer night or Sunday coverage.`,
      },
      {
        title: "Diagnosis",
        body: "The technician diagnoses the appliance or the HVAC system before any quote. You hear what failed in plain language. You also hear what did not fail.",
      },
      {
        title: "Written price and approval",
        body: "You get a written price and a repair-or-replace recommendation. There is a diagnostic fee, and you are told the amount before a technician is dispatched. That fee is applied to the repair if you go ahead. No work starts until you approve the number.",
      },
      {
        title: "Repair and warranty",
        body: "After approval, we complete the repair when the part is on the van. If a part has to be ordered, we set the return visit before we leave. Installed replacement parts carry a written 60-day parts warranty. The terms are published on our Warranty page.",
      },
    ],
  };
}

function whySection(town: string): LocationPageCopy["why"] {
  return {
    heading: `Why ${town} calls us`,
    paragraphs: [
      "You do not need two companies for a dishwasher and a furnace. We cover appliances and HVAC under one number. Seven years on professional-grade equipment is why a home kitchen and a restaurant line get the same kind of diagnosis.",
      "We diagnose before any quote. You see the fault, the price, and whether repair still makes sense. If replacement is the better spend, we say so.",
      "You can book online and pick a real opening, or you can call. We are licensed and insured in Illinois. Refrigerant work is performed by EPA Section 608 certified technicians. Installed replacement parts carry a written 60-day parts warranty.",
    ],
  };
}

function locationFaqs(town: string, unique: LocationFaq): LocationFaq[] {
  return [
    {
      q: `Do you charge extra to come to ${town}?`,
      a: "No. The diagnostic fee is the visit price, and it does not change with this ZIP code. You hear that amount before a technician is dispatched. If you approve the repair, the fee is applied to the work.",
    },
    {
      q: "Can one visit cover an appliance and the furnace?",
      a: "Yes, if both jobs fit the window and the parts are on the van. Name both problems when you book so we load the right parts. If the second job needs a return, we schedule that before we leave.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes. We are licensed and insured in Illinois. Applicable credentials and proof of insurance can be shown when the technician arrives. Refrigerant work is performed by EPA Section 608 certified technicians.",
    },
    unique,
  ];
}

function locationPage(input: {
  town: string;
  zips: string[];
  title: string;
  description: string;
  opening: string[];
  appliance: string[];
  hvac: string[];
  uniqueFaq: LocationFaq;
  closing: string;
  /** Visible place name when the area is a neighborhood, not its own city. */
  area?: string;
}): LocationPageCopy {
  const area = input.area ?? `${input.town}, IL`;
  return {
    slug: townToSlug(input.town),
    town: input.town,
    zips: input.zips,
    title: input.title,
    description: input.description,
    h1: `Appliance and HVAC Repair in ${area}`,
    opening: input.opening,
    appliance: {
      heading: `Appliance repair in ${input.town}`,
      paragraphs: input.appliance,
    },
    hvac: {
      heading: `Furnace and AC repair in ${input.town}`,
      paragraphs: input.hvac,
    },
    jobs: [],
    visit: visitSection(input.town),
    why: whySection(input.town),
    nearby: { heading: "Nearby areas we serve", towns: nearbyTowns(input.town) },
    faqs: locationFaqs(input.town, input.uniqueFaq),
    closing: input.closing,
    serviceLinks: locationServiceLinks,
  };
}

export const locationPages: LocationPageCopy[] = [
  {
    slug: "arlington-heights-il",
    town: "Arlington Heights",
    zips: ["60004", "60005"],
    title: "Appliance & HVAC Repair in Arlington Heights, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Arlington Heights, IL. Diagnosis first, then a written price. One crew for the kitchen and the furnace. Book online.",
    h1: "Appliance and HVAC Repair in Arlington Heights, IL",
    opening: [
      `USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Arlington Heights, including ZIP codes 60004 and 60005.`,
      `Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls downtown near the Metra station and north of Palatine Road.`,
      `Call ${company.phone} or book online.`,
    ],
    appliance: {
      heading: "Appliance repair in Arlington Heights",
      paragraphs: [
        "We repair refrigerators, freezers, and ice makers in these ZIP codes. We repair washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
        `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
        "The appliance calls we get most from this village are easy to name. A dryer that runs but does not heat is first. The drum turns, the timer moves, and the load stays damp. A failed heating element, a blown thermal fuse, a weak gas igniter, or a clogged vent is usually why. We check the vent path before we order a part. A new element will fail again if hot air cannot leave the house.",
        "A dishwasher that will not drain is next. Water sits in the tub when the cycle ends. Food in the pump, a kinked drain hose, or a disposal knockout that was never opened are the usual causes. If the hose ties into a disposal, we look there first. You hear which fault it is before any quote.",
      ],
    },
    hvac: {
      heading: "Furnace and AC repair in Arlington Heights",
      paragraphs: [
        "We repair furnaces and air conditioners. We install HVAC systems, ductless mini-splits, and heat pumps. We replace thermostats and set up maintenance plans. Brands on the HVAC side include Carrier, Trane, and Mitsubishi. Other major lines are fine if you call and confirm the model.",
        "Many houses here date from the 1950s through the 1970s and still use original ductwork. Those ducts were sized for an older furnace and a smaller air conditioner. Rooms at the end of a run stay hot in July and cool in January.",
        "A furnace that short cycles is the heating call that follows from that housing. The burner lights, runs a few minutes, then shuts off. A dirty filter, weak airflow, or a tripped limit switch is often the cause. We measure temperature rise before we blame the control board.",
      ],
    },
    jobs: [],
    visit: {
      heading: "How a visit works in Arlington Heights",
      steps: [
        {
          title: "Book and arrival window",
          body: `Book online or call ${company.phone}. We give an arrival window, not a vague half day. Same-day visits are usually available when you call early and a slot is still open. Hours stay Monday through Saturday, 8:00 AM to 6:00 PM. We do not offer night or Sunday coverage.`,
        },
        {
          title: "Diagnosis",
          body: "The technician diagnoses the appliance or the HVAC system before any quote. You hear what failed in plain language. You also hear what did not fail.",
        },
        {
          title: "Written price and approval",
          body: "You get a written price and a repair-or-replace recommendation. There is a diagnostic fee, and you are told the amount before a technician is dispatched. That fee is applied to the repair if you go ahead. No work starts until you approve the number.",
        },
        {
          title: "Repair and warranty",
          body: "After approval, we complete the repair when the part is on the van. If a part has to be ordered, we set the return visit before we leave. Installed replacement parts carry a written 60-day parts warranty. The terms are published on our Warranty page.",
        },
      ],
    },
    why: {
      heading: "Why Arlington Heights calls us",
      paragraphs: [
        "You do not need two companies for a dishwasher and a furnace. We cover appliances and HVAC under one number. Seven years on professional-grade equipment is why a home kitchen and a restaurant line get the same kind of diagnosis.",
        "We diagnose before any quote. You see the fault, the price, and whether repair still makes sense. If replacement is the better spend, we say so.",
        "You can book online and pick a real opening, or you can call. We are licensed and insured in Illinois. Refrigerant work is performed by EPA Section 608 certified technicians. Installed replacement parts carry a written 60-day parts warranty.",
      ],
    },
    nearby: {
      heading: "Nearby areas we serve",
      towns: nearbyTowns("Arlington Heights"),
    },
    faqs: [
      {
        q: "Do you charge extra to come to Arlington Heights?",
        a: "No. The diagnostic fee is the visit price, and it does not change with this ZIP code. You hear that amount before a technician is dispatched. If you approve the repair, the fee is applied to the work.",
      },
      {
        q: "Can one visit cover an appliance and the furnace?",
        a: "Yes, if both jobs fit the window and the parts are on the van. Name both problems when you book so we load the right parts. If the second job needs a return, we schedule that before we leave.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes. We are licensed and insured in Illinois. Applicable credentials and proof of insurance can be shown when the technician arrives. Refrigerant work is performed by EPA Section 608 certified technicians.",
      },
      {
        q: "My dryer runs but the clothes stay cold. Can you finish that in one visit?",
        a: "That is one of the calls we already see from this village. A heating element, thermal fuse, igniter, or blocked vent is usually the cause. Common dryer parts are on the van, so many of those repairs finish the same day if you approve the price.",
      },
    ],
    closing: `Need the dryer, the dishwasher, or the furnace looked at? Call ${company.phone} or book online.`,
    serviceLinks: [
      {
        label: "Washer and dryer repair",
        to: "/appliance-repair/washer-dryer-repair",
      },
      {
        label: "Dishwasher repair",
        to: "/appliance-repair/dishwasher-repair",
      },
      {
        label: "Refrigerator and freezer repair",
        to: "/appliance-repair/refrigerator-repair",
      },
      {
        label: "Oven, stove and range repair",
        to: "/appliance-repair/oven-stove-repair",
      },
      { label: "Furnace repair", to: "/hvac-services/heating-furnace-repair" },
      { label: "Air conditioning repair", to: "/hvac-services/air-conditioning-repair" },
      { label: "HVAC installation", to: "/hvac-services/hvac-installation" },
    ],
  },
  locationPage({
    town: "Mount Prospect",
    zips: ["60056"],
    title: "Appliance & HVAC Repair in Mount Prospect, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Mount Prospect, IL. Diagnosis first, then a written price. Calls near Village Green and Metra. Book online.",
    opening: [
      `USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Mount Prospect, including ZIP code 60056.`,
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls around the Village Green downtown and the Metra station.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, and ice makers in this ZIP code. We repair washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
      "Downtown condos sit next to older single-family kitchens here. A dishwasher that will not drain is a typical fault in those original layouts. Food in the pump, a kinked hose, or a disposal knockout that was never opened is usually why. If the hose ties into a disposal, we look there first.",
      "A dryer that runs but does not heat is the other laundry call we see in these houses. A failed element, a thermal fuse, a weak igniter, or a clogged vent is the usual cause. We check the vent before we order a part.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. We install HVAC systems, ductless mini-splits, and heat pumps. We replace thermostats and set up maintenance plans. Brands on the HVAC side include Carrier, Trane, and Mitsubishi.",
      "Much of the housing is postwar ranches and split-levels. Many still use the original ductwork. Those ducts were sized for an older furnace and a smaller add-on air conditioner.",
      "Rooms at the end of a run stay hot in July and cool in January. A furnace that short cycles often follows from that airflow. We measure temperature rise before we blame the control board.",
    ],
    uniqueFaq: {
      q: "My dishwasher leaves standing water. Can you fix that here?",
      a: "Yes. Original kitchens in this village often drain through a disposal or a long hose run. We find whether the pump, the hose, or the knockout is at fault before we quote. Common drain parts are on the van.",
    },
    closing: `Need the dishwasher, the dryer, or the furnace looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Palatine",
    zips: ["60067", "60074"],
    title: "Appliance & HVAC Repair in Palatine, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Palatine, IL. Diagnosis first, then a written price. Downtown near the Metra station. Book online.",
    opening: [
      `USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Palatine, including ZIP codes 60067 and 60074.`,
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls downtown near the Metra station on Wood Street and around Town Square.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, and ice makers in these ZIP codes. We repair washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
      "Downtown buildings near the train often use stacked washers. A washer that will not drain or spin is the laundry fault those units show first. A clogged pump, a failed lid switch, or an unbalanced load sensor is usually why.",
      "Single-family kitchens farther from downtown still see dishwashers that will not drain. We tell you which fault you have before any quote.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. We install HVAC systems, ductless mini-splits, and heat pumps. We replace thermostats and set up maintenance plans. Brands on the HVAC side include Carrier, Trane, and Mitsubishi.",
      "Housing here splits in two. Condos near Town Square often use through-wall units or ductless heads. Subdivisions toward Deer Grove and Harper College still run on original ductwork from the 1960s and 1970s.",
      "Those older ducts were not sized for a modern air conditioner. Far rooms drift off the set temperature, and the furnace may short cycle. We measure airflow before we replace a board.",
    ],
    uniqueFaq: {
      q: "Our stacked washer in a downtown condo will not drain. Can you service that?",
      a: "Yes. Compact laundry in buildings near the Metra station is a regular stop. We diagnose the pump, drain, and controls before we quote. If the part is on the van, the repair can finish the same visit after you approve the price.",
    },
    closing: `Need the washer, the dishwasher, or the furnace looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Schaumburg",
    zips: ["60173", "60193", "60194"],
    title: "Appliance & HVAC Repair in Schaumburg, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Schaumburg, IL. Diagnosis first, then a written price. Woodfield, Town Square, and Metra. Book online.",
    opening: [
      `USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Schaumburg, including ZIP codes 60173, 60193, and 60194.`,
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls near Woodfield Mall, Town Square, and the Metra station on Springinsguth Road.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, and ice makers in these ZIP codes. We repair washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
      "Townhomes and condos near Woodfield often have tight refrigerator spaces. A fridge that runs but does not cool is frequently a dirty condenser or a failed evaporator fan. We pull the unit and test before we talk replacement.",
      "Single-family kitchens still see dryers that tumble without heat. We check the vent path before we order an element.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. We install HVAC systems, ductless mini-splits, and heat pumps. We replace thermostats and set up maintenance plans. Brands on the HVAC side include Carrier, Trane, and Mitsubishi.",
      "This village is a business hub, not one small downtown. Homes went up mostly in the 1970s through the 1990s around the mall and the office parks. Many systems are original to those builds.",
      "A short-cycling furnace or a weak air conditioner is often a dirty filter, a failing capacitor, or ducts that never matched a later replacement unit. We test electrical and airflow first. Commercial rooftop work near the mall uses the same crew.",
    ],
    uniqueFaq: {
      q: "My refrigerator near Woodfield runs but the food is warm. Can you look at it?",
      a: "Yes. Tight condo and townhome kitchens here often starve the condenser of air. We diagnose the fan, the sealed system, and the install space before we quote. You approve the price before any repair starts.",
    },
    closing: `Need the refrigerator, the dryer, or the air conditioner looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Rolling Meadows",
    zips: ["60008"],
    title: "Appliance & HVAC Repair in Rolling Meadows, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Rolling Meadows, IL. Diagnosis first, then a written price. Ranch and split-level homes. Book online.",
    opening: [
      `USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Rolling Meadows, including ZIP code 60008.`,
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls along Kirchoff Road and in the ranch neighborhoods between Arlington Heights and Schaumburg.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, and ice makers in this ZIP code. We repair washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
      "Mid-century laundry rooms here often sit far from an exterior wall. A dryer that runs but does not heat is usually an element, a fuse, an igniter, or a long clogged vent. We inspect the vent before we order a part.",
      "A dishwasher that will not drain is the kitchen match. Original disposals and long hose runs are the usual suspects.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. We install HVAC systems, ductless mini-splits, and heat pumps. We replace thermostats and set up maintenance plans. Brands on the HVAC side include Carrier, Trane, and Mitsubishi.",
      "Most streets are 1950s and 1960s ranches and split-levels. Original ductwork is still in many of those basements. It was sized for a smaller furnace than people run now.",
      "A furnace that lights, runs a few minutes, then shuts off is the heating pattern that follows. Weak airflow or a tripped limit is often the cause. We measure temperature rise before we replace a control.",
    ],
    uniqueFaq: {
      q: "Our ranch furnace keeps turning on and off. Is that a visit you make here?",
      a: "Yes. Short cycling is a common fault in these mid-century ranches when ducts or filters cannot move the air. We test temperature rise and the limit circuit first. You get a written price before any repair.",
    },
    closing: `Need the dryer, the dishwasher, or the furnace looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Hoffman Estates",
    zips: ["60169", "60192"],
    title: "Appliance & HVAC Repair in Hoffman Estates, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Hoffman Estates, IL. Diagnosis first, then a written price. Prairie Stone and Golf Road. Book online.",
    opening: [
      `USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Hoffman Estates, including ZIP codes 60169 and 60192.`,
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls south of I-90 near Prairie Stone and the NOW Arena, and on the older streets south of Golf Road.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, and ice makers in these ZIP codes. We repair washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
      "The village grew from Hoffman-built homes after 1959. Those kitchens still hold dishwashers that will not drain and dryers that tumble without heat. We diagnose the pump, the vent, and the heating circuit before we quote.",
      "Newer buildings near Prairie Stone use the same visit. Commercial kitchen equipment in that office park is on the truck if you say so when you book.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. We install HVAC systems, ductless mini-splits, and heat pumps. We replace thermostats and set up maintenance plans. Brands on the HVAC side include Carrier, Trane, and Mitsubishi.",
      "Housing started as 1950s and 1960s tracts, then jumped the Northwest Tollway. Many furnaces and first air conditioners are still original to those decades. Ducts were sized before high-efficiency equipment.",
      "A furnace that short cycles, or an air conditioner that cannot hold a set point, often starts with airflow. We measure that before we replace a board. Rooftop units at Prairie Stone use the same crew.",
    ],
    uniqueFaq: {
      q: "We still have the original furnace in a 1960s Hoffman home. Can you service it?",
      a: "Yes. That era of housing is a large part of this village. We diagnose ignition, airflow, and safety switches first, then give a repair-or-replace number. No work starts until you approve it.",
    },
    closing: `Need the dishwasher, the furnace, or the air conditioner looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Elk Grove Village",
    zips: ["60007"],
    title: "Appliance & HVAC Repair in Elk Grove Village, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Elk Grove Village, IL. Diagnosis first, then a written price. Centex homes near Busse Woods. Book online.",
    opening: [
      `USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Elk Grove Village, including ZIP code 60007.`,
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in the Centex residential streets west of the industrial park and near Busse Woods.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, and ice makers in this ZIP code. We repair washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
      "The village was planned in 1956 with kitchens tied to a disposal. A dishwasher that will not drain often starts there. We check the knockout, the hose, and the pump before we quote.",
      "The industrial park on the east side uses the same crew for walk-in coolers and restaurant lines. Name the equipment when you book so we load the right parts.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. We install HVAC systems, ductless mini-splits, and heat pumps. We replace thermostats and set up maintenance plans. Brands on the HVAC side include Carrier, Trane, and Mitsubishi.",
      "Most houses are 1950s and 1960s Centex ranches with original ductwork. Those ducts were sized for a first furnace and a small later air conditioner.",
      "Condensers along Higgins Road and the industrial edge collect dirt and cottonwood. Weak cooling is often a dirty coil or a failed capacitor, not a full compressor failure. We clean and test before we talk replacement.",
    ],
    uniqueFaq: {
      q: "The air conditioner on our Centex ranch barely cools. Do you work on those systems?",
      a: "Yes. Original ductwork and outdoor units near the industrial park are a regular stop. We check airflow, the capacitor, and the coil before we quote. You approve the price before any repair.",
    },
    closing: `Need the dishwasher, the air conditioner, or a walk-in cooler looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Buffalo Grove",
    zips: ["60089"],
    title: "Appliance & HVAC Repair in Buffalo Grove, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Buffalo Grove, IL. Diagnosis first, then a written price. Lake Cook Road and Town Center. Book online.",
    opening: [
      `USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Buffalo Grove, including ZIP code 60089.`,
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls along Lake Cook Road, at the Town Center, and in the subdivisions north toward Buffalo Creek.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, and ice makers in this ZIP code. We repair washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
      "Kitchens from the 1980s and 1990s often have ice makers that sit empty while the fridge still cools. A stuck valve, a frozen fill tube, or a failed module is usually why. We test the water path before we talk about a new refrigerator.",
      "Washers and dryers in those same houses fail on drain and heat the same way they do anywhere. Diagnosis still comes before the quote.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. We install HVAC systems, ductless mini-splits, and heat pumps. We replace thermostats and set up maintenance plans. Brands on the HVAC side include Carrier, Trane, and Mitsubishi.",
      "Most subdivisions went up in the 1970s through the 1990s, later than Rolling Meadows or Elk Grove. Many systems are original to those builds and are due for honest repair-or-replace advice.",
      "If ducts were never resized after a higher-efficiency furnace, far bedrooms drift. We measure airflow and static pressure before we sell a new unit. Ductless heads are an option in rooms the original layout never reached.",
    ],
    uniqueFaq: {
      q: "The fridge is cold but the ice maker stopped. Can you fix just that?",
      a: "Yes. Ice maker valves, fill tubes, and modules are a common repair in these 1980s and 1990s kitchens. We diagnose that part of the unit first. You get a written price before we replace anything.",
    },
    closing: `Need the ice maker, the dryer, or the furnace looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Wheeling",
    zips: ["60090"],
    title: "Appliance & HVAC Repair in Wheeling, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Wheeling, IL. Diagnosis first, then a written price. Homes and Milwaukee Avenue kitchens. Book online.",
    opening: [
      `USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Wheeling, including ZIP code 60090.`,
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls on Milwaukee Avenue and in the residential streets west of that corridor.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, and ice makers in this ZIP code. We repair washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
      "Milwaukee Avenue is a restaurant and storefront strip. Walk-in coolers, reach-ins, and cooking lines fail on that corridor the same day a house west of it loses a dryer. Name the equipment when you book.",
      "In those houses, a dryer that runs without heat or a dishwasher that will not drain is still the residential pattern. Diagnosis comes before any quote.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. We install HVAC systems, ductless mini-splits, and heat pumps. We replace thermostats and set up maintenance plans. Brands on the HVAC side include Carrier, Trane, and Mitsubishi.",
      "Homes west of Milwaukee Avenue are older than the Buffalo Grove subdivisions next door. Original ductwork and first-generation air conditioners are still in many of them.",
      "Storefronts and restaurants on the avenue often use rooftop units. We service those as commercial HVAC. A short-cycling furnace in a house and a hot rooftop on the strip can be the same crew on the same day if you book both.",
    ],
    uniqueFaq: {
      q: "Can you work on a restaurant cooler on Milwaukee Avenue?",
      a: "Yes. Commercial refrigeration and kitchen equipment are part of the same company. Tell us it is a walk-in or a reach-in when you book so we load the right parts. Residential appliances west of the avenue use the same number.",
    },
    closing: `Need a dryer, a furnace, or a walk-in cooler looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Chicago",
    zips: [],
    title: "Appliance & HVAC Repair in Chicago, IL | USA HVAC",
    description:
      "Appliance and HVAC repair across Chicago. Diagnosis first, then a written price. Homes, condos, and small commercial kitchens. Book online.",
    opening: [
      "USA Appliance & HVAC handles appliance and HVAC calls across Chicago, from the neighborhoods with their own pages to the blocks between them.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. Same-day visits are usually available when you call early and a slot is still open.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, and ice makers. We repair washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
      "A three-flat, a high-rise, and a storefront kitchen can share one visit if you name both jobs when you book. Diagnosis comes before any quote.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. We install HVAC systems, ductless mini-splits, and heat pumps. We replace thermostats and set up maintenance plans. Brands on the HVAC side include Carrier, Trane, and Mitsubishi.",
      "Chicago housing runs from prewar radiators and window units to forced air in later additions. We test the system that is actually in the building before we recommend a part or a replacement.",
      "Refrigerant work is performed by EPA Section 608 certified technicians. If you smell gas, leave the building and call 911 or your gas utility. Do not look for the leak yourself.",
    ],
    uniqueFaq: {
      q: "Do you cover the whole city, or only the neighborhoods listed on this site?",
      a: "The neighborhood pages are the places we publish in detail. If your block is inside Chicago and is not named, call and ask. We would rather say no on the phone than add a travel charge later.",
    },
    closing: `Need an appliance or the heating and cooling looked at in Chicago? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "The Loop",
    area: "The Loop, Chicago",
    zips: ["60601", "60602", "60603", "60604"],
    title: "Appliance & HVAC Repair in The Loop, Chicago | USA HVAC",
    description:
      "Appliance and HVAC repair in The Loop. Diagnosis first, then a written price. High-rises, offices, and small kitchens. Book online.",
    opening: [
      "USA Appliance & HVAC handles appliance and HVAC calls in The Loop, including ZIP codes 60601, 60602, 60603, and 60604.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. Loading docks, freight elevators, and front-desk rules slow a visit, so mention building access when you book.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, and ice makers in these ZIP codes. We repair washers, dryers, and dishwashers in residential towers. We also repair ovens, stoves, ranges, cooktops, and range hoods.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Many Loop kitchens are compact. A refrigerator that runs warm is often a condenser with no air around it, not a failed compressor. We pull the unit and test before we talk replacement.",
    ],
    hvac: [
      "We repair furnaces, air conditioners, and the packaged units common in downtown buildings. We install ductless mini-splits where a single room has no duct. Brands include Carrier, Trane, and Mitsubishi.",
      "High-rise mechanical rooms are not a house basement. Tell us the equipment type when you book so we load the right parts. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    uniqueFaq: {
      q: "Can you get into a Loop high-rise with a freight elevator?",
      a: "Yes, if the building allows a service visit in our Monday through Saturday window. Put the dock hours and any certificate of insurance request in the booking notes. We are licensed and insured in Illinois.",
    },
    closing: `Need a refrigerator, a dryer, or a downtown air conditioner looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "River North",
    area: "River North, Chicago",
    zips: ["60654"],
    title: "Appliance & HVAC Repair in River North | USA HVAC",
    description:
      "Appliance and HVAC repair in River North. Diagnosis first, then a written price. Condos and restaurant kitchens. Book online.",
    opening: [
      "USA Appliance & HVAC handles appliance and HVAC calls in River North, including ZIP code 60654.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in the residential towers and in the restaurant kitchens along the same streets.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, and range hoods.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
      "A condo ice maker and a reach-in on the ground floor are different jobs. Name which one you have so we bring the right parts. Diagnosis still comes before any quote.",
    ],
    hvac: [
      "We repair furnaces and air conditioners, and we install ductless systems where a loft has no ductwork. Brands include Carrier, Trane, and Mitsubishi.",
      "Converted lofts often added cooling after the building was finished. Weak rooms are frequently an airflow or sizing problem. We measure that before we replace a compressor. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    uniqueFaq: {
      q: "Can one crew handle a condo and a restaurant cooler on the same street?",
      a: "Yes. Residential appliances and commercial refrigeration are the same company. Book them as separate jobs if they are different addresses, and say so in the notes.",
    },
    closing: `Need a condo appliance or a River North cooler looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Gold Coast",
    area: "the Gold Coast, Chicago",
    zips: ["60610", "60611"],
    title: "Appliance & HVAC Repair in the Gold Coast | USA HVAC",
    description:
      "Appliance and HVAC repair in the Gold Coast. Diagnosis first, then a written price. Vintage apartments and high-rises. Book online.",
    opening: [
      "USA Appliance & HVAC handles appliance and HVAC calls in the Gold Coast, including ZIP codes 60610 and 60611.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. Prewar walk-ups and doorman buildings both need the access notes in the booking.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Vintage kitchens often hide a long dryer vent or a dishwasher hose that was never opened at the disposal. We check that path before we order a part.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Many Gold Coast apartments still rely on through-wall units or a single ductless head. We service those, plus central systems in later buildings. Brands include Carrier, Trane, and Mitsubishi.",
      "A unit that short cycles in a tight mechanical closet is often airflow, not a dead board. We measure before we quote. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    uniqueFaq: {
      q: "Our prewar apartment has a through-wall air conditioner. Do you service those?",
      a: "Yes, when it is a repairable packaged or through-wall unit and the building allows the work. We diagnose it on site and give a written price before any repair.",
    },
    closing: `Need a Gold Coast appliance or air conditioner looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Streeterville",
    area: "Streeterville, Chicago",
    zips: ["60611"],
    title: "Appliance & HVAC Repair in Streeterville | USA HVAC",
    description:
      "Appliance and HVAC repair in Streeterville. Diagnosis first, then a written price. High-rise kitchens and laundry rooms. Book online.",
    opening: [
      "USA Appliance & HVAC handles appliance and HVAC calls in Streeterville, including ZIP code 60611.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. Tell us the loading dock and certificate requirements when you book a tower.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers in these buildings. We also repair ovens, cooktops, and range hoods.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Stacked laundry in a high-rise fails on drain, spin, and heat the same way a house does. The difference is getting the machine out of a closet. We plan that before we quote a part.",
    ],
    hvac: [
      "We repair air conditioners and the fan-coil or packaged equipment these towers use. Ductless installs are an option where the building allows a new head. Brands include Carrier, Trane, and Mitsubishi.",
      "Refrigerant work is performed by EPA Section 608 certified technicians. We do not start that work until you approve a written price.",
    ],
    uniqueFaq: {
      q: "The stacked washer in our tower closet will not drain. Can you reach it?",
      a: "Yes, if we can pull the pair safely and the building allows the visit during our hours. We diagnose the pump and drain before we quote. You approve the price before any repair.",
    },
    closing: `Need a Streeterville washer, refrigerator, or air conditioner looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "West Loop",
    area: "the West Loop, Chicago",
    zips: ["60607", "60661"],
    title: "Appliance & HVAC Repair in the West Loop | USA HVAC",
    description:
      "Appliance and HVAC repair in the West Loop. Diagnosis first, then a written price. Lofts, condos, and restaurant lines. Book online.",
    opening: [
      "USA Appliance & HVAC handles appliance and HVAC calls in the West Loop, including ZIP codes 60607 and 60661.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in converted lofts and in the kitchens along Randolph and Fulton.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, and range hoods.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
      "Restaurant lines and condo kitchens are booked as different jobs. Say which equipment failed so the van is loaded for that stop.",
    ],
    hvac: [
      "We repair furnaces and air conditioners, and we install ductless systems in lofts that were never ducted. Brands include Carrier, Trane, and Mitsubishi.",
      "Rooftop units over storefronts are commercial HVAC. A condo heat pump is a different visit. Refrigerant work is performed by EPA Section 608 certified technicians. If you smell gas, leave and call 911 or your gas utility.",
    ],
    uniqueFaq: {
      q: "Can you service a restaurant line and a condo in the West Loop?",
      a: "Yes. Book the commercial kitchen and the residence as separate jobs, with the equipment named on each. Both use the same phone number.",
    },
    closing: `Need a West Loop appliance, rooftop unit, or cooler looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Lincoln Park",
    area: "Lincoln Park, Chicago",
    zips: ["60614"],
    title: "Appliance & HVAC Repair in Lincoln Park | USA HVAC",
    description:
      "Appliance and HVAC repair in Lincoln Park. Diagnosis first, then a written price. Greystones, walk-ups, and condos. Book online.",
    opening: [
      "USA Appliance & HVAC handles appliance and HVAC calls in Lincoln Park, including ZIP code 60614.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in greystones, courtyard walk-ups, and the newer condos toward the park.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Older two-flats often have a dryer vent that runs a long way to the alley. A dryer that tumbles without heat may be a clogged vent, not a dead element. We check the vent before we order a part.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Many Lincoln Park houses added central air to ducts that were sized for heat only. Far rooms drift off the set point for that reason.",
      "We measure airflow before we replace a control board. Ductless heads are an option for a top-floor room the original ducts never reached. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    uniqueFaq: {
      q: "Our greystone furnace is in a tight basement. Can you still service it?",
      a: "Yes. We diagnose ignition, airflow, and safety switches in those basements, then give a written repair-or-replace price. No work starts until you approve it.",
    },
    closing: `Need a Lincoln Park dryer, dishwasher, or furnace looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Lakeview",
    area: "Lakeview, Chicago",
    zips: ["60613", "60657"],
    title: "Appliance & HVAC Repair in Lakeview, Chicago | USA HVAC",
    description:
      "Appliance and HVAC repair in Lakeview. Diagnosis first, then a written price. Walk-ups, two-flats, and condos. Book online.",
    opening: [
      "USA Appliance & HVAC handles appliance and HVAC calls in Lakeview, including ZIP codes 60613 and 60657.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls from the courtyards west of Broadway through the blocks toward the lake.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Courtyard buildings often stack laundry in a closet with a shared vent. A dryer that runs cold, or a washer that will not drain, is a common layout problem. We test the machine and the vent or drain path before we quote.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Two-flats here often have one furnace and window units, or a later central-air add-on. We service the system that is installed, including ductless heads.",
      "Brands include Carrier, Trane, and Mitsubishi. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    uniqueFaq: {
      q: "The dryer in our Lakeview courtyard closet has no heat. Is the vent part of the visit?",
      a: "Yes. We check the heating circuit and the vent run before we order a part. A new element fails again if the air cannot leave the building. You approve the price first.",
    },
    closing: `Need a Lakeview washer, dryer, or furnace looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Wicker Park",
    area: "Wicker Park, Chicago",
    zips: ["60622"],
    title: "Appliance & HVAC Repair in Wicker Park | USA HVAC",
    description:
      "Appliance and HVAC repair in Wicker Park. Diagnosis first, then a written price. Two-flats, condos, and storefronts. Book online.",
    opening: [
      "USA Appliance & HVAC handles appliance and HVAC calls in Wicker Park, including ZIP code 60622.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in two-flats, condo conversions, and the small commercial kitchens on the retail streets.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial kitchen equipment uses the same crew.`,
      "Conversions often put a full-size refrigerator in a galley that was not built for it. Warm food with a running compressor can be a clearance problem. We measure that space before we condemn the sealed system.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Many of these buildings were heated first and cooled later. Ductless mini-splits fit rooms that never had a supply vent.",
      "Brands include Carrier, Trane, and Mitsubishi. Refrigerant work is performed by EPA Section 608 certified technicians. If you smell gas, leave and call 911 or your gas utility.",
    ],
    uniqueFaq: {
      q: "Our condo conversion has no ducts. Can you add cooling to one room?",
      a: "A ductless mini-split is the usual way to cool a room that was never ducted, if the building allows the outdoor unit. We look at the wall and the electrical before we quote an install.",
    },
    closing: `Need a Wicker Park refrigerator, furnace, or mini-split looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Logan Square",
    area: "Logan Square, Chicago",
    zips: ["60647"],
    title: "Appliance & HVAC Repair in Logan Square | USA HVAC",
    description:
      "Appliance and HVAC repair in Logan Square. Diagnosis first, then a written price. Two-flats, greystones, and condos. Book online.",
    opening: [
      "USA Appliance & HVAC handles appliance and HVAC calls in Logan Square, including ZIP code 60647.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in two-flats and greystones around the boulevard and in newer condos toward the square.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Basement laundry in these two-flats often has a long dryer vent and a dishwasher that shares a disposal. We check the vent and the knockout before we order a heating element or a pump.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Original gravity or early forced-air systems were not sized for a modern condenser. Rooms at the back of a long first floor stay warm in July.",
      "We measure temperature and airflow before we replace a board. Brands include Carrier, Trane, and Mitsubishi. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    uniqueFaq: {
      q: "The back rooms of our two-flat never cool. Is that a repair you make here?",
      a: "Yes. We test whether the ducts, the filter, or the outdoor unit is the limit before we quote. Sometimes the honest answer is a ductless head for that room, not a larger condenser.",
    },
    closing: `Need a Logan Square dryer, dishwasher, or air conditioner looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Evanston",
    zips: ["60201", "60202"],
    title: "Appliance & HVAC Repair in Evanston, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Evanston, IL. Diagnosis first, then a written price. Houses, apartments, and small kitchens. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Evanston, including ZIP codes 60201 and 60202.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls downtown near the Metra and Davis stops and in the residential streets north and south of there.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers in these ZIP codes. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Apartments near downtown and older houses farther out fail differently. A stacked washer that will not drain is a typical apartment call. A dryer with a long vent is a typical house call. We test the actual machine before we quote.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Evanston houses range from early 1900s stock with later forced air to mid-century ranches. Ducts added after the house was built often leave a room behind.",
      "Brands include Carrier, Trane, and Mitsubishi. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    uniqueFaq: {
      q: "Do you come to Evanston apartments near the Metra as well as houses?",
      a: "Yes. Put any building access rules in the booking. The diagnostic fee is the same. You hear it before a technician is dispatched.",
    },
    closing: `Need an Evanston washer, dryer, or furnace looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Skokie",
    zips: ["60076", "60077"],
    title: "Appliance & HVAC Repair in Skokie, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Skokie, IL. Diagnosis first, then a written price. Ranches, split-levels, and condos. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Skokie, including ZIP codes 60076 and 60077.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in the ranch neighborhoods and in condos near the village center.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Postwar kitchens here still use a dishwasher tied to a disposal and a dryer on an original vent. Standing water and a cold dryer are the faults those layouts produce. We check the hose, the knockout, and the vent before we order parts.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Many Skokie ranches and split-levels still have the ductwork from the first furnace. It was not sized for a later, larger air conditioner.",
      "A system that short cycles or leaves the far bedroom hot often starts with airflow. We measure temperature rise before we blame the control board. Brands include Carrier, Trane, and Mitsubishi.",
    ],
    uniqueFaq: {
      q: "Our Skokie ranch air conditioner runs but the house stays warm. Can you diagnose that?",
      a: "Yes. We check the filter, the ducts, the capacitor, and the coil before we quote. You get a written price, and no repair starts until you approve it.",
    },
    closing: `Need a Skokie dishwasher, dryer, or air conditioner looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Niles",
    zips: ["60714"],
    title: "Appliance & HVAC Repair in Niles, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Niles, IL. Diagnosis first, then a written price. Ranches, townhomes, and small businesses. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Niles, including ZIP code 60714.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in the residential streets and at the small commercial kitchens along the main roads.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration uses the same crew.`,
      "Ranch laundries and townhome closets fail on the same parts: a dryer that tumbles without heat, a washer that will not drain. Diagnosis comes before the quote.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Niles housing is largely mid-century, with original ducts and systems that have been repaired in place for decades.",
      "We test airflow and electrical before we recommend a board or a new unit. Brands include Carrier, Trane, and Mitsubishi. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    uniqueFaq: {
      q: "Do you cover both houses and small restaurant equipment in Niles?",
      a: "Yes. Name the equipment when you book. A home furnace and a reach-in cooler are different loads on the van, and both are in our scope.",
    },
    closing: `Need a Niles appliance, furnace, or cooler looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Park Ridge",
    zips: ["60068"],
    title: "Appliance & HVAC Repair in Park Ridge, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Park Ridge, IL. Diagnosis first, then a written price. Brick houses and downtown condos. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Park Ridge, including ZIP code 60068.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in the brick neighborhoods and near the Uptown Metra station.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Brick houses from the 1920s through the 1950s often have a basement laundry with a long vent and a kitchen disposal that a dishwasher was added to later. We inspect those connections before we replace a part.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Many of these houses were built for radiators or a smaller furnace. Central air came later, on ducts that do not reach every room evenly.",
      "We measure the rooms that drift before we sell a larger unit. Brands include Carrier, Trane, and Mitsubishi. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    uniqueFaq: {
      q: "Our Park Ridge brick house has uneven cooling. Do you look at the ducts?",
      a: "Yes. Airflow is part of the diagnosis, not an add-on after a part is sold. You get a written price before any repair or a recommendation to replace.",
    },
    closing: `Need a Park Ridge dryer, dishwasher, or air conditioner looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Des Plaines",
    zips: ["60016", "60018"],
    title: "Appliance & HVAC Repair in Des Plaines, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Des Plaines, IL. Diagnosis first, then a written price. Houses near downtown and the river. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Des Plaines, including ZIP codes 60016 and 60018.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls downtown near the Metra station and in the neighborhoods along River Road and Golf Road.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial kitchen equipment uses the same crew.`,
      "Downtown apartments and ranch houses west of the tracks are both on this route. A washer that will not drain and a dryer that will not heat are diagnosed the same way: test first, then a written price.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Housing here mixes older downtown stock with postwar ranches. Original ductwork is still in many of those ranches.",
      "Short cycling is often a filter, a limit switch, or ducts that cannot move the air. We measure temperature rise before we replace a control. Brands include Carrier, Trane, and Mitsubishi.",
    ],
    uniqueFaq: {
      q: "Do you charge extra for Des Plaines because it is farther from downtown Chicago?",
      a: "No. The diagnostic fee does not change with this ZIP code. You hear the amount before a technician is dispatched. If you approve the repair, that fee is applied to the work.",
    },
    closing: `Need a Des Plaines appliance or furnace looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Franklin Park",
    zips: ["60131"],
    title: "Appliance & HVAC Repair in Franklin Park, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Franklin Park, IL. Diagnosis first, then a written price. Houses and industrial-park kitchens. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Franklin Park, including ZIP code 60131.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in the residential streets and at kitchens in the industrial park.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial refrigeration and kitchen equipment use the same crew.`,
      "Say whether the stop is a house or a walk-in when you book. The diagnosis is the same idea: find the fault, then give a written price.",
    ],
    hvac: [
      "We repair furnaces and air conditioners in the bungalows and ranches, and rooftop or packaged units where the building is commercial. Brands include Carrier, Trane, and Mitsubishi.",
      "Refrigerant work is performed by EPA Section 608 certified technicians. If you smell gas, leave and call 911 or your gas utility.",
    ],
    uniqueFaq: {
      q: "Can you work on equipment in the Franklin Park industrial area?",
      a: "Yes, for commercial refrigeration, kitchen equipment, and commercial HVAC during our Monday through Saturday hours. Name the equipment so we load the right parts.",
    },
    closing: `Need a Franklin Park appliance, furnace, or cooler looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Schiller Park",
    zips: ["60176"],
    title: "Appliance & HVAC Repair in Schiller Park, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Schiller Park, IL. Diagnosis first, then a written price. Houses near the industrial corridor. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Schiller Park, including ZIP code 60176.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in the village neighborhoods between the rail lines and O'Hare's edge.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Small village kitchens and nearby commercial coolers are both in range. Tell us which one failed so the first visit is the right visit.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Houses here are mostly mid-century, close to the industrial and airport corridor. Outdoor coils collect dirt faster than in a quiet subdivision.",
      "Weak cooling is often a dirty coil or a failed capacitor. We clean and test before we talk about a compressor. Brands include Carrier, Trane, and Mitsubishi. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    uniqueFaq: {
      q: "Our condenser sits near a busy road and barely cools. Is that something you clean and test?",
      a: "Yes. We check the coil, the capacitor, and the airflow before we quote a major part. You approve the written price before any repair.",
    },
    closing: `Need a Schiller Park air conditioner or appliance looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Northbrook",
    zips: ["60062"],
    title: "Appliance & HVAC Repair in Northbrook, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Northbrook, IL. Diagnosis first, then a written price. Subdivisions and downtown condos. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Northbrook, including ZIP code 60062.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls downtown and in the subdivisions north of Dundee Road.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Kitchens from the 1970s through the 1990s often have an ice maker that stopped while the refrigerator still cools. We test the valve, the fill tube, and the module before we recommend a new refrigerator.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Many Northbrook systems are original to subdivisions built in those same decades and are old enough for a straight repair-or-replace answer.",
      "If a later furnace was set on ducts that were never resized, far bedrooms drift. We measure airflow before we sell a new unit. Brands include Carrier, Trane, and Mitsubishi.",
    ],
    uniqueFaq: {
      q: "The refrigerator is cold but the ice maker quit. Can you repair just that in Northbrook?",
      a: "Yes. We diagnose the ice maker separately from the sealed system. You get a written price before we replace a valve, a module, or anything else.",
    },
    closing: `Need a Northbrook ice maker, dryer, or furnace looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Glenview",
    zips: ["60025", "60026"],
    title: "Appliance & HVAC Repair in Glenview, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Glenview, IL. Diagnosis first, then a written price. Older homes and newer subdivisions. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Glenview, including ZIP codes 60025 and 60026.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in the older streets near downtown and in the subdivisions toward The Glen.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "A 1950s kitchen and a 2000s kitchen fail on different parts, but the visit is the same. We identify the fault and give a written price before any repair.",
    ],
    hvac: [
      "We repair furnaces and air conditioners, and we install systems when replacement is the better spend. Newer subdivisions often have original high-efficiency equipment that is now due for service, not a guess.",
      "Older houses may still be on ductwork from the first furnace. We measure before we recommend a larger unit. Brands include Carrier, Trane, and Mitsubishi. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    uniqueFaq: {
      q: "Do you cover both downtown Glenview and the newer subdivisions?",
      a: "Yes. ZIP codes 60025 and 60026 are both in range. The diagnostic fee does not change between them. You hear it before we dispatch.",
    },
    closing: `Need a Glenview appliance or heating and cooling system looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Morton Grove",
    zips: ["60053"],
    title: "Appliance & HVAC Repair in Morton Grove, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Morton Grove, IL. Diagnosis first, then a written price. Ranches, split-levels, and condos. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Morton Grove, including ZIP code 60053.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls along Dempster Street and in the residential streets north and south of it.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Split-level laundries here often sit on an interior wall. A dryer that runs without heat may be an element, a fuse, an igniter, or a vent that cannot breathe. We check the vent before we order the part.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Morton Grove's ranches and split-levels mostly date from the 1950s through the 1970s, and many still use the original duct layout.",
      "A furnace that lights and then shuts off is often airflow or a limit, not a failed board. We measure temperature rise first. Brands include Carrier, Trane, and Mitsubishi.",
    ],
    uniqueFaq: {
      q: "Our Morton Grove dryer tumbles but the clothes stay damp. Can that be finished in one visit?",
      a: "Often, if the fault is a common heating part or a vent we can clear and the part is on the van. You still approve a written price before we repair it.",
    },
    closing: `Need a Morton Grove dryer, dishwasher, or furnace looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Oak Park",
    zips: ["60301", "60302"],
    title: "Appliance & HVAC Repair in Oak Park, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Oak Park, IL. Diagnosis first, then a written price. Brick homes, two-flats, and condos. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Oak Park, including ZIP codes 60301 and 60302.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in the brick houses, two-flats, and condos from downtown to the residential streets.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Older kitchens often added a dishwasher to a disposal that was never opened, and dryers vent through long brick chases. We inspect those before we replace a pump or an element.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Many Oak Park houses were built for radiators or a small furnace. Central air, where it exists, was added later and does not always reach the third floor.",
      "A ductless head is sometimes the honest fix for that top floor. We say so after we measure, not before. Brands include Carrier, Trane, and Mitsubishi. Refrigerant work is performed by EPA Section 608 certified technicians. If you smell gas, leave and call 911 or your gas utility.",
    ],
    uniqueFaq: {
      q: "The third floor of our Oak Park house never cools. Do you only quote a new central system?",
      a: "No. We check what the existing ducts can do first. If they cannot serve that floor, we will say whether a ductless head is the better spend. You approve any price before work starts.",
    },
    closing: `Need an Oak Park appliance or cooling problem looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Cicero",
    zips: ["60804"],
    title: "Appliance & HVAC Repair in Cicero, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Cicero, IL. Diagnosis first, then a written price. Bungalows, two-flats, and small businesses. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Cicero, including ZIP code 60804.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in the bungalows and two-flats and at small commercial kitchens along the main streets.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence} Commercial kitchen equipment uses the same crew.`,
      "Bungalow laundries are often in the basement with a vent that has been there for decades. We check that vent when a dryer runs without heat.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Many Cicero bungalows still heat with a basement furnace and cool with window units or a later central-air add-on.",
      "We service the system you have. Brands include Carrier, Trane, and Mitsubishi. Refrigerant work is performed by EPA Section 608 certified technicians. If you smell gas, leave and call 911 or your gas utility.",
    ],
    uniqueFaq: {
      q: "Do you work on bungalow furnaces in Cicero?",
      a: "Yes. We diagnose ignition, airflow, and safety switches, then give a written repair-or-replace price. Nothing is replaced until you approve that number.",
    },
    closing: `Need a Cicero furnace, dryer, or refrigerator looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Berwyn",
    zips: ["60402"],
    title: "Appliance & HVAC Repair in Berwyn, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Berwyn, IL. Diagnosis first, then a written price. Bungalows, two-flats, and brick homes. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Berwyn, including ZIP code 60402.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls in the bungalow blocks and the brick two-flats.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Brick bungalows often vent a dryer through a long masonry run. Heat dies in that pipe before it dies in the element. We look at the vent as part of the diagnosis.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Basement furnaces in these bungalows are a regular kind of visit: tight access, original ducts, and a system that may have had central air added years later.",
      "We measure temperature rise and airflow before we replace a control. Brands include Carrier, Trane, and Mitsubishi. If you smell gas, leave and call 911 or your gas utility.",
    ],
    uniqueFaq: {
      q: "The dryer vent goes through a brick wall. Do you still take that call in Berwyn?",
      a: "Yes. The vent is part of finding out why the dryer has no heat. We tell you what failed, and you approve the price before any repair.",
    },
    closing: `Need a Berwyn dryer, furnace, or dishwasher looked at? Call ${company.phone} or book online.`,
  }),
  locationPage({
    town: "Naperville",
    zips: ["60540", "60563", "60565"],
    title: "Appliance & HVAC Repair in Naperville, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Naperville, IL. Diagnosis first, then a written price. Downtown and subdivision homes. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Chicago. We handle appliance and HVAC calls in Naperville, including ZIP codes 60540, 60563, and 60565.",
      "Hours are Monday through Saturday, 8:00 AM to 6:00 PM. We take calls downtown and in the subdivisions. This is the south end of our range. If a slot is too far for the day, we say so before we book it.",
      `Call ${company.phone} or book online.`,
    ],
    appliance: [
      "We repair refrigerators, freezers, ice makers, washers, dryers, and dishwashers. We also repair ovens, stoves, ranges, cooktops, range hoods, and garbage disposals.",
      `If you need a hookup, appliance installation is part of the same work. ${applianceBrandSentence}`,
      "Subdivision kitchens from the 1980s through the 2000s fail on ice makers, dishwashers, and laundry the same way closer-in houses do. The visit is still diagnosis first, then a written price.",
    ],
    hvac: [
      "We repair furnaces and air conditioners. Many Naperville systems were installed with the house and are original high-efficiency equipment that now needs a repair-or-replace decision, not a guess.",
      "We test the furnace and the air conditioner that are on site. Brands include Carrier, Trane, and Mitsubishi. Refrigerant work is performed by EPA Section 608 certified technicians.",
    ],
    uniqueFaq: {
      q: "Is Naperville inside your normal service area?",
      a: "Yes, including ZIP codes 60540, 60563, and 60565. It is farther than the northwest suburbs, so we confirm the opening before we promise a same-day window. The diagnostic fee does not go up because of the drive.",
    },
    closing: `Need a Naperville appliance or HVAC system looked at? Call ${company.phone} or book online.`,
  }),
];

export function locationPagePath(town: string) {
  const slug = townToSlug(town);
  return locationPages.some((page) => page.slug === slug)
    ? `/service-areas/${slug}`
    : undefined;
}

export function getLocationPage(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}

/**
 * Structured facts for schema.org. Kept separate from marketing copy so the
 * machine-readable version and the human-readable version cannot drift.
 *
 * This is modelled as a service-area business: no storefront address is
 * published, which is the correct representation for a mobile service company.
 */
export const businessFacts = {
  legalName: "USA Appliance & HVAC",
  streetAddress: "", // TODO(real-data): only publish if there is a real office
  addressLocality: "Chicago",
  addressRegion: "IL",
  postalCode: "",
  addressCountry: "US",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  // TODO(real-data): confirm published hours
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  founded: "2019", // TODO(real-data): confirm the exact founding year
} as const;

export const advantages = [
  {
    title: "Seven years on professional-grade equipment",
    detail:
      "Not only home appliances: commercial refrigeration, walk-in coolers and restaurant cooking equipment have been part of the work from the start, which is why a domestic call and a restaurant call get the same technician.",
  },
  {
    title: "Appliance and HVAC under one number",
    detail:
      "Most households and businesses keep separate contractors for appliances and for heating and cooling. We cover both, so one call handles a kitchen and a furnace.",
  },
  {
    title: "Residential and commercial",
    detail:
      "The same crew works on home kitchens and on restaurant lines, with the parts access and scheduling commercial refrigeration demands.",
  },
  {
    title: "Diagnosis before a quote",
    detail:
      "We identify the fault first, then give you the repair cost. No estimate is offered before anyone has looked at the equipment.",
  },
  {
    title: "Honest repair-or-replace advice",
    detail:
      "If replacement is cheaper over the remaining life of the unit, we say so. Talking a customer into a doomed repair costs more in referrals than it earns in labour.",
  },
  {
    title: "Online booking",
    detail:
      "Pick a real opening yourself instead of waiting on hold. Calling still works if you would rather explain the problem to a person.",
  },
  {
    title: "All major brands",
    detail:
      "From Whirlpool and LG to Sub-Zero and Viking, and from Carrier and Trane to ductless Mitsubishi systems.",
  },
  {
    title: "EPA Section 608",
    detail:
      "Refrigerant work on air conditioners, heat pumps, and refrigeration equipment is performed by EPA Section 608 certified technicians.",
  },
  {
    title: "Licensed and insured",
    detail:
      "Licensed and insured in Illinois. Proof of insurance and applicable credentials can be shown on site.",
  },
  {
    title: "Written 60-day parts warranty",
    detail:
      "Installed replacement parts carry a 60-day parts warranty. The written terms are published on the Warranty page.",
  },
] as const;

/** Per-route metadata. Titles stay under ~60 chars, descriptions under ~155. */
export const seo = {
  privacy: {
    title: "Privacy Policy — USA Appliance & HVAC",
    description:
      "What information USA Appliance & HVAC collects on this website, why, and who else sees it. No marketing lists.",
  },
  home: {
    title: "Appliance & HVAC Repair in Chicago — USA Appliance & HVAC",
    description:
      "Appliance and HVAC diagnostics, repair, installation and maintenance across Chicago and surrounding areas. Residential and commercial. Call or request a visit.",
  },
  about: {
    title: "About USA Appliance & HVAC — Chicago Service Company",
    description:
      "Professional appliance and HVAC repair, installation and maintenance for residential and commercial customers throughout Chicago and surrounding areas.",
  },
  applianceRepair: {
    title: "Appliance Repair in Chicago — Fridges, Washers, Ovens",
    description:
      "Refrigerator, washer, dryer, dishwasher, oven and cooktop repair across Chicago. Diagnosis before a quote, parts for all major brands on the van.",
  },
  hvacServices: {
    title: "HVAC Repair & Service in Chicago — Heating and Cooling",
    description:
      "Air conditioning and furnace repair, HVAC installation and preventive maintenance across Chicago and surrounding areas. Residential and commercial.",
  },
  installation: {
    title: "Appliance & HVAC Installation in Chicago",
    description:
      "Appliance hookups, furnace and air conditioning installation, ductless mini-splits and commercial equipment — installed to spec and tested.",
  },
  commercial: {
    title: "Commercial Appliance & Refrigeration Repair — Chicago",
    description:
      "Commercial refrigeration, kitchen equipment and rooftop HVAC repair with scheduled preventive maintenance for Chicago restaurants and property managers.",
  },
  serviceAreas: {
    title: "Service Areas — Chicago and Surrounding Suburbs",
    description:
      "USA Appliance & HVAC covers Chicago and the surrounding suburbs for appliance and HVAC repair, installation and maintenance.",
  },
  contact: {
    title: "Contact USA Appliance & HVAC — Chicago",
    description:
      "Call 224 360-1633 or send a request. Appliance and HVAC service for residential and commercial customers across Chicago and surrounding areas.",
  },
  book: {
    title: "Request Service — USA Appliance & HVAC, Chicago",
    description:
      "Request appliance or HVAC service in Chicago and the surrounding areas. Call or send the form and we come back with a time window.",
  },
  blog: {
    title: "Appliance & HVAC Blog — USA Appliance & HVAC",
    description:
      "Blog posts for Chicago homes on industry conferences, heat pumps, newer refrigerants, repair decisions, and appliance error codes.",
  },
  warranty: {
    title: "Parts Warranty Terms — USA Appliance & HVAC",
    description:
      "Written 60-day parts warranty terms for installed replacement parts. Licensed and insured appliance and HVAC repair in Chicago.",
  },
  notFound: {
    title: "Page Not Found — USA Appliance & HVAC",
    description:
      "That page does not exist. Browse appliance and HVAC services, or call 224 360-1633.",
  },
};

/** seo entry for each service category page, keyed by group slug. */
export const groupSeo: Record<string, { title: string; description: string }> = {
  "appliance-repair": seo.applianceRepair,
  "hvac-services": seo.hvacServices,
  installation: seo.installation,
  "commercial-services": seo.commercial,
};
