import { images } from "@/lib/images";
import { buildPageJsonLd } from "@/lib/json-ld";
import { SERVICE_SITE_URL } from "@/lib/data/services";
import type {
  AboutClosingContent,
  AboutHeroContent,
  AboutMilestone,
  AboutPageMeta,
  AboutStoryContent,
  AboutValueItem,
} from "@/types/site";

export const AboutPageMetaData: AboutPageMeta = {
  title: "About YC Events | LED & Event Production Sri Lanka",
  description:
    "YC Events, Sri Lanka's LED wall specialists since 2017. Owned crew, owned equipment, 1,000+ events across all 25 districts. No subcontracting.",
  keywords: [
    "YC Events Sri Lanka",
    "LED wall company Colombo",
    "event production Sri Lanka",
    "about YC Events",
  ],
  canonical: `${SERVICE_SITE_URL}/about`,
};

export const AboutHeroData: AboutHeroContent = {
  eyebrow: "About YC Events",
  headlineLines: [
    { text: "Seven years." },
    { text: "1,000+ events." },
    { text: "Zero shortcuts.", accent: true },
  ],
  description:
    "Sri Lanka's LED wall specialists. Owned crew. Owned equipment. Island-wide.",
  imageSrc: images.aboutHero,
  imageAlt: "YC Events, event production Sri Lanka",
  stats: [
    { value: "1,000+", label: "Events delivered" },
    { value: "All 25 Districts", label: "Island-wide coverage" },
  ],
};

export const AboutStoryData: AboutStoryContent = {
  eyebrow: "Our Story",
  titleLine1: "About YC Events",
  titleLine2: "",
  paragraphs: [
    "YC Events has delivered LED wall and event production for weddings, concerts and corporate events across Sri Lanka since 2017. We handle every booking ourselves - no subcontracted crew - from Colombo to outstation venues in all 25 districts.",
    "Clients include Commercial Bank, BMICH, TV Derana and the University of Peradeniya. Every booking includes delivery, setup and a trained operator.",
  ],
  imageSrc: images.aboutCrew,
  imageAlt: "YC Events logo",
};

export const AboutValues: AboutValueItem[] = [
  {
    title: "No subcontracting.",
    description:
      "Every piece of equipment is owned by YC Events. Every operator is on our payroll. You know who is coming and what they can do.",
  },
  {
    title: "Right size, right price.",
    description:
      "We calculate the correct wall size for your venue and audience. We do not upsell. A bigger wall than you need wastes your money.",
  },
  {
    title: "Island-wide is real.",
    description:
      "We have operated in all 25 districts, Jaffna, Anuradhapura, Matara, not just Colombo. Outstation delivery is standard, not extra.",
  },
];

export const AboutMilestones: AboutMilestone[] = [
  {
    year: "2017",
    description: "Founded in Colombo with first indoor LED wall",
    yearAboveSpine: true,
  },
  {
    year: "2019",
    description: "First large outdoor concert wall deployment",
    yearAboveSpine: false,
  },
  {
    year: "2020",
    description: "Island-wide outstation delivery launched",
    yearAboveSpine: true,
  },
  {
    year: "2021",
    description: "Exhibition stall build division launched",
    yearAboveSpine: false,
  },
  {
    year: "2022",
    description: "Crossed 500 events delivered",
    yearAboveSpine: true,
  },
  {
    year: "2024",
    description: "Stage and truss division launched",
    yearAboveSpine: false,
  },
  {
    year: "2025",
    description: "1,000+ events across all 25 districts",
    yearAboveSpine: true,
  },
];

export const AboutClosingData: AboutClosingContent = {
  eyebrow: "The Team",
  title: "The people behind your event.",
  description:
    "Every technician on the YC Events team is directly employed and trained in-house. No day-hire freelancers. No subcontracted operators. When you book YC Events, the same people who quoted you are the people who show up.",
  stats: [
    { value: "25+", label: "In-house technicians" },
    { value: "Zero", label: "Subcontracting" },
  ],
  highlights: [
    "Owned equipment fleet",
    "In-house riggers and operators",
    "Same crew from quote to event day",
  ],
  ctaLabel: "Get in touch",
  ctaHref: "/contact",
};

export function buildAboutSchema() {
  return buildPageJsonLd({
    path: "/about",
    name: AboutPageMetaData.title,
    description: AboutPageMetaData.description,
    pageType: "AboutPage",
  });
}