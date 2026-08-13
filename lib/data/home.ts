import {
  Clock,
  Cpu,
  FileText,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Monitor,
  Phone,
  Shield,
  Sparkles,
  Volume2,
} from "lucide-react";
import { images } from "@/lib/images";
import { LED_WALL_SERVICE_HREF, STAGE_LIGHTING_FOG_SERVICE_HREF } from "@/lib/data/services";
import { buildPageJsonLd, LOCAL_BUSINESS_ID } from "@/lib/json-ld";
import { SITE_URL } from "@/lib/site";
import {
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
  PRIMARY_WHATSAPP_HREF,
  HOTLINE_PHONE_DISPLAY,
  HOTLINE_PHONE_HREF,
  SECONDARY_PHONE_DISPLAY,
  SECONDARY_PHONE_HREF,
} from "@/lib/data/contact";
import type {
  ClientLogoStripContent,
  ContactMethod,
  CtaContent,
  EventTypeTab,
  FaqItem,
  FeatureItem,
  GalleryTeaserItem,
  HeroContent,
  HomePageMeta,
  ProcessStep,
  QuoteFormValues,
  Review,
  SectionIntro,
  ServiceCardData,
  StatItemData,
  WhyUsContent,
} from "@/types/site";

export const HomePageMetaData: HomePageMeta = {
  title: "YC Events | LED Wall Hire, LED Screen Rent & Event Production Sri Lanka",
  description:
    "YC Events (ledwalls.lk) is Sri Lanka's LED wall hire, LED screen rent and event production company. Stage truss, lighting, fog and sound on the same quote. Island-wide, all 25 districts.",
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
    "LED wall hire Colombo",
    "LED wall rent Colombo",
    "rent LED screen Colombo",
    "LED video wall hire Sri Lanka",
    "LED video wall rent Sri Lanka",
    "wedding LED screen Colombo",
    "LED screen hire with operator included",
    "LED wall delivery outside Colombo",
    "fog machine hire Sri Lanka",
    "rotating stage lights hire Sri Lanka",
  ],
};

export const HeroContentData: HeroContent = {
  eyebrow: "Island-wide LED wall hire, ledwalls.lk",
  headline: {
    line1: "LED wall hire,",
    accent: "full event production",
    line2: "",
  },
  subheadline: "Indoor P3 and outdoor IP65 screens for weddings, concerts and corporate events",
  description:
    "Indoor and outdoor LED video walls with delivery, setup and operator included. Add stage truss, rotating stage lights and fog machines on the same booking. Weddings, concerts, corporate events and rallies across all 25 districts.",
  imageSrc: images.hero,
  imageAlt: "YC Events LED wall setup at an outdoor concert in Sri Lanka",
  primaryCta: "Get a quote",
  secondaryCta: "View pricing",
  secondaryHref: "/pricing",
  badge: "All 25 districts · Operator included · Quote in 60 minutes",
};

export const HeroStats: StatItemData[] = [
  { value: "1,000+", label: "LED events" },
  { value: "7+", label: "Years" },
  { value: "25", label: "Districts" },
  { value: "P3 / P4", label: "LED panels" },
];

export const HomeServices: ServiceCardData[] = [
  {
    num: "01",
    title: "LED Wall Hire",
    sub: "LED screen hire · P3 indoor · IP65 outdoor",
    img: images.hero2,
    href: LED_WALL_SERVICE_HREF,
    icon: Monitor,
  },
  {
    num: "02",
    title: "Stage and Truss Setup",
    sub: "Indoor stages, carpets & truss",
    img: images.stageIndoor,
    href: "/services/stage-truss",
    icon: Cpu,
  },
  {
    num: "03",
    title: "Stage Lighting & Fog",
    sub: "Rotating lights · fog machines",
    img: images.concert2,
    href: STAGE_LIGHTING_FOG_SERVICE_HREF,
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Sound Systems",
    sub: "Add-on with any LED wall booking",
    img: images.sound,
    href: "/services/sound",
    icon: Volume2,
  },
  {
    num: "05",
    title: "Exhibition Stalls",
    sub: "Add-on with any LED wall booking",
    img: images.exhibition,
    href: "/services/exhibition-stalls",
    icon: LayoutGrid,
  },
  {
    num: "06",
    title: "Digital Podiums",
    sub: "Add-on with any LED wall booking",
    img: images.podium,
    href: "/services/digital-podiums",
    icon: Monitor,
  },
];

