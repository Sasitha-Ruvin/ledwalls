import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BreadcrumbItem } from "@/types/site";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  tone?: "light" | "dark";
}

export function Breadcrumbs({
  items,
  className,
  tone = "dark",
}: BreadcrumbsProps) {
  const linkClass =
    tone === "dark"
      ? "text-white/40 transition-colors hover:text-white/70"
      : "text-muted-yc transition-colors hover:text-ink";

  return (
    <nav aria-label="Breadcrumb" className={cn(className)}>
      <ol className="flex flex-wrap items-center gap-2 text-xs">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 ? (
                <span
                  className={tone === "dark" ? "text-white/20" : "text-line"}
                  aria-hidden
                >
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    "font-medium",
                    tone === "dark" ? "text-white/70" : "text-ink"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}