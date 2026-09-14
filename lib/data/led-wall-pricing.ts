/** Shared LED wall hire pricing copy (no size-by-size rate table). */

export const LED_WALL_STARTING_PRICE_LKR = 50000;

export const LedWallHireDurationLabel = "8-hour business day";
export const LedWallHireDurationShort = "8 hrs";

export function formatLedWallRateLkr(priceLkr: number): string {
  return `LKR ${priceLkr.toLocaleString("en-LK")}`;
}

export const LedWallStartingPriceDisplay = formatLedWallRateLkr(
  LED_WALL_STARTING_PRICE_LKR
);

export const LedWallPricingExclusions =
  "Price does not include transport, setup or additional equipment charges.";

export const LedWallPricingHighlights = [
  {
    value: LedWallStartingPriceDisplay,
    label: "Starting from",
  },
  {
    value: "Custom",
    label: "Sized to your venue",
  },
  {
    value: "60 min",
    label: "Quote turnaround",
  },
  {
    value: "25",
    label: "Districts covered",
  },
] as const;

export const LedWallRatesIntro = {
  eyebrow: "LED wall hire price Sri Lanka",
  title: "LED Wall Hire Pricing",
  description: `LED wall hire starts from ${LedWallStartingPriceDisplay} onwards, depending on wall size, pixel pitch and event requirements. ${LedWallPricingExclusions} Request an itemised quote for your exact setup.`,
};

export const LedWallCustomSizesNote = {
  title: "Need a custom size?",
  body: "We build LED walls to your stage, ballroom or outdoor plot. Final pricing is quoted to your exact dimensions, pitch and hire window.",
  points: [
    "Any width and height",
    "Indoor P3 or outdoor IP65",
    "Quoted to your venue layout",
  ],
};

export const LedWallRatesFootnote = LedWallPricingExclusions;

export const LedWallRatesSummary = `LED wall hire in Sri Lanka starts from ${LedWallStartingPriceDisplay} onwards. ${LedWallPricingExclusions} Final price depends on size, pitch and event needs.`;

/** Kept for any remaining typed rate helpers; no published size breakdown. */
export const LedWallRates: never[] = [];
