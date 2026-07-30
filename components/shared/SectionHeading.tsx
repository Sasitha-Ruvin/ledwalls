import { cn } from "@/lib/utils";
import type { SectionHeadingProps } from "@/types/site";

const toneClass = {
  light: {
    eyebrow: "text-brand",
    title: "text-ink",
    description: "text-muted-yc",
  },
  dark: {
    eyebrow: "text-brand",
    title: "text-white",
    description: "text-white/55",
  },
  brand: {
    eyebrow: "text-white/60",
    title: "text-white",
    description: "text-white/75",
  },
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  className,
}: SectionHeadingProps) {
  const colors = toneClass[tone];

  return (
    <div className={cn(className)}>
      <div className="mb-3 flex items-center gap-3 sm:mb-4">
        <div className="h-0.5 w-7 bg-brand" />
        <span
          className={cn(
            "text-xs font-medium tracking-widest uppercase",
            colors.eyebrow
          )}
        >
          {eyebrow}
        </span>
      </div>
      <div
        className={cn(
          "text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-5xl",
          colors.title
        )}
      >
        {title}
      </div>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-sm leading-relaxed sm:text-base",
            colors.description
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
