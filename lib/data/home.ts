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
  titleLine1: "Built and operated",
  titleLine2: "by one team.",
  description:
    "YC Events builds, delivers and operates every LED wall ourselves - no subcontracted crew. Indoor P3 panels for weddings and corporate events, outdoor IP65 panels for concerts and rallies, island-wide across all 25 districts.",
  imageSrc: images.heroLedRental,
  imageAlt: "LED wall hire and LED wall rent setup at an event in Sri Lanka",
  badgeValue: "25",
  badgeLabel: "Districts covered island-wide",
  features: [
    {
      icon: Monitor,
      title: "Indoor & outdoor panels",
      description: "P3 fine-pitch indoor and IP65 P4 outdoor panels, sized to your venue, not a fixed catalogue.",
    },
    {
      icon: MapPin,
      title: "Delivered island-wide",
      description: "Delivery, rigging and breakdown across all 25 districts, from Colombo to Jaffna.",
    },
    {
      icon: Cpu,
      title: "Everything included",
      description: "Video processor, power distribution and an on-site operator on every booking.",
    },
  ],
  ctaLabel: "Full service details",
  ctaHref: LED_WALL_SERVICE_HREF,
  secondaryCtaLabel: "See pricing",
  secondaryCtaHref: "/pricing",
};

export const ServicesIntro: SectionIntro = {
  eyebrow: "LED wall hire Sri Lanka",
  titleLine1: "LED screens first.",
  titleLine2: "Full production too.",
  titleLine2Muted: true,
  description:
    "We specialise in LED wall hire and screen rental, plus stage truss, stage lighting and fog, sound and exhibition builds - for full event production on one quote.",
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
    body: "LED wall hire for weddings, indoor P3 backdrop walls, aisle screens and stage displays. Coordinated with your planner and operated through the night.",
    tags: ["LED backdrop", "P3 indoor", "Colombo & outstation"],
  },
  {
    id: "corporate",
    label: "Corporate",
    img: images.corporate,
    heading: "LED screens for corporate events",
    body: "LED screens for product launches, AGMs and conferences, with AV integration and full-day technician support.",
    tags: ["Product launches", "AGMs & conferences", "AV integration"],
  },
  {
    id: "concerts",
    label: "Concerts",
    img: images.concert2,
    heading: "Outdoor concert LED screens",
    body: "Weatherproof IP65 outdoor screens for concerts, festivals and rallies, with certified rigging.",
    tags: ["Outdoor IP65", "Concerts & festivals", "Certified rigging"],
  },
  {
    id: "award-ceremonies",
    label: "Award Ceremonies",
    img: images.brand,
    heading: "Award night LED backdrops",
    body: "Custom LED backdrops from 10×8 ft to 40×12 ft, for stage sets and award ceremonies.",
    tags: ["Custom backdrops", "10×8-40×12 ft", "Stage & truss"],
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
      "YC Events provides LED wall hire across all 25 districts - Colombo, Kandy, Galle, Jaffna and every outstation town. See our coverage page or contact us for local availability.",
  },
  {
    question: "How do I rent an LED wall?",
    answer:
      "Send your event date, venue and wall size via WhatsApp or our contact form. We reply with an itemised quote within 60 minutes.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Starts from LKR 55,000 for an 8-hour day on a 10×8 ft screen. See our pricing page for the full rate table.",
  },
  {
    question: "What's the difference between P3 and P4?",
    answer:
      "P3 is a fine-pitch indoor panel for close viewing. P4 is a brighter, weatherproof outdoor panel for concerts and rallies.",
  },
  {
    question: "Is an operator included?",
    answer: "Yes, on every booking, at no separate charge.",
  },
  {
    question: "Do you deliver outside Colombo?",
    answer: "Yes, island-wide across all 25 districts.",
  },
  {
    question: "Do you rent wedding LED screens?",
    answer: "Yes - indoor P3 backdrop walls, coordinated with your planner.",
  },
  {
    question: "Can I add stage, lighting or sound to my booking?",
    answer:
      "Yes, all add-ons can go on the same quote, one crew, one delivery.",
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