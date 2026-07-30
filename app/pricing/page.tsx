import type { Metadata } from "next";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { PricingPageMetaData } from "@/lib/data/pricing";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: PricingPageMetaData.title,
  description: PricingPageMetaData.description,
  path: "/pricing",
  keywords: PricingPageMetaData.keywords,
  ogImage: "/images/heroimages/pricing_hero.webp",
  ogImageAlt: "LED wall rental pricing Sri Lanka by YC Events",
});

export default function PricingPage() {
  return (
    <main>
      <PricingPageContent />
    </main>
  );
}
