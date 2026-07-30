import Image from "next/image";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";
import type { BreadcrumbItem } from "@/types/site";

interface PageHeroProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
  minHeightClass?: string;
}

export function PageHero({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  breadcrumbs,
  className,
  minHeightClass = "min-h-[28rem] sm:min-h-[32rem]",
}: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-heading"
      className={cn("relative overflow-hidden", minHeightClass, className)}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/78" />

      {breadcrumbs ? (
        <Breadcrumbs
          items={breadcrumbs}
          className="absolute top-6 right-4 z-10 sm:right-8 lg:right-16"
        />
      ) : null}

      <div
        className="absolute inset-0 z-10 flex flex-col justify-end px-4 pb-12 sm:px-8 sm:pb-16 lg:px-16"
      >
        <SectionHeading
          eyebrow={eyebrow}
          title={
            <h1 id="page-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          }
          description={description}
          tone="dark"
        />
      </div>
    </section>
  );
}