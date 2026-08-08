import {
  OFFICE_GOOGLE_MAPS_URL,
  OFFICE_LOCALITY,
  OFFICE_NAME,
  OFFICE_POSTAL_CODE,
  OFFICE_REGION,
  OFFICE_STREET,
  SITE_EMAIL,
  SITE_PHONE_NUMBERS_E164,
} from "@/lib/data/contact";
import {
  absoluteUrl,
  SITE_DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_SOCIAL_LINKS,
} from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import type { BreadcrumbItem, FaqItem } from "@/types/site";

export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Published LED wall daily rates (LKR) for schema.org priceRange. */
export const SITE_PRICE_RANGE = "LKR 55,000 - LKR 200,000";

export interface LocalBusinessNodeOptions {
  url?: string;
  description?: string;
  areaServed?: string | Record<string, unknown>;
  extra?: Record<string, unknown>;
}

export function pageUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildJsonLd(graph: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildLocalBusinessNode(
  options: LocalBusinessNodeOptions = {}
): Record<string, unknown> {
  const areaServed = options.areaServed ?? {
    "@type": "Country",
    name: "Sri Lanka",
  };

  return {
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: SITE_NAME,
    legalName: OFFICE_NAME,
    description: options.description ?? SITE_DEFAULT_DESCRIPTION,
    url: options.url ?? SITE_URL,
    telephone: [...SITE_PHONE_NUMBERS_E164],
    email: SITE_EMAIL,
    image: absoluteUrl(SITE_OG_IMAGE),
    logo: absoluteUrl("/images/logo.webp"),
    priceRange: SITE_PRICE_RANGE,
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_STREET,
      addressLocality: OFFICE_LOCALITY,
      addressRegion: OFFICE_REGION,
      postalCode: OFFICE_POSTAL_CODE,
      addressCountry: "LK",
    },
    areaServed,
    hasMap: OFFICE_GOOGLE_MAPS_URL,
    sameAs: [...SITE_SOCIAL_LINKS],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    foundingDate: "2018",
    ...options.extra,
  };
}

export function buildWebSiteNode(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DEFAULT_DESCRIPTION,
    publisher: { "@id": LOCAL_BUSINESS_ID },
    inLanguage: "en-LK",
  };
}

export function buildWebPageNode(
  path: string,
  name: string,
  description: string,
  pageType?: string
): Record<string, unknown> {
  const url = pageUrl(path);
  return {
    "@type": pageType ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": LOCAL_BUSINESS_ID },
    publisher: { "@id": LOCAL_BUSINESS_ID },
  };
}

export function buildFaqPageNode(
  faqs: FaqItem[],
  path: string
): Record<string, unknown> {
  const url = pageUrl(path);
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** BreadcrumbList schema matching the visual <Breadcrumbs> trail on each page. */
export function buildBreadcrumbListNode(
  items: BreadcrumbItem[],
  path: string
): Record<string, unknown> {
  const url = pageUrl(path);
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? pageUrl(item.href) : url,
    })),
  };
}

export interface PageJsonLdInput {
  path: string;
  name: string;
  description: string;
  faqs?: FaqItem[];
  breadcrumbs?: BreadcrumbItem[];
  pageType?: string;
  extra?: Record<string, unknown>[];
}

/** WebPage + optional FAQPage, BreadcrumbList, and extra nodes (references canonical LocalBusiness by @id). */
export function buildPageJsonLd(input: PageJsonLdInput) {
  const graph: Record<string, unknown>[] = [
    buildWebPageNode(
      input.path,
      input.name,
      input.description,
      input.pageType
    ),
  ];

  if (input.faqs?.length) {
    graph.push(buildFaqPageNode(input.faqs, input.path));
  }

  if (input.breadcrumbs?.length) {
    graph.push(buildBreadcrumbListNode(input.breadcrumbs, input.path));
  }

  if (input.extra?.length) {
    graph.push(...input.extra);
  }

  return buildJsonLd(graph);
}

export function buildSiteRootJsonLd() {
  return buildJsonLd([buildLocalBusinessNode(), buildWebSiteNode()]);
}
