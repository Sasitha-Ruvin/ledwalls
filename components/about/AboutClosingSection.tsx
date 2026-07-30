import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutClosingData } from "@/lib/data/about";
import { cn } from "@/lib/utils";
import type { AboutClosingContent } from "@/types/site";

interface AboutClosingSectionProps {
  content?: AboutClosingContent;
  className?: string;
}

export function AboutClosingSection({
  content = AboutClosingData,
  className,
}: AboutClosingSectionProps) {
  return (
    <section
      aria-labelledby="about-closing-heading"
      className={cn(
        "border-t-4 border-brand bg-ink px-4 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20",
        className
      )}
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
        <div className="lg:col-span-5">
          <p className="mb-3 text-xs font-medium tracking-widest text-brand uppercase">
            {content.eyebrow}
          </p>
          <h2
            id="about-closing-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-yc">
            {content.description}
          </p>
          <ul className="mt-6 space-y-3">
            {content.highlights.map((line) => (
              <li
                key={line}
                className="flex items-center gap-3 text-sm text-white/80"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-brand" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-4">
          {content.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-ink-soft bg-ink-soft/80 p-6 sm:p-8"
            >
              <div className="text-4xl font-black leading-none text-white sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-yc">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center lg:col-span-3">
          <p className="mb-6 text-sm leading-relaxed text-white/55">
            Ready to plan your next event? We respond within 60 minutes.
          </p>
          <Button
            nativeButton={false}
            render={<Link href={content.ctaHref} />}
            className="h-12 w-full bg-brand text-sm font-semibold text-white hover:bg-brand-dark sm:w-auto"
          >
            {content.ctaLabel}
            <ArrowRight className="size-4" aria-hidden />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/services" />}
            variant="outline"
            className="mt-3 h-12 w-full border-white/20 bg-transparent text-white hover:bg-white/10 sm:w-auto"
          >
            View services
          </Button>
        </div>
      </div>
    </section>
  );
}