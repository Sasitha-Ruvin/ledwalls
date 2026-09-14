import type { FaqItem, LedUseCaseBlock, PricingPageMeta } from "@/types/site";
import { images } from "@/lib/images";
import { buildPageJsonLd, LOCAL_BUSINESS_ID } from "@/lib/json-ld";
import {
  LedWallRatesFootnote,
  LedWallRatesIntro,
  LedWallRatesSummary,
  LedWallPricingHighlights,
  LedWallCustomSizesNote,
  LedWallStartingPriceDisplay,
  LedWallPricingExclusions,
  LED_WALL_STARTING_PRICE_LKR,
} from "@/lib/data/led-wall-pricing";
import { LED_WALL_SERVICE_HREF, STAGE_LIGHTING_FOG_SERVICE_HREF } from "@/lib/data/services";
import { SITE_URL } from "@/lib/site";

export const PricingPageMetaData: PricingPageMeta = {
  title: "LED Wall Hire Price Sri Lanka | From LKR 50,000",
  description:
    "LED wall hire pricing in Sri Lanka starts from LKR 50,000 onwards. Transport, setup and additional equipment charged separately. Get an itemised quote in 60 minutes.",
  keywords: [
    "LED wall hire price Sri Lanka",
    "LED wall rent price Sri Lanka",
    "LED wall hire Sri Lanka",
    "LED wall rent Sri Lanka",
    "LED wall hire cost",
    "LED screen rent price LKR",
    "how much does LED wall hire cost Sri Lanka",
    "LED wall hire Colombo",
    "LED wall rent Colombo",
  ],
  canonical: `${SITE_URL}/pricing`,
};

export const PricingHeroContent = {
  eyebrow: "LED wall hire price · Sri Lanka",
  titleLine1: "LED Wall Hire",
  titleLine2: "Pricing",
  description: `Starts from ${LedWallStartingPriceDisplay} onwards. ${LedWallPricingExclusions} Custom sizes quoted to your venue.`,
  imageSrc: images.pricingHero,
  imageAlt: "LED wall hire price Sri Lanka",
};

export const PricingIncludes = [
  {
    title: "Itemised LKR quote",
    body: "Tell us your wall size, venue and date. We reply with a clear quote within 60 minutes.",
  },
  {
    title: "Indoor and outdoor panels",
    body: "P3 indoor fine-pitch and IP65 outdoor rated walls for concerts, weddings and corporate events.",
  },
  {
    title: "Custom sizing",
    body: "Walls built to your venue, not a fixed catalogue size. Quoted to your exact dimensions.",
  },
  {
    title: "Production add-ons available",
    body: "Stage truss, rotating lights, fog, sound, stalls and podiums available on the same booking.",
  },
  {
    title: "Island-wide coverage",
    body: "Colombo, Kandy, Galle, Jaffna and all 25 districts. Transport is quoted separately.",
  },
  {
    title: "Trained crew",
    body: "YC Events crew builds and operates your wall. Operator support is confirmed in your quote.",
  },
];

export const PricingSeoSections = [
  {
    id: "cost",
    title: "How much does LED screen rent cost in Sri Lanka?",
    body: `LED wall hire starts from ${LedWallStartingPriceDisplay} onwards. Final price depends on wall size, pixel pitch, hire duration and venue. ${LedWallPricingExclusions}`,
  },
  {
    id: "exclusions",
    title: "What is not included in the starting price?",
    body: "Transport, setup and additional equipment (truss, lighting, fog, sound and other add-ons) are charged separately and itemised in your quote.",
  },
  {
    id: "custom",
    title: "How are custom sizes priced?",
    body: "Custom LED walls are quoted to your exact dimensions, indoor or outdoor pitch, and event schedule. Send venue measurements for a bespoke quote.",
  },
  {
    id: "production",
    title: "Can I add stage lighting and fog?",
    body: `Yes. Add Stage Lighting & Fog (${STAGE_LIGHTING_FOG_SERVICE_HREF}) and stage truss on the same booking. Add-ons are priced separately from the LED wall starting rate.`,
  },
  {
    id: "delivery",
    title: "Do you deliver outside Colombo?",
    body: "Yes, island-wide across all 25 districts. Transport is quoted separately based on location and load.",
  },
];

