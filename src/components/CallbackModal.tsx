import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Check, ChevronDown, Loader2, X } from "lucide-react";
import { allServices, company } from "@/content";
import { FormConsent } from "./FormConsent";
import { RecaptchaField, type RecaptchaHandle } from "./RecaptchaField";
import { CAPTCHA_REQUIRED } from "@/lib/recaptcha";
import { requestCallback, type CallbackRequest } from "@/lib/callback";
import { TimeSlotPicker, formatDayLabel, isSlotAvailable } from "./TimeSlotPicker";
import { cn } from "@/lib/utils";

type Ctx = { open: (topic?: string) => void; close: () => void; isOpen: boolean };
const CallbackContext = createContext<Ctx | null>(null);

export function useCallbackModal() {
  const ctx = useContext(CallbackContext);
  if (!ctx)
    throw new Error("useCallbackModal must be used inside <CallbackProvider>");
  return ctx;
}

type Status = "idle" | "submitting" | "success" | "error";

type BookingFields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  address: string;
  date: string;
  window: string;
};

const emptyFields: BookingFields = {
  name: "",
  phone: "",
  email: "",
  service: "",
  address: "",
  date: "",
  window: "",
};

/** Page buttons pass a topic that is close to, but not always identical to, a service title. */
const TOPIC_TO_SERVICE: Record<string, string> = {
  "refrigerator repair": "Refrigerator and freezer repair",
  "refrigerator diagnosis": "Refrigerator and freezer repair",
  "washer repair": "Washer and dryer repair",
  "dryer repair": "Washer and dryer repair",
  "washer and dryer repair": "Washer and dryer repair",
  "dishwasher repair": "Dishwasher repair",
  "oven, stove and range repair": "Oven, stove, range and cooktop repair",
};

