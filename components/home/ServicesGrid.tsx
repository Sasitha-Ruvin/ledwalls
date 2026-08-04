import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HomeServices, ServicesIntro } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import { SectionIntro, ServiceCardData } from "@/types/site";
import { SectionHeading } from "../shared/SectionHeading";
import { Button } from "../ui/button";

interface ServiceGridProps {
  services?: ServiceCardData[];
  intro?: SectionIntro;
  className?: string;
}

const ServicesGrid = ({
  services = HomeServices,
  intro = ServicesIntro,
  className,
}: ServiceGridProps) => {
  const [ledWall, ...otherServices] = services;
  const LedIcon = ledWall?.icon;

  return (
    <section
      className={cn(
        "bg-ink px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24",
        className
      )}
    >
      <div className="mb-8 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          tone="dark"
          eyebrow={intro.eyebrow}
          title={
            <>
              {intro.titleLine1}
              <br />
              <span className={intro.titleLine2Muted ? "text-white/20" : undefined}>
                {intro.titleLine2}
              </span>
            </>
          }
          description={intro.description}
        />
        {intro.ctaHref && intro.ctaLabel ? (
          <Button
            nativeButton={false}
            render={<Link href={intro.ctaHref} />}
            variant="outline"
            className="h-9 w-full rounded border-ink-soft text-sm text-muted-yc hover:border-brand hover:text-white sm:w-auto sm:inline-flex"
          >
            {intro.ctaLabel} <ArrowUpRight className="size-3.5" />
          </Button>
        ) : null}
      </div>

      {ledWall ? (
        <Link
          href={ledWall.href}
          className="group relative mb-4 block min-h-96 overflow-hidden rounded-lg sm:min-h-[28rem]"
        >
          <Image
            src={ledWall.img}
            alt="LED wall rental on concert stage in Sri Lanka, P3 indoor and P4 outdoor screens"
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/40 to-ink/10" />

          <div className="absolute top-6 left-6 flex items-center gap-2 sm:top-8 sm:left-8">
            <div className="flex size-9 items-center justify-center rounded border border-white/10 bg-ink/65">
              {LedIcon ? <LedIcon className="size-4.5 text-brand" /> : null}
            </div>
            <span className="text-xs font-bold text-brand">{ledWall.num}</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {ledWall.title}
            </h3>
            <p className="mt-2 max-w-md text-sm text-white/70 sm:text-base">
              {ledWall.sub}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 rounded bg-brand px-4 py-2 text-sm font-semibold text-white transition-opacity group-hover:opacity-90">
              View LED wall hire
              <ArrowRight className="size-4" aria-hidden />
            </span>
          </div>
        </Link>
      ) : null}

      {otherServices.length ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
          {otherServices.map((service) => {
            const ServiceIcon = service.icon;
            return (
            <Link
              key={service.num}
              href={service.href}
              className="group flex flex-col justify-between gap-4 rounded-lg border border-ink-soft bg-white/[0.03] p-4 transition-colors hover:border-brand/50 sm:p-5"
            >
              <div className="flex size-8 items-center justify-center rounded bg-white/5">
                <ServiceIcon className="size-4 text-brand" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{service.title}</p>
                <p className="mt-0.5 text-xs text-white/40">{service.sub}</p>
              </div>
            </Link>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default ServicesGrid;
