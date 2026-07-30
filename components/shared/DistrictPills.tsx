import { cn } from "@/lib/utils";

interface DistrictPillsProps {
  districts: string[];
  highlightLabel?: string;
  className?: string;
}

export function DistrictPills({
  districts,
  highlightLabel,
  className,
}: DistrictPillsProps) {
  return (
    <ul
      className={cn("flex flex-wrap justify-center gap-2", className)}
      aria-label="Service coverage districts"
    >
      {districts.map((district) => (
        <li key={district}>
          <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
            {district}
          </span>
        </li>
      ))}
      {highlightLabel ? (
        <li>
          <span className="inline-flex rounded-full bg-ink px-4 py-1.5 text-sm font-bold text-white">
            {highlightLabel}
          </span>
        </li>
      ) : null}
    </ul>
  );
}