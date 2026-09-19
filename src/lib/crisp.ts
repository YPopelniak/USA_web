/**
 * Crisp live chat loader.
 *
 * The website ID is not a secret — it ships in the client script by design —
 * so it lives here with an env override, the same arrangement as the Formspree
 * endpoint and the map URL.
 *
 * An earlier version treated the variable as "set" whenever it was defined,
 * even as an empty string, so that an empty value could switch the widget off.
 * That is exactly what happened in production: the variable existed in Vercel
 * with no value, the ternary took it at face value, and the chat silently
 * dropped to the local stub. An empty variable now means "not configured" and
 * falls through to the default, matching the other integrations. To actually
 * turn the widget off, set the value to `off`.
 */

declare global {
  interface Window {
    $crisp?: unknown[];
    CRISP_WEBSITE_ID?: string;
  }
}

const DEFAULT_ID = "4c83fcfa-8a14-430e-855e-9799a4b18f76";

const override = (import.meta.env.VITE_CRISP_WEBSITE_ID as string | undefined)?.trim();

const websiteId =
  override === "off" || override === "false" ? "" : override || DEFAULT_ID;

export const isConfigured = Boolean(websiteId);

let injected = false;
let liftObserver: MutationObserver | null = null;

/** Sit the round launcher above the sticky Call / Book bar on small screens. */
export function liftCrispAboveSticky() {
  const client = document.querySelector(".crisp-client");
  if (!client) return false;

  const mobile = window.matchMedia("(max-width: 1023px)").matches;
  const bottom = mobile
    ? "calc(var(--sticky-cta-height) + 12px)"
    : "";

  for (const el of client.querySelectorAll<HTMLElement>("*")) {
    const style = el.style.position || window.getComputedStyle(el).position;
    if (style !== "fixed") continue;
    const { width, height } = el.getBoundingClientRect();
    if (width < 36 || width > 88 || height < 36 || height > 88) continue;
    if (bottom) el.style.setProperty("bottom", bottom, "important");
    else el.style.removeProperty("bottom");
  }

  return true;
}

function watchCrispPosition() {
  const run = () => liftCrispAboveSticky();
  run();
  window.addEventListener("resize", run);

  const client = document.querySelector(".crisp-client");
  if (client && !liftObserver) {
    liftObserver = new MutationObserver(run);
    liftObserver.observe(client, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }
}

export function loadCrisp() {
  if (!websiteId || injected) return;
  injected = true;

  const queue: unknown[] = [];
  window.$crisp = queue;
  window.CRISP_WEBSITE_ID = websiteId;
  queue.push(["on", "session:loaded", () => watchCrispPosition()]);

  const script = document.createElement("script");
  script.src = "https://client.crisp.chat/l.js";
  script.async = true;
  script.onload = () => {
    const deadline = Date.now() + 20000;
    const tick = () => {
      if (liftCrispAboveSticky()) {
        watchCrispPosition();
        return;
      }
      if (Date.now() < deadline) window.setTimeout(tick, 300);
    };
    tick();
  };
  document.head.appendChild(script);
}
