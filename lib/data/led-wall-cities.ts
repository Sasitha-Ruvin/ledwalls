import { images } from "@/lib/images";
import { SITE_URL } from "@/lib/site";
import {
  buildPageMetadata,
  SITE_OG_IMAGE,
  SITE_OG_IMAGE_ALT,
} from "@/lib/seo";
import { LedWallRatesFootnote, LedWallRatesSummary } from "@/lib/data/led-wall-pricing";
import type { Metadata } from "next";
import type { FaqItem } from "@/types/site";

export interface LedWallCity {
  slug: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  heroImage: string;
  heroBody: string;
  intro: string;
  venues: string[];
  faqs: FaqItem[];
}

export const LedWallCities: LedWallCity[] = [
  {
    slug: "colombo",
    name: "Colombo",
    title: "LED Wall Rental Colombo | LED Screen Hire Sri Lanka",
    description:
      "LED wall rental Colombo and LED screen hire across the capital. Indoor P3 and outdoor IP65 LED video walls with operator included for weddings, corporate events and concerts.",
    keywords: [
      "LED screen rental Colombo",
      "LED wall rent Colombo",
      "LED screen hire Colombo",
      "LED wall hire Colombo",
      "wedding LED screen Colombo",
    ],
    eyebrow: "LED wall rental Colombo",
    heroImage: images.corporate,
    heroBody:
      "LED wall rent Colombo for weddings, corporate conferences, award nights and outdoor concerts. YC Events delivers, builds and operates indoor and outdoor LED screens across Colombo and the greater Western Province.",
    intro:
      "Colombo is where most Sri Lankan events happen, from BMICH conferences to hotel weddings and stadium concerts. LED screen hire Colombo bookings from YC Events include delivery, rigging, cabling and an on-site operator for the full event.",
    venues: [
      "BMICH and convention centres",
      "Five-star hotels across Colombo",
      "Outdoor concert grounds and stadiums",
      "Corporate offices and exhibition halls",
    ],
    faqs: [
      {
        question: "Do you rent LED walls in Colombo?",
        answer:
          "Yes. LED wall rental Colombo is our primary service area with the fastest delivery and setup across the capital and suburbs.",
      },
      {
        question: "How much does LED screen hire cost in Colombo?",
        answer: `${LedWallRatesSummary} Colombo rates match our published pricing page with no hidden fees.`,
      },
      {
        question: "Is an operator included for LED wall rental in Colombo?",
        answer:
          "Yes. Every LED wall rent Colombo booking includes a trained video technician for setup, live operation and breakdown at no extra charge.",
      },
    ],
  },
  {
    slug: "kandy",
    name: "Kandy",
    title: "LED Wall Rental Kandy | LED Screen Hire Sri Lanka",
    description:
      "LED wall rental Kandy and LED screen hire across the hill capital. Indoor P3 and outdoor IP65 LED video walls with operator included. Weddings, temples, hotels and outdoor events.",
    keywords: [
      "LED screen rental Kandy",
      "LED wall rent Kandy",
      "LED screen hire Kandy",
      "LED wall hire Kandy",
    ],
    eyebrow: "LED wall rental Kandy",
    heroImage: images.crowd,
    heroBody:
      "LED wall rent Kandy for weddings, temple events, corporate conferences and outdoor festivals. YC Events delivers, builds and operates indoor and outdoor LED screens across the hill capital and surrounding districts.",
    intro:
      "Kandy hosts everything from lakeside weddings to Esala Perahera season events and hotel conferences. LED screen hire Kandy bookings from YC Events include a full crew, delivery from Colombo and an on-site operator for the whole event.",
    venues: [
      "Hotel ballrooms and lakeside wedding venues",
      "Temple and cultural pageant grounds",
      "University and conference halls",
      "Open-air grounds for concerts and rallies",
    ],
    faqs: [
      {
        question: "Do you rent LED walls in Kandy?",
        answer:
          "Yes. LED wall rent Kandy is one of our most requested outstation bookings. We deliver indoor P3 panels for weddings and hotels, and outdoor IP65 panels for open-air events.",
      },
      {
        question: "How much does LED screen hire cost in Kandy?",
        answer: `${LedWallRatesSummary} Kandy delivery is included in your quote, not billed as a separate outstation fee.`,
      },
      {
        question: "Is there an operator included for LED wall rental in Kandy?",
        answer:
          "Yes. Every LED wall rent Kandy booking includes a trained video technician for setup, live operation and breakdown, the same as our Colombo bookings.",
      },
    ],
  },
  {
    slug: "galle",
    name: "Galle",
    title: "LED Wall Rental Galle | LED Screen Hire Sri Lanka",
    description:
      "LED wall rental Galle and LED screen hire across the southern coast. Indoor P3 and outdoor IP65 LED video walls with operator included for weddings and corporate events.",
    keywords: [
      "LED screen rental Galle",
      "LED wall rent Galle",
      "LED screen hire Galle",
      "LED wall hire Galle",
    ],
    eyebrow: "LED wall rental Galle",
    heroImage: images.wedding,
    heroBody:
      "LED wall rent Galle for beachfront weddings, fort-area events and southern coast corporate functions. YC Events delivers, builds and operates LED screens across Galle and the surrounding southern province.",
    intro:
      "From boutique fort hotels to beachfront resorts, Galle events call for LED screens that handle salt air and open-air conditions. LED screen hire Galle bookings include full delivery, rigging and an on-site operator.",
    venues: [
      "Beachfront and boutique fort hotels",
      "Resort wedding lawns",
      "Corporate offsite venues",
      "Outdoor festival grounds",
    ],
    faqs: [
      {
        question: "Do you rent LED walls in Galle?",
        answer:
          "Yes. LED wall rent Galle covers weddings, resort events and corporate functions along the southern coast, with indoor and outdoor IP65 panel options.",
      },
      {
        question: "How much does LED screen hire cost in Galle?",
        answer: `${LedWallRatesSummary} Galle delivery is included in your quote.`,
      },
      {
        question: "Can you handle outdoor beachfront LED screens in Galle?",
        answer:
          "Yes. Outdoor IP65 weatherproof LED walls are our standard option for beachfront and open-air Galle venues, rigged by our certified crew.",
      },
    ],
  },
  {
    slug: "negombo",
    name: "Negombo",
    title: "LED Wall Rental Negombo | LED Screen Hire Sri Lanka",
    description:
      "LED wall rental Negombo and LED screen hire near the airport corridor. Indoor and outdoor LED video walls with operator included for weddings, corporate and beach events.",
    keywords: [
      "LED screen rental Negombo",
      "LED wall hire Negombo",
      "LED screen rent Negombo",
    ],
    eyebrow: "LED wall rental Negombo",
    heroImage: images.corporate,
    heroBody:
      "LED wall hire Negombo for beach hotel weddings, airport-corridor corporate events and church festival celebrations. YC Events covers Negombo with the same crew and equipment standard used across all 25 districts.",
    intro:
      "Negombo's beach hotels and airport-corridor conference venues both need reliable LED screens with fast turnaround. LED screen rent Negombo bookings include delivery, setup and a trained operator.",
    venues: [
      "Beachfront hotel wedding halls",
      "Airport-corridor conference venues",
      "Church festival and procession grounds",
      "Corporate offsite events",
    ],
    faqs: [
      {
        question: "Do you rent LED walls in Negombo?",
        answer:
          "Yes. LED wall hire Negombo covers weddings, corporate events and festival celebrations, with indoor and outdoor IP65 panel options.",
      },
      {
        question: "How much does LED screen rent cost in Negombo?",
        answer: `${LedWallRatesSummary} Negombo delivery is included in your quote.`,
      },
    ],
  },
  {
    slug: "jaffna",
    name: "Jaffna",
    title: "LED Wall Rental Jaffna | LED Screen Hire Sri Lanka",
    description:
      "LED wall rental Jaffna and LED screen hire in the northern province. Indoor and outdoor IP65 LED video walls with operator included for weddings, temple festivals and corporate events.",
    keywords: [
      "LED screen rental Jaffna",
      "LED wall rent Jaffna",
      "LED screen hire Jaffna",
    ],
    eyebrow: "LED wall rental Jaffna",
    heroImage: images.brand,
    heroBody:
      "LED wall rent Jaffna for weddings, temple festivals and corporate functions across the northern province. YC Events delivers island-wide, including full crew and equipment for Jaffna bookings.",
    intro:
      "Jaffna weddings, temple festivals and corporate events increasingly call for LED screens over traditional banners. LED screen hire Jaffna bookings include island-wide delivery, setup and an on-site operator.",
    venues: [
      "Wedding halls and reception venues",
      "Temple festival and procession grounds",
      "Corporate and government function halls",
      "Outdoor community event grounds",
    ],
    faqs: [
      {
        question: "Do you deliver LED walls to Jaffna?",
        answer:
          "Yes. LED wall rent Jaffna is part of our island-wide delivery coverage, included in your quote with no separate outstation surprise fee.",
      },
      {
        question: "How much does LED screen rental cost in Jaffna?",
        answer: `${LedWallRatesSummary} Jaffna delivery timelines are confirmed at the time of your quote.`,
      },
    ],
  },
  {
    slug: "anuradhapura",
    name: "Anuradhapura",
    title: "LED Wall Rental Anuradhapura | LED Screen Hire Sri Lanka",
    description:
      "LED wall rental Anuradhapura and LED screen hire in the north central province. Outdoor IP65 and indoor LED video walls with operator included for rallies, festivals and corporate events.",
    keywords: [
      "LED screen rental Anuradhapura",
      "LED wall hire Anuradhapura",
      "outdoor screen rally Anuradhapura",
    ],
    eyebrow: "LED wall rental Anuradhapura",
    heroImage: images.concert2,
    heroBody:
      "LED wall hire Anuradhapura for political rallies, religious festivals and corporate events across the north central province. YC Events provides outdoor IP65 rated screens built for open grounds.",
    intro:
      "Anuradhapura's large outdoor grounds regularly host rallies, poya festivals and public gatherings. LED screen rental Anuradhapura bookings use outdoor-rated IP65 panels with certified rigging crew.",
    venues: [
      "Political rally and campaign grounds",
      "Religious festival and poya day events",
      "Corporate and government function halls",
      "Open-air public event grounds",
    ],
    faqs: [
      {
        question: "Do you rent LED screens for rallies in Anuradhapura?",
        answer:
          "Yes. Outdoor screen rally setups in Anuradhapura use IP65 weatherproof LED panels, bright enough for daytime outdoor viewing, with certified rigging crew.",
      },
      {
        question: "How much does LED wall hire cost in Anuradhapura?",
        answer: `${LedWallRatesSummary} Anuradhapura delivery is included in your quote.`,
      },
    ],
  },
  {
    slug: "kurunegala",
    name: "Kurunegala",
    title: "LED Wall Rental Kurunegala | LED Screen Hire Sri Lanka",
    description:
      "LED wall rental Kurunegala and LED screen rent across the north western province. Indoor and outdoor LED video walls with operator included for weddings and corporate events.",
    keywords: [
      "LED screen rental Kurunegala",
      "LED wall rent Kurunegala",
    ],
    eyebrow: "LED wall rental Kurunegala",
    heroImage: images.corporate2,
    heroBody:
      "LED wall rent Kurunegala for weddings, corporate events and town festivals across the north western province. YC Events delivers full LED wall setups with operator included.",
    intro:
      "Kurunegala's wedding halls and corporate venues get the same LED wall rental standard as Colombo, delivered with our full crew and equipment.",
    venues: [
      "Wedding halls and reception venues",
      "Corporate conference venues",
      "Town festival and public event grounds",
    ],
    faqs: [
      {
        question: "Do you rent LED walls in Kurunegala?",
        answer:
          "Yes. LED wall rent Kurunegala covers weddings, corporate events and public functions, with indoor and outdoor panel options.",
      },
      {
        question: "How much does LED screen rental cost in Kurunegala?",
        answer: `${LedWallRatesSummary} Kurunegala delivery is included in your quote.`,
      },
    ],
  },
  {
    slug: "matara",
    name: "Matara",
    title: "LED Wall Rental Matara | LED Screen Hire Sri Lanka",
    description:
      "LED wall rental Matara and LED screen hire across southern Sri Lanka. Indoor and outdoor IP65 LED video walls with operator included for weddings and corporate events.",
    keywords: [
      "LED screen hire Matara",
      "LED wall rent southern Sri Lanka",
      "LED screen rental Matara",
    ],
    eyebrow: "LED wall rental Matara",
    heroImage: images.wedding2,
    heroBody:
      "LED wall rent Matara and the wider southern province for weddings, corporate events and festivals. YC Events covers Matara with the same crew and rate table used island-wide.",
    intro:
      "Matara and the southern coast host weddings and corporate functions that need dependable LED screens. LED screen hire Matara bookings include delivery, setup and an on-site operator.",
    venues: [
      "Wedding halls and beach resort venues",
      "Corporate conference venues",
      "Outdoor festival and community grounds",
    ],
    faqs: [
      {
        question: "Do you rent LED walls in Matara?",
        answer:
          "Yes. LED wall rent southern Sri Lanka bookings, including Matara, cover weddings, corporate events and outdoor functions.",
      },
      {
        question: "How much does LED screen rental cost in Matara?",
        answer: `${LedWallRatesSummary} Matara delivery is included in your quote.`,
      },
    ],
  },
];

