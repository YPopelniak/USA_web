import { Building2, Clock3, ShieldCheck } from "lucide-react";
import skyline from "../../images/why-us-chicago.jpg";
import { BookButton } from "./BookButton";
import { CallButton } from "./CallButton";

type Props = {
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  topic: string;
  thirdTrustItem: string;
  ratingLabel: string;
};

export function ServiceLandingHero({
  eyebrow,
  heading,
  description,
  image,
  imageAlt,
  topic,
  thirdTrustItem,
  ratingLabel,
}: Props) {
  const trustItems = [
    { label: "Licensed & insured", Icon: ShieldCheck },
    { label: "Same-day service", Icon: Clock3 },
    { label: thirdTrustItem, Icon: Building2 },
  ];

  return (
    <section className="overflow-hidden border-b border-black/[0.07] bg-white">
      <div className="container-page grid lg:grid-cols-[42fr_58fr]">
        <div className="relative isolate flex flex-col justify-center py-12 lg:min-h-[480px] lg:py-12 lg:pr-6">
          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.13em] text-brand-600">
            <span className="h-0.5 w-7 bg-red-500" aria-hidden="true" />
            {eyebrow}
          </div>

          <h1 className="mt-4 max-w-[500px] text-[38px] font-semibold leading-[1.04] text-[#091b36] sm:text-[42px] xl:text-[46px]">
            {heading}
          </h1>

          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-ink-muted">
            {description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2.5 min-[1160px]:flex-nowrap">
            {trustItems.map(({ label, Icon }) => (
              <li
                key={label}
                className="flex shrink-0 items-center gap-2 text-[12px] font-medium leading-none text-[#24334b]"
              >
                <Icon
                  className="size-[17px] shrink-0 fill-none text-brand-500"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <BookButton
              label="Book Now"
              topic={topic}
              className="min-w-[168px]"
            />
            <CallButton className="min-w-[164px] bg-white" />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px]">
            <span
              className="text-[11px] tracking-[0.06em] text-red-500"
              aria-label="Five out of five stars"
            >
              ★★★★★
            </span>
            <span className="text-ink-muted">{ratingLabel}</span>
          </div>
        </div>

        <div className="relative min-h-[320px] lg:-mr-[max(0px,calc((100vw-1240px)/2+2rem))] lg:min-h-[480px]">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 size-full object-cover object-[52%_center]"
          />
          <img
            src={skyline}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 h-full w-[38%] object-cover object-right opacity-[0.18] [mask-image:linear-gradient(to_right,transparent_0%,black_28%,black_68%,transparent_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 z-20 h-14 bg-gradient-to-b from-white to-transparent lg:inset-y-0 lg:left-0 lg:right-auto lg:h-auto lg:w-[32%] lg:bg-[linear-gradient(to_right,#fff_0%,rgba(255,255,255,0.88)_22%,rgba(255,255,255,0.42)_58%,transparent_100%)]"
          />
        </div>
      </div>
    </section>
  );
}
