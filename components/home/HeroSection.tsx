import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import QuoteDialog from "@/components/layout/QuoteDialog";
import { StatItem } from "@/components/shared/StatItem";
import { Button } from "@/components/ui/button";
import { HeroContentData, HeroStats } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import type { HeroContent } from "@/types/site";

interface HeroSectionProps {
  content?: HeroContent;
  className?: string;
}

export function HeroSection({
  content = HeroContentData,
  className,
}: HeroSectionProps) {
  const {
    eyebrow,
    headline,
    subheadline,
    description,
    imageSrc,
    imageAlt,
    primaryCta,
    secondaryCta,
    secondaryHref,
    badge,
  } = content;

  return (
    <section
      className={cn(
        "relative min-h-[min(100svh,56rem)] overflow-hidden",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt ?? "LED wall rental Sri Lanka LED screen hire"}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/80 to-ink/25" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-ink/40" />

      <div className="relative z-10 flex min-h-[min(100svh,56rem)] flex-col">
        <div className="flex flex-1 flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-medium tracking-widest text-brand uppercase sm:mb-5">
              {eyebrow}
            </p>

            <h1
              className="text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {headline.line1}
              <br />
              <span className="text-brand">{headline.accent}</span>
            </h1>

            {subheadline ? (
              <p className="mt-4 text-base font-medium text-white/75 sm:mt-5 sm:text-lg">
                {subheadline}
              </p>
            ) : null}

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55 sm:mt-6 sm:text-base">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <QuoteDialog
                triggerClassName="h-11 rounded bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark sm:h-12 sm:px-6 sm:text-base"
              >
                {primaryCta} <ArrowRight className="size-4" />
              </QuoteDialog>
              <Button
                nativeButton={false}
                render={<Link href={secondaryHref} />}
                variant="outline"
                className="h-11 rounded border-white/20 bg-white/8 px-5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/12 sm:h-12 sm:px-6 sm:text-base"
              >
                {secondaryCta}
              </Button>
            </div>

            {badge ? (
              <p className="mt-6 text-xs text-white/45 sm:mt-8">{badge}</p>
            ) : null}
          </div>
        </div>

        <div
          className="border-t border-white/10 bg-ink/55 backdrop-blur-md"
          aria-label="Company highlights"
        >
          <div className="flex flex-wrap items-center gap-y-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-16">
            {HeroStats.map((stat, index) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                label={stat.label}
                tone="dark"
                showDivider={index > 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
