import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | YC Events LED Wall Hire Sri Lanka",
  description:
    "Privacy policy for YC Events LED wall hire enquiries, quote forms and website contact. How we collect, use and protect your information.",
  path: "/privacy",
  keywords: ["YC Events privacy policy", "LED wall hire Sri Lanka"],
});

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-8 sm:py-20">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-ink">
        Privacy Policy
      </h1>
      <div className="space-y-4 text-sm leading-relaxed text-muted">
        <p>
          YC Events (Yasitha Creations) respects your privacy. This policy
          explains how we handle information when you contact us about LED wall
          hire, LED screen rent or other event production services in Sri
          Lanka.
        </p>
        <h2 className="pt-4 text-base font-bold text-ink">Information we collect</h2>
        <p>
          When you submit a quote or contact form, we collect details you
          provide such as name, phone number, email, event date, venue and
          service requirements. We may also receive messages sent via WhatsApp
          or phone calls related to your enquiry.
        </p>
        <h2 className="pt-4 text-base font-bold text-ink">How we use your information</h2>
        <p>
          We use your information to respond to enquiries, prepare LED screen
          hire quotes, coordinate delivery and event setup, and improve our
          services. We do not sell your personal data to third parties.
        </p>
        <h2 className="pt-4 text-base font-bold text-ink">Contact</h2>
        <p>
          For privacy questions, contact us via the{" "}
          <Link href="/contact" className="text-brand underline-offset-2 hover:underline">
            contact page
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
