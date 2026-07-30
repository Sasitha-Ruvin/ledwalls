import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared/JsonLd";
import { LedWallCityPageContent } from "@/components/services/LedWallCityPageContent";
import {
  buildLedWallCitySchema,
  getLedWallCityBySlug,
} from "@/lib/data/led-wall-cities";
import { SITE_URL } from "@/lib/site";

const CITY_SLUG = "matara";

export function generateMetadata(): Metadata {
  const city = getLedWallCityBySlug(CITY_SLUG);
  if (!city) return { title: "Not found" };

  const canonical = `${SITE_URL}/led-wall-rental-${city.slug}`;

  return {
    title: city.title,
    description: city.description,
    keywords: city.keywords,
    alternates: { canonical },
    openGraph: {
      title: city.title,
      description: city.description,
      url: canonical,
      type: "website",
    },
  };
}

export default function LedWallRentalMataraPage() {
  const city = getLedWallCityBySlug(CITY_SLUG);
  if (!city) notFound();

  return (
    <main>
      <JsonLd data={buildLedWallCitySchema(city)} />
      <LedWallCityPageContent city={city} />
    </main>
  );
}
