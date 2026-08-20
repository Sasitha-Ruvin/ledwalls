import {
  Cpu,
  LayoutGrid,
  Monitor,
  Sparkles,
  Volume2,
} from "lucide-react";
import { images } from "@/lib/images";
import {
  LedWallRates,
  formatLedWallRateLkr,
  formatLedWallRatePerDay,
} from "@/lib/data/led-wall-pricing";
import {
  LightingFogPortfolio,
  PodiumPortfolio,
  StagePortfolio,
} from "@/lib/data/gallery";
import { LedWallPortfolio, LedWallPortfolioIntro } from "@/lib/data/led-wall-portfolio";
import { buildJsonLd, buildPageJsonLd, LOCAL_BUSINESS_ID } from "@/lib/json-ld";
import { SITE_URL } from "@/lib/site";
import { QuoteDialogContacts } from "@/lib/data/contact";
import type {
  ContactMethod,
  CoverageSectionContent,
  LedWallEventCard,
  QuickNavItem,
  ServiceDetailData,
  ServicesPageHero,
  ServicesPageMeta,
  ServicesQuoteContent,
} from "@/types/site";

export const SERVICE_SITE_URL = SITE_URL;

export const LED_WALL_SERVICE_ID = "led-wall-hire";
export const LED_WALL_SERVICE_HREF = `/services/${LED_WALL_SERVICE_ID}`;
export const STAGE_LIGHTING_FOG_SERVICE_ID = "stage-lighting-fog";
export const STAGE_LIGHTING_FOG_SERVICE_HREF = `/services/${STAGE_LIGHTING_FOG_SERVICE_ID}`;

export const ServicesPageMetaData: ServicesPageMeta = {
  title: "Event Production Services Sri Lanka | LED Wall, Stage, Sound & More",
  description:
    "Full event production services from YC Events: LED wall and LED screen hire, stage truss, rotating stage lights, fog machines, sound systems, exhibition stalls and digital podiums. One quote, one crew, all 25 districts.",
  keywords: [
    "event production services Sri Lanka",
    "LED wall hire Sri Lanka",
    "LED wall rent Sri Lanka",
    "LED wall Sri Lanka",
    "LED video wall hire Sri Lanka",
    "LED screen hire Sri Lanka",
    "LED screen rent Sri Lanka",
    "LED wall hire Colombo",
    "LED wall rent Colombo",
    "big screen rent Sri Lanka",
    "outdoor LED screen rent Sri Lanka",
    "wedding LED screen rent Sri Lanka",
    "LED backdrop hire Sri Lanka",
    "fog machine hire Sri Lanka",
    "rotating stage lights hire Sri Lanka",
    "stage truss hire Sri Lanka",
  ],
  canonical: `${SERVICE_SITE_URL}/services`,
};

export const ServicesHeroData: ServicesPageHero = {
  eyebrow: "Full event production, Sri Lanka",
  titleLine1: "Event production,",
  titleLine2: "LED wall hire and more.",
  description:
    "LED wall rent and LED screen hire for weddings, corporate events, concerts and rallies. Indoor P3 and outdoor IP65 walls with operator included. Add stage truss, rotating stage lights, fog machines, sound and stalls on one quote.",
  imageSrc: images.svcHero,
  imageAlt: "LED wall hire Sri Lanka LED wall rent outdoor concert stage",
};

