import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ctaLocationFrom,
  initAnalytics,
  isAnalyticsEnabled,
  trackEvent,
  trackPageView,
} from "@/lib/analytics";

/**
 * Loads GA4 when a Measurement ID is configured, sends a page_view on every
 * client-side route change, and records booking/call clicks sitewide.
 */
export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;
    void initAnalytics();
  }, []);

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;
    const path = location.pathname + location.search;
    void initAnalytics().then(() => trackPageView(path));
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;

    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const tel = target.closest("a[href^='tel:']");
      if (tel) {
        trackEvent("call_click", { cta_location: ctaLocationFrom(tel) });
        return;
      }

      const book = target.closest("[data-analytics='book']");
      if (book) {
        trackEvent("book_click", {
          cta_location: ctaLocationFrom(book),
          topic: book.getAttribute("data-analytics-topic") || "general",
        });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
