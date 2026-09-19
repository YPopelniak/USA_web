import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  AlertTriangle,
  CalendarCheck,
  CheckCircle2,
  CircleCheck,
  Droplets,
  Flame,
  Loader2,
  Lock,
  Monitor,
  Power,
  RefreshCw,
  RotateCcw,
  Thermometer,
  Volume2,
  Waves,
  Wind,
  WashingMachine,
} from "lucide-react";
import washerImage from "@/assets/photos/service-washer-dryer-repair.webp";
import { BookButton } from "@/components/BookButton";
import { CallButton } from "@/components/CallButton";
import { Eyebrow } from "@/components/Eyebrow";
import { Faq } from "@/sections/Faq";
import { FormConsent } from "@/components/FormConsent";
import { company } from "@/content";
import { sendToFormspree } from "@/lib/forms";
import { useSeo } from "@/lib/seo";
import {
  breadcrumbSchema,
  washerDryerRepairServiceSchema,
} from "@/lib/schema";

const path = "/appliance-repair/washer-dryer-repair";

const washerSymptoms = [
  {
    title: "Washer will not drain",
    body: "Standing water can involve a pump, drain hose, filter or control issue. Testing identifies which one.",
    Icon: Waves,
  },
  {
    title: "Washer will not spin",
    body: "A lid lock, belt, motor, bearing or unbalanced load can stop the spin. We check those before replacing parts.",
    Icon: RotateCcw,
  },
  {
    title: "Washer will not fill with water",
    body: "Inlet valves, supply hoses, pressure switches or a control fault can keep the tub empty.",
    Icon: Droplets,
  },
  {
    title: "Washer is leaking",
    body: "Leaks may come from hoses, the door boot, a pump, a dispenser or a tub seal. We find the source first.",
    Icon: Droplets,
  },
  {
    title: "Washer shakes or moves during the cycle",
    body: "Shock absorbers, suspension rods, leveling or a damaged drum bearing can cause vibration.",
    Icon: AlertTriangle,
  },
  {
    title: "Banging, grinding or squealing",
    body: "Unusual noise can point to bearings, a belt, a pump or a foreign object. The sound alone is not a diagnosis.",
    Icon: Volume2,
  },
  {
    title: "Washer will not start",
    body: "We test power, door or lid locks, start switches and the control board before recommending a part.",
    Icon: Power,
  },
  {
    title: "Washer stops mid-cycle",
    body: "A drain fault, lock, sensor or control issue can interrupt the cycle. Testing narrows the cause.",
    Icon: RefreshCw,
  },
  {
    title: "Door or lid will not lock",
    body: "A failed lock, strike, wiring or control can keep the cycle from starting safely.",
    Icon: Lock,
  },
  {
    title: "Washer door will not open",
    body: "A lock, drain delay or control fault can hold the door. We diagnose that before forcing the latch.",
    Icon: Lock,
  },
  {
    title: "Washer displays an error code",
    body: "Codes point to a system, not always a single part. We confirm the actual fault with testing.",
    Icon: Monitor,
  },
  {
    title: "Clothes remain soaking wet",
    body: "Incomplete spinning or draining can leave a load wet. The pump, lock, motor or control may be involved.",
    Icon: Waves,
  },
  {
    title: "Washer overfills",
    body: "A stuck inlet valve, pressure switch or control can let too much water into the tub.",
    Icon: Droplets,
  },
  {
    title: "Washer has an unusual odor",
    body: "Residue, a drain issue or a failed seal can cause odor. We inspect the path water actually takes.",
    Icon: Wind,
  },
] as const;

