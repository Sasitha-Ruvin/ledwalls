import { Mail, MessageCircle, Phone, Share2 } from "lucide-react";
import {
  OFFICE_ADDRESS_DISPLAY,
  OFFICE_GOOGLE_MAPS_URL,
  OFFICE_NAME,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
  PRIMARY_WHATSAPP_HREF,
  HOTLINE_PHONE_DISPLAY,
  HOTLINE_PHONE_HREF,
  HOTLINE_WHATSAPP_HREF,
  SECONDARY_PHONE_DISPLAY,
  SECONDARY_PHONE_HREF,
  SECONDARY_WHATSAPP_HREF,
  SITE_EMAIL,
  SITE_EMAIL_HREF,
  SITE_FACEBOOK_DISPLAY,
  SITE_FACEBOOK_URL,
} from "@/lib/data/contact";
import { CoverageContent } from "@/lib/data/services";
import { buildPageJsonLd } from "@/lib/json-ld";
import { SITE_URL } from "@/lib/site";

export const ContactPageMeta = {
  title: "Contact YC Events | LED Wall Rental Sri Lanka",
  description:
    "Contact YC Events for LED wall rental in Sri Lanka. WhatsApp or call 071 446 0460, 070 596 0960 or hotline 077 392 0312. Quote within 60 minutes. Office in Kandy, island-wide delivery.",
  keywords: [
    "contact YC Events",
    "LED wall rental contact Sri Lanka",
    "LED screen hire Colombo phone",
    "event production contact Kandy",
  ],
  canonical: `${SITE_URL}/contact`,
};

export const ContactHeroContent = {
  eyebrow: "Contact",
  title: "Tell us about your event.",
  description: "We respond within 60 minutes. 9am to 8pm daily including weekends.",
};

export const ContactResponseTimes = [
  { label: "WhatsApp", time: "Under 15 minutes" },
  { label: "Phone", time: "Immediate" },
  { label: "Email / form", time: "Within 60 minutes" },
] as const;

export const ContactDirectIntro = {
  title: "Reach us directly.",
  hint: "WhatsApp is the fastest way to reach us. We reply within 15 minutes.",
};

export const ContactPageMethods = [
  {
    id: "wa-primary",
    icon: MessageCircle,
    label: "WhatsApp",
    detail: PRIMARY_PHONE_DISPLAY,
    href: PRIMARY_WHATSAPP_HREF,
    iconClassName: "text-whatsapp",
  },
  {
    id: "wa-secondary",
    icon: MessageCircle,
    label: "WhatsApp",
    detail: SECONDARY_PHONE_DISPLAY,
    href: SECONDARY_WHATSAPP_HREF,
    iconClassName: "text-whatsapp",
  },
  {
    id: "call-primary",
    icon: Phone,
    label: "Call us",
    detail: PRIMARY_PHONE_DISPLAY,
    href: PRIMARY_PHONE_HREF,
    iconClassName: "text-brand",
  },
  {
    id: "call-secondary",
    icon: Phone,
    label: "Call us",
    detail: SECONDARY_PHONE_DISPLAY,
    href: SECONDARY_PHONE_HREF,
    iconClassName: "text-brand",
  },
  {
    id: "call-hotline",
    icon: Phone,
    label: "Hotline",
    detail: HOTLINE_PHONE_DISPLAY,
    href: HOTLINE_PHONE_HREF,
    iconClassName: "text-brand",
  },
  {
    id: "wa-hotline",
    icon: MessageCircle,
    label: "WhatsApp hotline",
    detail: HOTLINE_PHONE_DISPLAY,
    href: HOTLINE_WHATSAPP_HREF,
    iconClassName: "text-whatsapp",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    detail: SITE_EMAIL,
    href: SITE_EMAIL_HREF,
    iconClassName: "text-brand",
  },
  {
    id: "facebook",
    icon: Share2,
    label: "Facebook",
    detail: SITE_FACEBOOK_DISPLAY,
    href: SITE_FACEBOOK_URL,
    iconClassName: "text-brand",
  },
] as const;

export const ContactBusinessHours = [
  "Monday to Sunday · 9am to 8pm",
  "Event days · from 6am onwards",
] as const;

export const ContactOfficeContent = {
  eyebrow: "Our office",
  title: OFFICE_NAME,
  address: OFFICE_ADDRESS_DISPLAY,
  mapsUrl: OFFICE_GOOGLE_MAPS_URL,
  directionsLabel: "Open in Google Maps",
};

export const ContactFormIntro = {
  title: "Or send us your event details.",
  description: "Detailed quote within 60 minutes.",
  submitLabel: "Send my enquiry",
  submitNote: "We reply with an itemised quote within 60 minutes.",
};

export const ContactEventTypeOptions = [
  "Wedding",
  "Corporate event",
  "Concert or show",
  "Brand activation",
  "Exhibition or trade show",
  "Other",
] as const;

export const ContactCoverageContent = {
  eyebrow: "Service area",
  title: "We deliver island-wide.",
  description:
    "Headquartered in Kandy, YC Events delivers and operates across all 25 districts of Sri Lanka. Every district. Every event type. Same standard everywhere.",
  districts: CoverageContent.districts,
  highlightLabel: CoverageContent.highlightLabel,
};

export function buildContactPageSchema() {
  return buildPageJsonLd({
    path: "/contact",
    name: ContactPageMeta.title,
    description: ContactPageMeta.description,
    pageType: "ContactPage",
  });
}
