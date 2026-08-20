import { ServicePortfolioGallery } from "@/components/services/ServicePortfolioGallery";
import { PageHero } from "@/components/shared/PageHero";
import { GalleryImages, GalleryPageIntro } from "@/lib/data/gallery";

export function GalleryPageContent() {
  return (
    <>
      <PageHero
        imageSrc={GalleryPageIntro.imageSrc}
        imageAlt={GalleryPageIntro.imageAlt}
        eyebrow={GalleryPageIntro.eyebrow}
        title={GalleryPageIntro.title}
        description={GalleryPageIntro.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
        minHeightClass="min-h-[22rem] sm:min-h-[26rem] lg:min-h-[30rem]"
      />
      <ServicePortfolioGallery
        items={GalleryImages}
        eyebrow="All projects"
        title="Browse by event type"
        description="Filter weddings, concerts, corporate events, stages and podiums. Every photo is from a YC Events delivery."
      />
    </>
  );
}
