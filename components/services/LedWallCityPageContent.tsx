import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import QuoteDialog from "@/components/layout/QuoteDialog";
import FAQSection from "@/components/home/FAQSection";
import { LedWallRatesPanel } from "@/components/pricing/PricingRatesGrid";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { LED_WALL_SERVICE_HREF } from "@/lib/data/services";
import { LedWallCitiesFootnote } from "@/lib/data/led-wall-cities";
import type { LedWallCity } from "@/lib/data/led-wall-cities";

interface LedWallCityPageContentProps {
  city: LedWallCity;
}

export function LedWallCityPageContent({ city }: LedWallCityPageContentProps) {
  return (
    <>
      <PageHero
        imageSrc={city.heroImage}
        imageAlt={`LED wall hire ${city.name} LED screen rent Sri Lanka`}
        eyebrow={city.eyebrow}
        title={
          <>
            LED wall hire
            <br />
            {city.name}
          </>
        }
        description={city.heroBody}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: city.name },
        ]}
      />

      <section
        aria-labelledby="city-rates-heading"
        className="bg-surface px-4 py-16 sm:px-8 sm:py-20 lg:px-16"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium tracking-widest text-brand uppercase">
              LED screen hire {city.name}
            </p>
            <h2
              id="city-rates-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              LED wall rent {city.name} price
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-yc">
              {city.intro}
            </p>

            <ul className="mt-6 space-y-2">
              {city.venues.map((venue) => (
                <li key={venue} className="flex gap-2.5 text-sm text-muted-yc">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  {venue}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-relaxed text-muted-yc">
              {LedWallCitiesFootnote}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteDialog triggerClassName="h-11 rounded bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark">
                Get a quote
                <ArrowRight className="size-4" aria-hidden />
              </QuoteDialog>
              <Button
                nativeButton={false}
                render={<Link href={LED_WALL_SERVICE_HREF} />}
                variant="outline"
                className="h-11 border-line bg-white text-ink hover:bg-surface"
              >
                LED wall hire
              </Button>
            </div>
          </div>

          <div className="w-full lg:sticky lg:top-24">
            <LedWallRatesPanel />
          </div>
        </div>
      </section>

      <FAQSection
        items={city.faqs}
        listId="faq"
        intro={{
          eyebrow: `LED wall hire ${city.name} FAQ`,
          titleLine1: "Questions about LED wall",
          titleLine2: `hire in ${city.name}.`,
          titleLine2Muted: true,
          description:
            "Common questions about LED wall hire, pricing and delivery for events in this area. For full LED wall details see our services page.",
        }}
      />

      <section className="flex flex-col items-start justify-between gap-6 bg-brand px-4 py-12 sm:flex-row sm:items-center sm:px-8 sm:py-14 lg:px-16">
        <div>
          <SectionHeading
            eyebrow="Ready to book?"
            title={
              <h2 className="text-2xl sm:text-3xl">
                LED wall hire {city.name} quote
              </h2>
            }
            tone="brand"
          />
        </div>
        <QuoteDialog triggerClassName="h-12 bg-white px-6 text-sm font-semibold text-brand hover:bg-surface">
          Get a quote
          <ArrowRight className="size-4" aria-hidden />
        </QuoteDialog>
      </section>
    </>
  );
}
