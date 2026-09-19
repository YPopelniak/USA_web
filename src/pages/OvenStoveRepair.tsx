import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  AlertTriangle,
  CalendarCheck,
  CheckCircle2,
  CircleCheck,
  CookingPot,
  DoorOpen,
  Flame,
  Loader2,
  Lock,
  Monitor,
  Power,
  Thermometer,
  Volume2,
  Wind,
  Zap,
} from "lucide-react";
import ovenImage from "@/assets/photos/service-oven-stove-repair.webp";
import { BookButton } from "@/components/BookButton";
import { CallButton } from "@/components/CallButton";
import { Eyebrow } from "@/components/Eyebrow";
import { Faq } from "@/sections/Faq";
import { FormConsent } from "@/components/FormConsent";
import { sendToFormspree } from "@/lib/forms";
import { useSeo } from "@/lib/seo";
import { breadcrumbSchema, ovenStoveRepairServiceSchema } from "@/lib/schema";

const path = "/appliance-repair/oven-stove-repair";

const symptoms = [
  {
    title: "Oven is not heating",
    body: "An oven not heating can involve a bake element, igniter, sensor, control, or power issue. Testing identifies which one before a part is quoted.",
    Icon: Thermometer,
  },
  {
    title: "Oven will not turn on",
    body: "An oven that won’t turn on may be a door switch, control lock, display, wiring, or supply problem rather than a failed heating part.",
    Icon: Power,
  },
  {
    title: "Food cooks unevenly",
    body: "Uneven cooking can come from a weak element, a convection fan, a sensor, or a door that is not sealing. The same symptom can have different causes.",
    Icon: Wind,
  },
  {
    title: "Temperature does not match the setting",
    body: "Inaccurate oven temperature may be a sensor, thermostat, calibration, or control issue. We measure performance instead of guessing from the display.",
    Icon: Thermometer,
  },
  {
    title: "Oven takes too long to preheat",
    body: "Slow preheat can involve a weak bake or broil element, a failing igniter, restricted airflow, or a control that never reaches the set point.",
    Icon: CalendarCheck,
  },
  {
    title: "Oven overheats or will not turn off",
    body: "An oven that overheats or will not turn off should be left off. A stuck relay, failed sensor, or control fault can keep heat on after the cycle should end.",
    Icon: AlertTriangle,
  },
  {
    title: "Gas burner will not ignite",
    body: "A gas burner that won’t ignite may be an electrode, spark module, igniter, or gas-valve issue at the appliance. We do not service household gas lines.",
    Icon: Flame,
  },
  {
    title: "Burner keeps clicking",
    body: "A stove that keeps clicking can be a wet burner, a misaligned electrode, a spark module, or a switch that never stops calling for spark.",
    Icon: Volume2,
  },
  {
    title: "Electric burner does not heat",
    body: "An electric burner not working may be the surface element, infinite switch, wiring, or a related control. Diagnosis comes before replacement.",
    Icon: Zap,
  },
  {
    title: "Burner flame is weak or uneven",
    body: "A weak or yellow flame can involve a clogged burner, an electrode, or a combustion issue at the appliance. Stop using it if you smell gas.",
    Icon: Flame,
  },
  {
    title: "Oven door will not close",
    body: "A door that will not close may be hinges, a gasket, a warped door, or a rack out of position. Heat loss from a poor seal can look like a heating failure.",
    Icon: DoorOpen,
  },
  {
    title: "Door remains locked",
    body: "A door that stays locked after self-clean or a fault can be the latch, lock motor, or a control that never releases. Do not force the door.",
    Icon: Lock,
  },
  {
    title: "Broiler is not working",
    body: "A broiler that stays cold can be a broil element, igniter, sensor, or a control that never calls for broil. Bake can still work while broil does not.",
    Icon: Flame,
  },
  {
    title: "Convection fan is noisy or not turning",
    body: "A noisy convection oven fan, or one that does not turn, may be the motor, blade, or a control that never powers the fan.",
    Icon: Wind,
  },
  {
    title: "Control panel or display is not responding",
    body: "A blank range display or unresponsive panel can be a board, overlay, lock mode, or power-supply issue. We test those before quoting a board.",
    Icon: Monitor,
  },
  {
    title: "Appliance displays an error code",
    body: "An oven error code points to a system, not always a single part. A range technician confirms the actual fault with testing.",
    Icon: Monitor,
  },
  {
    title: "Self-clean cycle is not working",
    body: "A self-cleaning cycle that will not start or finish can involve the door lock, sensor, thermal protection, or control. Forcing the cycle is not a fix.",
    Icon: Lock,
  },
  {
    title: "Cooktop surface is cracked or damaged",
    body: "A cracked glass cooktop may be unsafe to keep using. Repair depends on the model and whether a matching surface is still available.",
    Icon: AlertTriangle,
  },
] as const;