const dryerSymptoms = [
  {
    title: "Dryer is not heating",
    body: "Heating elements, thermal fuses, igniters, thermostats or airflow restriction can stop heat.",
    Icon: Thermometer,
  },
  {
    title: "Dryer will not start",
    body: "Door switches, thermal fuses, motors and controls are checked before a board is replaced.",
    Icon: Power,
  },
  {
    title: "Dryer drum is not turning",
    body: "A belt, idler pulley, roller or motor can keep the drum from tumbling.",
    Icon: RotateCcw,
  },
  {
    title: "Dryer takes too long to dry",
    body: "Restricted airflow, a weak heater, a blower or a moisture sensor can stretch the cycle.",
    Icon: Wind,
  },
  {
    title: "Clothes remain damp",
    body: "Heat, airflow and sensor problems can leave a load damp after a full cycle.",
    Icon: Droplets,
  },
  {
    title: "Dryer stops during the cycle",
    body: "Overheating, a thermal fuse, a motor or a control fault can interrupt the run.",
    Icon: RefreshCw,
  },
  {
    title: "Dryer is overheating",
    body: "Stop using an overheating dryer. Restricted airflow, a thermostat or a blower issue may be involved.",
    Icon: Flame,
  },
  {
    title: "Dryer has a burning smell",
    body: "Turn the dryer off if it smells like burning. We inspect heat, lint and mechanical sources on site.",
    Icon: Flame,
  },
  {
    title: "Squeaking, thumping or grinding",
    body: "Rollers, belts, idlers or the blower can make noise. We identify the moving part that failed.",
    Icon: Volume2,
  },
  {
    title: "Dryer displays an error code",
    body: "Codes help us start in the right system. Testing still confirms which component failed.",
    Icon: Monitor,
  },
  {
    title: "Dryer will not shut off",
    body: "A moisture sensor, thermostat or control can keep the dryer running past the cycle.",
    Icon: Power,
  },
  {
    title: "Clothes come out excessively hot",
    body: "Airflow, temperature sensors or a heater that stays on can overheat the load.",
    Icon: Thermometer,
  },
  {
    title: "Gas dryer is not igniting",
    body: "Igniters, gas-valve coils and safety circuits are tested as part of gas dryer repair.",
    Icon: Flame,
  },
  {
    title: "Dryer has weak airflow",
    body: "A blower, lint restriction or exhaust path problem can reduce airflow and drying performance.",
    Icon: Wind,
  },
] as const;

const washerParts = [
  "Drain pumps",
  "Water inlet valves",
  "Door and lid locks",
  "Belts and drive systems",
  "Motors",
  "Drum bearings",
  "Shock absorbers and suspension rods",
  "Door boots, seals and hoses",
  "Pressure switches",
  "Control boards",
  "Detergent dispensers",
  "Wiring and sensors",
];

const dryerParts = [
  "Thermal fuses",
  "Heating elements",
  "Gas igniters and gas-valve coils",
  "Thermostats and temperature sensors",
  "Drive belts",
  "Drum rollers",
  "Idler pulleys",
  "Motors",
  "Blower wheels",
  "Door switches",
  "Moisture sensors",
  "Control boards",
];

const equipmentTypes = [
  "Front-load washing machines",
  "Top-load washing machines",
  "High-efficiency washers",
  "Stackable washer and dryer units",
  "Laundry centers",
  "Compact washers and dryers",
  "Gas dryers",
  "Electric dryers",
  "Ventless dryers",
  "Combination washer-dryer units",
];

const brands = [
  "Samsung",
  "LG",
  "Whirlpool",
  "Maytag",
  "GE",
  "Electrolux",
  "Frigidaire",
  "KitchenAid",
  "Bosch",
  "Speed Queen",
  "Amana",
  "Kenmore",
  "Miele",
];

const processSteps = [
  {
    n: "01",
    title: "Book or Call",
    body: `Choose an available appointment online or call ${company.phone}.`,
  },
  {
    n: "02",
    title: "Diagnosis",
    body: "The technician tests the appliance and identifies the underlying fault.",
  },
  {
    n: "03",
    title: "Review Your Options",
    body: "We explain the problem, recommended repair and price before work begins.",
  },
  {
    n: "04",
    title: "Repair and Testing",
    body: "After approval, we complete the repair and test the appliance through the applicable functions.",
  },
];

const reasons = [
  "Seven years working with appliance and HVAC equipment",
  "Licensed and insured",
  "Diagnosis before quote",
  "Honest repair-or-replace recommendations",
  "Same-day appointments when available",
  "Residential and commercial technical experience",
  "Online booking",
  "60-day parts warranty",
  "Respectful work inside the customer's home",
  "One company for appliances and HVAC",
];

