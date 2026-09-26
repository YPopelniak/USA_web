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
      },
      {
        slug: "air-conditioning-repair",
        title: "Air conditioning repair",
        short: "Weak airflow, short cycling, refrigerant leaks and failed compressors.",
        icon: "wind",
      },
      {
        slug: "heating-furnace-repair",
        title: "Heating and furnace repair",
        short: "No heat, ignition faults, blower problems and safety checks.",
        icon: "flame",
      },
      {
        slug: "hvac-installation",
        title: "HVAC installation",
        short: "Furnaces, condensers and ductless mini-split systems.",
        icon: "hard-hat",
      },
      {
        slug: "hvac-maintenance",
        title: "Preventive HVAC maintenance",
        short: "Seasonal service that catches failures before the season starts.",
        icon: "calendar-check",
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
      },
      {
        slug: "furnace-installation",
        title: "Furnace and heating installation",
        short: "High-efficiency replacements sized to the actual heat load.",
        icon: "flame",
      },
      {
        slug: "ac-installation",
        title: "Air conditioning installation",
        short: "Central systems and ductless mini-splits, including line-set work.",
        icon: "wind",
      },
      {
        slug: "commercial-equipment-installation",
        title: "Commercial equipment installation",
        short: "Kitchen and refrigeration equipment installed to spec.",
        icon: "store",
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
      },
      {
        slug: "commercial-refrigeration",
        title: "Commercial refrigerator and freezer repair",
        short: "Walk-ins, reach-ins, prep tables and display cases.",
        icon: "refrigerator",
      },
      {
        slug: "commercial-kitchen-equipment",
        title: "Commercial kitchen equipment repair",
        short: "Ranges, fryers, ovens, dishmachines and holding equipment.",
        icon: "cooking-pot",
      },
      {
        slug: "commercial-maintenance",
        title: "Commercial preventive maintenance",
        short: "Scheduled service that keeps equipment out of the failure window.",
        icon: "calendar-check",
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
  title: ["Equipment down?", "Let's get it running."],
  body: "Appliance and HVAC service for homes and businesses across Chicago and the surrounding areas. Same crew, both trades, one number.",
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

/** Preferred production origin. The apex redirects here. */
export const SITE_URL = "https://www.usaappliancehvac.com";

export const site = {
  /*
   * www is canonical.
   *
   * Production redirects https://usaappliancehvac.com/* to this host. Canonicals,
   * Open Graph, JSON-LD, the sitemap, and robots.txt must use the same origin,
   * or Google indexes a URL that immediately redirects.
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
  { label: "Furnace repair", to: "/hvac-services" },
  { label: "Air conditioning repair", to: "/hvac-services" },
  { label: "HVAC installation", to: "/installation" },
];

const applianceBrandSentence =
  "Brands we service include Whirlpool, Maytag, KitchenAid, Amana, GE, Monogram, Café, Frigidaire, Electrolux, LG, Samsung, Bosch, Miele, Sub-Zero, Wolf, Viking, Thermador, JennAir, Dacor, Fisher & Paykel, Speed Queen, and more.";

function nearbyTowns(town: string) {
  return northwestTowns.filter((name) => name !== town);
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
    heading: `Why ${town} homeowners call us`,
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
}): LocationPageCopy {
  return {
    slug: townToSlug(input.town),
    town: input.town,
    zips: input.zips,
    title: input.title,
    description: input.description,
    h1: `Appliance and HVAC Repair in ${input.town}, IL`,
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
      heading: "Why Arlington Heights homeowners call us",
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
      { label: "Furnace repair", to: "/hvac-services" },
      { label: "Air conditioning repair", to: "/hvac-services" },
      { label: "HVAC installation", to: "/installation" },
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
