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
import { buildPageJsonLd, LOCAL_BUSINESS_ID } from "@/lib/json-ld";
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
  title: "LED Wall Hire Sri Lanka | LED Wall Rent & Screen Hire",
  description:
    "LED wall hire and LED wall rent across Sri Lanka. Indoor P3, outdoor IP65 LED screens, wedding walls and concert backdrops. Stage truss, rotating lights and fog machines available. Operator included. All 25 districts.",
  keywords: [
    "LED wall hire Sri Lanka",
    "LED wall rent Sri Lanka",
    "LED wall rental Sri Lanka",
    "LED wall Sri Lanka",
    "LED video wall rental Sri Lanka",
    "LED screen hire Sri Lanka",
    "LED screen rent Sri Lanka",
    "LED wall hire Colombo",
    "LED wall rent Colombo",
    "big screen rent Sri Lanka",
    "outdoor LED screen rental Sri Lanka",
    "wedding LED screen rental Sri Lanka",
    "LED backdrop rental Sri Lanka",
    "fog machine hire Sri Lanka",
    "rotating stage lights hire Sri Lanka",
    "stage truss hire Sri Lanka",
  ],
  canonical: `${SERVICE_SITE_URL}/services`,
};

export const ServicesHeroData: ServicesPageHero = {
  eyebrow: "LED wall hire Sri Lanka",
  titleLine1: "LED wall hire.",
  titleLine2: "Full event production.",
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
    body: "YC Events is Sri Lanka's specialist LED wall hire company. We LED wall rent and LED screen hire for weddings, corporate events, concerts, political rallies, product launches and exhibitions across all 25 districts. Indoor LED screen rental uses fine-pitch P3 panels for crystal-clear wedding backdrops, award nights, conference halls and trade show booths. Outdoor LED screen rental uses IP65-rated P4 weatherproof panels up to 7,000 nit, fully readable in direct Sri Lankan sunlight. Every LED video wall hire includes delivery, full assembly, video processor setup, content testing and a dedicated on-site operator. Big LED screen rent builds from 6×4 ft to 40×20 ft+ are sized for your venue, not a fixed catalogue size. Add aluminium stage truss, rotating stage lights, fog machines, sound systems, exhibition stalls or digital podiums on the same booking for a single crew, one quote and one delivery.",
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
        "LED wall rental Sri Lanka",
        "LED wall Sri Lanka",
        "LED screen rent Sri Lanka",
        "LED screen hire Sri Lanka",
        "LED video wall rental Sri Lanka",
        "LED wall hire Colombo",
        "LED wall rent Colombo",
        "wedding LED screen rental Sri Lanka",
        "outdoor LED screen rental Sri Lanka",
        "indoor LED screen rental Sri Lanka",
        "LED backdrop rental Sri Lanka",
        "big screen rent Sri Lanka",
        "fog machine hire with LED wall",
        "rotating stage lights truss Sri Lanka",
        "LED screen corporate event Sri Lanka",
        "LED screen concert Sri Lanka",
        "LED screen rental with operator included Sri Lanka",
      ],
      h1: "LED Wall Hire Sri Lanka",
    },
    faqs: [
      {
        question: "How much does LED wall hire cost in Sri Lanka?",
        answer:
          `LED wall hire starts from ${formatLedWallRatePerDay(55000)} for a 10×8 ft wall on a standard 8-hour business day. LED wall rent price depends on size and location. See the rate table on this page or our pricing page for all standard sizes.`,
      },
      {
        question: "What is LED wall hire vs LED wall rent?",
        answer:
          "LED wall hire and LED wall rent are the same at YC Events: you book the LED screen with delivery, rigging, operator and breakdown included. We quote LED wall rent in LKR per 8-hour business day with no separate operator charge.",
      },
      {
        question: "What is LED video wall rental?",
        answer:
          "LED video wall rental is hiring modular LED panels assembled into one large screen for your event. YC Events provides LED video wall rent and hire with processor, cabling, rigging and an on-site operator across Sri Lanka.",
      },
      {
        question: "Do you offer wedding LED screen rental in Sri Lanka?",
        answer:
          "Yes. LED wall rental wedding Sri Lanka bookings include indoor P3 backdrop walls, aisle screens and stage displays. Wedding LED screen Colombo and island-wide with planner coordination.",
      },
      {
        question: "What should I book: indoor or outdoor LED screen rental?",
        answer:
          "Indoor LED wall rent uses P3 fine-pitch panels for ballrooms and hotels. Outdoor LED screen rental uses IP65 weatherproof P4 panels for concerts, rallies and festivals. We specify the correct setup in your quote.",
      },
      {
        question: "What is the difference between indoor and outdoor LED wall rent?",
        answer:
          "Indoor LED wall rent Sri Lanka uses fine P3 pixel pitch panels for close viewing distances at weddings and conferences. Outdoor LED wall rent Sri Lanka uses IP65 weatherproof P4 panels built for brighter, longer viewing distances at concerts and rallies.",
      },
      {
        question: "What is the difference between P3 and P4 LED screens?",
        answer:
          "P3 has a 3mm pixel pitch, sharper at close range, indoor use, brightness around 1,200 to 1,800 nit for hotels, weddings and conference halls. P4 has a 4mm pixel pitch, IP65 weatherproof, brighter at up to 7,000 nit for outdoor viewing distances of 4 metres and beyond. We recommend P4 for any event exposed to direct sunlight or rain.",
      },
      {
        question: "Can I rent an IP65 outdoor LED screen?",
        answer:
          "Yes. IP65 outdoor LED screen Sri Lanka rentals use weatherproof panels rated for rain and direct sunlight. Ideal for outdoor LED wall concert builds, political rallies and festival big screen hire.",
      },
      {
        question: "Do you rent LED screens for corporate events and product launches?",
        answer:
          "Yes. LED screen corporate event Sri Lanka hire covers AGMs, award nights and LED screen product launch Colombo events with P3 indoor panels and full-day technician support.",
      },
      {
        question: "Do you deliver LED walls outside Colombo?",
        answer:
          "Yes. LED screen outstation delivery is standard across all 25 districts including Kandy, Galle and Jaffna. LED wall Kandy delivery is included in your quote.",
      },
      {
        question: "What is LED backdrop rental?",
        answer:
          "LED backdrop rental is hiring a wall of LED panels behind your stage or head table, common for weddings, award ceremonies and gala nights. LED backdrop rent sizes are custom-built for your venue.",
      },
      {
        question: "Do you provide LED walls for exhibitions and trade shows?",
        answer:
          "Yes. LED wall rental for exhibitions and trade shows is one of our fastest growing corporate bookings. We install LED screens inside custom exhibition stalls, on booth fascia and as standalone displays for expos, brand fairs and B2B trade shows across Sri Lanka, paired with our exhibition stall build service.",
      },
      {
        question: "Can I add stage truss, rotating lights and fog machines to LED wall hire?",
        answer:
          `Yes. Add our Stage Lighting & Fog service (${STAGE_LIGHTING_FOG_SERVICE_HREF}) or stage truss hire on the same LED wall quote. Rotating stage lights and fog machines are popular for concerts, weddings and corporate shows.`,
      },
      {
        question: "Can I add stage, sound or exhibition stalls to my LED wall booking?",
        answer:
          `Yes. Every LED wall hire can include add-ons on the same quote: stage truss, stage lighting and fog (${STAGE_LIGHTING_FOG_SERVICE_HREF}), indoor stages with carpets, JBL and RCF sound systems with operator, custom exhibition stalls and digital podiums. One crew handles delivery, setup and pack-down for the full package.`,
      },
      {
        question: "Is LED screen rental with operator included available for exhibitions?",
        answer:
          "Yes. LED screen rental with operator included applies to every booking, including multi-day exhibitions and trade shows. Your technician stays on-site for the full run of the expo to manage content changes, brightness and any troubleshooting.",
      },
    ],
    useCases: [
      {
        label: "Wedding LED screen",
        description:
          "LED wall wedding Colombo and island-wide, P3 indoor backdrops with planner coordination.",
        img: images.wedding,
      },
      {
        label: "Outdoor concert",
        description:
          "LED wall hire for concerts in Sri Lanka, IP65 outdoor walls. Add stage lighting, fog machines and truss on the same quote.",
        img: images.crowd,
      },
      {
        label: "Corporate & launches",
        description:
          "LED wall corporate event and product launch screens with AV integration.",
        img: images.corporate,
      },
      {
        label: "Political rally",
        description:
          "LED screen political rally Sri Lanka, outdoor rated walls for campaign events island-wide.",
        img: images.concert2,
      },
      {
        label: "Exhibitions & trade shows",
        description:
          "LED wall rental for exhibitions and trade shows, integrated into custom booths for expos and B2B brand fairs.",
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
    body: "YC Events builds indoor stages for hotels, ballrooms and banquet halls, plus outdoor concert stages with load-rated aluminium truss. Every stage booking can include stage carpets, red carpet, skirting, steps and full stage dressing, laid and packed down by our crew. Pair with our Stage Lighting & Fog add-on for rotating lights and fog machines, or book standalone across all 25 districts.",
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
      title: "Stage & Truss Hire Sri Lanka | Indoor & Outdoor Stages",
      description:
        "Stage truss hire and indoor stage rental in Sri Lanka. Modular decks, stage carpets, outdoor concert builds and LED wall rigging. Add stage lighting and fog on the same quote. Island-wide crew.",
      keywords: [
        "stage truss hire Sri Lanka",
        "stage hire Sri Lanka",
        "indoor stage rental Colombo",
        "stage carpet hire Sri Lanka",
        "truss setup Colombo",
        "LED wall truss rigging Sri Lanka",
        "outdoor concert stage Sri Lanka",
      ],
      h1: "Stage & Truss Hire Sri Lanka",
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
    body: "YC Events hires rotating stage lights and fog machines for weddings, concerts, award nights, product launches and corporate shows across Sri Lanka. Moving-head fixtures rig on our aluminium truss for colour washes, beams and audience effects. Fog machines add atmosphere for entrances, dance sets and stage reveals. Available as an add-on to LED wall hire and stage truss, or as a standalone lighting and fog package. Our crew programs looks, runs the show and packs down after your event.",
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
      title: "Rotating Stage Lights & Fog Machine Hire Sri Lanka",
      description:
        "Rotating stage lights hire and fog machine rental in Sri Lanka. Moving-head fixtures on truss for concerts, weddings and corporate shows. Add to LED wall hire or book standalone. Operator included, island-wide.",
      keywords: [
        "rotating stage lights hire Sri Lanka",
        "fog machine hire Sri Lanka",
        "fog machine rental Colombo",
        "moving head lights hire Sri Lanka",
        "stage lighting hire Sri Lanka",
        "fog machine hire with LED wall",
        "concert lighting hire Sri Lanka",
        "wedding stage lights hire Sri Lanka",
        "fog machine rental Sri Lanka",
        "stage fog effects hire Colombo",
      ],
      h1: "Stage Lighting & Fog Hire Sri Lanka",
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
    body: "JBL and RCF line array systems available as an add-on to your LED wall hire, sized to your venue and audience from 300 to 5,000+. A trained audio operator is included with every booking.",
    specs: [
      ["Brands", "JBL, RCF"],
      ["Coverage", "300 to 5,000+ capacity"],
      ["Operator", "Trained audio technician included"],
    ],
    seo: {
      title: "Sound System Rental Sri Lanka | Add-on to LED Wall Hire",
      description:
        "JBL and RCF sound system hire for events in Sri Lanka, available as an add-on to LED wall rental. Trained audio operator included. Island-wide.",
      keywords: [
        "sound system rental Sri Lanka",
        "PA hire Colombo",
      ],
      h1: "Sound System Rental Sri Lanka",
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
    body: "Custom exhibition stalls and trade show booths, available with a fascia-mounted or standalone LED wall hire built in. Standard 3×3m, 4×3m and 6×3m shell schemes or fully custom builds, delivered island-wide.",
    specs: [
      ["Shell scheme", "3×3m, 4×3m, 6×3m or custom"],
      ["Coverage", "Island-wide, all 25 districts"],
    ],
    seo: {
      title: "Exhibition Stall Hire Sri Lanka | LED Wall Add-on",
      description:
        "Exhibition stalls and trade show booths in Sri Lanka, with LED wall rental available built into your booth. Design, delivery, setup included. All 25 districts.",
      keywords: [
        "exhibition stall hire Sri Lanka",
        "trade show booth Colombo",
      ],
      h1: "Exhibition Stalls Sri Lanka",
    },
    faqs: [
      {
        question: "Can you add an LED screen to my exhibition stall?",
        answer:
          "Yes. LED wall rental for exhibitions is available as an add-on to any shell scheme or custom stall, with operator included. We fit fascia-mounted LED screens, standalone displays or interactive video walls sized to your booth.",
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
    body: "Branded LED-lit digital podiums for conferences, award ceremonies and convocations, available as an add-on to any LED wall rental booking. Delivery and technician setup included.",
    specs: [
      ["Finish", "Black acrylic / white acrylic / custom"],
      ["Display", "10-15\" integrated LCD panel"],
    ],
    seo: {
      title: "Digital Podium Rental Sri Lanka | LED Wall Add-on",
      description:
        "Digital podiums and LED lecterns for conferences and ceremonies in Sri Lanka, available with LED wall rental. Delivery and technician setup included.",
      keywords: [
        "digital podium rental Sri Lanka",
        "LED lectern hire Colombo",
      ],
      h1: "Digital Podiums Sri Lanka",
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
  eyebrow: "LED wall rental by event",
  title: "Indoor and outdoor LED walls for every event.",
  description:
    "YC Events runs two panel types: P3 fine-pitch indoor and P4 weatherproof outdoor. Every event type below is matched to the right panel, operator and rigging.",
};

export const IndoorLedWallEvents: LedWallEventCard[] = [
  {
    id: "weddings",
    title: "Weddings",
    description:
      "P3 indoor LED backdrop rental for receptions and ceremonies. Wedding LED screen Colombo and island-wide with planner coordination.",
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
      "P3 indoor LED backdrop rental for gala nights and convocations, fine-pitch walls for close-up stage shots.",
    img: images.brand,
    href: LED_WALL_SERVICE_HREF,
  },
];

export const OutdoorLedWallEvents: LedWallEventCard[] = [
  {
    id: "concerts",
    title: "Concerts",
    description:
      "P4 outdoor IP65 LED screen rental for live shows, weatherproof and bright enough for daylight and night sets.",
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
    "Ratnapura",
    "Badulla",
    "Trincomalee",
    "Batticaloa",
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
    localBusinessExtra: {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Event Production Services",
        itemListElement: ServicesList.map((s, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.sub,
            url: `${SERVICE_SITE_URL}${s.href}`,
          },
        })),
      },
    },
  });
}

export function buildServiceDetailSchema(service: ServiceDetailData) {
  return buildPageJsonLd({
    path: service.href,
    name: service.seo.title,
    description: service.seo.description,
    faqs: service.faqs,
    extra: [
      {
        "@type": "Service",
        name: service.seo.h1,
        description: service.seo.description,
        provider: { "@id": LOCAL_BUSINESS_ID },
        areaServed: "Sri Lanka",
        url: `${SERVICE_SITE_URL}${service.href}`,
      },
    ],
  });
}
