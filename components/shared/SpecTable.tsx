import { cn } from "@/lib/utils";
import type { SpecRow } from "@/types/site";

interface SpecTableProps {
  specs: SpecRow[];
  tone?: "light" | "dark";
  className?: string;
}

export function SpecTable({
  specs,
  tone = "light",
  className,
}: SpecTableProps) {
  const border = tone === "dark" ? "border-ink-soft" : "border-line";
  const label = tone === "dark" ? "text-white" : "text-ink";
  const value = tone === "dark" ? "text-muted-yc" : "text-muted-yc";

  return (
    <dl className={cn("mb-7", className)} aria-label="Service specifications">
      {specs.map(([specLabel, specValue]) => (
        <div
          key={specLabel}
          className={cn(
            "flex flex-col gap-1 border-b py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4",
            border
          )}
        >
          <dt className={cn("text-sm font-medium", label)}>{specLabel}</dt>
          <dd
            className={cn(
              "text-sm sm:max-w-[55%] sm:text-right",
              value
            )}
          >
            {specValue}
          </dd>
        </div>
      ))}
    </dl>
  );
}