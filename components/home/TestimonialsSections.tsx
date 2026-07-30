"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Reviews, TestimonialsIntro } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import type { Review, SectionIntro } from "@/types/site";

interface TestimonialsSectionProps {
  reviews?: Review[];
  intro?: SectionIntro;
  className?: string;
}

export function TestimonialsSection({
  reviews = Reviews,
  intro = TestimonialsIntro,
  className,
}: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = reviews[activeIndex];
  const sideReviews = reviews
    .filter((_, index) => index !== activeIndex)
    .slice(0, 3);

  return (
    <section
      className={cn(
        "bg-ink px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24",
        className
      )}
    >
      <div className="mb-8 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          tone="dark"
          eyebrow={intro.eyebrow}
          title={
            <>
              {intro.titleLine1}
              <br />
              <span
                className={intro.titleLine2Muted ? "text-white/25" : undefined}
              >
                {intro.titleLine2}
              </span>
            </>
          }
        />
        <div className="flex gap-2">
          <Button
            size="icon"
            className="size-10 rounded bg-ink-soft text-white hover:bg-white/10"
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + reviews.length) % reviews.length
              )
            }
          >
            <ChevronLeft className="size-4.5" />
          </Button>
          <Button
            size="icon"
            className="size-10 rounded bg-brand text-white hover:bg-brand-dark"
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % reviews.length)
            }
          >
            <ChevronRight className="size-4.5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-1 lg:grid-cols-2">
        <div className="bg-brand p-6 sm:p-10 lg:p-12">
          <div className="mb-6 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-white text-white" />
            ))}
          </div>
          <p className="mb-8 text-base leading-relaxed text-white italic sm:text-lg lg:text-xl">
            &ldquo;{active.quote}&rdquo;
          </p>
          <div className="mb-3.5 h-px w-10 bg-white/35" />
          <div className="text-sm font-bold text-white sm:text-base">
            {active.name}
          </div>
          <div className="mt-1 text-xs text-white/60 sm:text-sm">
            {active.role}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          {sideReviews.map((review) => (
            <button
              key={review.name}
              type="button"
              onClick={() => setActiveIndex(reviews.indexOf(review))}
              className="flex-1 bg-ink-soft px-5 py-5 text-left transition-colors hover:bg-white/10 sm:px-7"
            >
              <div className="mb-2 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-2.5 fill-brand text-brand" />
                ))}
              </div>
              <p className="mb-2.5 line-clamp-2 text-sm leading-snug text-white/55">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="text-xs font-semibold text-white sm:text-sm">
                {review.name}{" "}
                <span className="font-normal text-muted-yc">
                  · {review.role.split(",")[0]}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}