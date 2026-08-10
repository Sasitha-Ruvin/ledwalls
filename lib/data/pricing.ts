import type { FaqItem, LedUseCaseBlock, PricingPageMeta } from "@/types/site";
import { images } from "@/lib/images";
import { buildPageJsonLd, LOCAL_BUSINESS_ID } from "@/lib/json-ld";
import {
  LedWallRates,
  LedWallRatesFootnote,
  LedWallRatesIntro,
  LedWallRatesSummary,
  LedWallPricingHighlights,
  LedWallCustomSizesNote,
  formatLedWallRatePerDay,
} from "@/lib/data/led-wall-pricing";
import { LED_WALL_SERVICE_HREF, STAGE_LIGHTING_FOG_SERVICE_HREF } from "@/lib/data/services";
import { SITE_URL } from "@/lib/site";

export const PricingPageMetaData: PricingPageMeta = {
  title: "LED Wall Hire Price Sri Lanka | LED Wall Rent LKR",
  description:
    "LED wall hire and LED wall rent prices in Sri Lanka from LKR 55,000. Full LED screen hire cost table with operator included. Add truss, rotating lights and fog machines. Colombo, Kandy and all 25 districts.",
  keywords: [
    "LED wall hire price Sri Lanka",
    "LED wall rent price Sri Lanka",
    "LED wall hire Sri Lanka",
    "LED wall rent Sri Lanka",
    "LED wall hire near me",
    "LED wall rent near me Sri Lanka",
    "LED wall hire cost",
    "LED screen rent price LKR",
    "LED screen rent per day Sri Lanka LKR",
    "how much does LED wall hire cost Sri Lanka",
    "how much does LED screen rent cost Sri Lanka",
    "LED screen hire with operator included",
    "LED wall daily rate LKR",
    "LED screen hire Colombo",
    "LED wall hire Colombo",
    "LED wall rent Colombo",
    "fog machine hire with LED wall",
    "rotating stage lights truss Sri Lanka",
  ],
  canonical: `${SITE_URL}/pricing`,
};

export const PricingHeroContent = {
  eyebrow: "LED wall hire price · Sri Lanka",
  titleLine1: "LED wall hire price",
  titleLine2: "Sri Lanka",
  description:
    "Published LED wall rent and LED screen hire prices in LKR. Operator included. Add stage truss, rotating lights and fog machines on the same quote.",
  imageSrc: images.pricingHero,
  imageAlt: "LED wall hire price Sri Lanka LED wall rent Colombo",
};

export const PricingIncludes = [
  {
    title: "Operator included",
    body: "LED screen hire with operator included is standard. A trained video technician runs your wall from setup to breakdown.",
  },
  {
    title: "Island-wide delivery",
    body: "LED wall delivery outside Colombo to Kandy, Galle, Jaffna, Negombo and all 25 districts. Outstation is not a surprise add-on.",
  },
  {
    title: "Full technical setup",
    body: "Video processor, cabling, rigging, content testing and brightness calibration before your guests arrive.",
  },
  {
    title: "Breakdown included",
    body: "Crew clears the venue after your event. No separate breakdown charge on standard bookings.",
  },
  {
    title: "Itemised LKR quote",
    body: "LED screen rent price breakdown within 60 minutes. Wall size, days on site and location in one clear quote.",
  },
  {
    title: "Indoor and outdoor panels",
    body: "P3 indoor fine-pitch and IP65 outdoor rated walls for concerts, weddings and corporate events.",
  },
];

export const PricingSeoSections = [
  {
    id: "cost",
    title: "How much does LED screen rent cost in Sri Lanka?",
    body:
      "LED screen rent in Sri Lanka starts at LKR 55,000 per 8-hour business day for a 10×8 ft LED video wall. Rates in the table above apply to one standard working day (8 hours) with operator, delivery, setup and breakdown included. A 20×10 ft wall is LKR 100,000 per 8 hrs and a 40×12 ft wall is LKR 200,000 per 8 hrs.",
  },
  {
    id: "daily-rate",
    title: "LED screen rent per day Sri Lanka LKR",
    body:
      "Our LED wall rates are quoted in LKR per 8-hour business day, not per hour. Extended hours beyond the standard working day, multi-day bookings and overnight operation are quoted separately. Request an itemised quote for your exact date, venue and hire duration.",
  },
  {
    id: "operator",
    title: "LED wall hire with operator included",
    body:
      "Unlike bare panel suppliers, YC Events provides LED wall hire and LED screen rent with operator included on every booking across Sri Lanka. Your technician manages content playback, brightness, troubleshooting and breakdown. Operator support is built into every LKR rate on this page.",
  },
  {
    id: "production",
    title: "LED wall hire with stage lighting and fog",
    body:
      `Every LED wall hire booking can include our Stage Lighting & Fog add-on (${STAGE_LIGHTING_FOG_SERVICE_HREF}) with stage truss on the same quote. Popular for concerts, weddings and corporate shows.`,
  },
  {
    id: "delivery",
    title: "LED wall delivery outside Colombo",
    body:
      "LED screen outstation delivery is standard across all 25 districts. LED wall Kandy delivery, Galle, Jaffna and Negombo hires are quoted upfront. We operate island-wide from Colombo with the same crew quality and equipment standard on every outstation event.",
  },
];

