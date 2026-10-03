import { sendToFormspree } from "./forms";

export type CallbackRequest = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  street: string;
  unit: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  topic: string;
};

export type CallbackResult =
  | { ok: true; etaMinutes: number }
  | { ok: false; error: string };

/** "Book service" modal. Same inbox as the contact form, different subject. */
export async function requestCallback(
  req: CallbackRequest,
): Promise<CallbackResult> {
  const name = `${req.firstName} ${req.lastName}`.trim();
  const address = [req.street, req.unit, `${req.city}, ${req.state} ${req.zip}`, req.country]
    .filter(Boolean)
    .join(", ");

  const res = await sendToFormspree(
    {
      form: "Booking request",
      name,
      first_name: req.firstName,
      last_name: req.lastName,
      email: req.email,
      phone: req.phone,
      street: req.street,
      unit: req.unit || "(none)",
      city: req.city,
      state: req.state,
      zip: req.zip,
      country: req.country,
      address,
      service: req.topic,
      topic: req.topic,
    },
    `BOOKING — ${name} — ${req.topic} — ${req.city}`,
  );

  if (!res.ok) return res;
  return { ok: true, etaMinutes: 60 };
}
