import Link from "next/link";
import { ArrowRight } from "lucide-react";
import QuoteDialog from "@/components/layout/QuoteDialog";
import { Button } from "@/components/ui/button";
import { LedWallRatesPanel } from "@/components/pricing/PricingRatesGrid";
import { LedWallCustomSizesSection } from "@/components/pricing/LedWallCustomSizesSection";
import {
  LedWallRates,
  LedWallRatesFootnote,
  LedWallRatesIntro,
} from "@/lib/data/led-wall-pricing";

export function LedWallServicePricingSection() {
  return (
    <>
      <section
        aria-labelledby="service-pricing-heading"
        className="bg-ink px-4 py-16 sm:px-8 sm:py-20 lg:px-16"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div>
            <p className="mb-3 text-xs font-medium tracking-widest text-brand uppercase">
              {LedWallRatesIntro.eyebrow}
            </p>
            <h2
              id="service-pricing-heading"
              className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
            >
              {LedWallRatesIntro.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
              {LedWallRatesIntro.description}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              {LedWallRatesFootnote}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteDialog
                triggerClassName="h-11 rounded bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark"
              >
                Get a quote
                <ArrowRight className="size-4" aria-hidden />
              </QuoteDialog>
              <Button
                nativeButton={false}
                render={<Link href="/pricing" />}
                variant="outline"
                className="h-11 border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                Full pricing page
              </Button>
            </div>
          </div>

          <LedWallRatesPanel rates={LedWallRates} />
        </div>
      </section>

      <LedWallCustomSizesSection />
    </>
  );
}
