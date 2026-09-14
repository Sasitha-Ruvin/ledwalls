import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import FAQSection from "@/components/home/FAQSection";
import QuoteDialog from "@/components/layout/QuoteDialog";
import { PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { StatItem } from "@/components/shared/StatItem";
import { Button } from "@/components/ui/button";
import { LedWallStartingPriceCard } from "@/components/pricing/PricingRatesGrid";
import { LedWallCustomSizesSection } from "@/components/pricing/LedWallCustomSizesSection";
import {
  buildPricingSchema,
  LedWallRatesIntro,
  LedWallPricingHighlights,
  PricingFaqs,
  PricingHeroContent,
  PricingIncludes,
  PricingSeoSections,
} from "@/lib/data/pricing";
import { LedWallPricingExclusions } from "@/lib/data/led-wall-pricing";
import { LED_WALL_SERVICE_HREF } from "@/lib/data/services";

export function PricingPageContent() {
  return (
    <>
      <JsonLd data={buildPricingSchema()} />
      <PageHero
        imageSrc={PricingHeroContent.imageSrc}
        imageAlt={PricingHeroContent.imageAlt}
        eyebrow={PricingHeroContent.eyebrow}
        title={
          <>
            {PricingHeroContent.titleLine1}
            <br />
            {PricingHeroContent.titleLine2}
          </>
        }
        description={PricingHeroContent.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing" },
        ]}
      />

      <section
        aria-label="LED wall hire price highlights"
        className="border-b border-line bg-white px-4 py-8 sm:px-8 lg:px-16"
      >
        <div className="flex flex-wrap gap-y-6">
          {LedWallPricingHighlights.map((item, index) => (
            <StatItem
              key={item.label}
              value={item.value}
              label={item.label}
              tone="light"
              showDivider={index > 0}
            />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="pricing-rates-heading"
        className="bg-surface px-4 py-16 sm:px-8 sm:py-20 lg:px-16"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium tracking-widest text-brand uppercase">
              {LedWallRatesIntro.eyebrow}
            </p>
            <h2
              id="pricing-rates-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              {LedWallRatesIntro.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-yc">
              {LedWallRatesIntro.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-bold text-ink">What changes the price</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-yc">
                  Size, pixel pitch, hire duration and venue.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-ink">Indoor vs outdoor</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-yc">
                  P3 for close indoor viewing. P4 IP65 for outdoor concerts and rallies.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-ink">Not included</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-yc">
                  {LedWallPricingExclusions}
                </p>
              </div>
            </div>

            <Button
              nativeButton={false}
              render={<Link href={LED_WALL_SERVICE_HREF} />}
              variant="outline"
              className="mt-8 h-11 border-line bg-white text-ink hover:bg-surface"
            >
              LED wall hire
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>

          <div className="w-full lg:sticky lg:top-24">
            <LedWallStartingPriceCard />
          </div>
        </div>
      </section>

      <LedWallCustomSizesSection />

      <section
        aria-labelledby="pricing-includes-heading"
        className="bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-16"
      >
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-medium tracking-widest text-brand uppercase">
            How we quote
          </p>
          <h2
            id="pricing-includes-heading"
            className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
          >
            Clear pricing for every event
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-yc sm:text-base">
            Starting price covers the LED wall hire baseline. Transport, setup and
            add-ons are listed separately so you know exactly what you are paying for.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PricingIncludes.map((item) => (
            <li
              key={item.title}
              className="flex gap-3 rounded-lg border border-line bg-surface p-4 sm:p-5"
            >
              <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-brand/10">
                <Check className="size-3.5 text-brand" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-yc">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="pricing-seo-heading"
        className="bg-surface px-4 py-16 sm:px-8 sm:py-20 lg:px-16"
      >
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-medium tracking-widest text-brand uppercase">
            LED hire guide
          </p>
          <h2
            id="pricing-seo-heading"
            className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
          >
            Understanding LED wall hire cost in Sri Lanka
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {PricingSeoSections.map((block) => (
            <article
              key={block.id}
              className="rounded-lg border border-line bg-white p-6"
            >
              <h3 className="text-lg font-bold text-ink">{block.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-yc">
                {block.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FAQSection
        items={PricingFaqs}
        listId="faq"
        intro={{
          eyebrow: "LED wall FAQ",
          titleLine1: "Pricing",
          titleLine2: "questions answered.",
          titleLine2Muted: true,
          description:
            "Starting price, what is excluded, custom sizes and island-wide delivery.",
        }}
        className="bg-white"
      />

      <section className="flex flex-col items-start justify-between gap-6 bg-brand px-4 py-12 sm:flex-row sm:items-center sm:px-8 sm:py-14 lg:px-16">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Ready for your LED wall quote?
          </h2>
          <p className="mt-2 text-sm text-white/80 sm:text-base">
            Itemised quote in LKR within 60 minutes.
          </p>
        </div>
        <QuoteDialog triggerClassName="h-12 bg-white px-6 text-sm font-semibold text-brand hover:bg-surface">
          Get a quote
          <ArrowRight className="size-4" aria-hidden />
        </QuoteDialog>
      </section>
    </>
  );
}
