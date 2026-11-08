/**
 * Guides for searches that happen before someone books a repair:
 * new equipment, repair-or-replace decisions, and what an error code
 * actually tells you. Facts only. Cost figures cite a published national
 * source; never invent our own prices. No product news we cannot stand behind.
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
    slug: "furnace-maintenance-cost",
    title: "Furnace Maintenance Cost: What to Budget Each Year",
    seoTitle: "Furnace Maintenance Cost in 2026: What to Budget | USA HVAC",
    description:
      "Furnace maintenance cost in 2026: filters, the annual service visit, maintenance plans, and occasional extras, plus what you can safely handle yourself.",
    date: "2026-11-07",
    dateLabel: "November 7, 2026",
    excerpt:
      "Keeping a furnace healthy is a yearly line item, not a one-time bill. Here is what goes into it, what each piece costs, and where you can save.",
    related: { label: "HVAC services", to: "/hvac-services" },
    sections: [
      {
        heading: "What furnace maintenance actually covers",
        paragraphs: [
          "Furnace maintenance is everything that keeps the system running safely between repairs. Some of it is a few dollars and five minutes, like a filter change. Some of it is a professional visit once a year. A few items come up only every several years.",
          "The figures below are 2026 national averages from Angi and HomeGuide. Chicago-area prices vary by company, by the age and type of furnace, and by what each visit includes.",
        ],
      },
      {
        heading: "Air filters: the cheapest maintenance there is",
        paragraphs: [
          "A furnace filter costs about $1 to $35, depending on size and rating, according to Angi. Most filters should be changed at least every 90 days, and more often in homes with pets, allergies, or ongoing renovation dust. Angi estimates that adds about $4 to $140 a year.",
          "This is the one job every homeowner can do. A clogged filter restricts airflow, makes the furnace run hotter and longer, and is behind a large share of no-heat and short-cycling calls. Write the filter size down so the next one is easy to buy.",
        ],
      },
      {
        heading: "The annual professional service",
        paragraphs: [
          "The core of furnace maintenance is one professional visit a year, ideally in early fall. HomeGuide puts a standard furnace inspection at about $70 to $130 and a full tune-up with cleaning at about $130 to $200. Angi lists a basic inspection at $80 to $100 and an inspection with cleaning and tune-up at $125 to $200.",
          "Cost also depends on the fuel type. HomeGuide lists typical tune-ups at $80 to $170 for gas furnaces, $100 to $200 for oil, and $70 to $130 for electric. Most Chicago-area homes heat with natural gas.",
        ],
        list: [
          "Inspection: the furnace is checked and tested, with a report on what needs attention.",
          "Tune-up: the inspection plus cleaning of burners and the flame sensor, and adjustments.",
          "Either way, ask for the checklist in writing so you can compare companies fairly.",
        ],
      },
      {
        heading: "Maintenance plans: when they pay off",
        paragraphs: [
          "Many companies offer an annual maintenance plan. HomeGuide puts these at about $150 to $500 a year. Plans usually bundle the yearly visit with perks such as priority scheduling, reminders, or discounts on repairs. Some cover both the furnace and the air conditioner.",
          "A plan makes sense when it covers a heating visit and a cooling visit you would schedule anyway, and the perks are spelled out. It makes less sense if you would only use one visit, or if the terms are vague about what is included.",
        ],
        list: [
          "How many visits a year are included, and for which equipment?",
          "Is priority scheduling real during a January cold snap?",
          "Are repair discounts written down, and do they apply to parts and labor?",
          "Can you cancel, and does the plan renew automatically?",
        ],
      },
      {
        heading: "Occasional costs every few years",
        paragraphs: [
          "Some maintenance does not come up every year, but it belongs in the long-term budget.",
        ],
        list: [
          "Duct cleaning: Angi suggests every three to five years for many homes, at about $275 to $500.",
          "Wear parts found during a tune-up, such as a flame sensor, ignitor, or capacitor. These are repairs, priced separately once the technician confirms the fault.",
          "Carbon monoxide detectors: test them monthly and replace them on the schedule printed on the unit.",
          "Thermostat replacement, if an old control is causing problems or you want better scheduling.",
        ],
      },
      {
        heading: "A sample yearly furnace budget",
        paragraphs: [
          "Using the national ranges above, a typical gas-furnace home might plan for something like this each year.",
        ],
        list: [
          "Filters: about $4 to $140",
          "Annual inspection or tune-up: about $70 to $200",
          "Or a maintenance plan instead of a single visit: about $150 to $500",
          "Set-aside for duct cleaning every few years: roughly $55 to $165 a year",
        ],
      },
      {
        heading: "How that compares to skipping maintenance",
        paragraphs: [
          "Angi puts the 2026 national average furnace repair at $318, with most homeowners paying $133 to $505. Bigger failures like blower motors, inducer motors, or heat exchangers can pass $1,000. HomeGuide lists after-hours emergency labor at about $140 to $210 an hour.",
          "A new furnace averages about $4,800 installed, according to Angi, and furnaces last around 20 years on average. Regular maintenance does not guarantee a furnace reaches that age, but neglect is one of the most common reasons one does not.",
        ],
      },
      {
        heading: "What you can do yourself, and what you should not",
        paragraphs: [
          "Homeowner maintenance is simple and saves money. Anything involving gas, combustion, or electrical parts belongs to a technician.",
        ],
        list: [
          "Do: change the filter on schedule and keep the area around the furnace clear.",
          "Do: keep supply and return vents open and unblocked by furniture or rugs.",
          "Do: on high-efficiency furnaces, keep outdoor intake and exhaust pipes clear of snow and ice.",
          "Do not: adjust the gas valve, clean the burners, or open sealed panels yourself.",
          "Do not: ignore a gas smell. Leave the house and call 911 or your gas utility from outside.",
        ],
      },
      {
        heading: "Furnace maintenance with USA Appliance & HVAC",
        paragraphs: [
          "We service furnaces across Chicago and the northwest suburbs, and we set up maintenance plans for homeowners who want the yearly visit handled without having to remember it.",
          "You hear the price of the maintenance visit before it is booked. If the technician finds a part that needs replacing, you get a written price and approve it before any work starts, so the invoice holds no surprises. Installed replacement parts carry a written 60-day parts warranty.",
        ],
      },
    ],
  },
  {
    slug: "is-a-furnace-tune-up-worth-it",
    title: "Is a Furnace Tune-Up Worth It? The Real Cost Breakdown",
    seoTitle: "Is a Furnace Tune-Up Worth It? The Real Cost Breakdown",
    description:
      "What a furnace tune-up includes, what it costs, and how that compares to a mid-January breakdown or an early replacement in a Chicago-area home.",
    date: "2026-11-07",
    dateLabel: "November 7, 2026",
    excerpt:
      "A tune-up costs about as much as a dinner out. A January no-heat call, or a furnace replaced years early, costs a lot more. Here is the math.",
    related: { label: "Furnace repair", to: "/hvac-services/heating-furnace-repair" },
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "For most Chicago-area homes, yes. A tune-up is a small, planned cost. The repairs it helps you avoid are larger, unplanned, and tend to arrive on the coldest night of the year, when every heating company is booked.",
          "It is not magic. A tune-up does not make a 25-year-old furnace new, and it will not prevent every failure. What it does is catch the worn parts that give warning signs before they quit, while the house is still warm and you have time to decide.",
        ],
      },
      {
        heading: "What a real furnace tune-up includes",
        paragraphs: [
          "A tune-up is more than a filter swap and a quick look. On a gas furnace, a complete visit should cover cleaning, testing, and safety checks.",
        ],
        list: [
          "Air filter checked and replaced if needed",
          "Burners inspected and cleaned, flame pattern checked",
          "Flame sensor cleaned, a common cause of furnaces that light and then shut off",
          "Hot surface ignitor inspected for cracks and wear",
          "Inducer motor and blower motor checked, blower wheel inspected for dust buildup",
          "Electrical connections tightened, capacitor and voltage tested",
          "Safety controls tested, including the limit switch and pressure switch",
          "Heat exchanger inspected and the flue and venting checked for blockage",
          "Condensate drain cleared on high-efficiency furnaces",
          "Temperature rise measured to confirm the furnace runs within its rated range",
          "Thermostat operation confirmed",
        ],
      },
      {
        heading: "What a tune-up costs",
        paragraphs: [
          "National 2026 cost guides put a furnace tune-up at roughly $70 to $200, with HomeGuide listing about $130 as the national average. Gas furnaces typically land in the middle of that range. Prices in the Chicago area vary by company and by what the visit actually includes.",
          "Compare tune-ups by the checklist, not just the price. A very cheap visit that skips the safety checks and ends in a sales pitch is not the same service as a full inspection.",
        ],
      },
      {
        heading: "What skipping it can cost",
        paragraphs: [
          "Angi puts the 2026 national average for a furnace repair at $318, with most homeowners paying between $133 and $505. That covers common parts like flame sensors, ignitors, and control boards.",
          "Bigger failures cost more. Blower motors, inducer motors, and heat exchangers can run from several hundred dollars to well over $1,000. After-hours or weekend service typically adds to the bill.",
          "A full furnace replacement averages about $4,800 nationally in 2026, with most homeowners paying between roughly $2,800 and $6,900, according to Angi. Furnaces last around 20 years on average. Replacing one at 12 years because neglect wore it out early is the most expensive outcome of all.",
        ],
      },
      {
        heading: "A Chicago scenario: the mid-January breakdown",
        paragraphs: [
          "Here is an example of a common pattern. A homeowner in a Northwest suburbs ranch skips the fall tune-up two years in a row. The furnace still heats, so nothing seems wrong. The flame sensor is coated, the filter is packed, and the inducer motor has started to hum louder on startup.",
          "In the middle of January, during a stretch of below-zero nights, the furnace lights, runs for a minute, and shuts off. It tries again and again, then locks out. The house starts dropping a few degrees an hour. Every heating company in the area is booked, and the earliest opening may be tomorrow.",
          "Now the homeowner is paying for a repair at the worst possible time, possibly running space heaters overnight and worrying about frozen pipes. If the inducer motor has failed instead of the flame sensor, the repair is larger. If the technician finds a cracked heat exchanger, the conversation becomes a full replacement in the middle of winter, with no time to compare options.",
          "A fall tune-up would likely have caught the dirty sensor and the clogged filter, and flagged the noisy inducer while there was time to plan. That is the real value: not one fixed part, but a decision made in October instead of a crisis in January.",
        ],
      },
      {
        heading: "Furnace not turning on? Check these first",
        paragraphs: [
          "A furnace not turning on is the most common winter call, and a few causes are simple. Before you book a visit, check these in order.",
        ],
        list: [
          "Thermostat: set to Heat, set a few degrees above room temperature, with fresh batteries if it uses them.",
          "Furnace switch: the light-style switch on or near the furnace is on. It is easy to bump off by mistake.",
          "Breaker: the furnace breaker in the panel has not tripped. Reset it once. If it trips again, leave it off and call.",
          "Filter: replace it if it is clogged. A packed filter can make the furnace shut itself off.",
          "Vent pipes: on high-efficiency furnaces, the outdoor intake and exhaust pipes are clear of snow and ice.",
          "Still nothing? The igniter, flame sensor, pressure switch, or control board is next, and those need a technician with a meter.",
        ],
      },
      {
        heading: "The cost comparison side by side",
        paragraphs: [
          "Using the national 2026 figures above, this is what a homeowner is weighing.",
        ],
        list: [
          "Annual tune-up: roughly $70 to $200, scheduled when you choose",
          "Typical furnace repair: about $318 on average, often more after hours",
          "Major part failure: several hundred to well over $1,000",
          "Early furnace replacement: roughly $2,800 to $6,900, often decided under pressure",
        ],
      },
      {
        heading: "Benefits beyond the repair bill",
        paragraphs: [
          "A clean furnace with good airflow uses less fuel to heat the same house. A tune-up is also a safety check. A cracked heat exchanger or a blocked flue can let carbon monoxide into the living space, so every home with a gas furnace should also have working carbon monoxide detectors.",
          "Many manufacturer warranties ask for proof of regular professional maintenance. Check yours. A skipped tune-up can become a denied warranty claim.",
          "If you ever smell gas, do not wait for a tune-up. Leave the house and call 911 or your gas utility from outside.",
        ],
      },
      {
        heading: "When a tune-up is not the answer",
        paragraphs: [
          "If the furnace is near or past 20 years old and already needs frequent repairs, a tune-up will not change its future. In that case, the useful visit is an honest repair-or-replace assessment, so you can plan a replacement in the off season instead of in an emergency.",
        ],
      },
      {
        heading: "Scheduling a tune-up with us",
        paragraphs: [
          "Early fall is the best time, before the first cold snap fills the schedule. A tune-up in late October or November still beats skipping it.",
          "At USA Appliance & HVAC, you hear the tune-up price before the visit is booked, so you know exactly what you are paying for. If the technician finds a problem, you get a written price for that repair and approve it before any work begins. No surprise charges on the invoice.",
        ],
      },
    ],
  },
  {
    slug: "ac-repair-schaumburg",
    title: "AC Repair Schaumburg: Costs, Tips & Top Services",
    seoTitle: "AC Repair Schaumburg: Costs, Tips & Top Services | USA HVAC",
    description:
      "AC repair in Schaumburg: common summer failures, what you can check first, what drives the repair cost, and the AC services we offer. Same-day visits available.",
    date: "2026-11-07",
    dateLabel: "November 7, 2026",
    excerpt:
      "Most summer AC calls in Schaumburg come down to a handful of faults. Some you can check in five minutes. Others need a technician and a meter.",
    related: { label: "Air conditioning repair", to: "/hvac-services/air-conditioning-repair" },
    sections: [
      {
        heading: "Why Schaumburg systems fail in the hottest weeks",
        paragraphs: [
          "Much of Schaumburg was built from the 1970s through the 1990s, around Woodfield and the office parks. Many of those houses, townhomes, and condos still run the original ductwork, and some still run an air conditioner that is well past its expected service life.",
          "A tired system can get through a mild June. A humid stretch in July or August is when it runs for hours without a break, and the weak part finally quits. That is why so many AC calls land in the same few weeks, and why the first opening of the day goes fast.",
        ],
      },
      {
        heading: "The failures we see most often",
        paragraphs: [
          "The symptom rarely names the part. Warm air from the vents can be any of these, and some of them look identical from inside the house.",
        ],
        list: [
          "A clogged air filter. It starves the indoor coil of airflow, cooling drops, and the coil can freeze solid.",
          "A failed capacitor. The outdoor fan or compressor hums but will not start. This is one of the most common summer repairs.",
          "A worn contactor. The thermostat calls for cooling and the outdoor unit never turns on, or never shuts off.",
          "A dirty outdoor coil. Cottonwood fluff, grass clippings, and leaves block the fins, and the system cannot shed heat on a hot afternoon.",
          "A blocked condensate drain. Water backs up, a safety switch shuts the system down, or water shows up on the basement or closet floor.",
          "A refrigerant leak. Refrigerant is not used up. If the system is low, it is leaking, and the leak is the repair.",
          "Ductwork that never matched a later replacement unit. The house cools unevenly, and the upstairs or the far bedrooms stay warm.",
        ],
      },
      {
        heading: "What you can safely check first",
        paragraphs: [
          "These checks take a few minutes and solve a fair share of no-cooling calls. Stop at any step that needs tools or opens a panel.",
        ],
        list: [
          "Thermostat: set to Cool, set below the room temperature, and fresh batteries if it uses them.",
          "Breakers: check the panel for a tripped air conditioner or furnace breaker. Reset it once. If it trips again, leave it off and call.",
          "Air filter: if you cannot see light through it, replace it. A filter is often the whole problem.",
          "Outdoor unit: clear leaves, grass, and anything stacked against it. Keep a couple of feet open around the sides.",
          "Ice on the lines or the indoor coil: turn cooling off and run the fan only until it thaws. Running it frozen can damage the compressor.",
          "Water around the indoor unit: check whether the condensate line or pan is backed up, and keep water away from wiring.",
        ],
      },
      {
        heading: "What to leave to a technician",
        paragraphs: [
          "Some fixes look simple online and are not safe. A capacitor holds a charge after the power is off and can injure you. Refrigerant work requires EPA Section 608 certification, so a store-bought recharge kit is not a repair, and it can damage the system.",
        ],
        list: [
          "The breaker trips again after one reset.",
          "The outdoor unit hums, clicks, or buzzes but the fan does not spin.",
          "The coil keeps freezing after you replace the filter.",
          "You hear grinding or squealing, or smell burning.",
          "The system runs all day and the house still does not cool down.",
        ],
      },
      {
        heading: "What AC repair costs depend on",
        paragraphs: [
          "An honest AC repair price comes after the diagnosis, not before it. The same warm-air complaint can be a small electrical part or a sealed-system leak, and those are very different jobs. Anyone quoting a firm number over the phone is guessing.",
          "There is a diagnostic fee, and you are told the amount before a technician is dispatched. That fee is applied to the repair if you go ahead. After testing, you get a written price for the specific failed part before any work starts.",
        ],
        list: [
          "The failed part. A capacitor, contactor, or drain clearing is a smaller job than a coil, a compressor, or a leak repair.",
          "Refrigerant. A leak has to be found and fixed, then the system is charged with the refrigerant named on its data plate.",
          "Part availability. Common parts ride on the van. Some brand-specific parts have to be ordered, which adds a return visit.",
          "Age and condition. On an old system with a major failure, the repair can cost more than the equipment has left. We tell you that before you approve anything.",
        ],
      },
      {
        heading: "Top AC services we offer in Schaumburg",
        paragraphs: [
          "Cooling work is handled by the same crew that handles furnaces, so one visit can cover both sides of the system.",
        ],
        list: [
          "Central air conditioner diagnosis and repair",
          "Heat pump repair in cooling mode",
          "Ductless mini-split repair and installation",
          "Refrigerant leak diagnosis and repair by EPA Section 608 certified technicians",
          "Thermostat replacement when the control is part of the fault",
          "New AC and heat pump installation when replacement makes more sense",
          "Seasonal maintenance plans to catch weak parts before the first heat wave",
        ],
      },
      {
        heading: "How a Schaumburg AC visit works with us",
        paragraphs: [
          "USA Appliance & HVAC covers Schaumburg, including ZIP codes 60173, 60193, and 60194, from our office at 1600 Golf Rd in Rolling Meadows, right next door. Same-day visits are usually available when you call early and a slot is still open.",
          "The technician tests the outdoor unit, the indoor coil, airflow, and the electrical parts before recommending anything. You get a written price and an honest repair-or-replace answer before work starts. If the part is on the van, the repair can finish on the same visit. Installed replacement parts carry a written 60-day parts warranty.",
          "If a repair no longer makes sense for the age of the system, we say so. A newer air conditioner may use a different refrigerant than your current one, but that alone is not a reason to replace a system that still works.",
        ],
      },
    ],
  },
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