export const LedWallHireIntroContentData = {
  eyebrow: "Sri Lanka's LED wall specialists",
  titleLine1: "LED wall hire.",
  titleLine2: "LED wall rent. Same team.",
  description:
    "YC Events (ledwalls.lk) builds, delivers and operates the LED wall ourselves for every booking, no subcontracted crew. Search LED wall hire, LED wall rent, or simply ledwalls, and you'll reach the same team.",
  imageSrc: images.heroLedRental,
  imageAlt: "LED wall hire and LED wall rent setup at an event in Sri Lanka",
  badgeValue: "25",
  badgeLabel: "Districts covered island-wide",
  features: [
    {
      icon: Monitor,
      title: "Indoor & outdoor LED wall rent",
      description: "P3 fine-pitch indoor and IP65 P4 outdoor panels, sized to your venue, not a fixed catalogue.",
    },
    {
      icon: MapPin,
      title: "Delivered island-wide",
      description: "LED wall hire delivery, rigging and breakdown across all 25 districts, from Colombo to Jaffna.",
    },
    {
      icon: Cpu,
      title: "Everything included",
      description: "Video processor, power distribution and an on-site operator on every LED wall rent booking.",
    },
  ],
  ctaLabel: "Full LED wall hire details",
  ctaHref: LED_WALL_SERVICE_HREF,
  secondaryCtaLabel: "See LED wall rent pricing",
  secondaryCtaHref: "/pricing",
};

export const ServicesIntro: SectionIntro = {
  eyebrow: "LED wall hire Sri Lanka",
  titleLine1: "LED screens first.",
  titleLine2: "Full production too.",
  titleLine2Muted: true,
  description:
    "We specialise in LED wall hire and LED screen rent, plus stage truss, stage lighting and fog, sound and exhibition builds for full event production.",
  ctaLabel: "All services",
  ctaHref: "/services",
};

export const GalleryTeasers: GalleryTeaserItem[] = [
  { img: images.concert2, label: "Outdoor concert · Kandy", featured: true },
  { img: images.wedding, label: "Wedding LED wall · Colombo" },
  { img: images.concert3, label: "Festival · Galle" },
  { img: images.corporate, label: "Corporate · Hilton Colombo" },
  { img: images.brand, label: "Award ceremony · Colombo" },
];

export const GalleryIntro: SectionIntro = {
  eyebrow: "Our Work",
  titleLine1: "Events we've",
  titleLine2: "delivered.",
  titleLine2Muted: true,
  ctaLabel: "View All",
  ctaHref: "/gallery",
};

export const WhyUsFeatures: FeatureItem[] = [
  {
    icon: Shield,
    title: "No subcontracting, ever",
    description: "The crew at enquiry is the crew on event day.",
  },
  {
    icon: MapPin,
    title: "Truly island-wide",
    description:
      "All 25 districts. Jaffna, Anuradhapura, Colombo and everywhere between.",
  },
  {
    icon: Monitor,
    title: "Custom sizing on every order",
    description:
      "We build the right wall for your venue, not a fixed catalogue size.",
  },
  {
    icon: Clock,
    title: "Quote in 60 minutes",
    description:
      "Send your event details and get an itemised quote within the hour.",
  },
];

export const WhyUsContentData: WhyUsContent = {
  eyebrow: "Why YC Events",
  titleLine1: "LED wall rent",
  titleLine2: "with a full crew.",
  description:
    "When you hire an LED wall from YC Events you get drivers, riggers and island-wide delivery on one quote. Add aluminium truss, rotating stage lights and fog machines for concerts and weddings. A trained operator is included on every booking.",
  imageSrc: images.why,
  yearsBadge: "7+",
  yearsLabel: "Years of LED wall hire across Sri Lanka",
  ctaLabel: "Get LED wall quote",
};

export const RedStats: StatItemData[] = [
  { value: "1,000+", label: "LED events delivered" },
  { value: "7+", label: "Years LED wall hire" },
  { value: "25", label: "Districts covered" },
  { value: "P3 / P4", label: "Indoor & outdoor panels" },
];

