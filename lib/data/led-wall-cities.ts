import { images } from "@/lib/images";
import {
  buildPageJsonLd,
  LOCAL_BUSINESS_ID,
  pageUrl,
} from "@/lib/json-ld";
import { LedWallRatesFootnote, LedWallRatesSummary } from "@/lib/data/led-wall-pricing";
import {
  buildPageMetadata,
  SITE_OG_IMAGE,
  SITE_OG_IMAGE_ALT,
} from "@/lib/seo";
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
    title: "LED Wall Hire Colombo | LED Wall Rent & Screen Rental",
    description:
      "LED wall hire Colombo and LED wall rent across the capital. Indoor P3 and outdoor IP65 LED screens with operator included. Stage truss, rotating lights and fog machines on the same quote.",
    keywords: [
      "LED screen hire Colombo",
      "LED wall rent Colombo",
      "LED screen hire Colombo",
      "LED wall hire Colombo",
      "LED wall hire near me Colombo",
      "wedding LED screen Colombo",
    ],
    eyebrow: "LED wall rent Colombo",
    heroImage: images.corporate,
    heroBody:
      "LED wall hire Colombo for weddings, corporate conferences, award nights and outdoor concerts. Add stage truss, rotating stage lights and fog machines on the same quote. YC Events delivers, builds and operates LED screens across Colombo and the greater Western Province.",
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
        question: "Can I hire an LED wall locally in Colombo?",
        answer:
          "Yes. YC Events is based in the Western Province and covers Colombo and suburbs with the fastest delivery and setup. Indoor P3 and outdoor IP65 panels, full crew and operator included. See our pricing page for LKR rates or contact us for a quote.",
      },
      {
        question: "Do you rent LED walls in Colombo?",
        answer:
          "Yes. LED wall rent Colombo is our primary service area with the fastest delivery and setup across the capital and suburbs.",
      },
      {
        question: "How much does LED screen hire cost in Colombo?",
        answer: `${LedWallRatesSummary} Colombo rates match our published pricing page with no hidden fees.`,
      },
      {
        question: "Is an operator included for LED wall hire in Colombo?",
        answer:
          "Yes. Every LED wall hire Colombo booking includes a trained video technician for setup, live operation and breakdown at no extra charge.",
      },
      {
        question: "Can I add truss, rotating lights and fog machines with LED wall hire in Colombo?",
        answer:
          "Yes. LED wall hire Colombo can include aluminium stage truss, rotating stage lights and fog machine hire on the same quote. Popular for concerts, hotel weddings and corporate shows.",
      },
    ],
  },
  {
    slug: "kandy",
    name: "Kandy",
    title: "LED Wall Hire Kandy | LED Wall Rent & Screen Hire",
    description:
      "LED wall rent Kandy and LED screen hire across the hill capital. Indoor P3 and outdoor IP65 LED video walls with operator included. Weddings, temples, hotels and outdoor events.",
    keywords: [
      "LED screen rent Kandy",
      "LED wall rent Kandy",
      "LED screen hire Kandy",
      "LED wall hire Kandy",
      "LED wall hire near me Kandy",
    ],
    eyebrow: "LED wall hire Kandy",
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
        question: "Can I hire an LED wall locally in Kandy?",
        answer:
          "Yes. YC Events delivers to Kandy and the hill country with a full crew for weddings, hotels and outdoor events. Indoor P3 and outdoor IP65 panels with operator included. See our pricing page for LKR rates or contact us for a quote.",
      },
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
        question: "Is there an operator included for LED wall rent in Kandy?",
        answer:
          "Yes. Every LED wall rent Kandy booking includes a trained video technician for setup, live operation and breakdown, the same as our Colombo bookings.",
      },
    ],
  },
  {
    slug: "galle",
    name: "Galle",
    title: "LED Wall Hire Galle | LED Wall Rent & Screen Hire",
    description:
      "LED wall rent Galle and LED screen hire across the southern coast. Indoor P3 and outdoor IP65 LED video walls with operator included for weddings and corporate events.",
    keywords: [
      "LED screen rent Galle",
      "LED wall rent Galle",
      "LED screen hire Galle",
      "LED wall hire Galle",
      "LED wall hire near me Galle",
    ],
    eyebrow: "LED wall hire Galle",
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
        question: "Can I hire an LED wall locally in Galle?",
        answer:
          "Yes. YC Events covers Galle and the southern coast for beachfront weddings, fort-area events and corporate functions. Indoor P3 and outdoor IP65 panels with delivery and operator included.",
      },
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
    title: "LED Wall Hire Negombo | LED Wall Rent & Screen Hire",
    description:
      "LED wall rent Negombo and LED screen hire near the airport corridor. Indoor and outdoor LED video walls with operator included for weddings, corporate and beach events.",
    keywords: [
      "LED screen hire Negombo",
      "LED wall hire Negombo",
      "LED wall rent Negombo",
      "LED screen rent Negombo",
      "LED wall hire near me Negombo",
    ],
    eyebrow: "LED wall hire Negombo",
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
        question: "Can I hire an LED wall locally in Negombo?",
        answer:
          "Yes. YC Events covers Negombo and the airport corridor for beach hotel weddings, corporate events and festival celebrations with full delivery and operator.",
      },
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
    title: "LED Wall Hire Jaffna | LED Wall Rent & Screen Hire",
    description:
      "LED wall rent Jaffna and LED screen hire in the northern province. Indoor and outdoor IP65 LED video walls with operator included for weddings, temple festivals and corporate events.",
    keywords: [
      "LED screen hire Jaffna",
      "LED wall rent Jaffna",
      "LED screen hire Jaffna",
      "LED wall hire Jaffna",
      "LED wall hire near me Jaffna",
    ],
    eyebrow: "LED wall hire Jaffna",
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
        question: "Can I hire an LED wall locally in Jaffna?",
        answer:
          "Yes. YC Events delivers to Jaffna and the northern province for weddings, temple festivals and corporate events. Island-wide delivery, setup and operator are included in your quote.",
      },
      {
        question: "Do you deliver LED walls to Jaffna?",
        answer:
          "Yes. LED wall rent Jaffna is part of our island-wide delivery coverage, included in your quote with no separate outstation surprise fee.",
      },
      {
        question: "How much does LED screen hire cost in Jaffna?",
        answer: `${LedWallRatesSummary} Jaffna delivery timelines are confirmed at the time of your quote.`,
      },
    ],
  },
  {
    slug: "anuradhapura",
    name: "Anuradhapura",
    title: "LED Wall Hire Anuradhapura | LED Wall Rent & Screen Hire",
    description:
      "LED wall rent Anuradhapura and LED screen hire in the north central province. Outdoor IP65 and indoor LED video walls with operator included for rallies, festivals and corporate events.",
    keywords: [
      "LED screen rent Anuradhapura",
      "LED wall hire Anuradhapura",
      "LED wall rent Anuradhapura",
      "outdoor screen rally Anuradhapura",
      "LED wall hire near me Anuradhapura",
    ],
    eyebrow: "LED wall hire Anuradhapura",
    heroImage: images.concert2,
    heroBody:
      "LED wall hire Anuradhapura for political rallies, religious festivals and corporate events across the north central province. YC Events provides outdoor IP65 rated screens built for open grounds.",
    intro:
      "Anuradhapura's large outdoor grounds regularly host rallies, poya festivals and public gatherings. LED screen rent Anuradhapura bookings use outdoor-rated IP65 panels with certified rigging crew.",
    venues: [
      "Political rally and campaign grounds",
      "Religious festival and poya day events",
      "Corporate and government function halls",
      "Open-air public event grounds",
    ],
    faqs: [
      {
        question: "Can I hire an LED wall locally in Anuradhapura?",
        answer:
          "Yes. YC Events delivers to Anuradhapura and the north central province for rallies, festivals and corporate events. Outdoor IP65 and indoor panels with certified rigging crew.",
      },
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
    title: "LED Wall Hire Kurunegala | LED Wall Rent & Screen Hire",
    description:
      "LED wall rent Kurunegala and LED screen rent across the north western province. Indoor and outdoor LED video walls with operator included for weddings and corporate events.",
    keywords: [
      "LED screen hire Kurunegala",
      "LED wall rent Kurunegala",
      "LED wall hire Kurunegala",
      "LED wall hire near me Kurunegala",
    ],
    eyebrow: "LED wall hire Kurunegala",
    heroImage: images.corporate2,
    heroBody:
      "LED wall rent Kurunegala for weddings, corporate events and town festivals across the north western province. YC Events delivers full LED wall setups with operator included.",
    intro:
      "Kurunegala's wedding halls and corporate venues get the same LED wall rent standard as Colombo, delivered with our full crew and equipment.",
    venues: [
      "Wedding halls and reception venues",
      "Corporate conference venues",
      "Town festival and public event grounds",
    ],
    faqs: [
      {
        question: "Can I hire an LED wall locally in Kurunegala?",
        answer:
          "Yes. YC Events covers Kurunegala and the north western province for weddings, corporate events and town festivals with full crew and operator.",
      },
      {
        question: "Do you rent LED walls in Kurunegala?",
        answer:
          "Yes. LED wall rent Kurunegala covers weddings, corporate events and public functions, with indoor and outdoor panel options.",
      },
      {
        question: "How much does LED screen hire cost in Kurunegala?",
        answer: `${LedWallRatesSummary} Kurunegala delivery is included in your quote.`,
      },
    ],
  },
  {
    slug: "matara",
    name: "Matara",
    title: "LED Wall Hire Matara | LED Wall Rent & Screen Hire",
    description:
      "LED wall rent Matara and LED screen hire across southern Sri Lanka. Indoor and outdoor IP65 LED video walls with operator included for weddings and corporate events.",
    keywords: [
      "LED screen hire Matara",
      "LED wall rent Matara",
      "LED wall rent southern Sri Lanka",
      "LED screen rent Matara",
      "LED wall hire near me Matara",
    ],
    eyebrow: "LED wall hire Matara",
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
        question: "Can I hire an LED wall locally in Matara?",
        answer:
          "Yes. YC Events covers Matara and southern Sri Lanka for wedding venues, resorts and outdoor festival grounds with full setup and operator.",
      },
      {
        question: "Do you rent LED walls in Matara?",
        answer:
          "Yes. LED wall rent southern Sri Lanka bookings, including Matara, cover weddings, corporate events and outdoor functions.",
      },
      {
        question: "How much does LED screen hire cost in Matara?",
        answer: `${LedWallRatesSummary} Matara delivery is included in your quote.`,
      },
    ],
  },
];

