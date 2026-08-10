import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service | YC Events LED Wall Rental Sri Lanka",
  description:
    "Terms of service for YC Events LED wall rent and event production bookings in Sri Lanka. Quotes, bookings, delivery and on-site operation.",
  path: "/terms",
  keywords: ["YC Events terms", "LED wall hire Sri Lanka terms"],
});

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-8 sm:py-20">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-ink">
        Terms of Service
      </h1>
      <div className="space-y-4 text-sm leading-relaxed text-muted">
        <p>
          These terms apply to LED wall hire, LED screen hire and related
          event production services provided by YC Events (Yasitha Creations)
          in Sri Lanka.
        </p>
        <h2 className="pt-4 text-base font-bold text-ink">Quotes and bookings</h2>
        <p>
          Quotes are valid for the period stated on your proposal. A confirmed
          booking requires acceptance of the quote and any deposit or payment
          terms agreed in writing.
        </p>
        <h2 className="pt-4 text-base font-bold text-ink">Delivery and operation</h2>
        <p>
          LED screen delivery, rigging and on-site operation are included as
          described in your quote. Client-provided content must be supplied in
          agreed formats before the event where possible.
        </p>
        <h2 className="pt-4 text-base font-bold text-ink">Cancellations</h2>
        <p>
          Cancellation terms are set out in your booking confirmation. Contact
          us as early as possible if your event date or venue changes.
        </p>
        <h2 className="pt-4 text-base font-bold text-ink">Contact</h2>
        <p>
          Questions about these terms? Visit our{" "}
          <Link href="/contact" className="text-brand underline-offset-2 hover:underline">
            contact page
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
