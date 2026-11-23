import { Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CrispChat } from "@/components/CrispChat";
import { CrispPulse } from "@/components/CrispPulse";
import { CallbackProvider } from "@/components/CallbackModal";
import { AvailabilityPopup } from "@/components/AvailabilityPopup";
import { StickyCtas } from "@/components/StickyCtas";
import { Analytics } from "@/components/Analytics";
import { routes } from "@/routes";

const routeElements = routes.map(({ path, Page }) => ({ path, element: <Page /> }));

export default function App() {
  const location = useLocation();
  const page = useRoutes(routeElements);

  return (
    <CallbackProvider>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-[var(--radius-action)] focus:bg-brand-500 focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Suspense fallback={<div className="min-h-screen" />}>{page}</Suspense>
      </main>

      <Footer />
      <StickyCtas />
      <AvailabilityPopup />
      <Analytics />
      <SpeedInsights route={location.pathname} />
      <CrispChat />
      <CrispPulse />
    </CallbackProvider>
  );
}