export const ServicesList: ServiceDetailData[] = [
  {
    id: LED_WALL_SERVICE_ID,
    num: "01",
    title: "LED Wall Hire",
    sub: "LED wall hire · production add-ons available",
    href: LED_WALL_SERVICE_HREF,
    img: images.heroLedRental,
    tone: "light",
    icon: Monitor,
    quickNavLabel: "LED Wall Hire",
    cta: "Full LED wall hire details",
    body: "YC Events is Sri Lanka's LED wall hire specialist. We supply indoor P3 panels for weddings, corporate events and conferences, and outdoor IP65 panels for concerts, rallies and festivals - island-wide, across all 25 districts. Every booking includes delivery, full assembly, video processor setup, content testing and a dedicated on-site operator. Wall sizes from 6×4 ft to 40×20 ft+ are built to your venue, not a fixed catalogue. Add aluminium stage truss, rotating stage lights, fog machines, sound systems, exhibition stalls or digital podiums to the same quote - one crew, one delivery.",
    specs: [
      ["Indoor pixel pitch", "P3, wedding & corporate"],
      ["Outdoor pixel pitch", "P4 IP65 weatherproof"],
      ["Brightness", "Up to 7,000 nit outdoor"],
      ["Size range", "10×8 ft to 40×12 ft · custom sizes available"],
      ["Hire window", "8-hour business day (standard)"],
      ["Starting rate", `${formatLedWallRateLkr(55000)} / 8 hrs`],
      ["Includes", "Operator, delivery, setup, breakdown"],
      ["Production add-ons", "Stage lighting & fog, truss, sound, stalls, podiums"],
      ["Outdoor rating", "IP65, weatherproof LED wall rent"],
    ],
    seo: {
      title: "LED Wall Hire Sri Lanka | LED Wall Rent & Screen Hire",
      description:
        "LED wall hire and LED wall rent in Sri Lanka. Indoor P3 wedding walls, outdoor IP65 concert screens, LED backdrop hire. Stage truss, rotating stage lights and fog machines on the same quote. Operator included, island-wide.",
      keywords: [
        "LED wall hire Sri Lanka",
        "LED wall rent Sri Lanka",
        "LED wall Sri Lanka",
        "ledwalls",
        "LED wall hire near me",
        "LED wall rent near me",
        "ledwall hire Sri Lanka",
        "ledwall rent Sri Lanka",
        "LED screen rent Sri Lanka",
        "LED screen rental Sri Lanka",
        "LED screen hire Sri Lanka",
        "rent LED screen Colombo",
        "LED video wall hire Sri Lanka",
        "LED video wall rent Sri Lanka",
        "LED wall hire Colombo",
        "LED wall rent Colombo",
        "wedding LED screen rent Sri Lanka",
        "outdoor LED screen rent Sri Lanka",
        "indoor LED screen rent Sri Lanka",
        "LED backdrop hire Sri Lanka",
        "big screen rent Sri Lanka",
        "fog machine hire with LED wall",
        "rotating stage lights truss Sri Lanka",
        "LED screen corporate event Sri Lanka",
        "LED screen concert Sri Lanka",
        "LED screen hire with operator included Sri Lanka",
      ],
      h1: "LED Wall Hire Sri Lanka",
    },
    faqs: [
      {
        question: "Do you deliver LED walls to my area in Sri Lanka?",
        answer:
          "Yes, we cover all 25 districts, from Colombo and the Western Province to Kandy, Galle, Jaffna and every outstation venue. Send your venue on enquiry for a same-day quote.",
      },
      {
        question: "How much does LED wall hire cost?",
        answer:
          `Starts from ${formatLedWallRatePerDay(55000)} for an 8-hour day on a 10×8 ft wall. Final price depends on size, pixel pitch and indoor vs outdoor use. See the rate table above or our pricing page.`,
      },
      {
        question: "What is LED video wall hire?",
        answer:
          "Hiring modular LED panels assembled into one large screen for your event, including processor, cabling, rigging and an on-site operator.",
      },
      {
        question: "Do you offer wedding LED screen rent?",
        answer:
          "Yes - indoor P3 backdrop walls, aisle screens and stage displays, coordinated with your planner.",
      },
      {
        question: "Should I book indoor or outdoor?",
        answer:
          "Indoor uses P3 fine-pitch panels for ballrooms and hotels. Outdoor uses IP65 weatherproof P4 panels for concerts, rallies and festivals. We'll specify the right setup in your quote.",
      },
      {
        question: "What's the difference between P3 and P4?",
        answer:
          "P3 has a 3mm pixel pitch - sharper at close range, indoor use, 1,200-1,800 nit brightness, for hotels and weddings. P4 has a 4mm pitch - IP65 weatherproof, up to 7,000 nit, built for outdoor viewing from 4 metres and beyond.",
      },
      {
        question: "Can I rent an outdoor screen?",
        answer:
          "Yes, IP65 weatherproof panels rated for rain and direct sunlight, suited to concerts, rallies and festivals.",
      },
      {
        question: "Do you rent for corporate events and product launches?",
        answer:
          "Yes, covering AGMs, award nights and product launches, with P3 indoor panels and full-day technician support.",
      },
      {
        question: "Do you deliver outside Colombo?",
        answer:
          "Yes, delivery to all 25 districts is standard, including Kandy, Galle and Jaffna.",
      },
      {
        question: "What is LED backdrop hire?",
        answer:
          "Hiring a wall of LED panels behind your stage or head table, common for weddings, award ceremonies and gala nights. Sizes are custom-built for your venue.",
      },
      {
        question: "Do you provide LED walls for exhibitions and trade shows?",
        answer:
          "Yes, we install LED screens inside custom exhibition stalls, on booth fascia, or as standalone displays for expos and B2B trade shows, paired with our exhibition stall build service.",
      },
      {
        question: "Can I add truss, lighting or fog to my LED wall hire?",
        answer:
          `Yes, add our Stage Lighting & Fog service (${STAGE_LIGHTING_FOG_SERVICE_HREF}) or stage truss hire on the same quote.`,
      },
      {
        question: "Is an operator included for multi-day exhibitions?",
        answer:
          "Yes, your technician stays on-site for the full run of the event to manage content, brightness and troubleshooting.",
      },
    ],
    useCases: [
      {
        label: "Wedding LED screen",
        description: "Indoor P3 backdrops for weddings, coordinated with your planner.",
        img: images.wedding,
      },
      {
        label: "Outdoor concert",
        description: "IP65 outdoor walls for concerts, with stage lighting, fog and truss available.",
        img: images.crowd,
      },
      {
        label: "Corporate & launches",
        description: "Screens for product launches and conferences, with AV integration.",
        img: images.corporate,
      },
      {
        label: "Political rally",
        description: "Outdoor-rated walls for campaign events, island-wide.",
        img: images.concert2,
      },
      {
        label: "Exhibitions & trade shows",
        description: "Integrated into custom booths for expos and B2B fairs.",
        img: images.corporate2,
      },
    ],
    portfolio: LedWallPortfolio,
  },
  {
    id: "stage-truss",
    num: "02",
    title: "Stage & Truss Setup",
    sub: "Indoor stages, carpets & aluminium truss",
    href: "/services/stage-truss",
    img: images.stageIndoor,
    tone: "light",
    icon: Cpu,
    quickNavLabel: "Stage & Truss",
    cta: "Full stage & truss details",
    body: "Aluminium stage platforms and truss rigging for weddings, concerts and corporate events. Indoor stages with carpet finishing, or outdoor truss builds to support LED walls, lighting and speakers. Delivered, built and struck by our own crew.",
    ctaNote: "Add to any LED wall booking on the same quote.",
    specs: [
      ["Indoor stages", "Modular decks for ballrooms, hotels and banquet halls"],
      ["Stage carpets", "Red carpet, black carpet, skirting, steps and dressing"],
      ["Outdoor builds", "Roof truss, concert deck and LED rigging"],
      ["Truss type", "Load-rated aluminium"],
      ["Lighting add-on", `Stage lighting & fog (${STAGE_LIGHTING_FOG_SERVICE_HREF})`],
      ["Coverage", "Island-wide including outstation"],
      ["De-rig", "Included in every booking"],
    ],
    seo: {
      title: "Stage & Truss Setup Sri Lanka | YC Events",
      description:
        "Aluminium stage and truss hire for events in Sri Lanka. Indoor stages, carpets and rigging, delivered and built island-wide.",
      keywords: [
        "stage truss hire Sri Lanka",
        "stage hire Sri Lanka",
        "indoor stage hire Colombo",
        "stage carpet hire Sri Lanka",
        "truss setup Colombo",
        "LED wall truss rigging Sri Lanka",
        "outdoor concert stage Sri Lanka",
      ],
      h1: "Stage & Truss Setup",
    },
    faqs: [
      {
        question: "Do you provide indoor stages for hotels and ballrooms?",
        answer:
          "Yes. We build modular indoor stages sized to your ballroom or hotel hall, with optional LED backdrop truss, steps and a full carpet dress. Add Stage Lighting & Fog for rotating lights and atmosphere effects.",
      },
      {
        question: "Can I hire stage carpets and skirting with the stage?",
        answer:
          "Yes. Stage carpet hire is included in our dressing package: red carpet, black carpet, skirting, edge trim and steps where needed. Our crew lays, dresses and removes everything at the end of your event.",
      },
      {
        question: "Can I add rotating lights and fog machines with stage truss?",
        answer:
          `Yes. Book our Stage Lighting & Fog add-on (${STAGE_LIGHTING_FOG_SERVICE_HREF}) on the same quote as stage truss or LED wall hire.`,
      },
      {
        question: "Is stage de-rig included in the price?",
        answer:
          "Yes. Every YC Events stage booking includes full de-rig and carpet removal at the end of your event with no separate breakdown charges.",
      },
    ],
    useCases: [
      {
        label: "Indoor stages",
        description:
          "Modular stage decks for hotel ballrooms, conference halls and banquet venues.",
        img: images.stageIndoor,
      },
      {
        label: "Outdoor concerts",
        description:
          "Roof truss, concert deck and LED wall rigging for live shows and festivals.",
        img: images.stage2,
      },
      {
        label: "Weddings & galas",
        description:
          "Elegant raised platforms with carpet dress and backdrop truss for celebrations.",
        img: images.stageWedding,
      },
    ],
    portfolio: StagePortfolio,
  },
  {
    id: STAGE_LIGHTING_FOG_SERVICE_ID,
    num: "03",
    title: "Stage Lighting & Fog",
    sub: "Rotating stage lights · fog machine hire",
    href: STAGE_LIGHTING_FOG_SERVICE_HREF,
    img: images.concert2,
    tone: "light",
    icon: Sparkles,
    quickNavLabel: "Lighting & Fog",
    cta: "Full lighting & fog details",
    body: "Rotating stage lights and fog machines for concerts, weddings and corporate shows. Add to any LED wall or stage booking for one quote and one crew.",
    ctaNote: "Add to any LED wall booking on the same quote.",
    specs: [
      ["Rotating lights", "Moving-head stage lights on truss"],
      ["Fog machines", "Concert, wedding and stage fog hire"],
      ["Rigging", "Aluminium truss mounting included"],
      ["Operator", "Lighting operator on every booking"],
      ["Book with", "LED wall hire, stage truss or standalone"],
      ["Coverage", "Island-wide, all 25 districts"],
      ["De-rig", "Included in every booking"],
    ],
    seo: {
      title: "Stage Lighting & Fog Hire Sri Lanka | YC Events",
      description:
        "Rotating stage lights and fog machine hire for events in Sri Lanka. Concerts, weddings and corporate shows, island-wide.",
      keywords: [
        "rotating stage lights hire Sri Lanka",
        "fog machine hire Sri Lanka",
        "fog machine hire Colombo",
        "moving head lights hire Sri Lanka",
        "stage lighting hire Sri Lanka",
        "fog machine hire with LED wall",
        "concert lighting hire Sri Lanka",
        "wedding stage lights hire Sri Lanka",
        "fog machine hire Sri Lanka",
        "stage fog effects hire Colombo",
      ],
      h1: "Stage Lighting & Fog",
    },
    faqs: [
      {
        question: "Do you hire rotating stage lights in Sri Lanka?",
        answer:
          "Yes. Rotating stage lights hire is a core part of our Stage Lighting & Fog service. Moving-head fixtures mount on aluminium truss for concerts, weddings, award nights and corporate shows, programmed and operated by our crew.",
      },
      {
        question: "Can I rent fog machines for my event?",
        answer:
          "Yes. Fog machine hire is available for concerts, weddings, product launches and stage productions. Fog adds depth for LED wall backdrops, dance floors and live performances.",
      },
      {
        question: "Can I add stage lighting and fog to LED wall hire?",
        answer:
          `Yes. Stage lighting and fog is a popular add-on to LED wall hire (${LED_WALL_SERVICE_HREF}). One quote covers the LED screen, truss rigging, rotating lights and fog machines with a single crew.`,
      },
      {
        question: "Do I need truss to hire rotating stage lights?",
        answer:
          "Rotating stage lights mount on truss. If you already have truss from our stage hire package, we rig lights to it. If not, we supply truss as part of the lighting setup.",
      },
      {
        question: "Is a lighting operator included?",
        answer:
          "Yes. Every Stage Lighting & Fog booking includes an operator to program looks, run cues during your event and pack down fixtures after the show.",
      },
      {
        question: "Do you deliver stage lighting outside Colombo?",
        answer:
          "Yes. Rotating stage lights and fog machine hire covers all 25 districts including Kandy, Galle, Jaffna and Negombo. Outstation delivery is quoted upfront with your LED wall or stage package.",
      },
    ],
    useCases: [
      {
        label: "Concerts & live shows",
        description:
          "Rotating stage lights and fog for outdoor concerts, festivals and arena-scale productions.",
        img: images.crowd,
      },
      {
        label: "Weddings & galas",
        description:
          "Warm washes, spotlight effects and soft fog for entrances, dances and stage moments.",
        img: images.wedding2,
      },
      {
        label: "Corporate & launches",
        description:
          "Branded colour looks and reveal fog for product launches, AGMs and award nights.",
        img: images.corporate,
      },
    ],
    portfolio: LightingFogPortfolio,
  },
  {
    id: "sound",
    num: "04",
    title: "Sound Systems",
    sub: "Professional audio for 300 to 5,000+ audiences",
    href: "/services/sound",
    img: images.sound,
    tone: "light",
    icon: Volume2,
    quickNavLabel: "Sound",
    cta: "Full sound system details",
    body: "Professional PA systems for audiences from 300 to 5,000+, using JBL and RCF equipment. Suited to weddings, corporate events, concerts and outdoor rallies. An audio operator is included with every booking.",
    ctaNote: "Add to any LED wall booking on the same quote.",
    specs: [
      ["Includes", "Speakers, mixing desk, microphones, operator"],
      ["Brands", "JBL, RCF"],
      ["Coverage", "300 to 5,000+ capacity"],
      ["Operator", "Trained audio technician included"],
    ],
    seo: {
      title: "Sound System Rental Sri Lanka | YC Events",
      description:
        "Professional sound system hire in Sri Lanka. JBL and RCF PA systems for 300 to 5,000+ audiences, with operator included.",
      keywords: [
        "sound system hire Sri Lanka",
        "PA hire Colombo",
      ],
      h1: "Sound System Rental",
    },
    faqs: [
      {
        question: "Is a sound engineer included?",
        answer:
          "Yes. Every booking includes a trained audio operator for setup, soundcheck and the full event.",
      },
    ],
    useCases: [
      {
        label: "Weddings",
        description: "Clean indoor PA with wireless mics for speeches and ceremony audio.",
        img: images.wedding2,
      },
      {
        label: "Concerts",
        description: "Outdoor line arrays with sub-bass for any audience size.",
        img: images.crowd,
      },
      {
        label: "Corporate",
        description: "Conference PA and wireless mic management for any venue.",
        img: images.corporate,
      },
    ],
  },
  {
    id: "exhibition-stalls",
    num: "05",
    title: "Exhibition Stalls",
    sub: "Custom trade show booths for expos and brand fairs",
    href: "/services/exhibition-stalls",
    img: images.exhibition,
    tone: "light",
    icon: LayoutGrid,
    quickNavLabel: "Exhibition",
    cta: "Full exhibition stall details",
    body: "Custom-built exhibition stalls for trade shows, expos and brand fairs. Stalls can include an integrated LED screen or standalone display, built to your booth dimensions.",
    ctaNote: "Add an LED screen to your stall on the same quote.",
    specs: [
      ["Includes", "Stall structure, branding panels, LED screen (optional), setup and breakdown"],
      ["Shell scheme", "3×3m, 4×3m, 6×3m or custom"],
      ["Coverage", "Island-wide, all 25 districts"],
    ],
    seo: {
      title: "Exhibition Stall Rental Sri Lanka | YC Events",
      description:
        "Custom exhibition stalls and trade show booths in Sri Lanka. Built for expos and brand fairs, with LED screens available.",
      keywords: [
        "exhibition stall hire Sri Lanka",
        "trade show booth Colombo",
      ],
      h1: "Exhibition Stall Rental",
    },
    faqs: [
      {
        question: "Can you add an LED screen to my exhibition stall?",
        answer:
          "Yes. LED wall hire for exhibitions is available as an add-on to any shell scheme or custom stall, with operator included. We fit fascia-mounted LED screens, standalone displays or interactive video walls sized to your booth.",
      },
    ],
    useCases: [
      {
        label: "Trade shows",
        description: "Shell schemes and custom booths for national expos.",
        img: images.corporate2,
      },
      {
        label: "Product launches",
        description: "Branded stalls with fascia, lighting and AV integration.",
        img: images.corporate,
      },
      {
        label: "Brand fairs",
        description: "High-impact booths for FMCG and retail activations.",
        img: images.brand,
      },
    ],
  },
  {
    id: "digital-podiums",
    num: "06",
    title: "Digital Podiums",
    sub: "Branded LED-lit lecterns for conferences and ceremonies",
    href: "/services/digital-podiums",
    img: images.podium,
    tone: "light",
    icon: Monitor,
    quickNavLabel: "Podiums",
    cta: "Full digital podium details",
    body: "Branded, LED-lit lecterns for conferences, product launches and award ceremonies. Custom branding panels available on request.",
    ctaNote: "Add to any LED wall booking on the same quote.",
    specs: [
      ["Includes", "Podium unit, LED lighting, branding panel, delivery and setup"],
      ["Finish", "Black acrylic / white acrylic / custom"],
      ["Display", "10-15\" integrated LCD panel"],
    ],
    seo: {
      title: "Digital Podium Rental Sri Lanka | YC Events",
      description:
        "LED-lit digital podium hire for conferences, product launches and ceremonies in Sri Lanka.",
      keywords: [
        "digital podium hire Sri Lanka",
        "LED lectern hire Colombo",
      ],
      h1: "Digital Podium Rental",
    },
    faqs: [
      {
        question: "Can the podium show our branding?",
        answer:
          "Yes. The integrated LCD panel can display your logo, event branding or presentation content. Custom acrylic wraps and fascia are available.",
      },
    ],
    useCases: [
      {
        label: "Conferences",
        description: "Branded lecterns with integrated display for keynotes.",
        img: PodiumPortfolio[0]?.src ?? images.corporate,
      },
      {
        label: "Award ceremonies",
        description: "LED-lit podiums for gala nights and convocations.",
        img: PodiumPortfolio[1]?.src ?? images.podium,
      },
      {
        label: "Product launches",
        description: "Clean podium aesthetic with AV connectivity built in.",
        img: PodiumPortfolio[2]?.src ?? images.corporate2,
      },
    ],
    portfolio: PodiumPortfolio,
  },
];

