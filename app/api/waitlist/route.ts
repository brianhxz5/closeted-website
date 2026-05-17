import { NextRequest } from "next/server";
import { Resend } from "resend";

/*
 * Required env vars (add to .env.local and Vercel project settings):
 *   RESEND_API_KEY   — from resend.com/api-keys
 *   RESEND_AUDIENCE_ID — from resend.com/audiences (create a "closeted waitlist" audience)
 */

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  if (!name || typeof name !== "string" || !email || !email.includes("@")) {
    return Response.json({ error: "invalid input" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) {
    /* env not configured yet — succeed silently in dev so the UI flow works */
    console.warn("[waitlist] RESEND env vars not set, skipping API call");
    console.log("[waitlist]", { name, email, ts: new Date().toISOString() });
    return Response.json({ ok: true });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.contacts.create({
      email,
      firstName: name.split(" ")[0],
      lastName: name.split(" ").slice(1).join(" ") || undefined,
      audienceId: process.env.RESEND_AUDIENCE_ID,
      unsubscribed: false,
    });
  } catch (err) {
    console.error("[waitlist] resend error", err);
    return Response.json({ error: "service error" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
