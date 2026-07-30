import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import ClientLogoStrip from "@/components/home/ClientLogoStrip";
import CtaSection from "@/components/home/CtaSection";
import EventTypeSection from "@/components/home/EventTypeSection";
import FAQSection from "@/components/home/FAQSection";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import { HeroSection } from "@/components/home/HeroSection";
import { LedRentalUsesSection } from "@/components/home/LedRentalUsesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsBar from "@/components/home/StatsBar";
import TickerBar from "@/components/home/TickerBar";
import WhyUsSection from "@/components/home/WhyUsSection";
import { buildHomeSchema, HomePageMetaData } from "@/lib/data/home";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: HomePageMetaData.title,
  description: HomePageMetaData.description,
  path: "/",
  keywords: HomePageMetaData.keywords,
  ogImage: "/images/heroimages/homehero.webp",
  ogImageAlt: "LED wall rental Sri Lanka by YC Events",
});

export default function Page() {
  return (
    <>
      <JsonLd data={buildHomeSchema()} />
      <HeroSection />
      <TickerBar />
      <LedRentalUsesSection />
      <ClientLogoStrip />
      <ServicesGrid />
      <GalleryTeaser />
      <WhyUsSection />
      <StatsBar />
      <EventTypeSection />
      <ProcessSection />
      <FAQSection />
      <CtaSection />
    </>
  );
}
