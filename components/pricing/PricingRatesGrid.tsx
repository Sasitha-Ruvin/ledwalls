import { ArrowRight } from "lucide-react";
import QuoteDialog from "@/components/layout/QuoteDialog";
import { cn } from "@/lib/utils";
import {
  LedWallPricingExclusions,
  LedWallStartingPriceDisplay,
} from "@/lib/data/led-wall-pricing";

interface LedWallStartingPriceCardProps {
  className?: string;
  tone?: "light" | "dark";
  showQuoteCta?: boolean;
}

export function LedWallStartingPriceCard({
  className,
  tone = "light",
  showQuoteCta = true,
}: LedWallStartingPriceCardProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border",
        isDark ? "border-white/15 bg-white/[0.06]" : "border-line bg-white",
        className
      )}
    >
      <div className={cn("px-6 py-8 sm:px-8 sm:py-10", isDark ? "bg-black/30" : "bg-ink")}>
        <p className="text-xs font-medium tracking-widest text-white/55 uppercase">
          Starting from
        </p>
        <p className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {LedWallStartingPriceDisplay}
          <span className="ml-2 text-lg font-semibold text-white/55 sm:text-xl">
            onwards
          </span>
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
          Final price depends on wall size, pixel pitch and event requirements.
        </p>
      </div>

      <div className="space-y-4 px-6 py-6 sm:px-8">
        <p
          className={cn(
            "text-sm leading-relaxed",
            isDark ? "text-white/60" : "text-muted-yc"
          )}
        >
          {LedWallPricingExclusions}
        </p>
        <ul
          className={cn(
            "space-y-2 text-sm",
            isDark ? "text-white/70" : "text-ink"
          )}
        >
          <li className="flex gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
            Transport charged separately
          </li>
          <li className="flex gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
            Setup charged separately
          </li>
          <li className="flex gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
            Truss, lighting, fog, sound and other add-ons quoted separately
          </li>
        </ul>

        {showQuoteCta ? (
          <QuoteDialog
            triggerClassName="mt-2 h-11 w-full rounded bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Get an itemised quote
            <ArrowRight className="size-4" aria-hidden />
          </QuoteDialog>
        ) : null}
      </div>
    </div>
  );
}

/** @deprecated Use LedWallStartingPriceCard */
export function LedWallRatesPanel({
  className,
}: {
  rates?: unknown;
  className?: string;
  variant?: string;
}) {
  return <LedWallStartingPriceCard className={className} />;
}

/** @deprecated Use LedWallStartingPriceCard */
export function PricingRatesCompactList({
  className,
}: {
  rates?: unknown;
  className?: string;
}) {
  return <LedWallStartingPriceCard className={className} />;
}
