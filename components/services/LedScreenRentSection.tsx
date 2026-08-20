import { ArrowRight, Check } from "lucide-react";
import QuoteDialog from "@/components/layout/QuoteDialog";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildLedScreenRentSchema } from "@/lib/data/services";

const LedScreenRentPoints = [
  "Delivery, setup and breakdown included",
  "On-site operator for the full event",
  "P2, P2.5, P3 or P4 pixel pitch options",
];

export function LedScreenRentSection() {
  return (
    <section
      aria-labelledby="led-screen-rent-heading"
      className="bg-surface px-4 py-16 sm:px-8 sm:py-20 lg:px-16"
    >
      <JsonLd data={buildLedScreenRentSchema()} id="json-ld-led-screen-rent" />

      <div className="grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-medium tracking-widest text-brand uppercase">
            LED screen hire Sri Lanka
          </p>
          <h2
            id="led-screen-rent-heading"
            className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
          >
            LED Screen Rental in Sri Lanka
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-yc">
            LED screen rental is available across Colombo and island-wide -
            from small indoor displays for meetings to large outdoor screens
            for concerts and exhibitions. Every package includes delivery,
            setup and breakdown, an on-site operator for the full event, and a
            choice of P2, P2.5, P3 or P4 pixel pitch depending on viewing
            distance and budget.
          </p>
        </div>

        <div>
          <ul className="space-y-2.5">
            {LedScreenRentPoints.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm text-ink">
                <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <QuoteDialog
              triggerClassName="h-11 rounded bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Get a quote
              <ArrowRight className="size-4" aria-hidden />
            </QuoteDialog>
            <Button
              nativeButton={false}
              render={<a href="#service-pricing-heading" />}
              variant="outline"
              className="h-11 border-line bg-white text-ink hover:bg-surface"
            >
              See LED screen rent pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
