import { company, townToSlug, type LocationFaq } from "@/content";

/** Per-town service-area copy. Kept out of content.ts so only town pages load it. */
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
  ["Des Plaines", "Park Ridge", "Franklin Park", "Norridge", "Niles", "Mount Prospect"],
  [
    "Arlington Heights",
    "Mount Prospect",
    "Palatine",
    "Barrington",
    "Deer Park",
    "Schaumburg",
    "Rolling Meadows",
    "Hoffman Estates",
    "Elk Grove Village",
    "Buffalo Grove",
    "Wheeling",
    "Des Plaines",
  ],
  ["Addison", "Carol Stream", "Wheaton", "Oak Brook", "Elk Grove Village", "Schaumburg"],
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
      `USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Arlington Heights, including ZIP codes 60004 and 60005.`,
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
      `USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Mount Prospect, including ZIP code 60056.`,
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
      `USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Palatine, including ZIP codes 60067 and 60074.`,
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
      `USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Schaumburg, including ZIP codes 60173, 60193, and 60194.`,
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
      `USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Rolling Meadows, including ZIP code 60008.`,
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
      `USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Hoffman Estates, including ZIP codes 60169 and 60192.`,
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
      `USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Elk Grove Village, including ZIP code 60007.`,
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
      `USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Buffalo Grove, including ZIP code 60089.`,
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
      `USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Wheeling, including ZIP code 60090.`,
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
      "USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Evanston, including ZIP codes 60201 and 60202.",
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
      "USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Skokie, including ZIP codes 60076 and 60077.",
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
      "USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Niles, including ZIP code 60714.",
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
      "USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Park Ridge, including ZIP code 60068.",
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
      "USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Des Plaines, including ZIP codes 60016 and 60018.",
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
      "USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Franklin Park, including ZIP code 60131.",
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
    town: "Northbrook",
    zips: ["60062"],
    title: "Appliance & HVAC Repair in Northbrook, IL | USA HVAC",
    description:
      "Appliance and HVAC repair in Northbrook, IL. Diagnosis first, then a written price. Subdivisions and downtown condos. Book online.",
    opening: [
      "USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Northbrook, including ZIP code 60062.",
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
      "USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Glenview, including ZIP codes 60025 and 60026.",
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
      "USA Appliance & HVAC is based in Rolling Meadows and serves Chicago and the northwest suburbs. We handle appliance and HVAC calls in Morton Grove, including ZIP code 60053.",
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
