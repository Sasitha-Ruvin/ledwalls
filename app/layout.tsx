import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNavbar from "@/components/layout/SiteNavbar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  absoluteUrl,
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_KEYWORDS,
  SITE_NAME,
  rootJsonLd,
} from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | LED Wall Rental Sri Lanka`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DEFAULT_DESCRIPTION,
  keywords: [...SITE_DEFAULT_KEYWORDS],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  applicationName: SITE_NAME,
  category: "business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${SITE_NAME} | LED Wall Rental Sri Lanka`,
    description: SITE_DEFAULT_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_LK",
    images: [
      {
        url: absoluteUrl("/images/heroimages/homehero.webp"),
        alt: "LED wall rental Sri Lanka outdoor concert stage by YC Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | LED Wall Rental Sri Lanka`,
    description: SITE_DEFAULT_DESCRIPTION,
    images: [absoluteUrl("/images/heroimages/homehero.webp")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-LK"
      className={cn("h-full antialiased font-sans", inter.variable)}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <JsonLd data={rootJsonLd} />
        <SiteNavbar />
        <main className="flex-1 pt-18">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
