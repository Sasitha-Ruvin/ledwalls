import { cn } from "@/lib/utils";
import type { StatItemData } from "@/types/site";

interface StatItemProps extends StatItemData {
  tone?: "light" | "dark" | "brand";
  size?: "sm" | "lg";
  className?: string;
  showDivider?: boolean;
}

const valueSize = {
  sm: "text-2xl sm:text-3xl",
  lg: "text-3xl sm:text-5xl md:text-6xl",
} as const;

const toneClass = {
  light: { value: "text-ink", label: "text-muted-yc" },
  dark: { value: "text-white", label: "text-white/40" },
  brand: { value: "text-white", label: "text-white/60" },
} as const;

export function StatItem({
  value,
  label,
  tone = "dark",
  size = "sm",
  className,
  showDivider = false,
}: StatItemProps) {
  const colors = toneClass[tone];

  return (
    <div className={cn("flex items-center", className)}>
      {showDivider ? (
        <div
          className={cn(
            "mx-4 h-8 w-px sm:mx-6",
            tone === "brand" ? "bg-brand-dark" : "bg-white/10"
          )}
        />
      ) : null}
      <div className={cn(size === "lg" && "flex-1 text-center")}>
        <div
          className={cn(
            "leading-none font-black tabular-nums",
            valueSize[size],
            colors.value
          )}
        >
          {value}
        </div>
        <div
          className={cn(
            "mt-1 text-xs tracking-wider uppercase",
            colors.label
          )}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
