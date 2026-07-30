import { Mail, MessageCircle, Phone } from "lucide-react";
import type { ContactMethod } from "@/types/site";

export const PRIMARY_PHONE_DISPLAY = "071 446 0460";
export const SECONDARY_PHONE_DISPLAY = "070 596 0960";

export const PRIMARY_PHONE_E164 = "+94714460460";
export const SECONDARY_PHONE_E164 = "+94705960960";

export const PRIMARY_PHONE_RAW = "94714460460";
export const SECONDARY_PHONE_RAW = "94705960960";

export const PRIMARY_PHONE_HREF = `tel:${PRIMARY_PHONE_E164}`;
export const SECONDARY_PHONE_HREF = `tel:${SECONDARY_PHONE_E164}`;

export const WHATSAPP_PREFILL =
  "Hi YC Events, I would like to enquire about LED wall rental in Sri Lanka.";

export function buildWhatsAppHref(
  phoneRaw: string,
  message = WHATSAPP_PREFILL
): string {
  return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const PRIMARY_WHATSAPP_HREF = buildWhatsAppHref(PRIMARY_PHONE_RAW);
export const SECONDARY_WHATSAPP_HREF = buildWhatsAppHref(SECONDARY_PHONE_RAW);

export const SITE_EMAIL = "yasithacreations@gmail.com";
export const SITE_EMAIL_HREF = `mailto:${SITE_EMAIL}`;

export const SITE_FACEBOOK_URL = "https://www.facebook.com/kandyLED";
export const SITE_FACEBOOK_DISPLAY = "facebook.com/kandyLED";

export const OFFICE_NAME = "Yasitha Creations (Pvt) Ltd";
export const OFFICE_LEGAL_NAME = "YC Events";
export const OFFICE_STREET = "No 114, Barigama Road";
export const OFFICE_LOCALITY = "Halloluwa";
export const OFFICE_REGION = "Kandy";
export const OFFICE_POSTAL_CODE = "20000";
export const OFFICE_COUNTRY = "Sri Lanka";
export const OFFICE_ADDRESS_DISPLAY =
  `${OFFICE_STREET}, ${OFFICE_LOCALITY}, ${OFFICE_REGION} ${OFFICE_POSTAL_CODE}, ${OFFICE_COUNTRY}`;

export const OFFICE_MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4863887986176!2d80.60096237532557!3d7.299121813663699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3662b64f58ea3%3A0x1ff1b54519914565!2sYasitha%20Creations%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1785402110074!5m2!1sen!2slk";

export const OFFICE_GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Yasitha+Creations+(Pvt)+Ltd/@7.2991218,80.6009624,17z";

export const PrimaryContactMethods: ContactMethod[] = [
  {
    id: "whatsapp-primary",
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
];

export const QuoteDialogContacts: ContactMethod[] = [
  {
    id: "wa-primary",
    label: "WhatsApp",
    detail: PRIMARY_PHONE_DISPLAY,
    href: PRIMARY_WHATSAPP_HREF,
    icon: MessageCircle,
  },
  {
    id: "wa-secondary",
    label: "WhatsApp",
    detail: SECONDARY_PHONE_DISPLAY,
    href: SECONDARY_WHATSAPP_HREF,
    icon: MessageCircle,
  },
  {
    id: "call-primary",
    label: "Call",
    detail: PRIMARY_PHONE_DISPLAY,
    href: PRIMARY_PHONE_HREF,
    icon: Phone,
  },
  {
    id: "call-secondary",
    label: "Call",
    detail: SECONDARY_PHONE_DISPLAY,
    href: SECONDARY_PHONE_HREF,
    icon: Phone,
  },
  {
    id: "email",
    label: "Email",
    detail: SITE_EMAIL,
    href: SITE_EMAIL_HREF,
    icon: Mail,
  },
];
