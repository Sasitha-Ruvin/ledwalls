import type { Metadata } from "next";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { PricingPageMetaData } from "@/lib/data/pricing";
import { buildPageMetadata, SITE_OG_IMAGE, SITE_OG_IMAGE_ALT } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: PricingPageMetaData.title,
  description: PricingPageMetaData.description,
  path: "/pricing",
  keywords: PricingPageMetaData.keywords,
  ogImage: SITE_OG_IMAGE,
  ogImageAlt: SITE_OG_IMAGE_ALT,
});

export default function PricingPage() {
  return (
    <main>
      <PricingPageContent />
    </main>
  );
}
