import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  CalendarCheck,
  CheckCircle2,
  CircleCheck,
  DoorOpen,
  Droplets,
  Gauge,
  Loader2,
  Monitor,
  Refrigerator,
  RefreshCw,
  Snowflake,
  Thermometer,
  Volume2,
  Waves,
} from "lucide-react";
import refrigeratorImage from "@/assets/photos/service-refrigerator-repair.webp";
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
  refrigeratorRepairServiceSchema,
} from "@/lib/schema";

const path = "/appliance-repair/refrigerator-repair";

const symptoms = [
  {
    title: "Refrigerator is not cooling",
    body: "Warm food can point to an airflow, sensor, fan, control or sealed-system problem.",
    Icon: Thermometer,
  },
  {
    title: "Freezer is not freezing",
    body: "Soft food or melting ice needs testing before a thermostat or compressor is blamed.",
    Icon: Snowflake,
  },
  {
    title: "Refrigerator is leaking water",
    body: "We check supply lines, valves, drain paths and the ice maker to find the actual source.",
    Icon: Droplets,
  },
  {
    title: "Ice maker is not making ice",
    body: "A frozen fill tube, inlet valve, temperature issue or ice-maker assembly may be involved.",
    Icon: Refrigerator,
  },
  {
    title: "Water dispenser is not working",
    body: "We test the water supply, filter housing, switches, valves and frozen lines.",
    Icon: Waves,
  },
  {
    title: "Clicking, buzzing or grinding",
    body: "New or repeated sounds can come from fans, relays, ice systems or the compressor area.",
    Icon: Volume2,
  },
  {
    title: "Heavy frost or ice buildup",
    body: "Frost may involve a door seal, airflow restriction or a fault in the defrost system.",
    Icon: Snowflake,
  },
  {
    title: "Refrigerator is freezing food",
    body: "We inspect temperature sensing, controls, dampers and airflow before replacing parts.",
    Icon: Thermometer,
  },
  {
    title: "Refrigerator runs constantly",
    body: "Long run times can result from heat transfer, airflow, sealing or cooling-system issues.",
    Icon: Gauge,
  },
  {
    title: "Turns on and off frequently",
    body: "Short cycling requires electrical and temperature checks rather than a guessed diagnosis.",
    Icon: RefreshCw,
  },
  {
    title: "Display is not responding",
    body: "We test incoming power, wiring, controls and the user interface before recommending a board.",
    Icon: Monitor,
  },
  {
    title: "Door is not sealing",
    body: "Worn gaskets, alignment, hinges or cabinet condensation can allow warm air inside.",
    Icon: DoorOpen,
  },
] as const;

const repairItems = [
  "Condenser and evaporator fans",
  "Temperature sensors and thermostats",
  "Start relays",
  "Defrost heaters and defrost controls",
  "Electronic control boards",
  "Water inlet valves",
  "Clogged or frozen drain lines",
  "Door gaskets and hinges",
  "Ice-maker assemblies",
  "Water dispensers",
  "Compressors and sealed refrigeration systems",
];

const refrigeratorTypes = [
  "French-door refrigerators",
  "Side-by-side refrigerators",
  "Top-freezer refrigerators",
  "Bottom-freezer refrigerators",
  "Built-in refrigerators",
  "Counter-depth refrigerators",
  "Column refrigerators and freezers",
  "Stand-alone residential freezers",
];

const brands = [
  "Sub-Zero",
  "Samsung",
  "LG",
  "Whirlpool",
  "GE",
  "Café",
  "Monogram",
  "KitchenAid",
  "Maytag",
  "Frigidaire",
  "Bosch",
  "Thermador",
  "Viking",
  "Miele",
  "JennAir",
  "Amana",
  "Electrolux",
];

const processSteps = [
  {
    n: "01",
    title: "Book or Call",
    body: `Choose an available appointment online or call ${company.phone}. Tell us the brand, model and symptoms if you have them.`,
  },
  {
    n: "02",
    title: "Diagnosis",
    body: "The technician tests the refrigerator and identifies the underlying fault instead of choosing a part from the symptom alone.",
  },
  {
    n: "03",
    title: "Review Your Options",
    body: "We explain the problem, recommended repair and price before work begins, including honest repair-or-replace guidance.",
  },
  {
    n: "04",
    title: "Repair and Testing",
    body: "After approval, the repair is completed and the refrigerator is tested for proper cooling, operation and leaks.",
  },
];

