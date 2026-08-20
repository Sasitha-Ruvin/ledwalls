import { Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { LED_WALL_SERVICE_HREF, ServicesList } from "@/lib/data/services";
import {
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

export const FooterContacts = [
  {
    icon: Phone,
    label: PRIMARY_PHONE_DISPLAY,
    href: PRIMARY_PHONE_HREF,
  },
  {
    icon: Phone,
    label: SECONDARY_PHONE_DISPLAY,
    href: SECONDARY_PHONE_HREF,
  },
  {
    icon: Phone,
    label: `Hotline ${HOTLINE_PHONE_DISPLAY}`,
    href: HOTLINE_PHONE_HREF,
  },
  {
    icon: MessageCircle,
    label: `WhatsApp ${PRIMARY_PHONE_DISPLAY}`,
    href: PRIMARY_WHATSAPP_HREF,
  },
  {
    icon: MessageCircle,
    label: `WhatsApp ${SECONDARY_PHONE_DISPLAY}`,
    href: SECONDARY_WHATSAPP_HREF,
  },
  {
    icon: MessageCircle,
    label: `WhatsApp hotline ${HOTLINE_PHONE_DISPLAY}`,
    href: HOTLINE_WHATSAPP_HREF,
  },
  {
    icon: Mail,
    label: SITE_EMAIL,
    href: SITE_EMAIL_HREF,
  },
  {
    icon: Share2,
    label: `Facebook · ${SITE_FACEBOOK_DISPLAY}`,
    href: SITE_FACEBOOK_URL,
    external: true,
  },
  {
    icon: MapPin,
    label: "Colombo, Sri Lanka",
  },
] as const;

export const FooterLegal = {
  copyright: `© ${new Date().getFullYear()} YC Events. All rights reserved.`,
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};
