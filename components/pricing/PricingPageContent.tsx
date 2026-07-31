import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import TickerBar from "@/components/home/TickerBar";
import FAQSection from "@/components/home/FAQSection";
import QuoteDialog from "@/components/layout/QuoteDialog";
import { PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { StatItem } from "@/components/shared/StatItem";
import { Button } from "@/components/ui/button";
import { LedWallRatesPanel } from "@/components/pricing/PricingRatesGrid";
import { LedWallCustomSizesSection } from "@/components/pricing/LedWallCustomSizesSection";
import {
  buildPricingSchema,
  LedWallRatesFootnote,
  LedWallRatesIntro,
  LedWallPricingHighlights,
  PricingFaqs,
  PricingHeroContent,
  PricingIncludes,
  PricingSeoSections,
} from "@/lib/data/pricing";

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
      <TickerBar />

      <section
        aria-label="LED wall rental price highlights"
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
            <p className="mt-6 text-xs leading-relaxed text-muted-yc">
              {LedWallRatesFootnote}
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/services/led-wall" />}
              variant="outline"
              className="mt-8 h-11 border-line bg-white text-ink hover:bg-surface"
            >
              LED wall rental service
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>

          <div className="w-full lg:sticky lg:top-24">
            <LedWallRatesPanel />
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
            Included in every rate
          </p>
          <h2
            id="pricing-includes-heading"
            className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
          >
            LED screen rental with operator included
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-yc sm:text-base">
            Every rate is a full LED wall rental cost with operator, delivery,
            setup and breakdown included.
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
            LED rental guide
          </p>
          <h2
            id="pricing-seo-heading"
            className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
          >
            Understanding LED wall rental cost in Sri Lanka
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
          eyebrow: "LED rental FAQ",
          titleLine1: "LED screen rent",
          titleLine2: "questions answered.",
          titleLine2Muted: true,
          description:
            "Common questions about LED wall rent price, LKR rates, operator inclusion and delivery across Sri Lanka.",
        }}
        className="bg-white"
      />

      <section
        className="flex flex-col items-start justify-between gap-6 bg-brand px-4 py-12 sm:flex-row sm:items-center sm:px-8 sm:py-14 lg:px-16"
      >
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Ready for your LED wall quote?
          </h2>
          <p className="mt-2 text-sm text-white/80 sm:text-base">
            Itemised LED screen rent price in LKR within 60 minutes.
          </p>
        </div>
        <QuoteDialog
          triggerClassName="h-12 bg-white px-6 text-sm font-semibold text-brand hover:bg-surface"
        >
          Get a quote
          <ArrowRight className="size-4" aria-hidden />
        </QuoteDialog>
      </section>
    </>
  );
}