function serviceFromTopic(topic: string): string {
  const t = topic.trim().toLowerCase();
  if (!t || t === "general") return "";
  if (TOPIC_TO_SERVICE[t]) return TOPIC_TO_SERVICE[t];
  const exact = allServices.find((s) => s.title.toLowerCase() === t);
  return exact?.title ?? "";
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FieldErrors = Partial<Record<keyof BookingFields, string>>;

function validateField(key: keyof BookingFields, v: BookingFields): string | undefined {
  switch (key) {
    case "name":
      if (!v.name.trim()) return "Name is required";
      return undefined;
    case "phone": {
      const digits = v.phone.replace(/\D/g, "");
      if (!digits) return "Phone number is required";
      if (digits.length < 10) return "Phone number needs at least 10 digits";
      if (digits.length > 15) return "That phone number is too long";
      return undefined;
    }
    case "email":
      if (!v.email.trim()) return "E-mail address is required";
      if (!EMAIL_PATTERN.test(v.email.trim())) return "That e-mail address doesn't look right";
      return undefined;
    case "service":
      if (!v.service) return "Service is required";
      return undefined;
    case "address":
      if (!v.address.trim()) return "Service address is required";
      if (v.address.trim().length < 8 || !/\d/.test(v.address))
        return "Enter the street, city and zip code";
      return undefined;
    case "window":
      if (!v.date || !v.window) return "Choose a day and an arrival window";
      if (!isSlotAvailable(v.date, v.window)) return "That window has passed. Choose another one";
      return undefined;
    default:
      return undefined;
  }
}

function validate(v: BookingFields): FieldErrors {
  const e: FieldErrors = {};
  (Object.keys(emptyFields) as (keyof BookingFields)[]).forEach((key) => {
    const message = validateField(key, v);
    if (message) e[key] = message;
  });
  return e;
}

export function CallbackProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState("");

  const open = useCallback((t?: string) => {
    setTopic(t ?? "");
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <CallbackContext.Provider value={value}>
      {children}
      <CallbackModal isOpen={isOpen} onClose={close} initialTopic={topic} />
    </CallbackContext.Provider>
  );
}

function CallbackModal({
  isOpen,
  onClose,
  initialTopic,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialTopic: string;
}) {
  const [fields, setFields] = useState<BookingFields>(emptyFields);
  const fieldsRef = useRef(fields);
  fieldsRef.current = fields;
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [booked, setBooked] = useState("");
  const captchaRef = useRef<RecaptchaHandle>(null);

  useEffect(() => {
    if (!isOpen) return;
    const preset = serviceFromTopic(initialTopic);
    if (preset) setFields((current) => ({ ...current, service: preset }));
    setErrors({});
    setStatus("idle");
    setServerError("");
  }, [isOpen, initialTopic]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  function set<K extends keyof BookingFields>(key: K, value: BookingFields[K]) {
    const next = { ...fieldsRef.current, [key]: value };
    fieldsRef.current = next;
    setFields(next);
    setErrors((existing) => {
      if (!existing[key]) return existing;
      return { ...existing, [key]: validateField(key, next) };
    });
  }

  function blur<K extends keyof BookingFields>(key: K) {
    setErrors((existing) => ({
      ...existing,
      [key]: validateField(key, fieldsRef.current),
    }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = document.querySelector<HTMLElement>("[data-invalid='true']");
      first?.focus();
      return;
    }
    if (!captchaToken) {
      setServerError(CAPTCHA_REQUIRED);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const payload: CallbackRequest = {
      name: fields.name.trim(),
      phone: fields.phone.trim(),
      email: fields.email.trim(),
      address: fields.address.trim(),
      topic: fields.service,
      date: formatDayLabel(fields.date),
      window: fields.window,
    };
    const res = await requestCallback(payload, captchaToken);

    if (res.ok) {
      setStatus("success");
      setBooked(`${payload.date}, ${payload.window}`);
      setFields(emptyFields);
    } else {
      setServerError(res.error);
      setStatus("error");
      captchaRef.current?.reset();
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="callback-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative flex max-h-[100dvh] w-full flex-col overflow-y-auto sm:max-h-[min(92dvh,860px)]",
              status === "success"
                ? "max-w-[520px] rounded-t-[20px] bg-[#F8F9FB] sm:rounded-[20px]"
                : "max-w-[680px] rounded-t-[28px] bg-[#f6f6f8] sm:rounded-[28px]",
            )}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-[var(--radius-action)] text-ink-muted transition-colors hover:bg-black/[0.06]"
            >
              <X className="size-4" aria-hidden="true" />
            </button>

            {status === "success" ? (
              <div className="flex justify-center px-4 py-5 sm:px-6 sm:py-6">
                <div className="w-full max-w-[440px] rounded-[18px] border border-[#E8EAED] bg-white px-8 py-8 text-center shadow-[0_12px_32px_-20px_rgba(15,23,42,0.35)]">
                  <span className="mx-auto inline-flex size-[68px] items-center justify-center rounded-full bg-brand-500 text-white">
                    <Check className="size-8" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <h2
                    id="callback-title"
                    className="mt-4 text-[32px] font-semibold leading-tight tracking-tight"
                  >
                    Request received
                  </h2>
                  <p className="mx-auto mt-4 max-w-[22rem] text-[17px] leading-[1.5] text-[#525866]">
                    Thanks — we've received your service request.
                  </p>
                  {booked && (
                    <p className="mx-auto mt-3 max-w-[22rem] text-[17px] font-semibold leading-[1.5] text-ink">
                      {booked}
                    </p>
                  )}
                  <p className="mx-auto mt-3 max-w-[22rem] text-[17px] leading-[1.5] text-[#525866]">
                    We'll contact you shortly to confirm this arrival window.
                  </p>
                  <p className="mt-6 text-[17px] leading-[1.5] text-[#525866]">Urgent service?</p>
                  <a
                    href={company.phoneHref}
                    className="mt-1 block whitespace-nowrap text-[18px] font-semibold text-ink hover:text-brand-600"
                  >
                    224-360-1633
                  </a>
                  <Link
                    to="/"
                    onClick={onClose}
                    className="mx-auto mt-7 flex h-12 w-[200px] items-center justify-center rounded-[8px] bg-brand-500 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600"
                  >
                    Back to home
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={submit}
                noValidate
                className="overflow-y-auto px-5 pb-8 pt-8 sm:px-8"
              >
                <h2 id="callback-title" className="pr-12 text-[26px] font-semibold tracking-tight">
                  Add your contact details
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <TextField
                      id="book-name"
                      label="Name"
                      required
                      autoComplete="name"
                      value={fields.name}
                      error={errors.name}
                      onChange={(value) => set("name", value)}
                      onBlur={() => blur("name")}
                    />
                  </div>
                  <TextField
                    id="book-phone"
                    label="Phone number"
                    required
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={fields.phone}
                    error={errors.phone}
                    onChange={(value) => set("phone", value.replace(/[^\d+().\-\s]/g, ""))}
                    onBlur={() => blur("phone")}
                  />
                  <TextField
                    id="book-email"
                    label="E-mail address"
                    required
                    type="email"
                    autoComplete="email"
                    value={fields.email}
                    error={errors.email}
                    onChange={(value) => set("email", value)}
                    onBlur={() => blur("email")}
                  />

                  <div className="sm:col-span-2">
                    <SelectField
                      id="book-service"
                      label="Service"
                      required
                      value={fields.service}
                      error={errors.service}
                      onChange={(value) => set("service", value)}
                      onBlur={() => blur("service")}
                    >
                      <option value="">Choose a service</option>
                      {allServices.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Something else">Something else</option>
                    </SelectField>
                  </div>

                  <div className="sm:col-span-2">
                    <TextField
                      id="book-address"
                      label="Service address (street, unit, city, zip)"
                      required
                      autoComplete="street-address"
                      value={fields.address}
                      error={errors.address}
                      onChange={(value) => set("address", value)}
                      onBlur={() => blur("address")}
                    />
                  </div>

                  <div className="pt-3 sm:col-span-2">
                    <p className="mb-3 text-[15px] font-semibold text-ink">
                      Choose an arrival window *
                    </p>
                    <TimeSlotPicker
                      date={fields.date}
                      window={fields.window}
                      error={errors.window}
                      onChange={(date, window) => {
                        set("date", date);
                        set("window", window);
                      }}
                    />
                    {errors.window && (
                      <p id="book-slot-error" className="mt-1.5 px-1 text-[13px] text-[#e2186f]">
                        {errors.window}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <RecaptchaField ref={captchaRef} onChange={setCaptchaToken} />
                </div>

                {status === "error" && (
                  <p
                    role="alert"
                    className="mt-5 flex items-start gap-2.5 bg-red-50 px-4 py-3.5 text-[14px] text-red-700"
                  >
                    <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-[var(--radius-action)] bg-brand-500 text-[16px] font-semibold text-white transition-all hover:bg-brand-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    "Book service"
                  )}
                </button>

                <FormConsent
                  className="mt-3"
                  note="We only use this to schedule the visit."
                  action="booking service"
                />
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

const fieldShell =
  "peer w-full rounded-xl border bg-white px-4 text-[15px] text-ink outline-none transition-colors";

function TextField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  autoComplete,
  inputMode,
  onBlur,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "tel" | "email" | "text";
  onBlur?: () => void;
}) {
  const bad = Boolean(error);
  return (
    <div>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder=" "
          autoComplete={autoComplete}
          inputMode={inputMode}
          data-invalid={bad}
          aria-invalid={bad}
          aria-describedby={bad ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={cn(
            fieldShell,
            "pb-2.5 pt-6",
            bad ? "border-[#e2186f]" : "border-[#e3e3e8] focus:border-brand-500",
          )}
        />
        <label
          htmlFor={id}
          className={cn(
            "pointer-events-none absolute left-4 origin-left transition-all",
            "top-1/2 -translate-y-1/2 text-[15px]",
            "peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold",
            "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-semibold",
            bad ? "text-[#e2186f]" : "text-[#8b909a] peer-focus:text-ink-muted",
          )}
        >
          {label}
          {required && " *"}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 px-1 text-[13px] text-[#e2186f]">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  autoComplete,
  onBlur,
  children,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  onBlur?: () => void;
  children: ReactNode;
}) {
  const bad = Boolean(error);
  const floated = Boolean(value);
  return (
    <div>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          autoComplete={autoComplete}
          data-invalid={bad}
          aria-invalid={bad}
          aria-label={`${label}${required ? " *" : ""}`}
          aria-describedby={bad ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={cn(
            "w-full appearance-none rounded-xl border bg-white px-4 pr-10 text-[15px] text-ink outline-none transition-colors",
            floated ? "pb-2.5 pt-6" : "py-[18px] text-transparent",
            bad ? "border-[#e2186f]" : "border-[#e3e3e8] focus:border-brand-500",
          )}
        >
          {children}
        </select>
        <span
          className={cn(
            "pointer-events-none absolute left-4 transition-all",
            floated
              ? "top-2 text-[11px] font-semibold"
              : "top-1/2 -translate-y-1/2 text-[15px]",
            bad ? "text-[#e2186f]" : "text-[#8b909a]",
          )}
        >
          {label}
          {required && " *"}
        </span>
        <ChevronDown
          className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-[#6b7080]"
          aria-hidden="true"
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 px-1 text-[13px] text-[#e2186f]">
          {error}
        </p>
      )}
    </div>
  );
}
