import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  AlertTriangle,
  CalendarCheck,
  CheckCircle2,
  CircleCheck,
  DoorOpen,
  Droplets,
  Loader2,
  Monitor,
  Power,
  RefreshCw,
  Sparkles,
  Utensils,
  Volume2,
  Waves,
  Wind,
} from "lucide-react";
import dishwasherImage from "@/assets/photos/service-dishwasher-repair.webp";
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
  dishwasherRepairServiceSchema,
} from "@/lib/schema";

const path = "/appliance-repair/dishwasher-repair";

const symptoms = [
  {
    title: "Not draining or standing water",
    body: "Standing water may involve a clogged filter or drain path, a damaged drain hose, a failed drain pump, or a related control problem.",
    Icon: Waves,
  },
  {
    title: "Leaking from the door or underneath",
    body: "A leak may come from a door gasket, hose, pump seal, inlet valve, loose connection, or excessive suds. Water under the dishwasher should be diagnosed before the next cycle.",
    Icon: Droplets,
  },
  {
    title: "Dishes still dirty after a full cycle",
    body: "Poor cleaning can involve blocked spray arms, a circulation problem, low water temperature, loading, detergent, or a failing component.",
    Icon: Utensils,
  },
  {
    title: "Dishes remaining wet",
    body: "Wet dishes may result from the selected cycle, rinse-aid settings, loading, a heating failure, a sensor problem, or the dishwasher design itself.",
    Icon: Wind,
  },
  {
    title: "Not filling with water",
    body: "A dishwasher that will not fill can involve the inlet valve, float switch, supply line, or a control that never calls for water.",
    Icon: Droplets,
  },
  {
    title: "Won’t start",
    body: "A dishwasher that won’t start may be a door latch, door switch, control, or power issue. Testing comes before a board is replaced.",
    Icon: Power,
  },
  {
    title: "Stops in the middle of a cycle",
    body: "A mid-cycle stop can be a drain fault, overheating, a sensor, or a control interruption. Similar symptoms can have different causes.",
    Icon: RefreshCw,
  },
  {
    title: "Grinding, humming, or unusual noise",
    body: "A grinding noise can come from a pump, a foreign object, or a motor. Humming without movement often needs electrical and pump testing.",
    Icon: Volume2,
  },
  {
    title: "Bad odor",
    body: "Odor can come from trapped food, a drain issue, or a seal that is not closing. It is not always a failed part.",
    Icon: Wind,
  },
  {
    title: "Door will not close or latch",
    body: "A dishwasher door that will not latch may be the latch, strike, hinges, or a rack that is out of position.",
    Icon: DoorOpen,
  },
  {
    title: "Detergent dispenser will not open",
    body: "A dispenser that stays closed can be a latch, wax motor, or control timing issue rather than the detergent itself.",
    Icon: Sparkles,
  },
  {
    title: "Error code appearing",
    body: "An error code points to a system, not always a single part. A dishwasher technician confirms the actual fault with testing.",
    Icon: Monitor,
  },
  {
    title: "Overflowing",
    body: "Overflow can involve a stuck float, inlet valve, drain restriction, or too much detergent. Stop the cycle and shut off water if it is safe.",
    Icon: Waves,
  },
  {
    title: "Cloudy glassware or white residue",
    body: "Cloudy glasses after a dishwasher cycle can be hard water, detergent, rinse aid, or water temperature. It is not always a failed component.",
    Icon: Sparkles,
  },
] as const;

const parts = [
  "Drain pumps",
  "Circulation pumps and wash motors",
  "Water inlet valves",
  "Heating elements",
  "Temperature sensors and thermostats",
  "Float assemblies and float switches",
  "Door latches and door switches",
  "Spray arms",
  "Filters",
  "Drain hoses",
  "Door seals and gaskets",
  "Detergent and rinse-aid dispensers",
  "Control boards",
  "Wiring and appliance sensors",
];

const equipmentTypes = [
  "Built-in dishwashers",
  "Tall-tub dishwashers",
  "Compact dishwashers",
  "Drawer dishwashers",
  "Portable dishwashers",
  "ADA-height dishwashers",
];

