import type { MetadataRoute } from "next";
import { getServiceSlugs } from "@/lib/data/services";
import { getLedWallCitySlugs } from "@/lib/data/led-wall-cities";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = getServiceSlugs().map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: slug === "led-wall" ? 0.9 : 0.6,
  }));

  const cityRoutes: MetadataRoute.Sitemap = getLedWallCitySlugs().map((slug) => ({
    url: `${SITE_URL}/led-wall-rental-${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: slug === "colombo" ? 0.85 : 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes];
}
