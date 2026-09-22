import { Link } from "react-router-dom";
import { BadgeCheck, CalendarDays, ChevronRight, Shield, ShieldCheck, Users } from "lucide-react";
import { BookButton } from "@/components/BookButton";
import { CallButton } from "@/components/CallButton";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { about } from "@/content";

const statIcons = [CalendarDays, Users, Shield];
const assuranceIcons = [ShieldCheck, BadgeCheck, ShieldCheck];

export function About() {
  return (
    <section className="overflow-hidden border-b border-black/[0.07] bg-white">
      <div className="container-page grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-0">
        <Reveal className="lg:-ml-[max(0px,calc((100vw-1240px)/2+2rem))] lg:h-full">
          <Placeholder
            slot="about-crew"
            alt="USA Appliance & HVAC technician with a tool bag and tablet, with a second technician servicing an indoor HVAC unit"
            label="Crew on site"
            ratio="4/5"
            className="w-full object-[center_15%] lg:min-h-[620px] lg:rounded-none"
            rounded="rounded-[var(--radius-card)]"
            showMeta={false}
          />
        </Reveal>

        <Reveal delay={0.08} className="lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-7 lg:hidden">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-ink-muted">
              <li>
                <Link to="/" className="transition-colors hover:text-brand-600">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5 opacity-50" aria-hidden="true" />
                <span className="text-ink">About</span>
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.13em] text-brand-600">
            <span className="h-0.5 w-7 bg-red-500" aria-hidden="true" />
            {about.eyebrow}
          </div>

          <h1 className="mt-4 max-w-[20ch] text-[34px] font-semibold leading-[1.08] text-[#091b36] sm:text-[42px] xl:text-[46px]">
            {about.title}
          </h1>

          {about.body.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="mt-5 max-w-[54ch] text-[16px] leading-relaxed text-ink-muted"
            >
              {p}
            </p>
          ))}

          <dl className="mt-8 grid grid-cols-3 gap-3 border-y border-black/[0.08] py-6">
            {about.stats.map((s, i) => {
              const Icon = statIcons[i] ?? Shield;
              return (
                <div key={s.label} className="min-w-0">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="inline-flex size-9 items-center justify-center text-brand-600">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="mt-2 block text-[18px] font-extrabold leading-none text-ink sm:text-[22px]">
                      {s.value}
                    </span>
                    <span className="mt-1.5 block text-[12px] leading-snug text-ink-muted sm:text-[13px]">
                      {s.label}
                    </span>
                  </dd>
                </div>
              );
            })}
          </dl>

          <div className="mt-7 flex flex-wrap items-center gap-3" data-cta-location="about">
            <CallButton showNumber={false} className="min-w-[148px]" />
            <BookButton label="Book Service" topic="About" className="min-w-[168px]" />
          </div>

          <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-ink-muted sm:text-[13px]">
            {about.assurances.map((item, i) => {
              const Icon = assuranceIcons[i] ?? ShieldCheck;
              return (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <Icon className="size-3.5 shrink-0 text-brand-500" aria-hidden="true" />
                  {item}
                </li>
              );
            })}
            <li className="text-[12px] text-ink-muted/80">{about.tagline}</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
