const DEFAULT_SITE_URL = "https://www.ledwalls.lk";
const DEFAULT_SITE_HOST = "www.ledwalls.lk";

/** Public site origin for canonical URLs, Open Graph, and JSON-LD. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!fromEnv) return DEFAULT_SITE_URL;
  return fromEnv.replace(/\/$/, "");
}

export const SITE_URL = getSiteUrl();

/** Hostname for robots.txt (no scheme or path). */
export function getSiteHost(): string {
  try {
    return new URL(SITE_URL).host;
  } catch {
    return DEFAULT_SITE_HOST;
  }
}

export const SITE_HOST = getSiteHost();
