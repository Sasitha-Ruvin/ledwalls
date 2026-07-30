import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SpecTable } from "@/components/shared/SpecTable";
import { cn } from "@/lib/utils";
import type { ServiceDetailData } from "@/types/site";

interface ServiceDetailRowProps extends ServiceDetailData {
  reverse?: boolean;
}

export default function ServiceDetailsRow({
  num,
  title,
  sub,
  body,
  img,
  href,
  cta,
  icon: Icon,
  specs,
  tone,
  reverse = false,
}: ServiceDetailRowProps) {
  const isDark = tone === "dark";

  return (
    <section
      aria-labelledby={`service-${num}`}
      className="grid grid-cols-1 lg:min-h-[32rem] lg:grid-cols-2"
    >
      <div
        className={cn(
          "relative min-h-72 lg:min-h-full",
          reverse ? "lg:order-2" : "lg:order-1"
        )}
      >
        <Image
          src={img}
          alt={`${title} in Sri Lanka, YC Events`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div
        className={cn(
          "flex flex-col justify-center px-4 py-12 sm:px-8 sm:py-16 lg:px-16",
          isDark ? "bg-ink text-white" : "bg-surface text-ink",
          reverse ? "lg:order-1" : "lg:order-2"
        )}
      >
        <div className="mb-4 flex items-center gap-2.5">
          <div
            className={cn(
              "flex size-9 items-center justify-center rounded-lg",
              isDark ? "bg-ink-soft" : "bg-brand/10"
            )}
          >
            <Icon
              className={cn("size-5", isDark ? "text-white" : "text-brand")}
              aria-hidden
            />
          </div>
          <span className="text-sm font-bold text-brand">{num}</span>
        </div>

        <h2
          id={`service-${num}`}
          className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        <p className="mb-5 text-sm text-muted-yc sm:text-base">{sub}</p>
        <p className="mb-7 text-sm leading-relaxed text-muted-yc sm:text-base">
          {body}
        </p>

        <SpecTable specs={specs} tone={isDark ? "dark" : "light"} />

        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-opacity hover:opacity-80"
        >
          {cta}
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
