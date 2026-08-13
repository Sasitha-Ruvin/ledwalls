import type { QuoteFormValues } from "@/types/site";

export type EnquirySource = "contact-page" | "quote-dialog";

export interface EnquiryPayload extends QuoteFormValues {
  source: EnquirySource;
}

export function formatEnquiryEmail(payload: EnquiryPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const sourceLabel =
    payload.source === "contact-page" ? "Contact page" : "Quote dialog";

  const needs =
    payload.needs.length > 0 ? payload.needs.join(", ") : "Not specified";

  const lines = [
    `Source: ${sourceLabel}`,
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Event / service: ${payload.service || "Not specified"}`,
    `Event date: ${payload.date || "Not specified"}`,
    `Location: ${payload.venue || "Not specified"}`,
    `Audience: ${payload.audience || "Not specified"}`,
    `Services needed: ${needs}`,
    `Message: ${payload.message || "—"}`,
  ];

  const subject = `YC Events enquiry: ${payload.name} · ${payload.service || "LED wall"}`;

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#0D0D0D;line-height:1.6">
      <h2 style="color:#D01B1B;margin:0 0 16px">New enquiry from ${payload.name}</h2>
      <p style="margin:0 0 12px"><strong>Source:</strong> ${sourceLabel}</p>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        <tbody>
          <tr><td style="padding:8px 0;border-bottom:1px solid #E0DFDC"><strong>Name</strong></td><td style="padding:8px 0;border-bottom:1px solid #E0DFDC">${escapeHtml(payload.name)}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #E0DFDC"><strong>Phone</strong></td><td style="padding:8px 0;border-bottom:1px solid #E0DFDC">${escapeHtml(payload.phone)}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #E0DFDC"><strong>Event / service</strong></td><td style="padding:8px 0;border-bottom:1px solid #E0DFDC">${escapeHtml(payload.service || "—")}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #E0DFDC"><strong>Event date</strong></td><td style="padding:8px 0;border-bottom:1px solid #E0DFDC">${escapeHtml(payload.date || "—")}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #E0DFDC"><strong>Location</strong></td><td style="padding:8px 0;border-bottom:1px solid #E0DFDC">${escapeHtml(payload.venue || "—")}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #E0DFDC"><strong>Audience</strong></td><td style="padding:8px 0;border-bottom:1px solid #E0DFDC">${escapeHtml(payload.audience || "—")}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #E0DFDC"><strong>Services needed</strong></td><td style="padding:8px 0;border-bottom:1px solid #E0DFDC">${escapeHtml(needs)}</td></tr>
        </tbody>
      </table>
      <p style="margin:16px 0 8px"><strong>Message</strong></p>
      <p style="margin:0;padding:12px;background:#F5F4F2;border-radius:8px">${escapeHtml(payload.message || "—")}</p>
    </div>
  `;

  return {
    subject,
    html,
    text: lines.join("\n"),
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function parseEnquiryPayload(body: unknown): EnquiryPayload | null {
  if (!body || typeof body !== "object") return null;

  const record = body as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const phone = typeof record.phone === "string" ? record.phone.trim() : "";
  const source = record.source;

  if (!name || name.length < 2) return null;
  if (!phone || phone.length < 7) return null;
  if (source !== "contact-page" && source !== "quote-dialog") return null;

  const needs = Array.isArray(record.needs)
    ? record.needs.filter((item): item is string => typeof item === "string")
    : [];

  return {
    source,
    name,
    phone,
    service: typeof record.service === "string" ? record.service.trim() : "",
    date: typeof record.date === "string" ? record.date.trim() : "",
    venue: typeof record.venue === "string" ? record.venue.trim() : "",
    audience: typeof record.audience === "string" ? record.audience.trim() : "",
    message: typeof record.message === "string" ? record.message.trim() : "",
    needs,
  };
}
