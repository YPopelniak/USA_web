/**
 * Guides for searches that happen before someone books a repair:
 * new equipment, repair-or-replace decisions, and what an error code
 * actually tells you. Facts only. No prices, no product news we cannot stand behind.
 */

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  /** On-page H1. */
  title: string;
  /** Search title. Must stay at or under 70 characters. */
  seoTitle: string;
  /** Meta description. Must stay at or under 160 characters. */
  description: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  related: { label: string; to: string };
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "appliance-hvac-conferences",
    title: "USA Appliance & HVAC at Chicago Build 2026",
    seoTitle: "Chicago Build 2026 — USA Appliance & HVAC",
    description:
      "USA Appliance & HVAC at Chicago Build 2026, McCormick Place, October 28–29. A compliance and permit platform for HVAC and construction jobs.",
    date: "2026-10-01",
    dateLabel: "October 1, 2026",
    excerpt:
      "Field experience and compliance software at Chicago Build. Know what the job requires before the truck rolls.",
    related: { label: "Contact", to: "/contact" },
    sections: [
      {
        heading: "Chicago Build Expo 2026",
        paragraphs: [
          "McCormick Place, Chicago. October 28–29, 2026. Hall F2, West Building, including the HVACR Zone.",
          "USA Appliance & HVAC is a Chicago appliance and HVAC company. At the show we are connecting field experience with software for permits, technician requirements, certifications, and job readiness.",
        ],
      },
      {
        heading: "What we’re building",
        paragraphs: [
          "An AI-powered Compliance and Permit Intelligence Platform for HVAC and construction workflows. The goal is to know what the job requires before the truck rolls.",
          "Permit requirements, technician eligibility, compliance readiness, and audit documentation.",
        ],
      },
      {
        heading: "Who we’d like to meet",
        paragraphs: [
          "HVAC contractors, construction companies, compliance and safety professionals, and government and municipal organizations.",
        ],
      },
    ],
  },
  {
    slug: "heat-pumps-chicago-winter",
    title: "Heat pumps in a Chicago winter",
    seoTitle: "Heat Pumps in a Chicago Winter | USA Appliance & HVAC",
    description:
      "What a cold-climate heat pump does in a Chicago winter, when a furnace should stay, and what to ask before you replace the system.",
    date: "2026-09-30",
    dateLabel: "September 30, 2026",
    excerpt:
      "A heat pump can heat a Chicago house. It is not a reason to pull out a working furnace without a plan for the coldest weeks.",
    related: { label: "HVAC services", to: "/hvac-services" },
    sections: [
      {
        heading: "What the equipment actually does",
        paragraphs: [
          "A heat pump moves heat. In summer it moves heat out of the house, the same job as a central air conditioner. In winter it moves heat from outdoor air into the house. It is not a plug-in space heater, and it is not a gas furnace with a different name.",
          "Chicago winter air is often well below freezing. The outdoor unit has to work harder as the temperature drops. Some systems are built for that and keep heating on their own. Others are paired with a gas furnace and hand the coldest hours to the furnace. That pairing is usually called dual fuel.",
        ],
      },
      {
        heading: "When a furnace should stay",
        paragraphs: [
          "A working furnace is not scrap just because a heat pump is newer. If the house already heats reliably, the useful question is whether a heat pump lowers the heating bill enough to justify the change, and what heats the house if the heat pump cannot keep up.",
          "Replacing both the furnace and the air conditioner at once is a different job from adding a heat pump beside a furnace that still has years left. The ductwork, the electrical service, and the outdoor location all have to fit the new equipment. A nameplate photo and a walk-through answer that. A brochure does not.",
        ],
      },
      {
        heading: "What to ask before you buy",
        paragraphs: [
          "Ask whether the outdoor unit is a cold-climate model, whether the furnace stays as backup, and who will handle the refrigerant. Refrigerant work on this equipment is done by EPA Section 608 certified technicians.",
        ],
        list: [
          "Does the plan keep heat in the house on the coldest days, or does it assume the heat pump is enough on its own?",
          "Will the existing ducts and electrical panel support the equipment, or does the job include that work?",
          "Is the quote for a repair of the system you have, or for a full replacement?",
        ],
      },
    ],
  },
  {
    slug: "newer-ac-refrigerants",
    title: "What newer air-conditioner refrigerants mean for a repair",
    seoTitle: "Newer AC Refrigerants and Repair | USA Appliance & HVAC",
    description:
      "New air conditioners may use a different refrigerant than older R-410A systems. Here is what that changes on a repair, and what it does not.",
    date: "2026-09-30",
    dateLabel: "September 30, 2026",
    excerpt:
      "A new air conditioner may be charged with a different refrigerant than the one in an older system. The two are not interchangeable.",
    related: { label: "HVAC services", to: "/hvac-services" },
    sections: [
      {
        heading: "The change is on new equipment",
        paragraphs: [
          "Many new residential air conditioners and heat pumps leave the factory with an A2L refrigerant, often R-454B, instead of R-410A. That is a change in what the manufacturer put in that model. It does not mean the air conditioner already on your house has to be converted.",
          "An existing system is serviced with the refrigerant named on its data plate. A repair does not turn an R-410A system into a newer-refrigerant system. Mixing refrigerants, or topping a system off with whatever jug is on the truck, damages the equipment.",
        ],
      },
      {
        heading: "What a homeowner should expect on the visit",
        paragraphs: [
          "The technician reads the data plate and uses that refrigerant. If the system is low, the useful question is where it went. Refrigerant does not get used up the way gasoline does. A loss means a leak, and the leak is the repair.",
          "Refrigerant is handled by EPA Section 608 certified technicians. It is not a homeowner refill, and a quote should name the refrigerant the unit calls for rather than a generic top-off.",
        ],
      },
      {
        heading: "What this does not decide for you",
        paragraphs: [
          "A system that still cools does not need to be replaced because newer models use a different refrigerant. Replace it when the repair no longer makes sense for the age and condition of the equipment, not because the industry changed what goes into a new condenser.",
        ],
      },
    ],
  },
  {
    slug: "repair-or-replace-a-refrigerator",
    title: "Repair or replace a refrigerator",
    seoTitle: "Repair or Replace a Refrigerator | USA Appliance & HVAC",
    description:
      "How to tell a refrigerator repair from a replacement: fans and gaskets versus a sealed-system failure, and why the diagnosis comes before the quote.",
    date: "2026-09-30",
    dateLabel: "September 30, 2026",
    excerpt:
      "A warm refrigerator is not automatically a new refrigerator. The failed part decides that, and the part is not obvious from the symptom.",
    related: { label: "Refrigerator repair", to: "/appliance-repair/refrigerator-repair" },
    sections: [
      {
        heading: "The symptom is not the diagnosis",
        paragraphs: [
          "A refrigerator that is warm, dripping, noisy, or building frost can be a fan, a gasket, a defrost part, a sensor, or a sealed-system problem. Those are very different repairs. The temperature in the fresh-food section does not tell you which one it is.",
          "We test the fault before recommending parts. A control that looks dead is sometimes a fan that never started. A sealed system that has lost its charge is not fixed by a new board.",
        ],
      },
      {
        heading: "When repair is the usual answer",
        paragraphs: [
          "Fans, door gaskets, thermostats, ice makers, dispensers, and many defrost parts are ordinary repairs. The refrigerator is worth keeping when the cabinet is in good shape and the failed part is outside the sealed system.",
        ],
      },
      {
        heading: "When replacement deserves a straight answer",
        paragraphs: [
          "A compressor or a refrigerant leak is a sealed-system repair. On an older refrigerator that repair can cost more than the machine has left. If that is the case, we say so before the work is approved. Installed replacement parts carry a written 60-day parts warranty. Labor and the service call are not part of that warranty unless we confirm it for that job.",
        ],
      },
    ],
  },
  {
    slug: "smart-appliance-error-codes",
    title: "What a smart-appliance error code actually tells you",
    seoTitle: "Smart Appliance Error Codes | USA Appliance & HVAC",
    description:
      "An app alert or error code narrows the symptom. It does not name the failed part. Here is what to do before you order a control board.",
    date: "2026-09-30",
    dateLabel: "September 30, 2026",
    excerpt:
      "Wi-Fi and an error code are useful. They are not a diagnosis, and the same code can mean different faults on two machines.",
    related: { label: "Appliance repair", to: "/appliance-repair" },
    sections: [
      {
        heading: "The code is a symptom",
        paragraphs: [
          "A connected washer, refrigerator, oven, or dishwasher can send an alert when a cycle fails or a filter is due. The code records what the control noticed. It does not prove which part failed. Two machines can show the same code for different reasons, and a board is often blamed for a sensor, a fan, or a loose connection.",
          "Write the code down before you clear it. A photo of the display and the model sticker is more useful on a service call than a description of the beep.",
        ],
      },
      {
        heading: "What is reasonable to try once",
        paragraphs: [
          "If the manual says a code can be cleared by turning the breaker off for a few minutes, that is a fair first step for a one-time glitch. If the code returns, or the machine still will not heat, cool, drain, or spin, repeating the reset does not fix the part.",
        ],
        list: [
          "Leave gas appliances alone if you smell gas. Get out and call 911 or the gas utility.",
          "Do not bypass a door lock, a thermal fuse, or a gas valve to make a cycle start.",
          "Do not order a control board from the code alone.",
        ],
      },
      {
        heading: "What we do with the code",
        paragraphs: [
          "We use it as the starting point, then test the parts that can cause it. The repair quote names the failed part. The app notification is not the quote.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
