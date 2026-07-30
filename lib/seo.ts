import type { Metadata } from "next";
import {
  OFFICE_GOOGLE_MAPS_URL,
  OFFICE_NAME,
  PRIMARY_PHONE_E164,
  SECONDARY_PHONE_E164,
  SITE_EMAIL,
  SITE_FACEBOOK_URL,
} from "@/lib/data/contact";
import { SITE_URL } from "@/lib/site";

export const SITE_NAME = "YC Events";
export const SITE_OG_IMAGE = "/images/og/yc-events-led-wall-rental-sri-lanka-og.jpeg";
export const SITE_OG_IMAGE_ALT =
  "LED wall rental Sri Lanka outdoor concert LED screen hire by YC Events";
export const SITE_OG_IMAGE_WIDTH = 1200;
export const SITE_OG_IMAGE_HEIGHT = 630;

export const SITE_DEFAULT_DESCRIPTION =
  "LED screen rental and LED wall hire in Sri Lanka. Indoor P3 and outdoor IP65 LED video walls with operator included. Colombo, Kandy and all 25 districts.";

export const SITE_DEFAULT_KEYWORDS = [
  "LED wall rental Sri Lanka",
  "LED screen hire Sri Lanka",
  "LED screen rent Sri Lanka",
  "LED video wall rental Sri Lanka",
  "LED wall hire Colombo",
  "LED screen rental Colombo",
  "outdoor LED screen rental Sri Lanka",
  "wedding LED screen rental Sri Lanka",
  "jumbo screen rental Sri Lanka",
  "LED display rental Sri Lanka",
  "big LED screen rent Sri Lanka",
] as const;

export const SITE_SOCIAL_LINKS = [
  SITE_FACEBOOK_URL,
  "https://yasithacreations.lk",
] as const;

/** Build absolute URLs for canonical, Open Graph, and sitemap entries. */
export function absoluteUrl(path = ""): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
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

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: OFFICE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/images/logo.webp"),
    image: absoluteUrl(SITE_OG_IMAGE),
    telephone: [PRIMARY_PHONE_E164, SECONDARY_PHONE_E164],
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 114, Barigama Road",
      addressLocality: "Halloluwa",
      addressRegion: "Kandy",
      postalCode: "20000",
      addressCountry: "LK",
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    hasMap: OFFICE_GOOGLE_MAPS_URL,
    description: SITE_DEFAULT_DESCRIPTION,
    sameAs: [...SITE_SOCIAL_LINKS],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-LK",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export const rootJsonLd = {
  "@context": "https://schema.org",
  "@graph": [buildOrganizationSchema(), buildWebSiteSchema()],
};
