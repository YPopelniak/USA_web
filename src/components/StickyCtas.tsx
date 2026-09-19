import { useLocation } from "react-router-dom";
import { BookButton } from "./BookButton";
import { CallButton } from "./CallButton";

function topicFromPath(path: string) {
  if (path.includes("refrigerator-repair")) return "Refrigerator repair";
  if (path.includes("washer-dryer-repair")) return "Washer and dryer repair";
  if (path.includes("dishwasher-repair")) return "Dishwasher repair";
  if (path.includes("oven-stove-repair")) return "Oven, stove and range repair";
  if (path.includes("hvac")) return "HVAC service";
  if (path.includes("commercial")) return "Commercial service";
  if (path.includes("installation")) return "Installation";
  if (path.includes("appliance-repair")) return "Appliance repair";
  if (path.includes("book")) return "Request service";
  if (path.includes("contact")) return "Contact";
  return "general";
}

/**
 * Site-wide conversion bar. Lives in App so it does not remount on navigation.
 * Call is a native tel: link; Book is independent and never waits on the call.
 */
export function StickyCtas() {
  const { pathname } = useLocation();

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[45] border-t border-black/10 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_-18px_rgba(0,0,0,0.45)] backdrop-blur"
      data-cta-location="sticky"
    >
      <div className="container-page grid grid-cols-2 gap-2 py-2">
        <CallButton
          showNumber={false}
          className="w-full px-3 text-[14px] sm:text-[15px]"
        />
        <BookButton
          label="Book Service"
          topic={topicFromPath(pathname)}
          className="w-full px-3 text-[14px] sm:text-[15px]"
        />
      </div>
    </div>
  );
}
