import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared/JsonLd";
import { LedWallCityPageContent } from "@/components/services/LedWallCityPageContent";
import {
  buildLedWallCityMetadata,
  buildLedWallCitySchema,
  getLedWallCityBySlug,
} from "@/lib/data/led-wall-cities";

const CITY_SLUG = "kegalle";

export function generateMetadata(): Metadata {
  const meta = buildLedWallCityMetadata(CITY_SLUG);
  if (!meta) return { title: "Not found" };
  return meta;
}

export default function LedWallRentalKegallePage() {
  const city = getLedWallCityBySlug(CITY_SLUG);
  if (!city) notFound();

  return (
    <>
      <JsonLd data={buildLedWallCitySchema(city)} id="json-ld-led-wall-kegalle" />
      <LedWallCityPageContent city={city} />
    </>
  );
}
