import type { LedWallRate } from "@/types/site";

/** Official YC Events LED video wall hire rates (LKR per day). */
export const LedWallRates: LedWallRate[] = [
  { size: "10×8 ft", priceLkr: 55000 },
  { size: "13×8 ft", priceLkr: 60000 },
  { size: "16×8 ft", priceLkr: 70000 },
  { size: "18×8 ft", priceLkr: 80000 },
  { size: "20×8 ft", priceLkr: 90000 },
  { size: "20×10 ft", priceLkr: 100000 },
  { size: "26×10 ft", priceLkr: 125000 },
  { size: "30×10 ft", priceLkr: 150000 },
  { size: "35×10 ft", priceLkr: 160000 },
  { size: "40×10 ft", priceLkr: 180000 },
  { size: "40×12 ft", priceLkr: 200000 },
];

export interface LedWallRateTier {
  id: string;
  title: string;
  description: string;
  bestFor: string;
  rates: LedWallRate[];
}

export const LedWallRateTiers: LedWallRateTier[] = [
  {
    id: "compact",
    title: "Compact LED walls",
    description: "Ideal for weddings, hotel events and indoor corporate meetings.",
    bestFor: "Wedding LED screen Colombo · indoor receptions",
    rates: LedWallRates.slice(0, 4),
  },
  {
    id: "standard",
    title: "Standard LED video walls",
    description: "Award nights, AGMs, product launches and mid-size outdoor events.",
    bestFor: "LED screen corporate event Sri Lanka · ballroom events",
    rates: LedWallRates.slice(4, 7),
  },
  {
    id: "large",
    title: "Large format LED walls",
    description: "Concerts, political rallies, festivals and big screen outdoor hire.",
    bestFor: "Outdoor LED screen rent · big screen rent Sri Lanka",
    rates: LedWallRates.slice(7),
  },
];

export const LedWallHireDurationLabel = "8-hour business day";
export const LedWallHireDurationShort = "8 hrs";

export const LedWallPricingHighlights = [
  {
    value: "LKR 55,000",
    label: "From · 8-hour hire",
  },
  {
    value: "8 hrs",
    label: "Per business day",
  },
  {
    value: "Operator",
    label: "Included on every hire",
  },
  {
    value: "25",
    label: "Districts covered",
  },
] as const;

export const LedWallRatesIntro = {
  eyebrow: "LED wall hire price Sri Lanka",
  title: "LED wall hire and rent rates",
  description:
    "Published LED wall hire and LED wall rent prices for standard sizes below. Operator, delivery, setup and breakdown included. Add truss, rotating lights and fog machines on the same quote across Colombo, Kandy and all 25 districts.",
};

export const LedWallCustomSizesNote = {
  title: "Need a custom LED wall size?",
  body:
    "These rates cover our standard catalogue sizes. We also build custom LED video walls sized to your stage, ballroom or outdoor plot. Pricing is quoted to your exact dimensions.",
  points: [
    "Any width and height",
    "Indoor P3 or outdoor IP65",
    "Quoted to your venue layout",
  ],
};

export function formatLedWallRateLkr(priceLkr: number): string {
  return `LKR ${priceLkr.toLocaleString("en-LK")}`;
}

export function formatLedWallRatePerDay(priceLkr: number): string {
  return `${formatLedWallRateLkr(priceLkr)} / ${LedWallHireDurationShort}`;
}

export const LedWallRatesFootnote =
  "All rates are for one 8-hour working business day on standard event hire. Final LED screen rent price may vary for extended hours, multi-day bookings, pixel pitch upgrades or complex rigging. Custom sizes quoted separately. Itemised quote within 60 minutes.";

export const LedWallRatesSummary =
  "LED wall hire and LED screen rent in Sri Lanka from LKR 55,000 per 8-hour business day for a 10×8 ft LED video wall. Custom sizes and extended hire are quoted to your event requirements.";
