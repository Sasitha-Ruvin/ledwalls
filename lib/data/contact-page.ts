import { Mail, MessageCircle, Phone } from "lucide-react";
import {
  OFFICE_ADDRESS_DISPLAY,
  OFFICE_GOOGLE_MAPS_URL,
  OFFICE_NAME,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_E164,
  PRIMARY_PHONE_HREF,
  PRIMARY_WHATSAPP_HREF,
  SECONDARY_PHONE_DISPLAY,
  SECONDARY_PHONE_E164,
  SECONDARY_PHONE_HREF,
  SECONDARY_WHATSAPP_HREF,
  SITE_EMAIL,
  SITE_EMAIL_HREF,
} from "@/lib/data/contact";
import { CoverageContent } from "@/lib/data/services";
import { SITE_URL } from "@/lib/site";

export const ContactPageMeta = {
  title: "Contact YC Events | LED Wall Rental Sri Lanka",
  description:
    "Contact YC Events for LED wall rental in Sri Lanka. WhatsApp or call 071 446 0460 and 070 596 0960. Quote within 60 minutes. Office in Kandy, island-wide delivery.",
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
    id: "email",
    icon: Mail,
    label: "Email",
    detail: SITE_EMAIL,
    href: SITE_EMAIL_HREF,
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
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${ContactPageMeta.canonical}/#webpage`,
        url: ContactPageMeta.canonical,
        name: ContactPageMeta.title,
        description: ContactPageMeta.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#organization`,
        name: "YC Events",
        legalName: OFFICE_NAME,
        url: SITE_URL,
        telephone: [PRIMARY_PHONE_E164, SECONDARY_PHONE_E164],
        email: SITE_EMAIL,
        address: {
          "@type": "PostalAddress",
          streetAddress: "No 114, Barigama Road",
          addressLocality: "Halloluwa",
          addressRegion: "Kandy",
          postalCode: "20000",
          addressCountry: "LK",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        areaServed: "Sri Lanka",
        hasMap: OFFICE_GOOGLE_MAPS_URL,
      },
    ],
  };
}
