import { Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LED_WALL_SERVICE_HREF, ServicesList } from "@/lib/data/services";
import {
  HOTLINE_PHONE_DISPLAY,
  HOTLINE_PHONE_HREF,
  HOTLINE_WHATSAPP_HREF,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
  PRIMARY_WHATSAPP_HREF,
  SECONDARY_PHONE_DISPLAY,
  SECONDARY_PHONE_HREF,
  SECONDARY_WHATSAPP_HREF,
  SITE_EMAIL,
  SITE_EMAIL_HREF,
  SITE_FACEBOOK_DISPLAY,
  SITE_FACEBOOK_URL,
} from "@/lib/data/contact";

export interface FooterPhoneLine {
  display: string;
  phoneHref: string;
  whatsappHref: string;
  tag?: string;
}

export interface FooterContactLink {
  icon: LucideIcon;
  label: string;
  href?: string;
  external?: boolean;
}

export const FooterBlurb =
  "YC Events (ledwalls.lk) - Sri Lanka's leading LED wall rent specialists since 2017. Island-wide.";

export const FooterServiceLinks = ServicesList.map((service) => ({
  label: service.title,
  href: service.href,
}));

/** Key districts in the footer; full city list lives on the LED wall service page. */
export const FooterCoverage = [
  { label: "Colombo", href: "/led-wall-rental-colombo" },
  { label: "Kandy", href: "/led-wall-rental-kandy" },
  { label: "Galle", href: "/led-wall-rental-galle" },
  { label: "Kurunegala", href: "/led-wall-rental-kurunegala" },
  { label: "All 25 Districts", href: `${LED_WALL_SERVICE_HREF}#led-wall-cities` },
] as const;

/** One row per line: call link + WhatsApp link, no duplicate listings. */
export const FooterPhoneLines: FooterPhoneLine[] = [
  {
    display: PRIMARY_PHONE_DISPLAY,
    phoneHref: PRIMARY_PHONE_HREF,
    whatsappHref: PRIMARY_WHATSAPP_HREF,
  },
  {
    display: SECONDARY_PHONE_DISPLAY,
    phoneHref: SECONDARY_PHONE_HREF,
    whatsappHref: SECONDARY_WHATSAPP_HREF,
  },
  {
    display: HOTLINE_PHONE_DISPLAY,
    phoneHref: HOTLINE_PHONE_HREF,
    whatsappHref: HOTLINE_WHATSAPP_HREF,
    tag: "Hotline",
  },
];

export const FooterContactLinks: FooterContactLink[] = [
  {
    icon: Mail,
    label: SITE_EMAIL,
    href: SITE_EMAIL_HREF,
  },
  {
    icon: Share2,
    label: SITE_FACEBOOK_DISPLAY,
    href: SITE_FACEBOOK_URL,
    external: true,
  },
  {
    icon: MapPin,
    label: "Colombo, Sri Lanka",
  },
];

export const FooterLegal = {
  copyright: `© ${new Date().getFullYear()} YC Events. All rights reserved.`,
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};
