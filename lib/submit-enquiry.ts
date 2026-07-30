import type { EnquiryPayload } from "@/lib/email/enquiry";
import type { QuoteFormValues } from "@/types/site";

export async function submitEnquiry(
  values: QuoteFormValues,
  source: EnquiryPayload["source"]
): Promise<void> {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...values, source }),
  });

  const data = (await response.json().catch(() => null)) as {
    error?: string;
  } | null;

  if (!response.ok) {
    throw new Error(data?.error ?? "Failed to send enquiry");
  }
}
