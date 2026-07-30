import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LedUseCases } from "@/lib/data/pricing";
import { cn } from "@/lib/utils";

interface LedRentalUsesSectionProps {
  className?: string;
}

export function LedRentalUsesSection({ className }: LedRentalUsesSectionProps) {
  return (
    <section
      aria-labelledby="led-uses-heading"
      className={cn("bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-16", className)}
    >
      <SectionHeading
        eyebrow="LED wall hire Sri Lanka"
        title={
          <h2 id="led-uses-heading">
            LED screen rental for every event type
          </h2>
        }
        description="YC Events is a specialist LED wall rental company in Sri Lanka. We LED screen rent and LED wall hire for weddings, corporate events, concerts and roadshows, with operator, delivery and setup included on every booking."
      />

      <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LedUseCases.map((item) => (
          <li
            key={item.id}
            className="rounded-lg border border-line bg-surface p-6 transition-colors hover:border-brand/40"
          >
            <h3 className="mb-3 text-lg font-bold tracking-tight text-ink">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-brand"
                >
                  {item.title}
                </Link>
              ) : (
                item.title
              )}
            </h3>
            <p className="text-sm leading-relaxed text-muted-yc">
              {item.description}
            </p>
            {item.href ? (
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand"
              >
                View service
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
