import { Route, Routes, useLocation } from "react-router-dom";
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

import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ServiceCategory from "@/pages/ServiceCategory";
import RefrigeratorRepair from "@/pages/RefrigeratorRepair";
import WasherDryerRepair from "@/pages/WasherDryerRepair";
import DishwasherRepair from "@/pages/DishwasherRepair";
import OvenStoveRepair from "@/pages/OvenStoveRepair";
import ServiceAreas from "@/pages/ServiceAreas";
import LocationPage from "@/pages/LocationPage";
import Book from "@/pages/Book";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Warranty from "@/pages/Warranty";
import NotFound from "@/pages/NotFound";

export default function App() {
  const location = useLocation();

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/service-areas/:slug" element={<LocationPage />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route
            path="/appliance-repair/refrigerator-repair"
            element={<RefrigeratorRepair />}
          />
          <Route
            path="/appliance-repair/washer-dryer-repair"
            element={<WasherDryerRepair />}
          />
          <Route
            path="/appliance-repair/dishwasher-repair"
            element={<DishwasherRepair />}
          />
          <Route
            path="/appliance-repair/oven-stove-repair"
            element={<OvenStoveRepair />}
          />
          <Route path="/:group" element={<ServiceCategory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
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
