import { CtaContentData, CtaMethods } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import { ContactMethod, CtaContent } from "@/types/site"
import Image from "next/image";
import { SectionHeading } from "../shared/SectionHeading";
import QuoteDialog from "../layout/QuoteDialog";
import { ChevronRight } from "lucide-react";

interface CtaSectionProps{
    content?:CtaContent;
    methods?:ContactMethod[];
    className?:string;
}
const CtaSection = ({content = CtaContentData, methods= CtaMethods, className}:CtaSectionProps) => {
  return (
    <section className={cn(
        "relative min-h-96 overflow-hidden py-14 sm:py-16 lg:min-h-105 lg:py-0",
        className
    )}>
        <Image
            src={content.imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/88"/>
        <div className="relative z-10 flex h-full flex-col items-start justify-center gap-8 px-4 sm:gap-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-16">
            <SectionHeading
                tone="dark"
                eyebrow={content.eyebrow}
                title={
                    <>
                        {content.titleLine1}
                        <br />
                        {content.titleLine2}
                    </>
                }
                description={content.description}
            />
            <div className="flex w-full max-w-sm flex-col gap-2.5 md:w-80 lg:w-96">
          {methods.map((method) => {
            const Icon = method.icon;
            const isLight = method.variant === "light";
            const itemClass = cn(
              "flex h-16 w-full items-center gap-3.5 rounded-lg border border-white/10 px-5 transition-colors",
              isLight
                ? "bg-white hover:bg-surface"
                : "bg-white/5 hover:bg-white/10"
            );
            const body = (
              <>
                <Icon
                  className={cn(
                    "size-4.5 shrink-0",
                    method.iconClassName ??
                      (isLight ? "text-ink" : "text-white")
                  )}
                />
                <div className="min-w-0 text-left">
                  <div
                    className={cn(
                      "text-sm font-semibold",
                      isLight ? "text-ink" : "text-white"
                    )}
                  >
                    {method.label}
                  </div>
                  <div
                    className={cn(
                      "truncate text-xs",
                      isLight ? "text-muted-yc" : "text-white/40"
                    )}
                  >
                    {method.detail}
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
            if (method.id === "quote") {
              return (
                <QuoteDialog
                  key={method.id}
                  nativeTrigger
                  triggerClassName={itemClass}
                >
                  {body}
                </QuoteDialog>
              );
            }
            return (
              <a key={method.id} href={method.href} className={itemClass}>
                {body}
              </a>
            );
          })}
        </div>
        </div>
    </section>
  )
}

export default CtaSection
