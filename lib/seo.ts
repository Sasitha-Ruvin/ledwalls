import type { Metadata } from "next";
import { SITE_FACEBOOK_URL } from "@/lib/data/contact";
import { SITE_URL } from "@/lib/site";

export const SITE_NAME = "YC Events";
export const SITE_OG_IMAGE = "/images/og/yc-events-led-wall-rental-sri-lanka-og.jpeg";
export const SITE_OG_IMAGE_ALT =
  "LED wall hire Sri Lanka LED wall rent outdoor concert LED screen by YC Events";
export const SITE_OG_IMAGE_WIDTH = 1200;
export const SITE_OG_IMAGE_HEIGHT = 630;

export const SITE_DEFAULT_DESCRIPTION =
  "LED wall hire and rent across Sri Lanka. Indoor P3 and outdoor IP65 LED screens with operator included. Colombo, Kandy, Jaffna and all 25 districts.";

export const SITE_DEFAULT_KEYWORDS = [
  "LED wall",
  "LED wall hire Sri Lanka",
  "LED wall rent Sri Lanka",
  "LED wall hire Sri Lanka",
  "LED wall hire near me",
  "LED wall rent near me",
  "ledwall hire Sri Lanka",
  "ledwall rent Sri Lanka",
  "LED wall hire Colombo",
  "LED wall rent Colombo",
  "LED screen hire Sri Lanka",
  "LED screen rent Sri Lanka",
  "LED video wall hire Sri Lanka",
  "LED screen hire Colombo",
  "outdoor LED screen rent Sri Lanka",
  "wedding LED screen rent Sri Lanka",
  "jumbo screen hire Sri Lanka",
  "LED display rent Sri Lanka",
  "big LED screen rent Sri Lanka",
  "LED wall Sri Lanka",
] as const;

export const SITE_SOCIAL_LINKS = [
  SITE_FACEBOOK_URL,
  "https://yasithacreations.lk",
] as const;

/** Build absolute URLs for canonical, Open Graph, and sitemap entries. */
export function absoluteUrl(path = ""): string {
  if (!path || path === "/") return SITE_URL;
  if (path.startsWith("http")) return path.replace(/\/$/, "") || SITE_URL;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
}

/** Shared metadata builder for app routes (canonical, Open Graph, Twitter). */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = SITE_OG_IMAGE,
  ogImageAlt = SITE_OG_IMAGE_ALT,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const imagePath = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);
  const imageAlt = ogImageAlt ?? `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: keywords ?? [...SITE_DEFAULT_KEYWORDS],
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_LK",
      images: [
        {
          url: imagePath,
          alt: imageAlt,
          width: SITE_OG_IMAGE_WIDTH,
          height: SITE_OG_IMAGE_HEIGHT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imagePath],
    },
  };
}