export const EventTypes: EventTypeTab[] = [
  {
    id: "weddings",
    label: "Weddings",
    img: images.wedding,
    heading: "Wedding LED screen rent Sri Lanka",
    body: "LED wall hire wedding Sri Lanka, indoor P3 backdrop walls, aisle screens and stage displays. Wedding LED screen Colombo and island-wide with planner coordination and an all-night operator.",
    tags: ["LED backdrop wedding", "P3 indoor", "Colombo & outstation"],
  },
  {
    id: "corporate",
    label: "Corporate",
    img: images.corporate,
    heading: "LED screen corporate event Sri Lanka",
    body: "LED wall corporate event hire for product launches, AGMs and award nights. LED screen hire Colombo with P3 indoor panels, AV integration and full-day technician support.",
    tags: ["Product launch screens", "Conference LED wall", "Operator included"],
  },
  {
    id: "concerts",
    label: "Concerts",
    img: images.concert2,
    heading: "LED screen concert Sri Lanka",
    body: "Outdoor LED screen rent for live shows, IP65 P4 weatherproof panels, ultra-bright big LED screen rent builds rigged by our certified crew. Add Stage Lighting & Fog for rotating lights and fog machines on the same quote.",
    tags: ["Outdoor LED wall concert", "IP65 rated", "Big screen hire"],
  },
  {
    id: "award-ceremonies",
    label: "Award Ceremonies",
    img: images.brand,
    heading: "LED backdrop hire for gala nights",
    body: "LED backdrop rent for award ceremonies and convocations, fine-pitch indoor walls with stage builds and polished audio. We coordinate from rehearsal through the final trophy moment.",
    tags: ["LED backdrop hire", "Stage & truss", "Indoor P3"],
  },
];

export const EventTypesIntro: SectionIntro = {
  eyebrow: "Events We Cover",
  titleLine1: "Every event.",
  titleLine2: "Every district.",
  titleLine2Muted: true,
};

export const ProcessSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Tell us your event",
    description:
      "Date, venue, audience size and what you need. WhatsApp, call or fill our form.",
  },
  {
    num: "02",
    title: "We size and spec it",
    description:
      "We calculate exact dimensions, pixel pitch and rigging for your venue and audience.",
  },
  {
    num: "03",
    title: "We deliver and build",
    description:
      "Our crew assembles everything and tests every panel before your guests arrive.",
  },
  {
    num: "04",
    title: "We operate all day",
    description:
      "Our technician runs the screen from start to finish. You focus on the event.",
  },
];

export const ProcessIntro: SectionIntro = {
  eyebrow: "The Process",
  titleLine1: "First message to event day.",
  titleLine2: "Four steps.",
  titleLine2Muted: true,
};

export const Reviews: Review[] = [
  {
    quote:
      "YC Events handled the LED wall, sound and stage for our product launch at BMICH. Set up before we arrived and professional throughout.",
    name: "Roshan M.",
    role: "Corporate Event Manager, Colombo",
  },
  {
    quote:
      "Three concerts, three perfect setups. The outdoor wall at our Kandy show ran in rain and didn't miss a beat.",
    name: "Kavin T.",
    role: "Concert Organiser, Sri Lanka",
  },
  {
    quote:
      "Our wedding backdrop was everything we wanted. Coordinated with our planner, set up in the afternoon and invisible during reception.",
    name: "Nimali & Danesh",
    role: "Wedding Couple, Colombo",
  },
  {
    quote:
      "Four award ceremonies across the island and every one delivered. LED, stage and sound, polished and professional every time.",
    name: "Priya S.",
    role: "Brand Manager, Colombo",
  },
];

export const TestimonialsIntro: SectionIntro = {
  eyebrow: "Client Reviews",
  titleLine1: "1,000+ events.",
  titleLine2: "Real feedback.",
  titleLine2Muted: true,
};

