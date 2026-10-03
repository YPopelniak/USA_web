import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  FileStack,
  HardHat,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useSeo } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { getBlogPost } from "@/blog";

const post = getBlogPost("appliance-hvac-conferences")!;

/**
 * Shown only when a booth, VIP, or exhibitor line is assigned.
 * Leave empty until that detail exists. Do not invent one.
 */
const exhibitorNote = "";

const eventFacts = [
  { label: "Event", value: "Chicago Build Expo 2026" },
  { label: "Place", value: "McCormick Place · Chicago" },
  { label: "Dates", value: "October 28–29, 2026" },
  { label: "Hall", value: "Hall F2, West Building" },
  ...(exhibitorNote ? [{ label: "Find us", value: exhibitorNote }] : []),
];

const platformCards = [
  {
    icon: ClipboardCheck,
    title: "Permit Requirements",
    body: "Understand applicable permit requirements based on job location and scope.",
  },
  {
    icon: BadgeCheck,
    title: "Technician Eligibility",
    body: "Verify certifications, licenses, and technician requirements before dispatch.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Readiness",
    body: "Identify regulatory and documentation requirements before work begins.",
  },
  {
    icon: FileStack,
    title: "Audit Documentation",
    body: "Create a structured record of permits, certifications, evidence, and job compliance.",
  },
];

const audiences = [
  { icon: HardHat, title: "HVAC Contractors" },
  { icon: Building2, title: "Construction Companies" },
  { icon: ShieldCheck, title: "Compliance & Safety Professionals" },
  { icon: Landmark, title: "Government & Municipal Organizations" },
];

const checks = [
  "Permit Verified",
  "Location Compliant",
  "Refrigerant Authorized",
  "Technician Eligible",
];

export default function ChicagoBuild() {
  const path = `/blog/${post.slug}`;

  useSeo({
    title: post.seoTitle,
    description: post.description,
    path,
    schema: [
      articleSchema({
        title: post.title,
        description: post.description,
        path,
        date: post.date,
      }),
      breadcrumbSchema([{ name: post.title, path }]),
    ],
  });

  return (
    <>
      <section className="border-b border-black/[0.07] bg-surface">
        <div className="container-page py-12 lg:py-16">
          <p
            className="text-[13px] uppercase tracking-[0.14em] text-brand-600"
            style={{ fontVariationSettings: '"wdth" 105, "wght" 700' }}
          >
            Chicago Build 2026
          </p>
          <h1
            className="mt-4 max-w-3xl text-[32px] leading-[1.12] sm:text-[40px]"
            style={{ fontVariationSettings: '"wdth" 118, "wght" 760' }}
          >
            USA Appliance &amp; HVAC at Chicago Build 2026
          </h1>
          <p
            className="mt-4 max-w-2xl text-[18px] leading-snug text-ink sm:text-[20px]"
            style={{ fontVariationSettings: '"wdth" 106, "wght" 620' }}
          >
            Connecting HVAC, construction, technology, and compliance in one place.
          </p>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-muted">
            We’re bringing real-world HVAC field experience together with software and
            compliance technology to explore a simpler way to manage permits, technician
            requirements, certifications, and job readiness.
          </p>
        </div>
      </section>

      <section className="border-b border-black/[0.07] bg-white">
        <div className="container-page py-6">
          <dl className="grid gap-px overflow-hidden bg-black/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {eventFacts.map((fact) => (
              <div key={fact.label} className="bg-white px-5 py-4">
                <dt className="text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-[15px] font-medium text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="platform" className="bg-white">
        <div className="container-page py-16 lg:py-20">
          <h2
            className="text-[28px] leading-tight sm:text-[34px]"
            style={{ fontVariationSettings: '"wdth" 112, "wght" 720' }}
          >
            What We’re Building
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-muted">
            We are developing an AI-powered Compliance &amp; Permit Intelligence Platform
            designed for HVAC and construction workflows.
          </p>
          <p
            className="mt-5 max-w-xl text-[20px] leading-snug text-ink"
            style={{ fontVariationSettings: '"wdth" 108, "wght" 650' }}
          >
            Know what the job requires before the truck rolls.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platformCards.map((card) => (
              <li key={card.title} className="border border-black/[0.08] bg-surface p-5">
                <card.icon className="size-5 text-brand-500" aria-hidden="true" />
                <h3 className="mt-4 text-[16px] font-semibold leading-snug">{card.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-700 text-white">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <h2
              className="max-w-md text-[28px] leading-tight sm:text-[36px]"
              style={{ fontVariationSettings: '"wdth" 112, "wght" 720' }}
            >
              Before Dispatch:
              <br />
              Can This Job Legally Proceed?
            </h2>
          </div>

          <div className="border border-white/15 bg-brand-600/40 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
              <p className="text-[13px] uppercase tracking-[0.12em] text-white/70">
                Job readiness
              </p>
              <p className="text-[13px] font-semibold tracking-[0.14em] text-emerald-400">
                PASS
              </p>
            </div>
            <p
              className="mt-5 text-[22px] leading-tight"
              style={{ fontVariationSettings: '"wdth" 110, "wght" 680' }}
            >
              Dispatch Approved
            </p>
            <ul className="mt-5 space-y-3">
              {checks.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px]">
                  <span className="text-emerald-400" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page py-16 lg:py-20">
          <h2
            className="text-[28px] leading-tight sm:text-[34px]"
            style={{ fontVariationSettings: '"wdth" 112, "wght" 720' }}
          >
            Who We’d Like to Meet
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-muted">
            We’re interested in learning how permitting and compliance workflows work across
            the industry — and where technology can reduce administrative work without
            replacing regulatory oversight.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <li key={item.title} className="border border-black/[0.08] bg-white p-5">
                <item.icon className="size-5 text-brand-500" aria-hidden="true" />
                <h3 className="mt-4 text-[16px] font-semibold leading-snug">{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-page py-16 text-center lg:py-20">
          <h2
            className="mx-auto mt-4 max-w-xl text-[28px] leading-tight sm:text-[36px]"
            style={{ fontVariationSettings: '"wdth" 112, "wght" 720' }}
          >
            Let’s Connect at Chicago Build
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/75">
            If you work in HVAC, construction, permitting, compliance, inspections, or
            municipal operations, we’d like to hear how these processes work in your
            organization.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact" variant="primary">
              Connect With Us
            </Button>
            <a
              href="#platform"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-action)] border border-white/30 px-6 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
            >
              Learn About the Platform
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
