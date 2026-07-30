import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ContactMethod } from "@/types/site";

interface ContactMethodListProps {
  items: ContactMethod[];
  onQuoteClick?: () => void;
  className?: string;
}

export default function ContactMethodList({
  items,
  onQuoteClick,
  className,
}: ContactMethodListProps) {
  return (
    <div
      className={cn(
        "flex w-full min-w-0 flex-col gap-2.5 sm:min-w-72",
        className
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isLight = item.variant === "light";
        const content = (
          <>
            <Icon
              className={cn(
                "size-4.5 shrink-0",
                item.iconClassName ?? (isLight ? "text-ink" : "text-white")
              )}
            />
            <div className="min-w-0 text-left">
              <div
                className={cn(
                  "text-sm font-semibold",
                  isLight ? "text-ink" : "text-white"
                )}
              >
                {item.label}
              </div>
              <div
                className={cn(
                  "truncate text-xs",
                  isLight ? "text-muted-yc" : "text-white/40"
                )}
              >
                {item.detail}
              </div>
            </div>
            <ChevronRight
              className={cn(
                "ml-auto size-3.5 shrink-0",
                isLight ? "text-muted-yc" : "text-white/25"
              )}
            />
          </>
        );

        const baseClass = cn(
          "flex h-16 w-full items-center gap-3.5 rounded-lg border border-white/10 px-5 transition-colors",
          isLight
            ? "bg-white hover:bg-surface"
            : "bg-white/5 hover:bg-white/10"
        );

        if (item.id === "quote" && onQuoteClick) {
          return (
            <button
              key={item.id}
              type="button"
              onClick={onQuoteClick}
              className={baseClass}
            >
              {content}
            </button>
          );
        }

        return (
          <a key={item.id} href={item.href} className={baseClass}>
            {content}
          </a>
        );
      })}
    </div>
  );
}