export const LedWallCitiesFootnote = LedWallRatesFootnote;

export function getLedWallCityBySlug(slug: string): LedWallCity | undefined {
  return LedWallCities.find((city) => city.slug === slug);
}

export function getLedWallCitySlugs(): string[] {
  return LedWallCities.map((city) => city.slug);
}

export function buildLedWallCitySchema(city: LedWallCity) {
  const canonical = `${SITE_URL}/led-wall-rental-${city.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `LED wall rental ${city.name}`,
        description: city.description,
        image: `${SITE_URL}${SITE_OG_IMAGE}`,
        provider: {
          "@type": "LocalBusiness",
          name: "YC Events",
          areaServed: "Sri Lanka",
          url: SITE_URL,
        },
        areaServed: city.name,
        url: canonical,
      },
      {
        "@type": "FAQPage",
        mainEntity: city.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export function buildLedWallCityMetadata(slug: string): Metadata | null {
  const city = getLedWallCityBySlug(slug);
  if (!city) return null;

  return buildPageMetadata({
    title: city.title,
    description: city.description,
    path: `/led-wall-rental-${city.slug}`,
    keywords: city.keywords,
    ogImage: SITE_OG_IMAGE,
    ogImageAlt: `${SITE_OG_IMAGE_ALT} · LED wall rental ${city.name}`,
  });
}
