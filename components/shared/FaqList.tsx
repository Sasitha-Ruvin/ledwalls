import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/site";

interface FaqListProps {
  items: FaqItem[];
  className?: string;
  listId?: string;
}

/**
 * Server-rendered FAQ accordion using native <details>/<summary>.
 * Answers are in the initial HTML (crawler-friendly) but collapsed by default in the UI.
 */
export function FaqList({ items, className, listId = "faq-list" }: FaqListProps) {
  return (
    <div id={listId} className={cn("w-full border-t border-line", className)}>
      {items.map((item) => (
        <details
          key={item.question}
          className="group border-b border-line last:border-b-0"
        >
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-ink outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:py-6 sm:text-base [&::-webkit-details-marker]:hidden"
          >
            <span className="flex-1">{item.question}</span>
            <ChevronDown
              className="size-4 shrink-0 text-muted-foreground group-open:hidden"
              aria-hidden
            />
            <ChevronUp
              className="hidden size-4 shrink-0 text-muted-foreground group-open:block"
              aria-hidden
            />
          </summary>
          <div className="pb-5 text-sm leading-relaxed text-muted-yc sm:pb-6">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
