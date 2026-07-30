import { ArrowRight } from "lucide-react";
import QuoteDialog from "@/components/layout/QuoteDialog";
import { LedWallCustomSizesNote } from "@/lib/data/led-wall-pricing";
import { cn } from "@/lib/utils";

interface LedWallCustomSizesSectionProps {
  className?: string;
  tone?: "brand" | "light";
}

export function LedWallCustomSizesSection({
  className,
  tone = "brand",
}: LedWallCustomSizesSectionProps) {
  const isBrand = tone === "brand";

  return (
    <section
      aria-labelledby="custom-led-wall-sizes-heading"
      className={cn(
        isBrand ? "bg-brand" : "border border-line bg-surface",
        "px-4 py-12 sm:px-8 sm:py-14 lg:px-16",
        className
      )}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p
          className={cn(
            "mb-3 text-xs font-medium tracking-widest uppercase",
            isBrand ? "text-white/70" : "text-brand"
          )}
        >
          Bespoke builds
        </p>
        <h2
          id="custom-led-wall-sizes-heading"
          className={cn(
            "text-2xl font-extrabold tracking-tight sm:text-3xl",
            isBrand ? "text-white" : "text-ink"
          )}
        >
          {LedWallCustomSizesNote.title}
        </h2>
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed sm:text-base",
            isBrand ? "text-white/80" : "text-muted-yc"
          )}
        >
          {LedWallCustomSizesNote.body}
        </p>
        <ul
          className={cn(
            "mt-6 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2",
            isBrand ? "text-white/90" : "text-ink"
          )}
        >
          {LedWallCustomSizesNote.points.map((point) => (
            <li key={point} className="flex items-center justify-center gap-2">
              <span
                className={cn(
                  "size-1.5 shrink-0 rounded-full",
                  isBrand ? "bg-white" : "bg-brand"
                )}
              />
              {point}
            </li>
          ))}
        </ul>
        <QuoteDialog
          triggerClassName={cn(
            "mt-8 h-12 rounded px-6 text-sm font-semibold",
            isBrand
              ? "bg-white text-brand hover:bg-surface"
              : "bg-brand text-white hover:bg-brand-dark"
          )}
        >
          Quote a custom LED wall
          <ArrowRight className="size-4" aria-hidden />
        </QuoteDialog>
      </div>
    </section>
  );
}
