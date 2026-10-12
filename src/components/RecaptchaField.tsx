import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { loadRecaptcha, RECAPTCHA_SITE_KEY } from "@/lib/recaptcha";

export type RecaptchaHandle = { reset: () => void };

export const RecaptchaField = forwardRef<
  RecaptchaHandle,
  { onChange: (token: string) => void }
>(function RecaptchaField({ onChange }, ref) {
  const host = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetId.current != null) window.grecaptcha?.reset(widgetId.current);
      onChangeRef.current("");
    },
  }));

  useEffect(() => {
    let cancelled = false;
    loadRecaptcha()
      .then(() => {
        if (cancelled || !host.current || widgetId.current != null || !window.grecaptcha) return;
        widgetId.current = window.grecaptcha.render(host.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: (token) => onChangeRef.current(token),
          "expired-callback": () => onChangeRef.current(""),
          "error-callback": () => onChangeRef.current(""),
        });
      })
      .catch(() => {
        onChangeRef.current("");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-[78px]">
      <div ref={host} />
    </div>
  );
});