export const Faqs: FaqItem[] = [
  {
    question: "Where can I find LED wall hire in Sri Lanka?",
    answer:
      "YC Events provides LED wall hire across all 25 districts. Whether you are in Colombo, Kandy, Galle, Jaffna or any outstation town, we deliver, build and operate LED screens at your venue. Contact us or check our city pages for local coverage.",
  },
  {
    question: "How do I rent an LED wall in Sri Lanka?",
    answer:
      "To rent an LED wall in Sri Lanka, send your event date, venue and wall size via our contact form or WhatsApp. We reply with an itemised LED wall rent quote in LKR within 60 minutes. Every booking includes delivery, setup, operator and breakdown.",
  },
  {
    question: "How much does LED screen rent cost in Sri Lanka?",
    answer:
      "LED screen rent in Sri Lanka starts from LKR 55,000 per 8-hour business day for a 10×8 ft LED video wall. See our pricing page for the full rate table and custom size quotes.",
  },
  {
    question: "How much does LED wall hire cost in Sri Lanka?",
    answer:
      "LED wall hire cost depends on wall size, pixel pitch (P3 or P4+), indoor vs outdoor use, location and number of days. YC Events sends an itemised LED screen rent price quote within 60 minutes, no hidden fees.",
  },
  {
    question: "P3 vs P4 LED screen, what is the difference?",
    answer:
      "Pixel pitch is the gap between LED clusters in millimetres. P3 is a fine-pitch indoor panel for weddings and corporate events where guests sit close to the screen. P4 is an outdoor-rated, brighter IP65 panel built for concerts, rallies and outdoor LED screen rent in Sri Lanka.",
  },
  {
    question: "Indoor vs outdoor LED screen rent, which should I book?",
    answer:
      "Indoor LED wall rent uses P3 panels for hotels, ballrooms and conference halls. Outdoor LED screen rent uses IP65 weatherproof P4 panels rated for direct sunlight and rain. We recommend the right configuration during your quote.",
  },
  {
    question: "What does LED screen hire with operator included mean?",
    answer:
      "LED screen hire with operator included means a trained video technician is part of every booking, in Colombo and every outstation district, at no separate charge. Your operator handles setup, content playback, brightness and breakdown, so you never run the LED wall yourself.",
  },
  {
    question: "Do you deliver LED walls outside Colombo?",
    answer:
      "Yes. LED screen outstation delivery is standard across all 25 districts, Kandy, Galle, Jaffna, Negombo and everywhere between. LED wall Kandy delivery and island-wide LED wall hire are included in your quote.",
  },
  {
    question: "Do you rent wedding LED screens in Colombo?",
    answer:
      "Yes. Wedding LED screen Colombo is one of our most common bookings, indoor P3 backdrop walls for receptions and ceremonies, coordinated with your planner and operated all night.",
  },
  {
    question: "Can I rent a big LED screen for an outdoor concert?",
    answer:
      "Yes. We provide big LED screen rent and large screen hire for outdoor concerts, festivals and political rallies. Outdoor LED wall builds use IP65 panels up to 7,000 nit with certified rigging crew.",
  },
  {
    question: "Do you offer jumbo screen hire in Sri Lanka?",
    answer:
      "Yes. Jumbo screen hire Sri Lanka bookings use modular outdoor IP65 LED panels scaled to your venue, from medium conference walls to large concert backdrops. Every jumbo LED screen hire includes delivery, rigging and an on-site operator.",
  },
  {
    question: "What is LED wall hire in Sri Lanka?",
    answer:
      "LED wall hire is renting a modular LED video wall for your event with delivery, setup, operator and breakdown included. YC Events LED wall hire Sri Lanka covers indoor P3 and outdoor IP65 panels for weddings, corporate events and concerts across all 25 districts.",
  },
  {
    question: "Can I add truss, rotating lights and fog machines to LED wall hire?",
    answer:
      `Yes. Add our Stage Lighting & Fog service (${STAGE_LIGHTING_FOG_SERVICE_HREF}) with stage truss on the same LED wall quote. Ideal for weddings, concerts and corporate shows.`,
  },
  {
    question: "Do you rent LED promotion trucks in Sri Lanka?",
    answer:
      "Our main focus is LED wall and LED screen rent for events. If your campaign needs a mobile truck-mounted LED screen, mention it on enquiry and we will advise on the best fit for your budget and route.",
  },
  {
    question: "What is the largest LED wall you can build?",
    answer:
      "YC Events builds custom LED video walls up to 70ft and beyond for large outdoor concerts, political rallies and mega events across Sri Lanka. Wall size is quoted to your venue and stage, not limited to a fixed catalogue.",
  },
];