export const LedWallAddonServices: ServiceDetailData[] = ServicesList.filter(
  (service) => service.id !== LED_WALL_SERVICE_ID
);

export const LedWallEventFocusIntro = {
  eyebrow: "LED wall hire by event",
  title: "Indoor and outdoor LED walls for every event.",
  description:
    "YC Events runs two panel types: P3 fine-pitch indoor and P4 weatherproof outdoor. Every event type below is matched to the right panel, operator and rigging.",
};

export const IndoorLedWallEvents: LedWallEventCard[] = [
  {
    id: "weddings",
    title: "Weddings",
    description:
      "P3 indoor LED backdrop hire for receptions and ceremonies. Wedding LED screen Colombo and island-wide with planner coordination.",
    img: images.wedding,
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "corporate",
    title: "Corporate events",
    description:
      "P3 indoor LED wall corporate event hire for conferences, AGMs and product launches with AV integration.",
    img: images.corporate,
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "award-nights",
    title: "Award nights",
    description:
      "P3 indoor LED backdrop hire for gala nights and convocations, fine-pitch walls for close-up stage shots.",
    img: images.brand,
    href: LED_WALL_SERVICE_HREF,
  },
];

export const OutdoorLedWallEvents: LedWallEventCard[] = [
  {
    id: "concerts",
    title: "Concerts",
    description:
      "P4 outdoor IP65 LED screen rent for live shows, weatherproof and bright enough for daylight and night sets.",
    img: images.concert2,
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "political-rallies",
    title: "Political rallies",
    description:
      "P4 outdoor LED screen political rally Sri Lanka, weatherproof big screen rent for campaign events island-wide.",
    img: images.crowd,
    href: LED_WALL_SERVICE_HREF,
  },
  {
    id: "festivals",
    title: "Festivals & public events",
    description:
      "P4 outdoor LED wall rent for festivals and open grounds, IP65 rated and rigged by certified crew.",
    img: images.concert3,
    href: LED_WALL_SERVICE_HREF,
  },
];

