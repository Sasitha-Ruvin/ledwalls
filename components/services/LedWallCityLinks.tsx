import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LedWallCities } from "@/lib/data/led-wall-cities";

export function LedWallCityLinks() {
  return (
    <section
      id="led-wall-cities"
      aria-labelledby="city-links-heading"
      className="bg-white px-4 py-14 sm:px-8 sm:py-16 lg:px-16"
    >
      <p className="mb-3 text-xs font-medium tracking-widest text-brand uppercase">
        LED wall rental by city
      </p>
      <h2
        id="city-links-heading"
        className="mb-8 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
      >
        LED screen hire near you.
      </h2>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {LedWallCities.map((city) => (
          <li key={city.slug}>
            <Link
              href={`/led-wall-rental-${city.slug}`}
              className="flex items-center justify-between gap-2 rounded-lg border border-line bg-surface px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
            >
              LED wall rental {city.name}
              <ArrowUpRight className="size-3.5 shrink-0" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
