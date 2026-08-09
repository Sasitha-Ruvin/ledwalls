import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNavbar from "@/components/layout/SiteNavbar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildSiteRootJsonLd } from "@/lib/json-ld";
import {
  absoluteUrl,
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_KEYWORDS,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_OG_IMAGE_ALT,
  SITE_OG_IMAGE_HEIGHT,
  SITE_OG_IMAGE_WIDTH,
} from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | LED Wall Hire & Rent Sri Lanka`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DEFAULT_DESCRIPTION,
  keywords: [...SITE_DEFAULT_KEYWORDS],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon.ico",
  },
  applicationName: SITE_NAME,
  category: "business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${SITE_NAME} | LED Wall Hire & Rent Sri Lanka`,
    description: SITE_DEFAULT_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_LK",
    images: [
      {
        url: absoluteUrl(SITE_OG_IMAGE),
        alt: SITE_OG_IMAGE_ALT,
        width: SITE_OG_IMAGE_WIDTH,
        height: SITE_OG_IMAGE_HEIGHT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | LED Wall Hire & Rent Sri Lanka`,
    description: SITE_DEFAULT_DESCRIPTION,
    images: [absoluteUrl(SITE_OG_IMAGE)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const siteJsonLd = buildSiteRootJsonLd();

  return (
    <html
      lang="en-LK"
      className={cn("h-full antialiased font-sans", inter.variable)}
    >
      <head>
        <JsonLd data={siteJsonLd} id="json-ld-site" />
      </head>
      <body className="flex min-h-full flex-col bg-white text-ink">
        <SiteNavbar />
        <main className="flex-1 pt-18">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
