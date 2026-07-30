import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceCardData } from "@/types/site";

interface ServiceCardProps extends ServiceCardData {
  className?: string;
}

export function ServiceCard({
  num,
  title,
  sub,
  img,
  href,
  icon: Icon,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block min-h-72 overflow-hidden md:min-h-80 lg:h-full lg:min-h-0",
        className
      )}
    >
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-ink/50 transition-colors duration-300 group-hover:bg-ink/70" />

      <div className="absolute top-5 left-5 flex items-center gap-2 sm:top-6 sm:left-6">
        <div className="flex size-8 items-center justify-center rounded border border-white/10 bg-ink/65">
          <Icon className="size-4 text-brand" />
        </div>
        <span className="text-xs font-bold text-brand">{num}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/95 to-transparent px-5 pt-10 pb-5 sm:px-6 sm:pb-6">
        <h3 className="mb-1 text-xl font-bold text-white sm:text-2xl">{title}</h3>
        <p className="text-xs text-white/50 transition-all group-hover:mb-3">
          {sub}
        </p>
        <div className="flex max-h-0 items-center gap-1.5 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-8 group-hover:opacity-100">
          <span className="text-xs font-semibold text-brand">Learn more</span>
          <ArrowRight className="size-3 text-brand" />
        </div>
      </div>
    </Link>
  );
}