export const FaqIntro: SectionIntro = {
  eyebrow: "LED wall FAQ",
  titleLine1: "LED screen rent",
  titleLine2: "questions answered.",
  titleLine2Muted: true,
  description:
    "LED wall rent price, pixel pitch, delivery and operator questions, answered here. For exact LKR rates see our pricing page.",
  ctaLabel: "WhatsApp a question",
};

export const CtaMethods: ContactMethod[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    detail: PRIMARY_PHONE_DISPLAY,
    href: PRIMARY_WHATSAPP_HREF,
    icon: MessageCircle,
    iconClassName: "text-whatsapp",
    variant: "light",
  },
  {
    id: "phone-primary",
    label: "Call us",
    detail: PRIMARY_PHONE_DISPLAY,
    href: PRIMARY_PHONE_HREF,
    icon: Phone,
    iconClassName: "text-brand",
    variant: "dark",
  },
  {
    id: "phone-secondary",
    label: "Call us",
    detail: SECONDARY_PHONE_DISPLAY,
    href: SECONDARY_PHONE_HREF,
    icon: Phone,
    iconClassName: "text-brand",
    variant: "dark",
  },
  {
    id: "phone-hotline",
    label: "Hotline",
    detail: HOTLINE_PHONE_DISPLAY,
    href: HOTLINE_PHONE_HREF,
    icon: Phone,
    iconClassName: "text-brand",
    variant: "dark",
  },
  {
    id: "quote",
    label: "Request a Quote",
    detail: "Itemised · 60 min",
    icon: FileText,
    iconClassName: "text-white",
    variant: "dark",
  },
];

export const CtaContentData: CtaContent = {
  eyebrow: "Ready to start?",
  titleLine1: "Tell us about",
  titleLine2: "your event.",
  description: "We quote within 60 minutes. No hidden costs.",
  imageSrc: images.concert3,
};

export const ClientLogoStripContentData: ClientLogoStripContent = {
  title: "Trusted by Sri Lanka's leading organisations",
};

export const QuoteNeedOptions = [
  "LED Wall",
  "Stage & Truss",
  "Stage Lighting & Fog",
  "Sound System",
  "Exhibition Stall",
  "Digital Podium",
] as const;

export const QuoteServiceOptions = [
  "LED Wall Hire",
  "Stage & Truss Setup",
  "Stage Lighting & Fog",
  "Sound System",
  "Exhibition Stalls",
  "Digital Podiums",
  "Multiple services",
] as const;

export const QuoteAudienceOptions = [
  "Under 100",
  "100-300",
  "300-1,000",
  "1,000-5,000",
  "5,000+",
] as const;

export const TickerItems = [
  "LED WALL HIRE SRI LANKA",
  "LED WALL RENT COLOMBO",
  "LED SCREEN HIRE",
  "ROTATING STAGE LIGHTS",
  "FOG MACHINE HIRE",
  "OUTDOOR IP65 LED WALL",
  "OPERATOR INCLUDED",
  "ALL 25 DISTRICTS",
  "STAGE & TRUSS",
  "SOUND SYSTEMS",
  "WEDDING LED WALL",
  "7+ YEARS",
] as const;

export const EmptyQuoteForm: QuoteFormValues = {
  name: "",
  phone: "",
  service: "",
  date: "",
  venue: "",
  audience: "",
  message: "",
  needs: [],
};

export function buildHomeSchema() {
  return buildPageJsonLd({
    path: "/",
    name: HomePageMetaData.title,
    description: HomePageMetaData.description,
    faqs: Faqs,
    extra: [
      {
        "@type": "OfferCatalog",
        name: "Event Production Services",
        provider: { "@id": LOCAL_BUSINESS_ID },
        itemListElement: HomeServices.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE_URL}${service.href}#service`,
            name: service.title,
            description: service.sub,
            url: `${SITE_URL}${service.href}`,
          },
        })),
      },
    ],
  });
}