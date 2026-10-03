import { Wrench } from "lucide-react";
import { BookButton } from "@/components/BookButton";
import { CallButton } from "@/components/CallButton";
import { Reveal } from "@/components/Reveal";
import { finalCta } from "@/content";

const buttonClass =
  "h-[54px] w-full !rounded-[8px] px-8 text-[15px] shadow-none sm:w-auto";

export function FinalCta() {
  return (
    <section className="container-page pb-10 pt-2 sm:pb-14">
      <Reveal>
        <div className="relative overflow-hidden rounded-[var(--radius-panel)] bg-[linear-gradient(180deg,#22409c_0%,#1c3888_100%)] px-6 py-12 text-center text-white sm:px-10 sm:py-16 lg:py-[100px]">
          <div className="mx-auto flex max-w-[900px] flex-col items-center">
            <h2 className="max-w-[920px] text-[30px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-[32px] sm:leading-[1.08] md:text-[40px] lg:text-[56px] lg:leading-[1.06]">
              <span className="block">{finalCta.title[0]}</span>
              <span className="block">{finalCta.title[1]}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[650px] text-[18px] leading-[1.5] text-white/75 sm:text-[19px]">
              {finalCta.body}
            </p>

            <div
              className="mt-7 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:mt-8 sm:w-auto sm:max-w-none sm:flex-row sm:items-center"
              data-cta-location="final_cta"
            >
              <BookButton
                label="Request Service"
                icon={Wrench}
                variant="light"
                size="lg"
                className={`${buttonClass} hover:bg-[#f4f5f7]`}
              />
              <CallButton
                label="Call 224-360-1633"
                variant="quiet"
                size="lg"
                className={`${buttonClass} border-white/35 hover:border-white/70 hover:bg-white/10`}
              />
            </div>

            <p className="mt-5 text-[14px] font-medium text-white/60 sm:text-[15px]">
              {finalCta.trust}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
