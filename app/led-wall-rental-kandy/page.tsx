import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared/JsonLd";
import { LedWallCityPageContent } from "@/components/services/LedWallCityPageContent";
import {
  buildLedWallCityMetadata,
  buildLedWallCitySchema,
  getLedWallCityBySlug,
} from "@/lib/data/led-wall-cities";

const CITY_SLUG = "kandy";

export function generateMetadata(): Metadata {
  const meta = buildLedWallCityMetadata(CITY_SLUG);
  if (!meta) return { title: "Not found" };
  return meta;
}

export default function LedWallRentalKandyPage() {
  const city = getLedWallCityBySlug(CITY_SLUG);
  if (!city) notFound();

  return (
    <>
      <JsonLd data={buildLedWallCitySchema(city)} id="json-ld-led-wall-kandy" />
      <LedWallCityPageContent city={city} />
    </>
  );
}