export const PricingFaqs: FaqItem[] = [
  {
    question: "How much does LED wall hire cost in Sri Lanka?",
    answer: `${LedWallRatesSummary} See the rate cards above for every wall size. The same published LKR rates apply in every district with delivery, setup, operator and breakdown included. Final LED wall rent price may vary for multi-day bookings, pixel pitch and location.`,
  },
  {
    question: "What is the LED wall rent price per day in LKR?",
    answer: `LED wall rates start at ${formatLedWallRatePerDay(55000)} for a 10×8 ft wall. Each published price covers one 8-hour working business day. Rates scale by wall size up to ${formatLedWallRatePerDay(200000)} for a 40×12 ft LED video wall. We send an itemised LED screen rent price breakdown within 60 minutes.`,
  },
  {
    question: "Are these rates for a full day or per hour?",
    answer:
      "Published rates are for one 8-hour working business day, the standard event hire window. Extended hours, overnight operation and multi-day bookings are quoted separately based on your schedule.",
  },
  {
    question: "Can I rent a custom LED wall size?",
    answer:
      "Yes. Custom LED video wall sizes are available for any venue or stage layout. Custom size pricing is calculated from wall dimensions, pixel pitch, indoor vs outdoor use and rigging. Contact us with your venue measurements for a bespoke quote.",
  },
  {
    question: "Is LED screen hire with operator included standard?",
    answer:
      "Yes. LED screen hire with operator included is our default package in Sri Lanka. Every LKR rate on this page includes a trained video technician for setup, live operation and breakdown.",
  },
  {
    question: "Does LED screen hire with operator included cost extra?",
    answer:
      "No. LED wall rent with operator included is not a paid add-on. The LKR daily rate you see is the full LED wall hire cost for operator, delivery, setup and breakdown on standard event hire.",
  },
  {
    question: "What is the difference between P3 and P4 LED screens?",
    answer:
      "Pixel pitch is the distance between LED clusters in millimetres. P3 is a fine-pitch indoor panel for close viewing at weddings and corporate events. P4 is an outdoor-rated, brighter IP65 panel for concerts, rallies and outdoor LED screen rent in Sri Lanka.",
  },
  {
    question: "What should I book: indoor or outdoor LED screen rent?",
    answer:
      "Indoor LED wall rent uses P3 panels for ballrooms, hotels and conference halls. Outdoor LED screen rent uses IP65 weatherproof P4 panels rated for direct sunlight and rain. We recommend the correct configuration during your quote.",
  },
  {
    question: "Do you deliver LED walls outside Colombo?",
    answer:
      "Yes. LED screen outstation delivery is standard across all 25 districts, Kandy, Galle, Jaffna, Negombo and everywhere between. LED wall Kandy delivery and island-wide hire are included in your quote, not billed as a surprise add-on.",
  },
  {
    question: "What affects the final LED wall hire cost?",
    answer:
      "Wall size, number of days, pixel pitch (P3 indoor or P4 outdoor), indoor vs outdoor use, venue location and rigging complexity. Our published LED screen rent price LKR table covers standard single-day event hire.",
  },
  {
    question: "Can I add truss, rotating lights and fog machines to LED wall hire?",
    answer:
      `Yes. Add Stage Lighting & Fog (${STAGE_LIGHTING_FOG_SERVICE_HREF}) and stage truss on the same LED wall quote. One crew handles delivery, rigging and pack-down for the full production package.`,
  },
  {
    question: "What is an IP65 outdoor LED screen and does it cost more?",
    answer:
      "IP65 outdoor LED screen rent Sri Lanka uses weatherproof panels rated for rain and direct sunlight, P4 pixel pitch. Outdoor IP65 walls are priced the same way as indoor panels on our rate table, based on wall size rather than a separate outdoor surcharge.",
  },
];

export const LedUseCases: LedUseCaseBlock[] = [
  {
    id: "wedding",
    title: "Wedding LED screen rent Sri Lanka",
    description:
      "LED backdrop rent for receptions and ceremonies. Wedding LED screen Colombo and island-wide, indoor P3 panels with planner coordination and an all-night operator.",
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "corporate",
    title: "LED screen corporate event Sri Lanka",
    description:
      "LED wall corporate event hire for product launches, AGMs and conferences. LED screen hire Colombo with AV integration and full-day technician support.",
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "outdoor",
    title: "Outdoor LED wall hire Sri Lanka",
    description:
      "IP65 outdoor LED wall rent for concerts, festivals and rallies. Truss, rotating stage lights and fog machines available. Weatherproof big LED screen rent with certified rigging crew.",
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "indoor",
    title: "Indoor LED screen rent Sri Lanka",
    description:
      "Indoor LED wall rent with P3 fine-pitch panels for hotels, ballrooms and conference halls. Crystal-clear LED video wall rent for close viewing distances.",
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "exhibition",
    title: "LED wall rent for exhibitions Sri Lanka",
    description:
      "LED screen rent for trade shows and expos, fitted into custom exhibition stalls or as standalone displays. Operator included for the full run of the event.",
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "backdrop",
    title: "LED backdrop rent Sri Lanka",
    description:
      "LED backdrop rent for weddings, award nights and stage sets. Custom sizes from 10×8 ft to 40×12 ft with operator and delivery included.",
    href: LED_WALL_SERVICE_HREF,
  },
];

export {
  LedWallRates,
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
      ...LedWallRates.map((rate) => ({
        "@type": "Offer",
        name: `LED video wall ${rate.size}`,
        price: rate.priceLkr,
        priceCurrency: "LKR",
        description:
          "Per 8-hour business day LED screen hire with operator included",
        seller: { "@id": LOCAL_BUSINESS_ID },
      })),
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