export const PricingFaqs: FaqItem[] = [
  {
    question: "How much does LED wall hire cost in Sri Lanka?",
    answer: LedWallRatesSummary,
  },
  {
    question: "Does the starting price include transport and setup?",
    answer:
      "No. Transport, setup and additional equipment charges are not included in the starting price. They are itemised separately in your quote.",
  },
  {
    question: "What affects the final LED wall hire cost?",
    answer:
      "Wall size, pixel pitch (P3 indoor or P4 outdoor), number of days, venue location, rigging complexity and any production add-ons.",
  },
  {
    question: "Can I rent a custom LED wall size?",
    answer:
      "Yes. Custom sizes are available for any venue or stage layout. Pricing is calculated from dimensions, pitch and hire window.",
  },
  {
    question: "What's the difference between P3 and P4?",
    answer:
      "P3 is a fine-pitch indoor panel for close viewing at weddings and corporate events. P4 is a brighter, weatherproof outdoor panel for concerts and rallies.",
  },
  {
    question: "Can I add truss, lighting or fog?",
    answer: `Yes. Add Stage Lighting & Fog (${STAGE_LIGHTING_FOG_SERVICE_HREF}) and stage truss on the same booking. These are additional equipment charges, quoted separately.`,
  },
  {
    question: "Do you deliver outside Colombo?",
    answer:
      "Yes, across all 25 districts. Transport is charged separately based on distance and load.",
  },
];

export const LedUseCases: LedUseCaseBlock[] = [
  {
    id: "wedding",
    title: "Wedding LED wall",
    description:
      "Indoor P3 backdrop walls for receptions and ceremonies, coordinated with your planner and operated through the night.",
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "corporate",
    title: "Corporate & launches",
    description:
      "LED screens for product launches, AGMs and conferences, with AV integration and full-day technician support.",
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "outdoor",
    title: "Outdoor concerts",
    description:
      "Weatherproof IP65 outdoor screens for concerts, festivals and rallies, with certified rigging.",
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "indoor",
    title: "Indoor conferences",
    description:
      "P3 fine-pitch panels for hotels, ballrooms and conference halls, built for close viewing distances.",
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "exhibition",
    title: "Exhibitions & trade shows",
    description:
      "LED screens fitted into custom exhibition stalls or set up as standalone displays, operator included for the full event.",
    href: "/services/exhibition-stalls",
  },
  {
    id: "backdrop",
    title: "Award nights & backdrops",
    description:
      "Custom LED backdrops from 10×8 ft to 40×12 ft, for stage sets and award ceremonies.",
    href: LED_WALL_SERVICE_HREF,
  },
];

export {
  LedWallRatesFootnote,
  LedWallRatesIntro,
  LedWallPricingHighlights,
  LedWallCustomSizesNote,
};

export function buildPricingSchema() {
  return buildPageJsonLd({
    path: "/pricing",
    name: PricingPageMetaData.title,
    description: PricingPageMetaData.description,
    faqs: PricingFaqs,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Pricing" }],
    extra: [
      {
        "@type": "Offer",
        name: "LED wall hire Sri Lanka",
        price: LED_WALL_STARTING_PRICE_LKR,
        priceCurrency: "LKR",
        priceValidUntil: "2027-12-31",
        description: `Starting from ${LedWallStartingPriceDisplay} onwards. ${LedWallPricingExclusions}`,
        seller: { "@id": LOCAL_BUSINESS_ID },
      },
      {
        "@type": "Service",
        name: "LED wall hire Sri Lanka",
        provider: { "@id": LOCAL_BUSINESS_ID },
        areaServed: "Sri Lanka",
        url: `${SITE_URL}${LED_WALL_SERVICE_HREF}`,
      },
    ],
  });
}
