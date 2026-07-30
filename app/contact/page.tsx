import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  buildContactPageSchema,
  ContactPageMeta,
} from "@/lib/data/contact-page";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact YC Events | LED Wall Rental Sri Lanka",
  description: ContactPageMeta.description,
  path: "/contact",
  keywords: ContactPageMeta.keywords,
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={buildContactPageSchema()} />
      <ContactPageContent />
    </main>
  );
}
