import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceDetailData } from "@/types/site";

interface OtherServicesStripProps {
  services: ServiceDetailData[];
}

export function OtherServicesStrip({ services }: OtherServicesStripProps) {
  return (
    <section
      aria-labelledby="other-services-heading"
      className="bg-surface px-4 py-14 sm:px-8 sm:py-16 lg:px-16"
    >
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-xs font-medium tracking-widest text-brand uppercase">
          Available with any LED wall booking
        </p>
        <h2
          id="other-services-heading"
          className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
        >
          Add-ons for your event.
        </h2>
      </div>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <li key={service.id}>
              <Link
                href={service.href}
                className="group flex h-full flex-col justify-between gap-4 rounded-lg border border-line bg-white p-5 transition-colors hover:border-brand"
              >
                <div>
                  <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-brand/10">
                    <Icon className="size-4 text-brand" aria-hidden />
                  </div>
                  <p className="font-bold text-ink">{service.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-yc">
                    {service.sub}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand">
                  Details
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
