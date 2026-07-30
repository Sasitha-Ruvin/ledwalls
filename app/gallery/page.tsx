import { GalleryPageContent } from "@/components/gallery/GalleryPageContent";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildGallerySchema, GalleryPageMeta } from "@/lib/data/gallery";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: GalleryPageMeta.title,
  description: GalleryPageMeta.description,
  path: "/gallery",
  keywords: GalleryPageMeta.keywords,
  ogImage:
    "/images/portfolio/led-wall/led-wall-concert-stage-sri-lanka-01.webp",
  ogImageAlt: GalleryPageMeta.description,
});

export default function GalleryPage() {
  return (
    <main>
      <JsonLd data={buildGallerySchema()} />
      <GalleryPageContent />
    </main>
  );
}
