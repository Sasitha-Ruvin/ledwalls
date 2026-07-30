import { Resend } from "resend";
import { SITE_EMAIL } from "@/lib/data/contact";
import {
  formatEnquiryEmail,
  type EnquiryPayload,
} from "@/lib/email/enquiry";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function sendEnquiryEmail(payload: EnquiryPayload) {
  const resend = getResendClient();
  const to = process.env.INQUIRY_TO_EMAIL?.trim() || SITE_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "YC Events <onboarding@resend.dev>";

  const { subject, html, text } = formatEnquiryEmail(payload);

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    subject,
    html,
    text,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
