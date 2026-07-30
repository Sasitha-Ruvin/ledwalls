import Link from "next/link";
import { cn } from "@/lib/utils";
import { ServicesQuickNav as NavItems } from "@/lib/data/services";
import type { QuickNavItem } from "@/types/site";

interface ServicesQuickNavProps {
  items?: QuickNavItem[];
}

export function ServicesQuickNav({ items = NavItems }: ServicesQuickNavProps) {
  return (
    <nav
      aria-label="Service categories"
      className="border-b border-line bg-white"
    >
      <div
        className="flex gap-1 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-0 sm:px-8 lg:px-16 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-14 shrink-0 snap-start items-center gap-2 border-b-2 border-transparent px-4 text-sm font-medium text-muted-yc transition-colors sm:px-5",
                "hover:border-brand hover:text-ink"
              )}
            >
              <Icon className="size-3.5" aria-hidden />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}