/**
 * Lightweight factory for the remaining district pages. Uses the same
 * template copy for every district (per the site content spec): a short
 * indoor/outdoor intro, three generic bullet points and one FAQ, so every
 * district gets a real, indexable page without duplicating body copy.
 */
function createDistrictCity(
  slug: string,
  name: string,
  heroImage: string
): LedWallCity {
  return {
    slug,
    name,
    title: `LED Wall Hire ${name} | YC Events`,
    description: `LED wall hire and LED screen rental in ${name}, Sri Lanka. Delivery and operator included. Quote in 60 minutes.`,
    keywords: [
      `LED wall hire ${name}`,
      `LED screen rental ${name}`,
      `LED wall rent ${name}`,
      `LED wall hire near me ${name}`,
    ],
    eyebrow: `LED wall hire ${name}`,
    heroImage,
    heroBody: `LED wall hire in ${name} - indoor P3 screens for weddings and corporate events. LED screen rental in ${name} - outdoor IP65 screens for concerts and rallies.`,
    intro: `YC Events delivers, builds and operates LED screens in ${name} with the same crew and rate table used island-wide. Indoor and outdoor panels, operator included, quote in 60 minutes.`,
    venues: [
      "Indoor & outdoor panels",
      "Operator included",
      "Quote in 60 minutes",
    ],
    faqs: [
      {
        question: `Do you deliver LED walls to ${name}?`,
        answer: `Yes. YC Events covers ${name} as part of our island-wide, all-25-district delivery. Send your venue on enquiry for a same-day quote.`,
      },
      {
        question: `How much does LED wall hire cost in ${name}?`,
        answer: `${LedWallRatesSummary} ${name} delivery is included in your quote, not billed as a separate outstation fee.`,
      },
    ],
  };
}