const locations = [
  { name: "Chicago" },
  { name: "Downtown Chicago" },
  { name: "River North" },
  { name: "Gold Coast" },
  { name: "Streeterville" },
  { name: "West Loop" },
  { name: "The Loop" },
  { name: "Lincoln Park" },
  { name: "Lakeview" },
  { name: "Wicker Park" },
  { name: "Logan Square" },
  { name: "Schaumburg", to: "/service-areas/schaumburg-il" },
  { name: "Rolling Meadows", to: "/service-areas/rolling-meadows-il" },
  { name: "Arlington Heights", to: "/service-areas/arlington-heights-il" },
  { name: "Palatine", to: "/service-areas/palatine-il" },
  { name: "Mount Prospect", to: "/service-areas/mount-prospect-il" },
  { name: "Hoffman Estates", to: "/service-areas/hoffman-estates-il" },
  { name: "Elk Grove Village", to: "/service-areas/elk-grove-village-il" },
  { name: "Norridge" },
  { name: "Winnetka" },
  { name: "Wheaton" },
];

const laundryFaqs = [
  {
    q: "How soon can you repair my washer or dryer?",
    a: "Same-day washer repair and same-day dryer repair may be available when you call early and a slot is still open. Otherwise we confirm the first available appointment when you book.",
  },
  {
    q: "Why is my washer not draining?",
    a: "A washer not draining can involve a pump, clogged drain path, hose, filter or control. Testing is needed before a part is replaced.",
  },
  {
    q: "Why is my washer not spinning?",
    a: "A washer not spinning may be a lock, belt, motor, bearing or unbalanced-load condition. We identify the actual fault on site.",
  },
  {
    q: "Is it safe to use a leaking washing machine?",
    a: "Stop using a washing machine that is leaking. Water on the floor can damage finishes and reach electrical parts. Schedule a diagnosis instead of running another cycle.",
  },
  {
    q: "Why is my dryer running but not heating?",
    a: "A dryer not heating can be a thermal fuse, heating element, igniter, thermostat or restricted airflow. Gas and electric dryers fail in different ways, so we test the heat path that belongs to your machine.",
  },
  {
    q: "Why does my dryer take more than one cycle?",
    a: "A dryer taking too long to dry is often weak heat or restricted airflow. Continuing to run an overheating dryer may create a fire risk. We evaluate whether airflow is contributing to the problem.",
  },
  {
    q: "Do you repair gas and electric dryers?",
    a: "Yes. Gas dryer repair and electric dryer repair are both part of the work, including igniters, gas-valve coils, heating elements and related safety components.",
  },
  {
    q: "Do you repair stackable washer and dryer units?",
    a: "Yes. Stackable washer dryer repair and laundry-center service are available, subject to brand, model and how the pair is installed.",
  },
  {
    q: "How much does washer or dryer repair cost?",
    a: "Cost depends on the appliance, the failed component, brand, model, parts and labor. After diagnosis you receive the repair price before deciding whether to proceed. There is no universal price for every job.",
  },
  {
    q: "Should I repair or replace my laundry appliance?",
    a: "Age, repair cost, condition, previous repairs, parts availability and replacement cost all matter. A matched or stacked set can also change the decision. We give you the diagnosis and the price so you can compare both options.",
  },
  {
    q: "Which brands do you service?",
    a: "Washer repair and dryer repair cover many major lines, including Samsung, LG, Whirlpool, Maytag, GE, Electrolux, Frigidaire, KitchenAid, Bosch, Speed Queen, Amana, Kenmore and Miele. Provide the model number so support can be confirmed.",
  },
  {
    q: "What information should I provide when booking?",
    a: "Tell us whether the problem is the washer, dryer or both, plus brand, model number, symptoms and any error code. That helps washer repair near me and dryer repair near me requests get the right parts loaded.",
  },
  {
    q: "Is the repair covered by a warranty?",
    a: "Installed replacement parts are covered by a 60-day parts warranty. The written terms are published on our Warranty page. Your technician will also explain the coverage that applies to the approved repair.",
  },
] as const;

