import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { GoogleAdsTag } from "@/components/analytics/GoogleAdsTag";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  buildContactPageSchema,
  ContactPageMeta,
} from "@/lib/data/contact-page";
import { buildPageMetadata, SITE_OG_IMAGE, SITE_OG_IMAGE_ALT } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact YC Events | LED Wall Rental Sri Lanka",
  description: ContactPageMeta.description,
  path: "/contact",
  keywords: ContactPageMeta.keywords,
  ogImage: SITE_OG_IMAGE,
  ogImageAlt: SITE_OG_IMAGE_ALT,
});

export default function ContactPage() {
  return (
    <main>
      <GoogleAdsTag />
      <JsonLd data={buildContactPageSchema()} />
      <ContactPageContent />
    </main>
  );
}