const parts = [
  "Bake elements",
  "Broil elements",
  "Gas igniters",
  "Spark electrodes",
  "Spark modules",
  "Surface burners",
  "Radiant cooktop elements",
  "Burner switches",
  "Temperature sensors",
  "Thermostats",
  "Thermal fuses and protection devices",
  "Oven door hinges",
  "Door latches and switches",
  "Door gaskets",
  "Convection fans and motors",
  "Control boards",
  "Touch panels and displays",
  "Interior lights",
  "Wiring and electrical connections",
];

const safeChecks = [
  "Confirm the appliance has power.",
  "Check whether the breaker has tripped.",
  "Make sure the oven controls are not locked.",
  "Verify that delayed-start or Sabbath mode was not activated accidentally.",
  "Check whether the correct burner and setting were selected.",
  "Record any displayed error code.",
  "Note whether the problem affects one burner, the oven, or the entire appliance.",
  "Find the model number before the appointment when possible.",
];

const equipmentTypes = [
  "Freestanding ranges",
  "Slide-in ranges",
  "Gas ranges",
  "Electric ranges",
  "Dual-fuel ranges",
  "Single wall ovens",
  "Double wall ovens",
  "Gas cooktops",
  "Electric cooktops",
  "Induction cooktops",
  "Convection ovens",
  "Professional-style residential ranges",
];

const brands = [
  "Wolf",
  "Viking",
  "Thermador",
  "Bosch",
  "KitchenAid",
  "Samsung",
  "LG",
  "GE",
  "Café",
  "Monogram",
  "Whirlpool",
  "Maytag",
  "Frigidaire",
  "Electrolux",
  "JennAir",
  "Dacor",
  "Miele",
  "Kenmore",
];

const processSteps = [
  {
    n: "01",
    title: "Describe the problem",
    body: "Share the appliance type, brand, symptoms, any error code, and your preferred appointment time. Note whether the unit is gas, electric, or dual-fuel.",
  },
  {
    n: "02",
    title: "Technician diagnosis",
    body: "The technician inspects the affected oven, stove, range, or cooktop and identifies the likely cause instead of guessing from the symptom alone.",
  },
  {
    n: "03",
    title: "Review the quote",
    body: "We explain the findings and provide the repair price before approved work begins, including honest repair-or-replace guidance.",
  },
  {
    n: "04",
    title: "Repair and testing",
    body: "After approval, the authorized repair is completed and normal operation is tested when conditions allow. Model-specific parts may require a return visit.",
  },
];

