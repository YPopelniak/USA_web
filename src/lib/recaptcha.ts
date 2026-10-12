/**
 * Google reCAPTCHA v2 ("I'm not a robot" checkbox).
 *
 * The site key is public — it ships in the page, the same way the Formspree
 * endpoint does. The secret key stays in the Formspree form settings and is
 * never imported here.
 */

export const RECAPTCHA_SITE_KEY = "6LdRxeotAAAAACRS0ohsWGhq3OOfiMJm7KA4dm_D";

export const CAPTCHA_REQUIRED = "Please confirm you are not a robot.";

type Grecaptcha = {
  render: (
    el: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => number;
  reset: (widgetId?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
    __recaptchaOnLoad?: () => void;
  }
}

let loading: Promise<void> | null = null;

export function loadRecaptcha(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.grecaptcha?.render) return Promise.resolve();
  if (loading) return loading;

  loading = new Promise((resolve, reject) => {
    window.__recaptchaOnLoad = () => resolve();
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?onload=__recaptchaOnLoad&render=explicit";
    script.async = true;
    script.onerror = () => {
      loading = null;
      reject(new Error("recaptcha failed to load"));
    };
    document.head.appendChild(script);
  });

  return loading;
}
