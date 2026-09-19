import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BellRing, CircleCheck, Phone, PhoneCall, Sparkles, X } from "lucide-react";
import { BookButton } from "./BookButton";
import { useCallbackModal } from "./CallbackModal";
import { company } from "@/content";

const TEASER_DISMISSED_KEY = "usa-offer-teaser-dismissed";
const TEASER_SHOWN_KEY = "usa-offer-teaser-shown";
const MAIN_OFFER_STORAGE_KEY = "usa-availability-panel-seen-v2";
const MAIN_SUPPRESS_KEY = "usa-availability-main-suppressed";
const TEASER_DELAY_MS = 5_000;
const MAIN_OFFER_DELAY_MS = 15_000;

function isFormField(el: EventTarget | null) {
  if (!(el instanceof HTMLElement)) return false;
  return Boolean(
    el.closest("form") ||
      el.closest("input, textarea, select, [contenteditable='true']"),
  );
}

function teaserWasDismissed() {
  return Boolean(sessionStorage.getItem(TEASER_DISMISSED_KEY));
}

function teaserWasShown() {
  return Boolean(sessionStorage.getItem(TEASER_SHOWN_KEY));
}

function markTeaserShown() {
  sessionStorage.setItem(TEASER_SHOWN_KEY, "true");
}

function mainIsBlocked() {
  return Boolean(sessionStorage.getItem(MAIN_SUPPRESS_KEY) || sessionStorage.getItem(MAIN_OFFER_STORAGE_KEY));
}

