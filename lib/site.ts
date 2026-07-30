const DEFAULT_SITE_URL = "https://www.ledwalls.lk";

/** Public site origin for canonical URLs, Open Graph, and JSON-LD. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!fromEnv) return DEFAULT_SITE_URL;
  return fromEnv.replace(/\/$/, "");
}

export const SITE_URL = getSiteUrl();
