import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type SpecRow = [label:string, value:string]

export interface NavLink {
  label: string;
  href: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  src: string;
  width?: number;
  height?: number;
}

export interface StatItemData {
  value: string;
  label: string;
}

export interface ServiceCardData {
  num: string;
  title: string;
  sub: string;
  img: string;
  href: string;
  icon: LucideIcon;
}

export interface GalleryTeaserItem {
  img: string;
  label: string;
  featured?: boolean;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface EventTypeTab {
  id: string;
  label: string;
  img: string;
  heading: string;
  body: string;
  tags: string[];
}

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export interface Review {
  quote: string;
  name: string;
  role: string;
  rating?: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactMethod {
  id: string;
  label: string;
  detail: string;
  href?: string;
  icon: LucideIcon;
  iconClassName?: string;
  variant?: "light" | "dark";
}

export interface QuoteFormValues {
  name: string;
  service: string;
  date: string;
  venue: string;
  audience: string;
  message: string;
  needs: string[];
}

export type QuoteFormField = Exclude<keyof QuoteFormValues, "needs">;

export interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  tone?: "light" | "dark" | "brand";
  className?: string;
}

export interface HeroHeadline {
  line1: string;
  accent: string;
  line2: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: HeroHeadline;
  subheadline?: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  badge?: string;
}

export interface HomePageMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface LedUseCaseBlock {
  id: string;
  title: string;
  description: string;
  href?: string;
}

export interface LedWallRate {
  size: string;
  priceLkr: number;
}

export interface PricingTier {
  name: string;
  size: string;
  pitch: string;
  priceLabel: string;
  note: string;
  bestFor: string;
}

export interface PricingPageMeta {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
}

export interface SectionIntro {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleLine2Muted?: boolean;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface WhyUsContent {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  imageSrc: string;
  yearsBadge: string;
  yearsLabel: string;
  ctaLabel: string;
}

export interface CtaContent {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  imageSrc: string;
}

export interface ClientLogoStripContent {
  title: string;
}


export interface ServiceSeo {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
}

export interface ServiceUseCase {
  label: string;
  description: string;
  img: string;
}

export interface PortfolioImage {
  src: string;
  alt: string;
  category?: "wedding" | "award-ceremony" | "concert" | "corporate" | "stage" | "podium" | "exhibition";
}

export interface ServiceDetailData {
  id: string;
  num: string;
  title: string;
  sub: string;
  body: string;
  img: string;
  href: string;
  cta: string;
  icon: LucideIcon;
  specs: SpecRow[];
  tone: "light" | "dark";
  quickNavLabel?: string;
  seo: ServiceSeo;
  faqs?: FaqItem[];
  useCases?: ServiceUseCase[];
  portfolio?: PortfolioImage[];
}

export interface ServicesPageHero {
  eyebrow:string;
  titleLine1:string;
  titleLine2:string;
  description:string;
  imageSrc:string;
  imageAlt:string;
}

export interface ServicesPageMeta {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
}
export type DistrictEntry = string | { name: string; href: string };

export interface CoverageSectionContent {
  eyebrow: string;
  title: string;
  districts: DistrictEntry[];
  highlightLabel: string;
}
export interface ServicesQuoteContent {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleMuted: string;
  description: string;
}
export interface BreadcrumbItem {
  label: string;
  href?: string;
}
export interface QuickNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface LedWallEventCard {
  id: string;
  title: string;
  description: string;
  img: string;
  href: string;
}

export interface AboutPageMeta {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
}

export interface AboutHeroContent {
  eyebrow: string;
  headlineLines: { text: string; accent?: boolean }[];
  description: string;
  imageSrc: string;
  imageAlt: string;
  stats: StatItemData[];
}

export interface AboutStoryContent {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface AboutValueItem {
  title: string;
  description: string;
}

export interface AboutMilestone {
  year: string;
  description: string;
  yearAboveSpine: boolean;
}

export interface AboutClosingContent {
  eyebrow: string;
  title: string;
  description: string;
  stats: StatItemData[];
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
}