const reasons = [
  "Seven years working with appliance and HVAC equipment",
  "Residential and commercial technical experience",
  "EPA Section 608 certified technicians for applicable refrigeration work",
  "Licensed and insured",
  "Diagnosis before quote",
  "Honest repair-or-replace recommendations",
  "Same-day appointments when available",
  "60-day parts warranty",
  "Online booking",
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

const refrigeratorFaqs = [
  {
    q: "How soon can you repair my refrigerator?",
    a: "Same-day refrigerator repair may be available when you call early and an appointment remains open. Otherwise, we confirm the first available time window when you book.",
  },
  {
    q: "Why is my refrigerator running but not cooling?",
    a: "Possible causes include blocked airflow, a failed fan, a temperature sensor, a start relay, a defrost fault or a sealed-system issue. Testing is needed to identify which fault is present.",
  },
  {
    q: "Why is my refrigerator leaking water?",
    a: "Leaks can come from a supply connection, water inlet valve, filter housing, ice maker or clogged defrost drain. Keep water away from outlets and schedule a diagnosis.",
  },
  {
    q: "Can you repair a refrigerator ice maker?",
    a: "Yes. We diagnose residential ice makers, fill tubes, inlet valves, sensors and related controls. The refrigerator must also reach the correct temperature for the ice maker to operate.",
  },
  {
    q: "Do you repair compressors and sealed systems?",
    a: "We diagnose compressors and sealed refrigeration systems. Work involving refrigerant is completed by EPA Section 608 certified technicians, subject to model support and parts availability.",
  },
  {
    q: "How much does refrigerator repair cost?",
    a: "Cost depends on the failed component, refrigerator brand and model, required parts and labor. After diagnosis, you receive the repair price before deciding whether to proceed.",
  },
  {
    q: "Is my refrigerator worth repairing?",
    a: "Age, condition, repair cost, energy use, parts availability and replacement price all matter. Premium built-in refrigerators often justify repairs that may not make sense for an older entry-level unit.",
  },
  {
    q: "Which refrigerator brands do you service?",
    a: "We work on many major brands, including Sub-Zero, Samsung, LG, Whirlpool, GE, KitchenAid, Bosch, Thermador, Viking and Miele. Provide the model number so support can be confirmed.",
  },
  {
    q: "Do you repair built-in and high-end refrigerators?",
    a: "Yes, including many built-in, counter-depth, column and premium models. For Sub-Zero refrigerator repair in Chicago, have the model and serial information ready when booking.",
  },
  {
    q: "What information should I provide when booking?",
    a: "Share the brand, model number, approximate age, symptoms, any displayed error code and when the problem started. Photos can also help us prepare for the visit.",
  },
  {
    q: "Is the repair covered by a warranty?",
    a: "Installed replacement parts are covered by a 60-day parts warranty. The written terms are published on our Warranty page. Your technician will also explain the coverage that applies to the approved repair.",
  },
] as const;

export default function RefrigeratorRepair() {
  const seoSchema = [
    refrigeratorRepairServiceSchema(),
    breadcrumbSchema([
      { name: "Appliance Repair", path: "/appliance-repair" },
      { name: "Refrigerator & Freezer Repair", path },
    ]),
  ];

  useSeo({
    title: "Refrigerator Repair Chicago | USA Appliance & HVAC",
    description:
      "Same-day refrigerator and freezer repair in Chicago and surrounding suburbs. We fix cooling problems, leaks, ice makers and error codes. Call (224) 360-1633.",
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
                <li><Link to="/" className="hover:text-brand-600">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link to="/appliance-repair" className="hover:text-brand-600">Appliance Repair</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-ink">Refrigerator &amp; Freezer Repair</li>
              </ol>
            </nav>

            <div className="mt-8">
              <Eyebrow>Refrigerator &amp; freezer service</Eyebrow>
            </div>
            <h1 className="mt-5 max-w-[17ch] text-[38px] leading-[1.04] sm:text-[50px] lg:text-[56px]">
              Refrigerator &amp; Freezer Repair in Chicago and Surrounding Suburbs
            </h1>
            <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-ink-muted">
              Fridge not cooling, leaking or making unusual noises? We diagnose residential
              refrigerators, freezers and ice makers and explain the repair cost before work begins.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row" data-cta-location="hero">
              <BookButton
                label="Book Refrigerator Repair"
                topic="Refrigerator and freezer repair"
                size="lg"
              />
              <CallButton size="lg" />
            </div>

            <p className="mt-5 max-w-[58ch] border-l-2 border-brand-500 pl-4 text-[14px] leading-relaxed text-ink-muted">
              A cooling problem can quickly put groceries at risk. Keep the doors closed and
              schedule a diagnosis as soon as possible.
            </p>
          </div>

          <div>
            <div className="relative min-h-[360px] overflow-hidden rounded-[var(--radius-panel)] bg-black lg:min-h-[520px]">
              <img
                src={refrigeratorImage}
                alt="Technician diagnosing a French-door refrigerator in a Chicago-area home"
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
            "EPA Section 608 for refrigerant work",
            "Upfront Repair Options",
            "60-Day Parts Warranty",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 border-b border-black/[0.08] py-5 text-[14px] font-semibold last:border-b-0 sm:border-r sm:px-5 lg:border-b-0 first:pl-0 last:border-r-0">
              <CircleCheck className="size-5 shrink-0 text-brand-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page py-16 lg:py-24">
        <SectionHeading
          title="Is Your Refrigerator Doing This?"
          body="A symptom narrows the search, but it does not prove which part failed. These are the refrigerator and freezer problems we diagnose most often."
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
            Not sure what the symptom means? Tell us the brand, model number and what the
            refrigerator is doing. A technician will diagnose the actual cause before recommending parts.
          </p>
          <BookButton label="Book a Diagnosis" topic="Refrigerator diagnosis" />
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              title="Refrigerator Problems We Diagnose and Repair"
              body="The same symptom can have several causes. A refrigerator not cooling might involve a fan, sensor, relay, control, airflow restriction or sealed system, so testing comes before parts replacement."
            />
            <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
              Common parts may be stocked for the first visit, while model-specific parts may need
              to be ordered. Compressor and sealed refrigeration system work is completed by
              EPA Section 608 certified technicians.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {repairItems.map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-black/[0.08] py-3.5 text-[15px]">
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
              title="Refrigerator and Freezer Types We Service"
              body="We service common freestanding configurations as well as many built-in and premium residential refrigeration systems."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {refrigeratorTypes.map((item) => (
                <li key={item} className="flex min-h-14 items-center gap-3 bg-surface px-4 text-[14px] font-medium">
                  <Refrigerator className="size-[18px] shrink-0 text-brand-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] leading-relaxed text-ink-muted">
              Need service for a restaurant refrigerator, walk-in cooler or reach-in freezer? Visit
              our <Link to="/commercial" className="font-semibold text-brand-600 underline-offset-4 hover:underline">Commercial Refrigeration Repair page</Link>.
            </p>
          </div>

          <div>
            <SectionHeading
              title="Major Refrigerator Brands We Service"
              body="Our technicians work across mainstream and premium refrigerator lines, including built-in refrigerator repair and Sub-Zero refrigerator repair in Chicago."
            />
            <ul className="mt-8 grid grid-cols-2 border-l border-t border-black/[0.08] sm:grid-cols-3">
              {brands.map((brand) => (
                <li key={brand} className="flex min-h-14 items-center justify-center border-b border-r border-black/[0.08] bg-white px-3 text-center text-[14px] font-semibold">
                  {brand}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] leading-relaxed text-ink-muted">
              Brand and model support may vary. Have your model number ready when booking so we can
              confirm service and prepare for the appointment.
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
              <BookButton label="Book Service" topic="Refrigerator repair" variant="light" />
              <CallButton variant="quiet" />
            </div>
          </div>
          <ol>
            {processSteps.map((step) => (
              <li key={step.n} className="grid grid-cols-[48px_1fr] gap-4 border-t border-white/15 py-6 last:border-b">
                <span className="text-[14px] font-bold tabular-nums text-brand-400">{step.n}</span>
                <div>
                  <h3 className="text-[20px] font-semibold">{step.title}</h3>
                  <p className="mt-2 max-w-[58ch] text-[14px] leading-relaxed text-white/60">{step.body}</p>
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
              title="Should You Repair or Replace Your Refrigerator?"
              body="A useful recommendation considers refrigerator age, repair cost, overall condition, energy consumption, parts availability and the price of a suitable replacement."
            />
            <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-ink-muted">
              A premium built-in refrigerator may be worth repairing even when an entry-level
              freestanding unit of the same age is not. We provide the diagnosis and repair price
              so you can make the decision without sales pressure.
            </p>
            <BookButton className="mt-7" label="Get an Honest Diagnosis" topic="Refrigerator diagnosis" />
          </div>

          <div className="bg-surface p-7 sm:p-9">
            <h2 className="type-title text-[30px] sm:text-[36px]">Refrigerator Service Without Guesswork</h2>
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
            title="Refrigerator Repair Across Chicago and Surrounding Suburbs"
            body="We schedule residential refrigerator and freezer service across Chicago and selected northern, northwest and western suburbs. Check the service-area page or call if your ZIP code is near the edge of the route."
          />
          <ul className="mt-9 grid grid-cols-2 gap-px bg-black/[0.08] sm:grid-cols-3 lg:grid-cols-4">
            {locations.map((location) => (
              <li key={location.name} className="bg-white">
                {location.to ? (
                  <Link to={location.to} className="flex min-h-14 items-center px-4 text-[14px] font-semibold transition-colors hover:bg-brand-50 hover:text-brand-600">
                    {location.name}
                  </Link>
                ) : (
                  <span className="flex min-h-14 items-center px-4 text-[14px] font-semibold">{location.name}</span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[14px] font-semibold text-brand-600">
            <Link to="/service-areas" className="hover:underline">View all service areas</Link>
            <Link to="/appliance-repair" className="hover:underline">Explore appliance repair</Link>
            <Link to="/contact" className="hover:underline">Contact the service team</Link>
          </div>
        </div>
      </section>

      <Faq
        title="Refrigerator Repair Questions"
        body="Straight answers about scheduling, diagnosis, pricing, brands and warranty coverage."
        items={refrigeratorFaqs}
      />

      <section className="bg-ink py-16 text-white lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div>
            <Eyebrow tone="light">Request service</Eyebrow>
            <h2 className="type-title mt-5 text-[36px] leading-[1.05] sm:text-[46px]">
              Protect Your Food. Get the Refrigerator Diagnosed.
            </h2>
            <p className="mt-6 max-w-[48ch] text-[16px] leading-relaxed text-white/65">
              Call or book online and tell us the refrigerator brand, model and symptoms.
              We&apos;ll confirm the first available appointment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookButton label="Book Refrigerator Repair" topic="Refrigerator repair" variant="light" size="lg" />
              <CallButton variant="quiet" size="lg" />
            </div>
          </div>
          <RepairRequestForm />
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  kicker,
  title,
  body,
}: {
  kicker?: string;
  title: string;
  body?: string;
}) {
  return (
    <div>
      {kicker && <Eyebrow>{kicker}</Eyebrow>}
      <h2 className={`${kicker ? "mt-5 " : ""}type-title max-w-[22ch] text-[32px] leading-[1.08] sm:text-[42px]`}>
        {title}
      </h2>
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
        form: "Refrigerator repair request",
        name: values.name,
        phone: values.phone,
        zip: values.zip,
        refrigeratorBrand: values.brand,
        modelNumber: values.model || "(not provided)",
        problem: values.problem,
        preferredAppointment: values.preferred,
      },
      `Refrigerator repair request — ${values.brand} — ${values.name}`,
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
          We&apos;ll review the details and confirm the first available appointment. For urgent
          cooling problems, call {company.phone}.
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-[var(--radius-action)] border border-black/15 bg-white px-4 py-3 text-[14px] text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus:border-brand-500";

  return (
    <form onSubmit={submit} noValidate className="bg-white p-5 text-ink sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Name" id="repair-name">
          <input id="repair-name" value={values.name} onChange={(e) => set("name", e.target.value)} className={fieldClass} required />
        </FormField>
        <FormField label="Phone" id="repair-phone">
          <input id="repair-phone" type="tel" value={values.phone} onChange={(e) => set("phone", e.target.value)} className={fieldClass} required />
        </FormField>
        <FormField label="ZIP code" id="repair-zip">
          <input id="repair-zip" inputMode="numeric" value={values.zip} onChange={(e) => set("zip", e.target.value)} className={fieldClass} required />
        </FormField>
        <FormField label="Refrigerator brand" id="repair-brand">
          <input id="repair-brand" value={values.brand} onChange={(e) => set("brand", e.target.value)} className={fieldClass} required />
        </FormField>
        <FormField label="Model number (optional)" id="repair-model">
          <input id="repair-model" value={values.model} onChange={(e) => set("model", e.target.value)} className={fieldClass} />
        </FormField>
        <FormField label="Preferred appointment time" id="repair-time">
          <input id="repair-time" value={values.preferred} onChange={(e) => set("preferred", e.target.value)} placeholder="Weekday morning" className={fieldClass} required />
        </FormField>
      </div>
      <div className="mt-4">
        <FormField label="Problem description" id="repair-problem">
          <textarea id="repair-problem" rows={4} value={values.problem} onChange={(e) => set("problem", e.target.value)} placeholder="What is the refrigerator doing?" className={`${fieldClass} resize-y`} required />
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
        {status === "submitting" ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <CalendarCheck className="size-4" aria-hidden="true" />}
        {status === "submitting" ? "Sending…" : "Request Refrigerator Service"}
      </button>
      <FormConsent className="mt-3" note="We use this information only to respond about your service request." action="submitting this request" />
    </form>
  );
}

function FormField({ label, id, children }: { label: string; id: string; children: ReactNode }) {
  return (
    <label htmlFor={id} className="block text-[12px] font-bold uppercase tracking-[0.08em] text-ink-muted">
      {label}
      {children}
    </label>
  );
}
