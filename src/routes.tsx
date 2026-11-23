import { lazy, type ComponentType } from "react";
import { matchRoutes } from "react-router-dom";

/**
 * Each page is its own chunk. A page whose chunk has already been loaded
 * renders synchronously, so preloading the landing page before the first
 * render (see main.tsx) avoids a blank Suspense flash.
 */
function lazyPage(load: () => Promise<{ default: ComponentType }>) {
  let Loaded: ComponentType | null = null;
  const preload = () =>
    load().then((m) => {
      Loaded = m.default;
    });
  const Lazy = lazy(load);
  function Page() {
    return Loaded ? <Loaded /> : <Lazy />;
  }
  return { Page, preload };
}

const page = {
  home: lazyPage(() => import("@/pages/Home")),
  about: lazyPage(() => import("@/pages/AboutPage")),
  serviceAreas: lazyPage(() => import("@/pages/ServiceAreas")),
  location: lazyPage(() => import("@/pages/LocationPage")),
  book: lazyPage(() => import("@/pages/Book")),
  contact: lazyPage(() => import("@/pages/Contact")),
  privacy: lazyPage(() => import("@/pages/Privacy")),
  warranty: lazyPage(() => import("@/pages/Warranty")),
  blogIndex: lazyPage(() => import("@/pages/BlogIndex")),
  chicagoBuild: lazyPage(() => import("@/pages/ChicagoBuild")),
  blogPost: lazyPage(() => import("@/pages/BlogPost")),
  refrigerator: lazyPage(() => import("@/pages/RefrigeratorRepair")),
  washerDryer: lazyPage(() => import("@/pages/WasherDryerRepair")),
  dishwasher: lazyPage(() => import("@/pages/DishwasherRepair")),
  ovenStove: lazyPage(() => import("@/pages/OvenStoveRepair")),
  serviceDetail: lazyPage(() => import("@/pages/ServiceDetail")),
  serviceCategory: lazyPage(() => import("@/pages/ServiceCategory")),
  notFound: lazyPage(() => import("@/pages/NotFound")),
};

export const routes = [
  { path: "/", ...page.home },
  { path: "/about", ...page.about },
  { path: "/service-areas", ...page.serviceAreas },
  { path: "/service-areas/:slug", ...page.location },
  { path: "/book", ...page.book },
  { path: "/contact", ...page.contact },
  { path: "/privacy", ...page.privacy },
  { path: "/warranty", ...page.warranty },
  { path: "/blog", ...page.blogIndex },
  { path: "/blog/appliance-hvac-conferences", ...page.chicagoBuild },
  { path: "/blog/:slug", ...page.blogPost },
  { path: "/appliance-repair/refrigerator-repair", ...page.refrigerator },
  { path: "/appliance-repair/washer-dryer-repair", ...page.washerDryer },
  { path: "/appliance-repair/dishwasher-repair", ...page.dishwasher },
  { path: "/appliance-repair/oven-stove-repair", ...page.ovenStove },
  { path: "/:group/:service", ...page.serviceDetail },
  { path: "/:group", ...page.serviceCategory },
  { path: "*", ...page.notFound },
];

export function preloadRoute(pathname: string) {
  const match = matchRoutes(routes, pathname);
  return match ? match[0].route.preload() : Promise.resolve();
}

/** Fetches every other page once the browser is idle, so later clicks are instant. */
export function prefetchAllRoutes() {
  const run = () => Object.values(page).forEach((p) => void p.preload());
  if ("requestIdleCallback" in window) requestIdleCallback(run, { timeout: 4000 });
  else setTimeout(run, 2500);
}