export const ServicesQuickNav: QuickNavItem[] = ServicesList.map((s) => ({
  label:
    s.quickNavLabel ??
    s.title.replace(" Setup", "").replace(" Promotion Trucks", " Trucks"),
  href: s.href,
  icon: s.icon,
}));

export const CoverageContent: CoverageSectionContent = {
  eyebrow: "Island-wide service coverage",
  title: "Every service. Every district. Colombo to Jaffna.",
  districts: [
    { name: "Colombo", href: "/led-wall-rental-colombo" },
    { name: "Kandy", href: "/led-wall-rental-kandy" },
    { name: "Galle", href: "/led-wall-rental-galle" },
    { name: "Negombo", href: "/led-wall-rental-negombo" },
    { name: "Jaffna", href: "/led-wall-rental-jaffna" },
    { name: "Anuradhapura", href: "/led-wall-rental-anuradhapura" },
    { name: "Matara", href: "/led-wall-rental-matara" },
    { name: "Kurunegala", href: "/led-wall-rental-kurunegala" },
    { name: "Ratnapura", href: "/led-wall-rental-ratnapura" },
    { name: "Badulla", href: "/led-wall-rental-badulla" },
    { name: "Trincomalee", href: "/led-wall-rental-trincomalee" },
    { name: "Batticaloa", href: "/led-wall-rental-batticaloa" },
  ],
  highlightLabel: "+ All 25 Districts",
};

