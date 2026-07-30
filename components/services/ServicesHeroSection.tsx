import { PageHero } from "@/components/shared/PageHero";
import { ServicesHeroData } from "@/lib/data/services";
import type { ServicesPageHero } from "@/types/site";

interface ServicesHeroSectionProps {
  content?: ServicesPageHero;
}

export function ServicesHeroSection({
  content = ServicesHeroData,
}: ServicesHeroSectionProps) {
  return (
    <PageHero
      imageSrc={content.imageSrc}
      imageAlt={content.imageAlt}
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleLine1}
          <br />
          {content.titleLine2}
        </>
      }
      description={content.description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]}
      minHeightClass="min-h-[28rem] sm:min-h-[32rem] lg:min-h-[36rem]"
    />
  );
}