const DISTRICT_TEMPLATE_ENTRIES: Array<[string, string, string]> = [
  ["kalutara", "Kalutara", images.wedding],
  ["gampaha", "Gampaha", images.corporate],
  ["ratnapura", "Ratnapura", images.concert3],
  ["kegalle", "Kegalle", images.corporate2],
  ["trincomalee", "Trincomalee", images.crowd],
  ["batticaloa", "Batticaloa", images.concert2],
  ["ampara", "Ampara", images.brand],
  ["badulla", "Badulla", images.wedding2],
  ["monaragala", "Monaragala", images.why],
  ["hambantota", "Hambantota", images.wedding],
  ["puttalam", "Puttalam", images.corporate],
  ["polonnaruwa", "Polonnaruwa", images.concert3],
  ["mannar", "Mannar", images.brand],
  ["vavuniya", "Vavuniya", images.corporate2],
  ["mullaitivu", "Mullaitivu", images.crowd],
  ["kilinochchi", "Kilinochchi", images.concert2],
  ["nuwara-eliya", "Nuwara Eliya", images.wedding2],
];

LedWallCities.push(
  ...DISTRICT_TEMPLATE_ENTRIES.map(([slug, name, img]) =>
    createDistrictCity(slug, name, img)
  )
);

export const LedWallCitiesFootnote = LedWallRatesFootnote;

export function getLedWallCityBySlug(slug: string): LedWallCity | undefined {
  return LedWallCities.find((city) => city.slug === slug);
}

export function getLedWallCitySlugs(): string[] {
  return LedWallCities.map((city) => city.slug);
}

export function buildLedWallCitySchema(city: LedWallCity) {
  const path = `/led-wall-rental-${city.slug}`;
  const place = {
    "@type": "City",
    name: city.name,
    containedInPlace: { "@type": "Country", name: "Sri Lanka" },
  };

  return buildPageJsonLd({
    path,
    name: city.title,
    description: city.description,
    faqs: city.faqs,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: city.name },
    ],
    extra: [
      {
        "@type": "Service",
        "@id": `${pageUrl(path)}#service`,
        name: `LED wall hire ${city.name}`,
        serviceType: "LED wall hire",
        description: city.description,
        image: pageUrl(SITE_OG_IMAGE),
        provider: { "@id": LOCAL_BUSINESS_ID },
        areaServed: place,
        url: pageUrl(path),
      },
    ],
  });
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
    ogImageAlt: `${SITE_OG_IMAGE_ALT} · LED wall hire ${city.name}`,
  });
}
