import type { Metadata } from "next";
import { CoverageSection } from "@/components/services/CoverageSection";
import { LedWallCityLinks } from "@/components/services/LedWallCityLinks";
import { LedWallEventFocusSection } from "@/components/services/LedWallEventFocusSection";
import { OtherServicesStrip } from "@/components/services/OtherServicesStrip";
import ServiceDetailsRow from "@/components/services/ServiceDetailsRow";
import { ServicePortfolioGallery } from "@/components/services/ServicePortfolioGallery";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesQuoteSection } from "@/components/services/ServicesQuoteSection";
import { LedWallServicePricingSection } from "@/components/pricing/LedWallServicePricingSection";
import { JsonLd } from "@/components/shared/JsonLd";
import TickerBar from "@/components/home/TickerBar";
import {
  GalleryImages,
  ServicesPagePortfolioIntro,
} from "@/lib/data/gallery";
import {
  buildServicesSchema,
  LedWallAddonServices,
  ServicesList,
  ServicesPageMetaData,
} from "@/lib/data/services";
import { buildPageMetadata } from "@/lib/seo";

const [ledWallService] = ServicesList;

export const metadata: Metadata = buildPageMetadata({
  title: ServicesPageMetaData.title,
  description: ServicesPageMetaData.description,
  path: "/services",
  keywords: ServicesPageMetaData.keywords,
  ogImage: "/images/heroimages/ledrentalhero.webp",
  ogImageAlt: "LED video wall rental Sri Lanka by YC Events",
});

const ServicesPage = () => {
  return (
    <main>
      <JsonLd data={buildServicesSchema()} />
      <ServicesHeroSection />
      <TickerBar />

      <ServiceDetailsRow {...ledWallService} reverse={false} />
      <LedWallEventFocusSection />
      <LedWallServicePricingSection />

      <OtherServicesStrip services={LedWallAddonServices} />

      <CoverageSection />
      <LedWallCityLinks />

      <ServicePortfolioGallery
        items={GalleryImages}
        eyebrow={ServicesPagePortfolioIntro.eyebrow}
        title={ServicesPagePortfolioIntro.title}
        description={ServicesPagePortfolioIntro.description}
      />

      <ServicesQuoteSection />
    </main>
  );
};

export default ServicesPage;
