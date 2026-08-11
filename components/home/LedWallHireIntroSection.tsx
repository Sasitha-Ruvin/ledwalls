import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LedWallHireIntroContentData } from "@/lib/data/home";
import { cn } from "@/lib/utils";

interface LedWallHireIntroSectionProps {
  className?: string;
}

export function LedWallHireIntroSection({
  className,
}: LedWallHireIntroSectionProps) {
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    description,
    imageSrc,
    imageAlt,
    badgeValue,
    badgeLabel,
    features,
    ctaLabel,
    ctaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
  } = LedWallHireIntroContentData;

  return (
    <section className={cn("flex min-h-0 flex-col lg:flex-row", className)}>
      <div className="relative min-h-80 w-full overflow-hidden sm:min-h-96 lg:min-h-150 lg:w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute bottom-6 left-6 rounded-sm bg-brand px-5 py-4 sm:bottom-10 sm:left-10 sm:px-6 sm:py-5">
          <div className="text-4xl leading-none font-black text-white sm:text-5xl">
            {badgeValue}
          </div>
          <div className="mt-1 max-w-40 text-xs text-white/80 sm:text-sm">
            {badgeLabel}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-12 lg:w-1/2">
        <SectionHeading
          eyebrow={eyebrow}
          title={
            <>
              {titleLine1}
              <br />
              {titleLine2}
            </>
          }
          description={description}
        />

        <div className="mt-8 space-y-4 sm:mt-9 sm:space-y-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-3.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                  <Icon className="size-4 text-brand" aria-hidden />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink sm:text-base">
                    {feature.title}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-yc sm:text-sm">
                    {feature.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href={ctaHref}
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark sm:h-12"
          >
            {ctaLabel}
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
          <Link
            href={secondaryCtaHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-opacity hover:opacity-70"
          >
            {secondaryCtaLabel}
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
