/**
 * Google Analytics 4.
 *
 * Tracking is off unless VITE_GA_MEASUREMENT_ID is a real G- ID. Local dev
 * without that env var sends nothing. Form field values are never included.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim() ?? "";

export function isAnalyticsEnabled() {
  return /^G-[A-Z0-9]+$/i.test(MEASUREMENT_ID);
}

let loading: Promise<void> | undefined;

export function initAnalytics() {
  if (!isAnalyticsEnabled()) return Promise.resolve();
  if (loading) return loading;

  loading = new Promise((resolve) => {
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = function gtag() {
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, {
      send_page_view: false,
      anonymize_ip: true,
    });

    if (document.getElementById("ga4-gtag")) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = "ga4-gtag";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });

  return loading;
}

function currentPath() {
  return window.location.pathname + window.location.search;
}

export function trackPageView(path = currentPath()) {
  if (!isAnalyticsEnabled() || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: document.title,
  });
}

export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (!isAnalyticsEnabled() || typeof window.gtag !== "function") return;
  window.gtag("event", name, {
    page_path: currentPath(),
    ...params,
  });
}

export function trackLead(formName: string) {
  trackEvent("generate_lead", { form_name: formName });
}

export function ctaLocationFrom(el: Element | null) {
  return el?.closest("[data-cta-location]")?.getAttribute("data-cta-location") || "page";
}