export const ServicesQuoteContentData: ServicesQuoteContent = {
  eyebrow: "Book a Service",
  titleLine1: "Tell us what",
  titleLine2: "you need.",
  titleMuted: "Quote in 60 min.",
  description:
    "Itemised quotes. No hidden costs. Equipment, crew, transport, setup and breakdown, all included.",
};

export const ServicesQuoteContacts: ContactMethod[] = QuoteDialogContacts.map(
  (item) => ({
    ...item,
    variant: "light" as const,
    iconClassName:
      item.id.startsWith("wa")
        ? "text-whatsapp"
        : item.id.startsWith("call")
          ? "text-brand"
          : "text-blue-500",
  })
);

export function getServiceBySlug(slug: string): ServiceDetailData | undefined {
  return ServicesList.find((service) => service.id === slug);
}

export function getServiceSlugs(): string[] {
  return ServicesList.map((service) => service.id);
}

export function buildServicesSchema() {
  return buildPageJsonLd({
    path: "/services",
    name: ServicesPageMetaData.title,
    description: ServicesPageMetaData.description,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Services" }],
    extra: [
      {
        "@type": "OfferCatalog",
        name: "Event Production Services",
        provider: { "@id": LOCAL_BUSINESS_ID },
        itemListElement: ServicesList.map((s, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            "@id": `${SERVICE_SITE_URL}${s.href}#service`,
            name: s.title,
            description: s.sub,
            url: `${SERVICE_SITE_URL}${s.href}`,
          },
        })),
      },
    ],
  });
}

