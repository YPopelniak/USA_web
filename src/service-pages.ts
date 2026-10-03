/**
 * Independent pages for services that are not already a long-form landing
 * page (refrigerator, washer, dishwasher, oven). Copy stays factual: no
 * prices, no 24/7 claim, no factory authorization.
 */

export type ServicePageCopy = {
  groupSlug: string;
  slug: string;
  /** On-page H1. */
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  paragraphs: string[];
  includes: string[];
  /** Safety or scope note shown above the list, when one is needed. */
  note?: string;
};

export const servicePages: ServicePageCopy[] = [
  {
    groupSlug: "appliance-repair",
    slug: "appliance-diagnosis-repair",
    title: "Appliance diagnosis and repair in Chicago",
    seoTitle: "Appliance Diagnosis in Chicago | USA Appliance & HVAC",
    description:
      "A technician finds the fault on a home appliance and explains the repair before work starts. Chicago and surrounding suburbs.",
    eyebrow: "Appliance repair",
    paragraphs: [
      "A warm refrigerator, a washer that will not spin, and an oven that will not heat can each have several causes. The visit starts by finding which one it is, not by ordering a part from the symptom.",
      "You get the repair explained in plain terms, and the cost, before work is approved. Installed replacement parts carry a written 60-day parts warranty.",
    ],
    includes: [
      "Refrigerators, freezers, and ice makers",
      "Washers, dryers, and dishwashers",
      "Ovens, stoves, ranges, and cooktops",
      "A repair-or-replace recommendation when the machine is not worth fixing",
    ],
  },
  {
    groupSlug: "appliance-repair",
    slug: "ice-maker-repair",
    title: "Ice maker repair in Chicago",
    seoTitle: "Ice Maker Repair in Chicago | USA Appliance & HVAC",
    description:
      "No ice, slow ice, jams, and water-line leaks on residential refrigerator ice makers. Diagnosed before parts are replaced.",
    eyebrow: "Appliance repair",
    paragraphs: [
      "An ice maker that stopped, slowed down, or started leaking is often a water valve, a freezer temperature problem, a jammed mechanism, or a clogged line. Those are different repairs.",
      "This page is for ice makers built into home refrigerators and stand-alone residential ice makers. The refrigerator itself is covered on the refrigerator repair page.",
    ],
    includes: [
      "No ice or hollow ice",
      "Slow production",
      "Jams and frozen fill tubes",
      "Leaks at the water line or valve",
    ],
  },
  {
    groupSlug: "appliance-repair",
    slug: "appliance-installation",
    title: "Appliance installation and hookups in Chicago",
    seoTitle: "Appliance Hookups in Chicago | USA Appliance & HVAC",
    description:
      "Home appliance installation and hookups: water lines, vents, drains, and leveling, tested before we leave. Chicago and nearby suburbs.",
    eyebrow: "Appliance repair",
    paragraphs: [
      "A new appliance still has to be connected correctly. A dryer vented into too much duct, a dishwasher drain with no air gap, or a refrigerator that is not level will show up as a service call later.",
      "We install equipment you already have and equipment supplied for a replacement. It is tested before we leave.",
    ],
    includes: [
      "Refrigerators and freezers",
      "Washers, dryers, and dishwashers",
      "Ranges, wall ovens, and cooktops",
      "Water, drain, gas, and vent connections the appliance requires",
    ],
    note: "If you smell gas during a hookup, leave the area and contact 911 or your gas utility. Do not use a gas appliance to heat the home.",
  },
  {
    groupSlug: "hvac-services",
    slug: "hvac-diagnosis-repair",
    title: "HVAC diagnosis and repair in Chicago",
    seoTitle: "HVAC Diagnosis in Chicago | USA Appliance & HVAC",
    description:
      "Heating and cooling diagnosis before parts are replaced. Furnaces, central air, and heat pumps across Chicago and surrounding suburbs.",
    eyebrow: "HVAC services",
    paragraphs: [
      "A system that is loud, short-cycling, or missing its set temperature is giving a symptom, not a diagnosis. The visit identifies the fault and the repair cost before work starts.",
      "Refrigerant work on air conditioners and heat pumps is done by EPA Section 608 certified technicians. The refrigerant used is the one named on the equipment, not a substitute.",
    ],
    includes: [
      "Furnaces and heating equipment",
      "Central air conditioners",
      "Heat pumps and ductless systems",
      "Thermostats, when the control is part of the fault",
    ],
  },
  {
    groupSlug: "hvac-services",
    slug: "air-conditioning-repair",
    title: "Air conditioning repair in Chicago",
    seoTitle: "Air Conditioning Repair in Chicago | USA Appliance & HVAC",
    description:
      "Central air and heat-pump cooling problems: weak airflow, short cycling, leaks, and failed compressors. Diagnosed before parts are replaced.",
    eyebrow: "HVAC services",
    paragraphs: [
      "Weak cooling is not automatically a refrigerant charge. It can be airflow, a capacitor, a contactor, a sensor, or a leak. The outdoor and indoor units are tested before a part is recommended.",
      "If the system is low on refrigerant, the leak is the repair. Refrigerant is handled by EPA Section 608 certified technicians.",
    ],
    includes: [
      "Central air conditioners",
      "Heat pumps in cooling mode",
      "Ductless mini-splits",
      "Thermostats and indoor airflow problems tied to the cooling complaint",
    ],
  },
  {
    groupSlug: "hvac-services",
    slug: "heating-furnace-repair",
    title: "Heating and furnace repair in Chicago",
    seoTitle: "Furnace Repair in Chicago | USA Appliance & HVAC",
    description:
      "No heat, ignition faults, blower problems, and safety checks on residential furnaces. Chicago and surrounding suburbs.",
    eyebrow: "HVAC services",
    paragraphs: [
      "A furnace that will not light, that lights and shuts off, or that runs with weak airflow needs the fault identified before parts are replaced. Igniters, flame sensors, limits, blowers, and controls fail in ways that look similar from the hallway.",
      "We also service heat pumps that are the home’s heat source. A repair quote names the failed part.",
    ],
    includes: [
      "No heat and intermittent heat",
      "Ignition and flame-sensing faults",
      "Blower and airflow problems",
      "Thermostat calls that do not start the furnace",
    ],
    note: "If you smell gas, leave the area and contact 911 or your gas utility. Do not try to light the furnace, and do not use a gas oven to heat the house.",
  },
  {
    groupSlug: "hvac-services",
    slug: "hvac-installation",
    title: "HVAC installation in Chicago",
    seoTitle: "HVAC Installation in Chicago | USA Appliance & HVAC",
    description:
      "Furnace, central air, heat pump, and ductless mini-split installation. Equipment is matched to the house and tested before we leave.",
    eyebrow: "HVAC services",
    paragraphs: [
      "A replacement has to fit the house: the heat load, the electrical service, the line set, and the space the equipment occupies. A nameplate photo and a walk-through answer that. A brochure does not.",
      "New air conditioners and heat pumps may use a different refrigerant than older R-410A systems. The new equipment is installed as specified. An older system is not converted into a newer-refrigerant system as part of a routine repair.",
    ],
    includes: [
      "Furnaces and heating replacements",
      "Central air condensers and coils",
      "Heat pumps, including cold-climate equipment",
      "Ductless mini-splits",
    ],
  },
  {
    groupSlug: "hvac-services",
    slug: "hvac-maintenance",
    title: "Preventive HVAC maintenance in Chicago",
    seoTitle: "HVAC Maintenance in Chicago | USA Appliance & HVAC",
    description:
      "Seasonal heating and cooling maintenance for homes and small commercial systems. Faults are reported before the season depends on the equipment.",
    eyebrow: "HVAC services",
    paragraphs: [
      "Maintenance is a check of the equipment you have, not a sales visit for a replacement. Filters, airflow, ignition, drains, and electrical connections are inspected, and anything that is already failing is explained before it is repaired.",
      "A maintenance visit does not include refrigerant added as a top-off. A low charge means a leak, and that is a separate repair.",
    ],
    includes: [
      "Furnaces before the heating season",
      "Air conditioners before the cooling season",
      "Heat pumps on either seasonal visit",
      "A written note of what was found",
    ],
  },
  {
    groupSlug: "installation",
    slug: "appliance-installation-hookups",
    title: "Appliance installation and hookups",
    seoTitle: "Appliance Installation in Chicago | USA Appliance & HVAC",
    description:
      "Installation of refrigerators, laundry, dishwashers, and cooking appliances, including the connections each one needs. Tested before we leave.",
    eyebrow: "Installation",
    paragraphs: [
      "Installation covers setting the appliance, making the connections it requires, and confirming it runs. That includes water, drain, vent, and electrical or gas connections the model is built for.",
      "We install customer-supplied equipment and replacement equipment. The appliance is leveled and tested before we leave.",
    ],
    includes: [
      "Refrigerators, freezers, and ice makers",
      "Washers and dryers, including venting",
      "Dishwashers and their drains",
      "Ranges, cooktops, and wall ovens",
    ],
    note: "If you smell gas, leave the area and contact 911 or your gas utility.",
  },
  {
    groupSlug: "installation",
    slug: "furnace-installation",
    title: "Furnace and heating installation in Chicago",
    seoTitle: "Furnace Installation in Chicago | USA Appliance & HVAC",
    description:
      "Furnace replacement sized to the house, connected, and tested. Chicago and surrounding suburbs.",
    eyebrow: "Installation",
    paragraphs: [
      "A furnace replacement is sized to the heat load of the house, not copied from the old nameplate by habit. Ducts, venting, and the electrical or gas connection have to match the new equipment.",
      "If a heat pump is part of the plan, we say whether the furnace stays as backup. A Chicago winter is part of that conversation.",
    ],
    includes: [
      "Gas furnace replacements",
      "Connections, venting, and thermostat setup",
      "A run test before we leave",
      "Heat-pump pairings when the furnace is the backup",
    ],
    note: "If you smell gas, leave the area and contact 911 or your gas utility.",
  },
  {
    groupSlug: "installation",
    slug: "ac-installation",
    title: "Air conditioning installation in Chicago",
    seoTitle: "AC Installation in Chicago | USA Appliance & HVAC",
    description:
      "Central air and ductless mini-split installation, including line-set work. Refrigerant is handled by EPA Section 608 certified technicians.",
    eyebrow: "Installation",
    paragraphs: [
      "A new condenser and coil, or a ductless system, has to match the house and the electrical service. Line-set length and the refrigerant the equipment calls for are part of the job, not an afterthought.",
      "Newer equipment may be charged with a refrigerant other than R-410A. It is installed to that specification. Refrigerant work is done by EPA Section 608 certified technicians.",
    ],
    includes: [
      "Central air conditioners",
      "Ductless mini-splits",
      "Heat pumps installed for cooling and heating",
      "A run test of cooling before we leave",
    ],
  },
  {
    groupSlug: "installation",
    slug: "commercial-equipment-installation",
    title: "Commercial equipment installation",
    seoTitle: "Commercial Equipment Installation | USA Appliance & HVAC",
    description:
      "Installation of commercial kitchen and refrigeration equipment for restaurants and managed property in Chicago.",
    eyebrow: "Installation",
    paragraphs: [
      "Commercial equipment has to land level, connected to the utilities it was specified for, and tested under a real cycle. A walk-in, a range line, or a dishmachine that is only set in place is not installed.",
      "This is separate from a residential hookup. Access, gas, water, drains, and electrical requirements are confirmed before the equipment is committed.",
    ],
    includes: [
      "Commercial refrigeration, including walk-ins and reach-ins",
      "Cooking equipment",
      "Dishmachines",
      "A test of the equipment before we leave",
    ],
  },
  {
    groupSlug: "commercial-services",
    slug: "commercial-appliance-repair",
    title: "Commercial appliance repair in Chicago",
    seoTitle: "Commercial Appliance Repair in Chicago | USA Appliance & HVAC",
    description:
      "Diagnosis and repair for commercial-grade kitchen and laundry equipment. Restaurants and managed property across Chicago.",
    eyebrow: "Commercial",
    paragraphs: [
      "Commercial equipment failure stops service. The visit identifies the fault and the repair before parts are swapped on a guess.",
      "Residential pages cover home appliances. This page is for commercial-grade equipment in restaurants, cafés, retail, and managed buildings.",
    ],
    includes: [
      "Cooking and holding equipment",
      "Dishmachines",
      "Commercial laundry, when it is on the property we are already serving",
      "A repair-or-replace answer when the unit is not worth keeping",
    ],
  },
  {
    groupSlug: "commercial-services",
    slug: "commercial-refrigeration",
    title: "Commercial refrigerator and freezer repair",
    seoTitle: "Commercial Refrigeration Repair | USA Appliance & HVAC",
    description:
      "Walk-ins, reach-ins, prep tables, and display cases. Refrigerant work is done by EPA Section 608 certified technicians.",
    eyebrow: "Commercial",
    paragraphs: [
      "A warm walk-in is a stock problem, not a comfort problem. Fans, defrost, doors, controls, and the sealed system are tested before a part is recommended.",
      "Refrigerant work is performed by EPA Section 608 certified technicians. A low charge is treated as a leak, not as a top-off.",
    ],
    includes: [
      "Walk-in coolers and freezers",
      "Reach-in refrigerators and freezers",
      "Prep tables and display cases",
      "Ice machines in a commercial kitchen",
    ],
  },
  {
    groupSlug: "commercial-services",
    slug: "commercial-kitchen-equipment",
    title: "Commercial kitchen equipment repair",
    seoTitle: "Commercial Kitchen Repair in Chicago | USA Appliance & HVAC",
    description:
      "Repair for commercial ranges, fryers, ovens, dishmachines, and holding equipment in Chicago restaurants.",
    eyebrow: "Commercial",
    paragraphs: [
      "A line that will not hold temperature, a fryer that will not light, or a dishmachine that will not drain is diagnosed on the equipment, not from a description over the phone.",
      "Gas equipment is left alone if there is a gas smell. The rest of the line can be discussed once the building is safe.",
    ],
    includes: [
      "Ranges, ovens, and griddles",
      "Fryers",
      "Dishmachines",
      "Holding and warming equipment",
    ],
    note: "If you smell gas, leave the area and contact 911 or your gas utility.",
  },
  {
    groupSlug: "commercial-services",
    slug: "commercial-maintenance",
    title: "Commercial preventive maintenance",
    seoTitle: "Commercial Maintenance in Chicago | USA Appliance & HVAC",
    description:
      "Scheduled maintenance for commercial refrigeration and kitchen equipment, so failures are found before a service rush.",
    eyebrow: "Commercial",
    paragraphs: [
      "A maintenance schedule checks the equipment that would stop the business if it failed: refrigeration temperatures, door gaskets, drains, burners, and the parts that usually fail first.",
      "What is already broken is reported as a repair, with the cost, before it is fixed. Maintenance is not a blanket approval to replace parts.",
    ],
    includes: [
      "Walk-in and reach-in refrigeration",
      "Cooking equipment on a set schedule",
      "A record of what was checked and what needs repair",
      "Visits arranged around the kitchen’s hours when that is possible",
    ],
  },
];

export function getServicePage(groupSlug: string, slug: string) {
  return servicePages.find((page) => page.groupSlug === groupSlug && page.slug === slug);
}

export function servicePagePath(page: Pick<ServicePageCopy, "groupSlug" | "slug">) {
  return `/${page.groupSlug}/${page.slug}`;
}