const brands = [
  "Bosch",
  "Samsung",
  "LG",
  "Whirlpool",
  "GE",
  "KitchenAid",
  "Maytag",
  "Frigidaire",
  "Miele",
  "Thermador",
  "JennAir",
  "Kenmore",
];

const processSteps = [
  {
    n: "01",
    title: "Book or Call",
    body: `Choose an available appointment online or call ${company.phone}. Same-day dishwasher repair may be available when a slot is still open.`,
  },
  {
    n: "02",
    title: "Diagnosis",
    body: "The technician tests the dishwasher and identifies the underlying fault instead of guessing from the symptom alone.",
  },
  {
    n: "03",
    title: "Review Your Options",
    body: "We explain what failed and the repair price before work begins, including honest repair-or-replace guidance.",
  },
  {
    n: "04",
    title: "Repair and Testing",
    body: "After approval, the repair is completed and the dishwasher is run through the applicable functions.",
  },
];

const reasons = [
  "Seven years working with appliance and HVAC equipment",
  "Licensed and insured",
  "Diagnosis before quote",
  "Honest repair-or-replace recommendations",
  "Same-day appointments when available",
  "Residential kitchen experience, with commercial work handled separately",
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

const dishwasherFaqs = [
  {
    q: "How soon can you repair my dishwasher?",
    a: "Same-day dishwasher repair may be available when you call early and an appointment remains open. Otherwise we confirm the first available window when you book. We do not advertise 24-hour coverage.",
  },
  {
    q: "Why is my dishwasher not draining?",
    a: "Dishwasher drain repair often starts with the filter, drain hose, disposal knockout, or drain pump. Standing water can also be a control issue. Testing identifies which one.",
  },
  {
    q: "Why is there water under the dishwasher?",
    a: "Water under the dishwasher can come from a door gasket, hose, pump seal, inlet valve, or a loose connection. Dishwasher leak repair in Chicago starts with finding the source, not replacing parts at random.",
  },
  {
    q: "Why are dishes still dirty after the cycle?",
    a: "Blocked spray arms, a weak circulation pump, low water temperature, loading, or detergent can leave food on dishes. We check those before quoting a part.",
  },
  {
    q: "Why are dishes still wet?",
    a: "Drying depends on the cycle, rinse aid, loading, a heating element, a sensor, or the machine design. Not every wet-dish complaint is a failed heater.",
  },
  {
    q: "Do you repair Bosch, Miele, and other premium dishwashers?",
    a: "Yes. Bosch dishwasher repair, Miele dishwasher repair, Thermador dishwasher repair, and JennAir dishwasher repair are part of the residential work, subject to model support and parts availability.",
  },
  {
    q: "How much does dishwasher repair cost?",
    a: "Cost depends on the failed component, brand, model, parts and labor. After diagnosis you receive the repair price before deciding whether to proceed. There is no universal price for every job.",
  },
  {
    q: "Should I repair or replace my dishwasher?",
    a: "Age, repair cost, condition, previous failures, parts availability, and the price of a suitable replacement all matter. We give you the diagnosis and the number so you can compare both options.",
  },
  {
    q: "Do you install dishwashers as well as repair them?",
    a: "Dishwasher installation and repair are both offered. Hookups, leveling, and drain connections are handled as part of appliance installation when you book that work.",
  },
  {
    q: "Do you repair commercial dishwashers?",
    a: "This page is for residential dishwashers. For a restaurant machine, walk-in, or other commercial kitchen equipment, use our commercial services page.",
  },
  {
    q: "What information should I provide when booking?",
    a: "Share the brand, model number, symptoms, any error code, and whether you see leaking water. That helps a local dishwasher repair company load the right parts.",
  },
  {
    q: "Is the repair covered by a warranty?",
    a: "Installed replacement parts are covered by a 60-day parts warranty. The written terms are published on our Warranty page. Your technician will also explain the coverage that applies to the approved repair.",
  },
] as const;

export default function DishwasherRepair() {
  const seoSchema = [
    dishwasherRepairServiceSchema(),
    breadcrumbSchema([
      { name: "Appliance Repair", path: "/appliance-repair" },
      { name: "Dishwasher Repair", path },
    ]),
  ];

  useSeo({
    title: "Dishwasher Repair Chicago | USA Appliance & HVAC",
    description:
      "Same-day dishwasher repair in Chicago and surrounding suburbs. We fix draining, leaking, cleaning, drying and error-code problems. Call (224) 360-1633.",
    ogTitle: "Dishwasher Repair in Chicago | USA Appliance & HVAC",
    ogDescription:
      "Dishwasher leaking, not draining, or leaving dishes dirty? Schedule professional dishwasher repair in Chicago and surrounding suburbs.",
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
                <li className="text-ink">Dishwasher Repair</li>
              </ol>
            </nav>

            <div className="mt-8">
              <Eyebrow>Dishwasher repair</Eyebrow>
            </div>
            <h1 className="mt-5 max-w-[17ch] text-[38px] leading-[1.04] sm:text-[50px] lg:text-[56px]">
              Dishwasher Repair in Chicago and Surrounding Suburbs
            </h1>
            <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-ink-muted">
              Dealing with standing water, leaks, dirty dishes, or a dishwasher that will not
              start? USA Appliance &amp; HVAC diagnoses and repairs common dishwasher problems
              throughout Chicago and the surrounding suburbs. We explain what failed, provide the
              repair price before work begins, and complete same-day service whenever scheduling
              and parts availability allow.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row" data-cta-location="hero">
              <BookButton
                label="Book Dishwasher Repair"
                topic="Dishwasher repair"
                size="lg"
              />
              <CallButton size="lg" />
            </div>
          </div>

          <div>
            <div className="relative min-h-[360px] overflow-hidden rounded-[var(--radius-panel)] bg-black lg:min-h-[520px]">
              <img
                src={dishwasherImage}
                alt="Technician diagnosing a built-in dishwasher in a Chicago-area home"
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
            <h2 className="text-[18px] font-semibold">Is the dishwasher actively leaking?</h2>
            <p className="mt-2 max-w-[70ch] text-[15px] leading-relaxed text-ink-muted">
              Stop the cycle and avoid using the dishwasher until the source is identified. If it
              is safe to do so, shut off the appliance and its water supply. For a burning smell,
              sparks, smoke, or repeated breaker trips, disconnect power only if this can be done
              safely and request service.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 lg:pb-24">
        <SectionHeading
          title="Is Your Dishwasher Doing This?"
          body="Similar symptoms can have different causes. Dishwasher repair in Chicago starts with testing, not a guessed part. Tell us the brand, model, and what the machine is doing."
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
            A dishwasher not draining, a dishwasher leaking water, or dishes left dirty after a
            full cycle still need diagnosis before parts are replaced.
          </p>
          <BookButton label="Book Dishwasher Repair" topic="Dishwasher repair" />
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              title="Dishwasher Parts and Systems We Service"
              body="Chicago dishwasher repair includes the components below. Common parts may be stocked for the first visit. Model-specific parts may need to be ordered, so we do not promise every repair will finish the same day."
            />
            <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
              Dishwasher pump repair, inlet-valve work, heating, and control diagnosis are all
              part of a residential dishwasher repair service. We test the system that actually
              failed.
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

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              title="Residential Dishwashers We Service"
              body="This page is for home kitchens. Built-in, compact, and drawer dishwashers are diagnosed the same way: test first, then quote."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {equipmentTypes.map((item) => (
                <li
                  key={item}
                  className="flex min-h-14 items-center gap-3 bg-surface px-4 text-[14px] font-medium"
                >
                  <Utensils className="size-[18px] shrink-0 text-brand-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] leading-relaxed text-ink-muted">
              Need a restaurant dishmachine or other commercial kitchen equipment? Visit our{" "}
              <Link
                to="/commercial-services"
                className="font-semibold text-brand-600 underline-offset-4 hover:underline"
              >
                Commercial Services
              </Link>{" "}
              page.
            </p>
          </div>

          <div>
            <SectionHeading
              title="Dishwasher Brands We Service"
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
              Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, Frigidaire, and Kenmore dishwashers
              are part of the same residential route. We do not claim factory authorization.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <h2 className="type-title text-[34px] sm:text-[42px]">What Happens After You Book?</h2>
            <p className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-white/60">
              Many common repairs may be completed during the first visit when the correct part is
              available. Model-specific components can require a return appointment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton label="Book Service" topic="Dishwasher repair" variant="light" />
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
              title="Should You Repair or Replace Your Dishwasher?"
              body="Age, repair cost, overall condition, previous failures, parts availability, water use, and replacement price all matter."
            />
            <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-ink-muted">
              A failed pump, latch, or inlet valve on a sound machine is often a practical repair.
              Repeated major failures on an older unit may make replacement the better spend. We
              provide the diagnosis and repair price so you can compare both choices without
              sales pressure.
            </p>
            <BookButton
              className="mt-7"
              label="Get an Honest Diagnosis"
              topic="Dishwasher diagnosis"
            />
          </div>

          <div className="bg-surface p-7 sm:p-9">
            <h2 className="type-title text-[30px] sm:text-[36px]">
              Dishwasher Repair Without Guesswork
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
            title="Dishwasher Repair Across Chicago and Surrounding Suburbs"
            body="We schedule residential dishwasher repair service across Chicago and selected northern, northwest and western suburbs. Check the service-area page or call if your ZIP code is near the edge of the route."
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
        title="Dishwasher Repair Questions"
        body="Straight answers about draining, leaks, dirty dishes, brands, pricing and warranty coverage."
        items={dishwasherFaqs}
      />

      <section className="bg-ink py-16 text-white lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div>
            <Eyebrow tone="light">Request service</Eyebrow>
            <h2 className="type-title mt-5 text-[36px] leading-[1.05] sm:text-[46px]">
              Get the Kitchen Back in Order
            </h2>
            <p className="mt-6 max-w-[48ch] text-[16px] leading-relaxed text-white/65">
              Tell us the dishwasher brand, model, and symptoms. We&apos;ll confirm the first
              available appointment for dishwasher repair near you in our service area.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookButton
                label="Book Dishwasher Repair"
                topic="Dishwasher repair"
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
  brand: string;
  model: string;
  problem: string;
  preferred: string;
};

const emptyRequest: RequestValues = {
  name: "",
  phone: "",
  zip: "",
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
        form: "Dishwasher repair request",
        name: values.name,
        phone: values.phone,
        zip: values.zip,
        brand: values.brand,
        modelNumber: values.model || "(not provided)",
        problem: values.problem,
        preferredAppointment: values.preferred,
      },
      `Dishwasher repair request — ${values.brand} — ${values.name}`,
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
          We&apos;ll review the details and confirm the first available appointment. For active
          leaks, call {company.phone}.
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-[var(--radius-action)] border border-black/15 bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus:border-brand-500";

  return (
    <form onSubmit={submit} noValidate className="bg-white p-5 text-ink sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Name" id="dw-name">
          <input
            id="dw-name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            className={fieldClass}
            required
          />
        </FormField>
        <FormField label="Phone" id="dw-phone">
          <input
            id="dw-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={fieldClass}
            required
          />
        </FormField>
        <FormField label="ZIP code" id="dw-zip">
          <input
            id="dw-zip"
            inputMode="numeric"
            value={values.zip}
            onChange={(e) => set("zip", e.target.value)}
            className={fieldClass}
            required
          />
        </FormField>
        <FormField label="Dishwasher brand" id="dw-brand">
          <input
            id="dw-brand"
            value={values.brand}
            onChange={(e) => set("brand", e.target.value)}
            className={fieldClass}
            required
          />
        </FormField>
        <FormField label="Model number (optional)" id="dw-model">
          <input
            id="dw-model"
            value={values.model}
            onChange={(e) => set("model", e.target.value)}
            className={fieldClass}
          />
        </FormField>
        <FormField label="Preferred appointment time" id="dw-time">
          <input
            id="dw-time"
            value={values.preferred}
            onChange={(e) => set("preferred", e.target.value)}
            placeholder="Weekday morning"
            className={fieldClass}
            required
          />
        </FormField>
      </div>
      <div className="mt-4">
        <FormField label="Problem description" id="dw-problem">
          <textarea
            id="dw-problem"
            rows={4}
            value={values.problem}
            onChange={(e) => set("problem", e.target.value)}
            placeholder="What is the dishwasher doing?"
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
        {status === "submitting" ? "Sending…" : "Request Dishwasher Service"}
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
