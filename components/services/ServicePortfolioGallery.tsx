"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { PortfolioImage } from "@/types/site";

const CATEGORY_LABELS: Record<
  NonNullable<PortfolioImage["category"]>,
  string
> = {
  wedding: "Weddings",
  "award-ceremony": "Award ceremonies",
  concert: "Concerts",
  corporate: "Corporate",
  stage: "Stage & truss",
  podium: "Digital podiums",
  exhibition: "Exhibitions",
};

interface ServicePortfolioGalleryProps {
  items: PortfolioImage[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function ServicePortfolioGallery({
  items,
  eyebrow = "Portfolio",
  title = "Recent work",
  description,
  className,
}: ServicePortfolioGalleryProps) {
  const categories = useMemo(() => {
    const set = new Set<NonNullable<PortfolioImage["category"]>>();
    for (const item of items) {
      if (item.category) set.add(item.category);
    }
    return Array.from(set);
  }, [items]);

  const [activeCategory, setActiveCategory] = useState<
    "all" | NonNullable<PortfolioImage["category"]>
  >("all");

  const filtered =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section
      aria-labelledby="service-portfolio-heading"
      className={cn("bg-ink px-4 py-16 sm:px-8 sm:py-20 lg:px-16", className)}
    >
      <div className="mb-8 flex flex-col gap-6 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-3 text-xs font-medium tracking-widest text-brand uppercase">
            {eyebrow}
          </p>
          <h2
            id="service-portfolio-heading"
            className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>

        {categories.length > 1 ? (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                activeCategory === "all"
                  ? "bg-brand text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
              )}
            >
              All ({items.length})
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                  activeCategory === category
                    ? "bg-brand text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
                )}
              >
                {CATEGORY_LABELS[category]} (
                {items.filter((i) => i.category === category).length})
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <li
            key={item.src}
            className="group relative aspect-square overflow-hidden bg-ink-soft"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
          </li>
        ))}
      </ul>
    </section>
  );
}
