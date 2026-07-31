import Link from "next/link";
import { cn } from "@/lib/utils";
import type { DistrictEntry } from "@/types/site";

interface DistrictPillsProps {
  districts: DistrictEntry[];
  highlightLabel?: string;
  className?: string;
}

function districtKey(entry: DistrictEntry): string {
  return typeof entry === "string" ? entry : entry.name;
}

function districtName(entry: DistrictEntry): string {
  return typeof entry === "string" ? entry : entry.name;
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
      {districts.map((district) => {
        const key = districtKey(district);
        const name = districtName(district);
        const href = typeof district === "string" ? undefined : district.href;
        const pillClass =
          "inline-flex rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-sm font-medium text-white transition-colors";

        return (
          <li key={key}>
            {href ? (
              <Link href={href} className={cn(pillClass, "hover:bg-white/25")}>
                {name}
              </Link>
            ) : (
              <span className={pillClass}>{name}</span>
            )}
          </li>
        );
      })}
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
