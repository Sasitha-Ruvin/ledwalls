import { cn } from "@/lib/utils";
import type { LedWallRate } from "@/types/site";
import {
  formatLedWallRateLkr,
  formatLedWallRatePerDay,
  LedWallRates,
} from "@/lib/data/led-wall-pricing";

interface LedWallRatesPanelProps {
  rates?: LedWallRate[];
  className?: string;
  variant?: "default" | "compact";
}

export function LedWallRatesPanel({
  rates = LedWallRates,
  className,
  variant = "default",
}: LedWallRatesPanelProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-line bg-white",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-4 bg-ink px-5 sm:px-6",
          isCompact ? "py-3.5" : "py-4"
        )}
      >
        <span className="text-sm font-semibold text-white">Wall size</span>
        <span className="text-right text-xs font-medium text-white/70 sm:text-sm">
          Rate (LKR)
        </span>
      </div>

      <ul role="list">
        {rates.map((rate, index) => (
          <li
            key={rate.size}
            className={cn(
              "flex items-center justify-between gap-6 px-5 sm:px-6",
              isCompact ? "py-3" : "py-4 sm:py-4.5",
              index < rates.length - 1 && "border-b border-line",
              index % 2 === 1 && "bg-surface/60"
            )}
          >
            <span
              className={cn(
                "font-semibold text-ink",
                isCompact ? "text-sm" : "text-base sm:text-lg"
              )}
            >
              {rate.size}
            </span>
            <span
              className={cn(
                "shrink-0 font-bold tabular-nums tracking-tight text-brand",
                isCompact ? "text-sm" : "text-base sm:text-lg"
              )}
            >
              {isCompact
                ? formatLedWallRatePerDay(rate.priceLkr)
                : formatLedWallRateLkr(rate.priceLkr)}
            </span>
          </li>
        ))}
      </ul>

      {!isCompact ? (
        <p className="border-t border-line bg-surface/80 px-5 py-3 text-xs text-muted-yc sm:px-6">
          Rates per standard business day hire. Operator, delivery, setup and
          breakdown included.
        </p>
      ) : null}
    </div>
  );
}

/** @deprecated Use LedWallRatesPanel - kept for service page imports */
export function PricingRatesCompactList({
  rates,
  className,
}: {
  rates: LedWallRate[];
  className?: string;
}) {
  return (
    <LedWallRatesPanel rates={rates} className={className} variant="compact" />
  );
}