/**
 * Service schema for the "LED Screen Rent in Sri Lanka" section on the LED wall
 * hire page. Standalone Service node (not wrapped in buildPageJsonLd) so it
 * doesn't emit a second, duplicate WebPage @id alongside buildServiceDetailSchema.
 */
export function buildLedScreenRentSchema() {
  return buildJsonLd([
    {
      "@type": "Service",
      "@id": `${SERVICE_SITE_URL}${LED_WALL_SERVICE_HREF}#led-screen-rent`,
      name: "LED Screen Rent in Sri Lanka",
      serviceType: "LED screen rental",
      description:
        "Full-service LED screen rental across Colombo and island-wide, from indoor displays for corporate meetings to large outdoor LED walls for concerts, weddings and exhibitions.",
      provider: { "@id": LOCAL_BUSINESS_ID },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      url: `${SERVICE_SITE_URL}${LED_WALL_SERVICE_HREF}#led-screen-rent`,
    },
  ]);
}

export function buildServiceDetailSchema(service: ServiceDetailData) {
  return buildPageJsonLd({
    path: service.href,
    name: service.seo.title,
    description: service.seo.description,
    faqs: service.faqs,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: service.title },
    ],
    extra: [
      {
        "@type": "Service",
        "@id": `${SERVICE_SITE_URL}${service.href}#service`,
        name: service.seo.h1,
        serviceType: service.title,
        description: service.seo.description,
        image: `${SERVICE_SITE_URL}${service.img}`,
        provider: { "@id": LOCAL_BUSINESS_ID },
        areaServed: { "@type": "Country", name: "Sri Lanka" },
        url: `${SERVICE_SITE_URL}${service.href}`,
      },
    ],
  });
}