export function AvailabilityPopup() {
  const { pathname } = useLocation();
  const { isOpen: callbackOpen } = useCallbackModal();
  const [teaserOpen, setTeaserOpen] = useState(false);
  const [mainOfferOpen, setMainOfferOpen] = useState(false);
  const callbackOpenRef = useRef(callbackOpen);
  callbackOpenRef.current = callbackOpen;

  const onBookingRoute = pathname === "/book" || pathname === "/contact";

  const suppressMain = () => {
    sessionStorage.setItem(MAIN_SUPPRESS_KEY, "true");
    sessionStorage.setItem(MAIN_OFFER_STORAGE_KEY, "true");
    setMainOfferOpen(false);
  };

  const showTeaserIfAllowed = () => {
    if (teaserWasDismissed() || callbackOpenRef.current) return;
    markTeaserShown();
    setTeaserOpen(true);
  };

  const wasCallbackOpen = useRef(false);

  useEffect(() => {
    if (callbackOpen) {
      wasCallbackOpen.current = true;
      setTeaserOpen(false);
      suppressMain();
      return;
    }
    if (wasCallbackOpen.current) {
      wasCallbackOpen.current = false;
      showTeaserIfAllowed();
    }
  }, [callbackOpen]);

  useEffect(() => {
    if (onBookingRoute) suppressMain();
  }, [onBookingRoute]);

  useEffect(() => {
    let teaserTimer: number | undefined;
    if (!teaserWasDismissed()) {
      if (teaserWasShown()) {
        showTeaserIfAllowed();
      } else {
        teaserTimer = window.setTimeout(() => {
          if (callbackOpenRef.current) return;
          showTeaserIfAllowed();
        }, TEASER_DELAY_MS);
      }
    }

    const mainOfferTimer = mainIsBlocked()
      ? undefined
      : window.setTimeout(() => {
          if (
            mainIsBlocked() ||
            callbackOpenRef.current ||
            isFormField(document.activeElement)
          ) {
            suppressMain();
            return;
          }
          setMainOfferOpen(true);
        }, MAIN_OFFER_DELAY_MS);

    const onBookClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest("[data-analytics='book']")) return;
      suppressMain();
    };

    const onFormStart = (event: FocusEvent) => {
      if (!isFormField(event.target)) return;
      suppressMain();
    };

    document.addEventListener("click", onBookClick);
    document.addEventListener("focusin", onFormStart);

    return () => {
      if (teaserTimer !== undefined) window.clearTimeout(teaserTimer);
      if (mainOfferTimer !== undefined) window.clearTimeout(mainOfferTimer);
      document.removeEventListener("click", onBookClick);
      document.removeEventListener("focusin", onFormStart);
    };
  }, []);

  const dismissTeaser = () => {
    sessionStorage.setItem(TEASER_DISMISSED_KEY, "true");
    setTeaserOpen(false);
  };

  const dismissMainOffer = () => {
    sessionStorage.setItem(MAIN_OFFER_STORAGE_KEY, "true");
    setMainOfferOpen(false);
  };

  useEffect(() => {
    if (!mainOfferOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismissMainOffer();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mainOfferOpen]);

  const showTeaser = teaserOpen && !mainOfferOpen && !callbackOpen;

  return (
    <AnimatePresence>
      {showTeaser && (
        <motion.aside
          key="offer-teaser"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-label="Special offer"
          className="fixed left-4 z-[55] w-[calc(100vw-2rem)] max-w-[360px] rounded-[18px] border border-black/10 bg-white p-5 shadow-[0_24px_60px_-20px_rgba(5,20,45,0.45)] sm:left-6"
          style={{ bottom: "calc(var(--sticky-cta-height) + 1rem)" }}
          data-cta-location="offer"
        >
          <button
            type="button"
            onClick={dismissTeaser}
            aria-label="Close special offer"
            className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-black/[0.05] hover:text-ink"
          >
            <X className="size-4" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-brand-600">
            <BellRing className="size-4" aria-hidden="true" />
            Special offer
          </div>
          <p className="mt-2 pr-6 text-[15px] font-semibold leading-snug text-[#17243a]">
            Service call waived on approved repairs — same-day slots still open
            today
          </p>

          <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
            <BookButton
              label="Book now"
              topic="Service call waived offer"
              className="h-11 w-full px-5 text-[14px]"
            />
            <a
              href={company.phoneHref}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-action)] border border-black/15 bg-white px-4 text-[14px] font-semibold text-[#17243a] transition-colors hover:border-brand-500/40 hover:bg-brand-50"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call
            </a>
          </div>
        </motion.aside>
      )}

      {mainOfferOpen && !callbackOpen && (
        <div
          key="availability-panel"
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
        >
          <motion.button
            type="button"
            aria-label="Close availability offer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismissMainOffer}
            className="absolute inset-0 size-full cursor-default bg-[#102139]/45 backdrop-blur-[5px]"
          />

          <motion.section
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="availability-title"
            className="relative max-h-[calc(100dvh-2rem)] w-full max-w-[600px] overflow-y-auto rounded-[16px] border border-black/10 bg-white shadow-[0_24px_70px_-24px_rgba(5,20,45,0.5)]"
            data-cta-location="offer"
          >
          <header className="sticky top-0 z-10 flex min-h-[56px] items-center justify-between gap-4 bg-[#22409c] px-5 text-white">
            <div className="flex items-center gap-2.5 text-[14px] font-bold uppercase tracking-[0.04em]">
              <Sparkles className="size-5" aria-hidden="true" />
              Today&apos;s availability
            </div>
            <button
              type="button"
              onClick={dismissMainOffer}
              aria-label="Close availability offer"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-white/85 transition-colors hover:bg-white/15 hover:text-white"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </header>

          <div className="p-5 sm:p-6">
            <h2
              id="availability-title"
              className="max-w-[24ch] text-[28px] leading-[1.08] text-[#0b0b0f] sm:text-[32px]"
              style={{ fontVariationSettings: '"wdth" 108, "wght" 780' }}
            >
              Service Call Waived on Approved Repairs
            </h2>

            <p className="mt-3 max-w-[56ch] text-[16px] leading-relaxed text-[#4a4e5a]">
              Book a <strong className="font-semibold text-[#26334a]">same-day diagnostic</strong>{" "}
              and we <strong className="font-semibold text-[#26334a]">waive the service call fee</strong>{" "}
              when you approve the repair.
            </p>

            <ul className="mt-4 grid gap-2.5 text-[14px] text-[#0b0b0f] sm:grid-cols-2 sm:text-[15px]">
              {[
                "Same-day appointments across Chicagoland",
                "60-day parts warranty",
                "Licensed and insured in Illinois",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CircleCheck
                    className="mt-0.5 size-[18px] shrink-0 text-[#22409c]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-[1.6fr_1fr]">
              <div onClick={dismissMainOffer}>
                <BookButton
                  label="Book My Repair"
                  topic="Service call waived offer"
                  className="h-12 w-full !rounded-[8px]"
                />
              </div>
              <a
                href={company.phoneHref}
                onClick={dismissMainOffer}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-black/15 bg-white px-5 text-[15px] font-semibold text-[#0b0b0f] transition-colors hover:border-[#22409c]/40 hover:bg-brand-50"
              >
                <PhoneCall className="size-[18px]" aria-hidden="true" />
                Call Now
              </a>
            </div>
          </div>
          </motion.section>
        </div>
      )}
    </AnimatePresence>
  );
}
