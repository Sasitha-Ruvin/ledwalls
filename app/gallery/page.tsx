import { GalleryPageContent } from "@/components/gallery/GalleryPageContent";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildGallerySchema, GalleryPageMeta } from "@/lib/data/gallery";
import { buildPageMetadata, SITE_OG_IMAGE, SITE_OG_IMAGE_ALT } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: GalleryPageMeta.title,
  description: GalleryPageMeta.description,
  path: "/gallery",
  keywords: GalleryPageMeta.keywords,
  ogImage: SITE_OG_IMAGE,
  ogImageAlt: SITE_OG_IMAGE_ALT,
});

export default function GalleryPage() {
  return (
    <main>
      <JsonLd data={buildGallerySchema()} />
      <GalleryPageContent />
    </main>
  );
}