export default function WasherDryerRepair() {
  const seoSchema = [
    washerDryerRepairServiceSchema(),
    breadcrumbSchema([
      { name: "Appliance Repair", path: "/appliance-repair" },
      { name: "Washer & Dryer Repair", path },
    ]),
  ];

  useSeo({
    title: "Washer & Dryer Repair Chicago | USA Appliance & HVAC",
    description:
      "Same-day washer and dryer repair in Chicago and surrounding suburbs. We fix draining, spinning, leaking and heating problems. Call (224) 360-1633.",
    ogTitle: "Washer & Dryer Repair in Chicago and Surrounding Suburbs",
    ogDescription:
      "Washer not draining or dryer not heating? Schedule professional laundry-appliance repair with USA Appliance & HVAC.",
    path,
    schema: seoSchema,
  });

  return (
    <>
      <section className="overflow-hidden border-b border-black/[0.07] bg-surface">
        <div className="container-page grid gap-10 py-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-14 lg:py-16">
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[13px] text-ink-muted">
                <li>
                  <Link to="/" className="hover:text-brand-600">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/appliance-repair" className="hover:text-brand-600">
                    Appliance Repair
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ink">Washer &amp; Dryer Repair</li>
              </ol>
            </nav>

            <div className="mt-8">
              <Eyebrow>Washer &amp; dryer service</Eyebrow>
            </div>
            <h1 className="mt-5 max-w-[17ch] text-[38px] leading-[1.04] sm:text-[50px] lg:text-[56px]">
              Washer &amp; Dryer Repair in Chicago and Surrounding Suburbs
            </h1>
            <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-ink-muted">
              Washer not draining or dryer not heating? We diagnose front-load, top-load and
              stackable laundry equipment and explain the repair cost before work begins.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row" data-cta-location="hero">
              <BookButton
                label="Book Washer & Dryer Repair"
                topic="Washer and dryer repair"
                size="lg"
              />
              <CallButton size="lg" />
            </div>

            <p className="mt-5 max-w-[58ch] border-l-2 border-brand-500 pl-4 text-[14px] leading-relaxed text-ink-muted">
              From water on the laundry-room floor to clothes still damp after a full cycle,
              we&apos;ll identify the actual cause before replacing parts.
            </p>
          </div>

          <div>
            <div className="relative min-h-[360px] overflow-hidden rounded-[var(--radius-panel)] bg-black lg:min-h-[520px]">
              <img
                src={washerImage}
                alt="Technician diagnosing a front-load washing machine in a Chicago-area home"
                width={1448}
                height={1086}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 bg-white p-4 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.65)] sm:inset-x-auto sm:bottom-5 sm:left-5 sm:w-[310px]">
                <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand-600">
                  Today&apos;s Availability
                </p>
                <p className="mt-2 text-[15px] font-semibold text-ink">
                  Same-day appointments may be available.
                </p>
                <p className="mt-1 text-[13px] text-ink-muted">
                  Call early for the first available opening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Service assurances" className="border-b border-black/[0.08] bg-white">
        <ul className="container-page grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Same-Day Appointments Available",
            "Licensed & Insured",
            "Diagnosis Before Quote",
            "60-Day Parts Warranty",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border-b border-black/[0.08] py-5 text-[14px] font-semibold last:border-b-0 sm:border-r sm:px-5 lg:border-b-0 first:pl-0 last:border-r-0"
            >
              <CircleCheck className="size-5 shrink-0 text-brand-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page py-10 lg:py-12">
        <div className="flex gap-4 border border-black/[0.08] bg-white p-5 sm:p-6">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
          <div>
            <h2 className="text-[18px] font-semibold">
              Stop the Cycle if You Notice Water, Smoke or a Burning Smell
            </h2>
            <p className="mt-2 max-w-[70ch] text-[15px] leading-relaxed text-ink-muted">
              Stop using a washer that is actively leaking and a dryer that smells like burning
              or is overheating. If it is safe to do so, turn the appliance off and schedule an
              inspection. Gas odors require immediate attention outside the normal appliance-repair
              process.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 lg:pb-24">
        <SectionHeading
          title="Common Washing Machine Problems We Repair"
          body="One symptom can have several causes. Front-load washer repair and top-load washer repair both start with testing, not a guessed part. Washing machine repair in Chicago follows the same diagnosis-first process."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {washerSymptoms.map(({ title, body, Icon }) => (
            <article key={title} className="border border-black/[0.08] bg-white p-5">
              <span className="inline-flex size-10 items-center justify-center bg-brand-50 text-brand-600">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[18px] font-semibold">{title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-5 bg-surface p-6 sm:flex-row sm:items-center">
          <p className="max-w-3xl text-[15px] leading-relaxed text-ink-muted">
            Tell us the brand, model number and what happens during the cycle. A technician will
            test the washer and identify the underlying fault.
          </p>
          <BookButton label="Book Washer Repair" topic="Washer repair" />
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            title="Common Dryer Problems We Repair"
            body="Dryer repair near me requests usually start with heat, tumbling or airflow. We diagnose the actual cause before replacing parts."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dryerSymptoms.map(({ title, body, Icon }) => (
              <article key={title} className="border border-black/[0.08] bg-white p-5">
                <span className="inline-flex size-10 items-center justify-center bg-brand-50 text-brand-600">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[18px] font-semibold">{title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-[70ch] text-[15px] leading-relaxed text-ink-muted">
            Long drying times and overheating can sometimes be related to restricted airflow.
            Continuing to run an overheating dryer may create a fire risk. The technician will
            evaluate whether restricted airflow may be contributing to the problem.
          </p>
          <BookButton className="mt-6" label="Book Dryer Repair" topic="Dryer repair" />
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          title="Washer and Dryer Parts We Test and Repair"
          body="Washer and dryer repair in Chicago includes the components below. Common parts may be available during the first visit, while model-specific parts may need to be ordered. We do not promise that every repair will finish on the first visit."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-[20px] font-semibold">Washer components</h3>
            <ul className="mt-4">
              {washerParts.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-black/[0.08] py-3.5 text-[15px]"
                >
                  <CircleCheck className="size-[18px] shrink-0 text-brand-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold">Dryer components</h3>
            <ul className="mt-4">
              {dryerParts.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-black/[0.08] py-3.5 text-[15px]"
                >
                  <CircleCheck className="size-[18px] shrink-0 text-brand-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              title="Laundry Equipment We Service"
              body="We service common residential laundry configurations, including front-load, top-load, stacked and compact units."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {equipmentTypes.map((item) => (
                <li
                  key={item}
                  className="flex min-h-14 items-center gap-3 bg-white px-4 text-[14px] font-medium"
                >
                  <WashingMachine className="size-[18px] shrink-0 text-brand-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] leading-relaxed text-ink-muted">
              Brand, model and installation configuration can affect service availability. Provide
              the model number when booking so we can confirm support.
            </p>
          </div>

          <div>
            <SectionHeading
              title="Major Washer and Dryer Brands We Service"
              body="Model support and parts availability may vary. Sending the model number when booking helps us prepare for the appointment."
            />
            <ul className="mt-8 grid grid-cols-2 border-l border-t border-black/[0.08] sm:grid-cols-3">
              {brands.map((brand) => (
                <li
                  key={brand}
                  className="flex min-h-14 items-center justify-center border-b border-r border-black/[0.08] bg-white px-3 text-center text-[14px] font-semibold"
                >
                  {brand}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] leading-relaxed text-ink-muted">
              We are not claiming factory authorization. If a brand or model is outside what we
              can support, we say so before the visit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <h2 className="type-title text-[34px] sm:text-[42px]">What Happens After You Book?</h2>
            <p className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-white/60">
              Many common repairs may be completed during the first visit, depending on the problem
              and parts availability. Model-specific components can require a return appointment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton label="Book Service" topic="Washer and dryer repair" variant="light" />
              <CallButton variant="quiet" />
            </div>
          </div>
          <ol>
            {processSteps.map((step) => (
              <li
                key={step.n}
                className="grid grid-cols-[48px_1fr] gap-4 border-t border-white/15 py-6 last:border-b"
              >
                <span className="text-[14px] font-bold tabular-nums text-brand-400">{step.n}</span>
                <div>
                  <h3 className="text-[20px] font-semibold">{step.title}</h3>
                  <p className="mt-2 max-w-[58ch] text-[14px] leading-relaxed text-white/60">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              title="Should You Repair or Replace Your Washer or Dryer?"
              body="A useful recommendation considers appliance age, repair cost, overall condition, previous repair history, parts availability, water or energy efficiency, replacement and installation cost, and whether the machines are a matched or stacked set."
            />
            <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-ink-muted">
              A single failed pump, heating component or door lock may be a practical repair.
              Multiple major failures on an older machine may make replacement the better option.
              We provide the diagnosis and repair price so you can compare both choices.
            </p>
            <BookButton
              className="mt-7"
              label="Get an Honest Diagnosis"
              topic="Washer and dryer diagnosis"
            />
          </div>

          <div className="bg-surface p-7 sm:p-9">
            <h2 className="type-title text-[30px] sm:text-[36px]">
              Laundry Appliance Repair Without Guesswork
            </h2>
            <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-2.5 text-[14px] leading-relaxed">
                  <CircleCheck className="mt-0.5 size-[18px] shrink-0 text-brand-500" aria-hidden="true" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-black/[0.08] bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            title="Washer and Dryer Repair Across Chicago and Surrounding Suburbs"
            body="We schedule residential washer and dryer service across Chicago and selected northern, northwest and western suburbs. Check the service-area page or call if your ZIP code is near the edge of the route."
          />
          <ul className="mt-9 grid grid-cols-2 gap-px bg-black/[0.08] sm:grid-cols-3 lg:grid-cols-4">
            {locations.map((location) => (
              <li key={location.name} className="bg-white">
                {location.to ? (
                  <Link
                    to={location.to}
                    className="flex min-h-14 items-center px-4 text-[14px] font-semibold transition-colors hover:bg-brand-50 hover:text-brand-600"
                  >
                    {location.name}
                  </Link>
                ) : (
                  <span className="flex min-h-14 items-center px-4 text-[14px] font-semibold">
                    {location.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[14px] font-semibold text-brand-600">
            <Link to="/service-areas" className="hover:underline">
              View all service areas
            </Link>
            <Link to="/appliance-repair" className="hover:underline">
              Explore appliance repair
            </Link>
            <Link to="/appliance-repair/refrigerator-repair" className="hover:underline">
              Refrigerator &amp; freezer repair
            </Link>
            <Link to="/installation" className="hover:underline">
              Appliance installation
            </Link>
            <Link to="/book" className="hover:underline">
              Request service
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <Faq
        title="Washer and Dryer Repair Questions"
        body="Straight answers about draining, spinning, heating, stacked units, pricing and warranty coverage."
        items={laundryFaqs}
      />

      <section className="bg-ink py-16 text-white lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div>
            <Eyebrow tone="light">Request service</Eyebrow>
            <h2 className="type-title mt-5 text-[36px] leading-[1.05] sm:text-[46px]">
              Get Laundry Day Moving Again
            </h2>
            <p className="mt-6 max-w-[48ch] text-[16px] leading-relaxed text-white/65">
              Tell us whether the problem is with the washer, dryer or both. Include the brand,
              model number and symptoms so we can confirm the first available appointment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookButton
                label="Book Washer & Dryer Repair"
                topic="Washer and dryer repair"
                variant="light"
                size="lg"
              />
              <CallButton variant="quiet" size="lg" />
            </div>
          </div>
          <RepairRequestForm />
        </div>
      </section>
    </>
  );
}

function SectionHeading({ title, body }: { title: string; body?: string }) {
  return (
    <div>
      <h2 className="type-title max-w-[22ch] text-[32px] leading-[1.08] sm:text-[42px]">{title}</h2>
      {body && <p className="mt-5 max-w-[66ch] text-[16px] leading-relaxed text-ink-muted">{body}</p>}
    </div>
  );
}

type RequestValues = {
  name: string;
  phone: string;
  zip: string;
  appliance: string;
  brand: string;
  model: string;
  problem: string;
  preferred: string;
};

const emptyRequest: RequestValues = {
  name: "",
  phone: "",
  zip: "",
  appliance: "",
  brand: "",
  model: "",
  problem: "",
  preferred: "",
};

function RepairRequestForm() {
  const [values, setValues] = useState(emptyRequest);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const set = (field: keyof RequestValues, value: string) =>
    setValues((current) => ({ ...current, [field]: value }));

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (
      !values.name.trim() ||
      values.phone.replace(/\D/g, "").length < 10 ||
      !values.zip.trim() ||
      !values.appliance.trim() ||
      !values.brand.trim() ||
      !values.problem.trim() ||
      !values.preferred.trim()
    ) {
      setError("Please complete each required field and provide a valid phone number.");
      return;
    }

    setStatus("submitting");
    setError("");
    const result = await sendToFormspree(
      {
        form: "Washer and dryer repair request",
        name: values.name,
        phone: values.phone,
        zip: values.zip,
        appliance: values.appliance,
        brand: values.brand,
        modelNumber: values.model || "(not provided)",
        problem: values.problem,
        preferredAppointment: values.preferred,
      },
      `Washer and dryer repair request — ${values.appliance} — ${values.name}`,
    );

    if (result.ok) {
      setStatus("success");
      setValues(emptyRequest);
    } else {
      setStatus("error");
      setError(result.error);
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[360px] flex-col items-center justify-center bg-white p-8 text-center text-ink">
        <CheckCircle2 className="size-12 text-brand-500" aria-hidden="true" />
        <h3 className="mt-5 text-[24px] font-semibold">Request received</h3>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-muted">
          We&apos;ll review the details and confirm the first available appointment. For leaks,
          burning smells or overheating, call {company.phone}.
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-[var(--radius-action)] border border-black/15 bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus:border-brand-500";

  return (
    <form onSubmit={submit} noValidate className="bg-white p-5 text-ink sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Name" id="laundry-name">
          <input
            id="laundry-name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            className={fieldClass}
            required
          />
        </FormField>
        <FormField label="Phone" id="laundry-phone">
          <input
            id="laundry-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={fieldClass}
            required
          />
        </FormField>
        <FormField label="ZIP code" id="laundry-zip">
          <input
            id="laundry-zip"
            inputMode="numeric"
            value={values.zip}
            onChange={(e) => set("zip", e.target.value)}
            className={fieldClass}
            required
          />
        </FormField>
        <FormField label="Appliance" id="laundry-appliance">
          <select
            id="laundry-appliance"
            value={values.appliance}
            onChange={(e) => set("appliance", e.target.value)}
            className={fieldClass}
            required
          >
            <option value="">Select</option>
            <option value="Washer">Washer</option>
            <option value="Dryer">Dryer</option>
            <option value="Both">Both</option>
          </select>
        </FormField>
        <FormField label="Brand" id="laundry-brand">
          <input
            id="laundry-brand"
            value={values.brand}
            onChange={(e) => set("brand", e.target.value)}
            className={fieldClass}
            required
          />
        </FormField>
        <FormField label="Model number (optional)" id="laundry-model">
          <input
            id="laundry-model"
            value={values.model}
            onChange={(e) => set("model", e.target.value)}
            className={fieldClass}
          />
        </FormField>
        <FormField label="Preferred appointment time" id="laundry-time">
          <input
            id="laundry-time"
            value={values.preferred}
            onChange={(e) => set("preferred", e.target.value)}
            placeholder="Weekday morning"
            className={fieldClass}
            required
          />
        </FormField>
      </div>
      <div className="mt-4">
        <FormField label="Problem description" id="laundry-problem">
          <textarea
            id="laundry-problem"
            rows={4}
            value={values.problem}
            onChange={(e) => set("problem", e.target.value)}
            placeholder="What is the washer or dryer doing?"
            className={`${fieldClass} resize-y`}
            required
          />
        </FormField>
      </div>
      {error && (
        <p role="alert" className="mt-4 flex items-start gap-2 bg-red-50 p-3 text-[13px] text-red-700">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex h-13 w-full items-center justify-center gap-2 rounded-[var(--radius-action)] bg-brand-500 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-65"
      >
        {status === "submitting" ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <CalendarCheck className="size-4" aria-hidden="true" />
        )}
        {status === "submitting" ? "Sending…" : "Request Laundry Service"}
      </button>
      <FormConsent
        className="mt-3"
        note="We use this information only to respond about your service request."
        action="submitting this request"
      />
    </form>
  );
}

function FormField({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={id} className="block text-[12px] font-bold uppercase tracking-[0.08em] text-ink-muted">
      {label}
      {children}
    </label>
  );
}
