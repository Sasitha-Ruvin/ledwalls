import type { PortfolioImage } from "@/types/site";
import { buildPageJsonLd, LOCAL_BUSINESS_ID } from "@/lib/json-ld";
import { SITE_URL } from "@/lib/site";
import manifest from "./gallery-manifest.json";

/** SEO-named copies live in `public/images/portfolio/`. Re-sync from `assets/` via `node scripts/sync-asset-images.mjs`. */
const assetManifest = manifest as PortfolioImage[];

/** Exhibition portfolio photos: add here when project images are ready. */
export const ExhibitionPortfolio: PortfolioImage[] = [];

export const LedWallPortfolio: PortfolioImage[] = assetManifest.filter((item) =>
  ["wedding", "award-ceremony", "concert", "corporate"].includes(
    item.category ?? ""
  )
);

export const StageStockPortfolio: PortfolioImage[] = [
  {
    src: "/images/portfolio/stage/indoor-stage-rental-sri-lanka.jpg",
    alt: "Indoor stage hire for hotel ballroom and conference Sri Lanka by YC Events",
    category: "stage",
  },
  {
    src: "/images/portfolio/stage/event-stage-carpet-hire-sri-lanka.jpg",
    alt: "Event stage carpet skirting and dressing hire Sri Lanka by YC Events",
    category: "stage",
  },
  {
    src: "/images/portfolio/stage/wedding-stage-platform-carpet-sri-lanka.jpg",
    alt: "Wedding stage platform with carpet and skirting Sri Lanka by YC Events",
    category: "stage",
  },
];

export const StagePortfolio: PortfolioImage[] = [
  ...assetManifest.filter((item) => item.category === "stage"),
  ...StageStockPortfolio,
];

export const LightingFogPortfolio: PortfolioImage[] = assetManifest.filter(
  (item) => item.category === "concert"
);

export const PodiumPortfolio: PortfolioImage[] = assetManifest.filter(
  (item) => item.category === "podium"
);

export const GalleryImages: PortfolioImage[] = [
  ...assetManifest,
  ...StageStockPortfolio,
];

export const LedWallPortfolioIntro = {
  eyebrow: "LED wall portfolio",
  title: "Recent LED screen hires across Sri Lanka",
  description:
    "Real weddings, award ceremonies, concerts and corporate events delivered by YC Events. Indoor P3 backdrops and outdoor IP65 concert walls.",
};

export const ServicesPagePortfolioIntro = {
  eyebrow: "Project portfolio",
  title: "Events we've delivered across Sri Lanka",
  description:
    "LED wall hires, stage builds and digital podiums from real YC Events bookings. Filter by event type or browse the full gallery.",
};

export const GalleryPageMeta = {
  title: "Gallery | LED Wall Rental Portfolio Sri Lanka",
  description:
    "YC Events gallery: LED wall hire, stage and truss builds, and digital podiums across Sri Lanka. Weddings, concerts, corporate events and award ceremonies.",
  keywords: [
    "LED wall rent gallery Sri Lanka",
    "event production portfolio Colombo",
    "LED screen hire photos",
  ],
  canonical: `${SITE_URL}/gallery`,
};

export const GalleryPageIntro = {
  eyebrow: "YC Events gallery",
  title: "LED walls, stages and events we've delivered.",
  description:
    "Project photos from weddings, concerts, award ceremonies, corporate events, stage builds and digital podiums. All images are from YC Events bookings across Sri Lanka.",
  imageSrc: "/images/portfolio/led-wall/led-wall-concert-stage-sri-lanka-01.webp",
  imageAlt:
    "LED wall rent concert stage Sri Lanka outdoor IP65 screen by YC Events",
};

export function buildGallerySchema() {
  return buildPageJsonLd({
    path: "/gallery",
    name: GalleryPageMeta.title,
    description: GalleryPageMeta.description,
    extra: [
      {
        "@type": "ImageGallery",
        name: "YC Events LED wall rent portfolio",
        description: GalleryPageMeta.description,
        url: GalleryPageMeta.canonical,
        publisher: { "@id": LOCAL_BUSINESS_ID },
      },
    ],
  });
}
