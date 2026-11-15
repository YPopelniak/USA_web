import { sendToFormspree } from "./forms";

export type CallbackRequest = {
  name: string;
  phone: string;
  email: string;
  address: string;
  topic: string;
  /** Human-readable day, e.g. "Monday, Nov 16". */
  date: string;
  /** Arrival window, e.g. "8:00 AM - 10:00 AM". */
  window: string;
};

export type CallbackResult =
  | { ok: true; etaMinutes: number }
  | { ok: false; error: string };

/** "Book service" modal. Same inbox as the contact form, different subject. */
export async function requestCallback(
  req: CallbackRequest,
  captchaToken: string,
): Promise<CallbackResult> {
  const res = await sendToFormspree(
    {
      form: "Booking request",
      name: req.name,
      email: req.email,
      phone: req.phone,
      address: req.address,
      service: req.topic,
      topic: req.topic,
      preferred_date: req.date,
      preferred_window: req.window,
    },
    `BOOKING — ${req.name} — ${req.topic} — ${req.date}, ${req.window}`,
    captchaToken,
  );

  if (!res.ok) return res;
  return { ok: true, etaMinutes: 60 };
}