const reasons = [
  "Seven years of appliance and HVAC experience",
  "Licensed and insured",
  "Diagnosis before quote",
  "Same-day appointments when available",
  "Online booking",
  "60-day parts warranty",
  "Experience with standard and premium residential appliances",
  "Service across Chicago and surrounding suburbs",
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

const ovenFaqs = [
  {
    q: "Do you repair both gas and electric ovens?",
    a: "Yes. Gas oven repair, electric oven repair, gas stove repair, and electric stove repair are all part of this residential service, including dual-fuel ranges. We diagnose the appliance. We do not repair household gas lines.",
  },
  {
    q: "Why is my oven running but not heating?",
    a: "An oven that runs but does not heat may have a failed bake or broil element, a weak igniter, a sensor, or a control that never calls for heat. The same symptom can have different causes, so we test before replacing parts.",
  },
  {
    q: "Why does my gas stove keep clicking?",
    a: "A stove that keeps clicking can be moisture on a burner, a spark electrode that is out of position, a spark module, or a switch that never stops requesting ignition. If you smell gas while it clicks, leave the appliance off.",
  },
  {
    q: "Why is my oven cooking food unevenly?",
    a: "Uneven cooking can involve a weak element, a convection fan that is not turning, a door that is not sealing, or a temperature sensor that is off. We check those systems rather than assuming one part.",
  },
  {
    q: "Can an inaccurate oven temperature be repaired?",
    a: "Often yes. Oven temperature that does not match the setting may be a sensor, thermostat, calibration, or control issue. We measure the cavity instead of relying on the display alone.",
  },
  {
    q: "Is it safe to use an oven that smells like gas?",
    a: "No. If you smell natural gas, leave the area and contact 911 or your gas utility from a safe location. Do not keep using the appliance, hunt for a leak with a flame, or wait for a repair visit during an active gas emergency.",
  },
  {
    q: "Why will my oven door not close?",
    a: "Hinges, a damaged gasket, a warped door, or a rack that is not seated can keep an oven door from closing. A poor seal can also make food cook slowly, which can look like a heating failure.",
  },
  {
    q: "Do you repair wall ovens and cooktops?",
    a: "Yes. Wall oven repair and cooktop repair in Chicago are part of the same residential cooking-appliance work, including single and double wall ovens and gas, electric, or induction cooktops.",
  },
  {
    q: "Which oven and range brands do you service?",
    a: "We service Wolf, Viking, Thermador, Bosch, KitchenAid, Samsung, LG, GE, Café, Monogram, Whirlpool, Maytag, Frigidaire, Electrolux, JennAir, Dacor, Miele, Kenmore, and other major residential brands, subject to model support and parts. Brand names do not imply factory authorization.",
  },
  {
    q: "How much does oven or stove repair cost?",
    a: "Cost depends on the diagnosis, appliance type, brand, model, labor, and the part required. We provide the repair price after testing and before approved work begins. We do not publish a one-size price list.",
  },
  {
    q: "Can you provide same-day oven repair?",
    a: "Same-day oven repair and same-day stove repair may be available when a technician, your location, and the schedule line up. Completion still depends on parts availability. We do not advertise 24-hour coverage.",
  },
  {
    q: "Is my range worth repairing?",
    a: "Age, overall condition, repair history, part cost, and how the range fits the kitchen all matter. Built-in wall ovens and premium ranges can be expensive to replace because of cabinets, connections, and trim. We give you the diagnosis so you can compare both options.",
  },
  {
    q: "Do you warranty replacement parts?",
    a: "Installed replacement parts are covered by a 60-day parts warranty. The written terms are published on our Warranty page. Your technician will also explain the coverage that applies to the approved repair.",
  },
  {
    q: "Do you install replacement ovens and ranges?",
    a: "Yes. When repair is not the better spend, we can handle replacement through our oven and range installation service. Share the model and whether the opening is gas, electric, or dual-fuel when you book.",
  },
  {
    q: "What information should I provide when booking?",
    a: "Share the brand, model number, symptoms, any error code, and whether the appliance is gas, electric, or dual-fuel. Note if the fault is one burner, the oven, or the entire range so the technician can prepare for the visit.",
  },
] as const;

export default function OvenStoveRepair() {
  const seoSchema = [
    ovenStoveRepairServiceSchema(),
    breadcrumbSchema([
      { name: "Appliance Repair", path: "/appliance-repair" },
      { name: "Oven, Stove & Range Repair", path },
    ]),
  ];

  useSeo({
    title: "Oven, Stove & Range Repair Chicago | USA Appliance & HVAC",
    description:
      "Oven not heating or stove burner not igniting? Schedule oven, stove and range repair in Chicago and surrounding suburbs. Call (224) 360-1633.",
    ogTitle: "Oven, Stove & Range Repair in Chicago",
    ogDescription:
      "Professional repair for gas and electric ovens, stoves, ranges and cooktops throughout Chicago and surrounding suburbs.",
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
                <li className="text-ink">Oven, Stove &amp; Range Repair</li>
              </ol>
            </nav>

            <div className="mt-8">
              <Eyebrow>Oven, stove &amp; range repair</Eyebrow>
            </div>
            <h1 className="mt-5 max-w-[16ch] text-[38px] leading-[1.04] sm:text-[50px] lg:text-[56px]">
              Oven, Stove &amp; Range Repair in Chicago
            </h1>
            <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-ink-muted">
              Is your oven not heating, stove burner not igniting, or range displaying an error
              code? USA Appliance &amp; HVAC diagnoses and repairs gas and electric cooking
              appliances throughout Chicago and the surrounding suburbs. We explain the problem
              and provide the repair price before approved work begins.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row" data-cta-location="hero">
              <BookButton
                label="Book Cooking Appliance Repair"
                topic="Oven, stove and range repair"
                size="lg"
              />
              <CallButton size="lg" />
            </div>
          </div>

          <div>
            <div className="relative min-h-[360px] overflow-hidden rounded-[var(--radius-panel)] bg-black lg:min-h-[520px]">
              <img
                src={ovenImage}
                alt="Technician diagnosing a residential range in a Chicago-area kitchen"
                width={1122}
                height={1402}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 bg-white p-4 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.65)] sm:inset-x-auto sm:bottom-5 sm:left-5 sm:w-[310px]">
                <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand-600">
                  Today&apos;s Availability
                </p>
                <p className="mt-2 text-[15px] font-semibold text-ink">
                  Same-day appointments when available
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
            "Same-Day Appointments When Available",
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
            <h2 className="text-[18px] font-semibold">Smell gas or see sparks? Leave the appliance off.</h2>
            <p className="mt-2 max-w-[70ch] text-[15px] leading-relaxed text-ink-muted">
              If you smell natural gas, hear gas escaping, see flames where they should not be, or
              a carbon monoxide alarm activates, do not continue troubleshooting the appliance.
              Leave the area and contact 911 or your gas utility from a safe location. For smoke,
              sparks, a burning electrical smell, or repeated breaker trips, stop using the
              appliance and request qualified service.
            </p>
            <p className="mt-3 max-w-[70ch] text-[15px] font-semibold text-ink">
              Never use a gas oven or range to heat your home.
            </p>
            <p className="mt-2 max-w-[70ch] text-[14px] leading-relaxed text-ink-muted">
              USA Appliance &amp; HVAC is not a substitute for the fire department or gas utility
              during an active gas emergency.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 lg:pb-24">
        <SectionHeading
          title="What Is Your Oven, Stove or Range Doing?"
          body="The same symptom can have more than one cause. Chicago oven repair service and stove repair start with testing, not a guessed part. Tell us the brand, model, fuel type, and what the appliance is doing."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {symptoms.map(({ title, body, Icon }) => (
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
            A failed igniter, bake element, sensor, burner switch, spark module, door latch, or
            control board can produce overlapping symptoms. Diagnosis comes before parts are
            replaced.
          </p>
          <BookButton label="Book Cooking Appliance Repair" topic="Oven, stove and range repair" />
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            title="Gas and Electric Cooking Appliance Repair"
            body="Gas and electric cooking appliances fail in different ways. We diagnose the fuel type in front of us and stay on the appliance itself—not the home’s gas service line."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="bg-white p-6 sm:p-8">
              <span className="inline-flex size-10 items-center justify-center bg-brand-50 text-brand-600">
                <Flame className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[22px] font-semibold">Gas ovens, ranges and cooktops</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                For gas oven repair and gas stove repair, technicians diagnose igniters, spark
                electrodes, spark modules, bake and broil burners, appliance gas valves, flame
                quality, temperature sensors, and related controls and switches. Weak, yellow, or
                uneven flame is a reason to stop cooking and book service—not to adjust valves.
              </p>
            </article>
            <article className="bg-white p-6 sm:p-8">
              <span className="inline-flex size-10 items-center justify-center bg-brand-50 text-brand-600">
                <Zap className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[22px] font-semibold">Electric ovens, ranges and cooktops</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                For electric oven repair and electric stove repair, technicians diagnose bake and
                broil elements, radiant surface elements, infinite switches, temperature sensors,
                thermal protection, wiring, control boards, displays, and convection fans. Do not
                test live electrical parts yourself.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              title="Oven, Stove and Range Parts We Diagnose"
              body="Range repair in Chicago includes the components below. Common parts may be on the van. Model-specific parts may need to be ordered, so we do not promise every repair will finish the same day."
            />
            <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
              We talk through what failed in plain language—heat, ignition, the door, the display—
              then name the part only after it has been tested.
            </p>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {parts.map((item) => (
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
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              title="A Few Safe Things to Check"
              body="These checks are non-invasive. They help you describe the problem and keep you away from gas connections and live parts."
            />
          </div>
          <ul className="grid gap-3">
            {safeChecks.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white px-4 py-3.5 text-[15px] leading-relaxed">
                <CircleCheck className="mt-0.5 size-[18px] shrink-0 text-brand-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="container-page mt-8 max-w-[70ch] text-[15px] leading-relaxed text-ink-muted">
          Do not remove panels, handle gas connections, touch damaged wiring, or continue using an
          appliance that smells like gas, produces smoke, sparks, or overheats.
        </p>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              title="Cooking Appliances We Service"
              body="This page is for home kitchens. Freestanding ranges, wall ovens, and cooktops are diagnosed the same way: test first, then quote."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {equipmentTypes.map((item) => (
                <li
                  key={item}
                  className="flex min-h-14 items-center gap-3 bg-surface px-4 text-[14px] font-medium"
                >
                  <CookingPot className="size-[18px] shrink-0 text-brand-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] leading-relaxed text-ink-muted">
              Need a restaurant oven, fryer, or other commercial kitchen equipment? Visit{" "}
              <Link
                to="/commercial-services"
                className="font-semibold text-brand-600 underline-offset-4 hover:underline"
              >
                Commercial Appliance Repair
              </Link>
              . Countertop microwaves are not covered on this page.
            </p>
          </div>

          <div>
            <SectionHeading
              title="Oven and Range Brands We Service"
              body="Brand and model support may vary. Have the model number ready when booking so we can confirm service and prepare for the appointment."
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
              Brand names identify the appliances we service and do not imply factory
              authorization.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <h2 className="type-title text-[34px] sm:text-[42px]">What to Expect From Your Repair</h2>
            <p className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-white/60">
              Many common repairs may be completed during the first visit when the correct part is
              available. Model-specific components can require a return appointment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton
                label="Book Service"
                topic="Oven, stove and range repair"
                variant="light"
              />
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
              title="Should You Repair or Replace Your Oven or Range?"
              body="Age, overall condition, repair history, part cost and availability, repair complexity, the condition of the cooktop and oven cavity, cabinetry, and gas or electrical installation requirements all matter."
            />
            <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-ink-muted">
              Built-in wall ovens and premium ranges can be more expensive and complicated to
              replace because of cabinet dimensions, electrical connections, gas connections, trim,
              and ventilation. A failed igniter or element on a sound machine is often a practical
              repair. Repeated major failures may make replacement the better spend. We provide the
              diagnosis and repair price so you can compare both choices.
            </p>
            <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-ink-muted">
              If replacement is the better path, use our{" "}
              <Link
                to="/installation"
                className="font-semibold text-brand-600 underline-offset-4 hover:underline"
              >
                oven and range installation service
              </Link>
              .
            </p>
            <BookButton
              className="mt-7"
              label="Get an Honest Diagnosis"
              topic="Oven diagnosis"
            />
          </div>

          <div className="bg-surface p-7 sm:p-9">
            <h2 className="type-title text-[30px] sm:text-[36px]">
              Why Chicago-Area Homeowners Call USA Appliance &amp; HVAC
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
            title="Oven and Stove Repair Across Chicago and Nearby Suburbs"
            body="We schedule residential oven, stove, range, and cooktop repair across Chicago, the north and northwest suburbs, and selected western suburbs. Check the service-area page or call if your ZIP code is near the edge of the route."
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
            <Link to="/appliance-repair/washer-dryer-repair" className="hover:underline">
              Washer &amp; dryer repair
            </Link>
            <Link to="/appliance-repair/dishwasher-repair" className="hover:underline">
              Dishwasher repair
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
        title="Oven, Stove & Range Repair FAQs"
        body="Straight answers about heating, ignition, brands, pricing, safety, and warranty coverage."
        items={ovenFaqs}
      />

      <section className="bg-ink py-16 text-white lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div>
            <Eyebrow tone="light">Request service</Eyebrow>
            <h2 className="type-title mt-5 text-[36px] leading-[1.05] sm:text-[46px]">
              Get Your Kitchen Working Again
            </h2>
            <p className="mt-6 max-w-[48ch] text-[16px] leading-relaxed text-white/65">
              Tell us what your oven, stove, range, or cooktop is doing, and we&apos;ll help you
              schedule a diagnostic appointment in Chicago or the surrounding service area.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookButton
                label="Request Cooking Appliance Repair"
                topic="Oven, stove and range repair"
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
  applianceType: string;
  fuel: string;
  brand: string;
  model: string;
  errorCode: string;
  problem: string;
  preferred: string;
};

const emptyRequest: RequestValues = {
  name: "",
  phone: "",
  zip: "",
  applianceType: "",
  fuel: "",
  brand: "",
  model: "",
  errorCode: "",
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
      !values.applianceType.trim() ||
      !values.fuel.trim() ||
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
        form: "Oven, stove and range repair request",
        name: values.name,
        phone: values.phone,
        zip: values.zip,
        applianceType: values.applianceType,
        fuel: values.fuel,
        brand: values.brand,
        modelNumber: values.model || "(not provided)",
        errorCode: values.errorCode || "(not provided)",
        problem: values.problem,
        preferredAppointment: values.preferred,
      },
      `Oven repair request — ${values.brand} — ${values.name}`,
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
          We&apos;ll review the details and confirm the first available appointment. If you smell
          gas, leave the area and call 911 or your gas utility—do not wait on this form.
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-[var(--radius-action)] border border-black/15 bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus:border-brand-500";

  return (
    <form onSubmit={submit} noValidate className="bg-white p-5 text-ink sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Name" id="ov-name">
          <input
            id="ov-name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            className={fieldClass}
            required
          />
        </FormField>
        <FormField label="Phone" id="ov-phone">
          <input
            id="ov-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={fieldClass}
            required
          />
        </FormField>
        <FormField label="ZIP code" id="ov-zip">
          <input
            id="ov-zip"
            inputMode="numeric"
            value={values.zip}
            onChange={(e) => set("zip", e.target.value)}
            className={fieldClass}
            required
          />
        </FormField>
        <FormField label="Appliance type" id="ov-type">
          <select
            id="ov-type"
            value={values.applianceType}
            onChange={(e) => set("applianceType", e.target.value)}
            className={fieldClass}
            required
          >
            <option value="">Select one</option>
            <option value="Oven">Oven</option>
            <option value="Stove">Stove</option>
            <option value="Range">Range</option>
            <option value="Cooktop">Cooktop</option>
            <option value="Wall oven">Wall oven</option>
          </select>
        </FormField>
        <FormField label="Gas, electric, or dual-fuel" id="ov-fuel">
          <select
            id="ov-fuel"
            value={values.fuel}
            onChange={(e) => set("fuel", e.target.value)}
            className={fieldClass}
            required
          >
            <option value="">Select one</option>
            <option value="Gas">Gas</option>
            <option value="Electric">Electric</option>
            <option value="Dual-fuel">Dual-fuel</option>
            <option value="Not sure">Not sure</option>
          </select>
        </FormField>
        <FormField label="Brand" id="ov-brand">
          <input
            id="ov-brand"
            value={values.brand}
            onChange={(e) => set("brand", e.target.value)}
            className={fieldClass}
            required
          />
        </FormField>
        <FormField label="Model number (optional)" id="ov-model">
          <input
            id="ov-model"
            value={values.model}
            onChange={(e) => set("model", e.target.value)}
            className={fieldClass}
          />
        </FormField>
        <FormField label="Error code (optional)" id="ov-error">
          <input
            id="ov-error"
            value={values.errorCode}
            onChange={(e) => set("errorCode", e.target.value)}
            className={fieldClass}
          />
        </FormField>
        <FormField label="Preferred appointment time" id="ov-time">
          <input
            id="ov-time"
            value={values.preferred}
            onChange={(e) => set("preferred", e.target.value)}
            placeholder="Weekday morning"
            className={fieldClass}
            required
          />
        </FormField>
      </div>
      <div className="mt-4">
        <FormField label="Problem description" id="ov-problem">
          <textarea
            id="ov-problem"
            rows={4}
            value={values.problem}
            onChange={(e) => set("problem", e.target.value)}
            placeholder="What is the oven, stove, or range doing?"
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
        {status === "submitting" ? "Sending…" : "Request Cooking Appliance Repair"}
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
