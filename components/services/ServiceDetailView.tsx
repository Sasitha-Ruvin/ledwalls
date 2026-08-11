import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TickerBar from "@/components/home/TickerBar";
import QuoteDialog from "@/components/layout/QuoteDialog";
import { PageHero } from "@/components/shared/PageHero";
import { FaqList } from "@/components/shared/FaqList";
import { SpecTable } from "@/components/shared/SpecTable";
import { Button } from "@/components/ui/button";
import { LED_WALL_SERVICE_ID, LED_WALL_SERVICE_HREF, ServicesList, LedWallAddonServices } from "@/lib/data/services";
import { LedWallPortfolioIntro } from "@/lib/data/led-wall-portfolio";
import { LedWallServicePricingSection } from "@/components/pricing/LedWallServicePricingSection";
import { LedScreenRentSection } from "@/components/services/LedScreenRentSection";
import { LedWallCityLinks } from "@/components/services/LedWallCityLinks";
import { OtherServicesStrip } from "@/components/services/OtherServicesStrip";
import type { ServiceDetailData } from "@/types/site";
import { ServicePortfolioGallery } from "@/components/services/ServicePortfolioGallery";

interface ServiceDetailViewProps {
  service: ServiceDetailData;
}

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const related = ServicesList.filter((item) => item.id !== service.id).slice(
    0,
    3
  );

  return (
    <>
      <PageHero
        imageSrc={service.img}
        imageAlt={`${service.seo.h1}, YC Events Sri Lanka`}
        eyebrow={service.sub}
        title={service.seo.h1}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        minHeightClass="min-h-[24rem] sm:min-h-[28rem] lg:min-h-[32rem]"
      />

      <TickerBar />

      <section
        aria-labelledby="service-about-heading"
        className="bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-16"
      >
        <div className="grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-2">
          <h2
            id="service-about-heading"
            className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
          >
            About this service
          </h2>
          <h3
            className="text-sm font-medium tracking-widest text-brand uppercase lg:text-right"
          >
            Specifications
          </h3>
          <p className="text-base leading-relaxed text-muted-yc">
            {service.body}
          </p>
          <div>
            <SpecTable specs={service.specs} className="mb-6" />
            <QuoteDialog
              triggerClassName="h-11 rounded bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Get an itemised quote
              <ArrowRight className="size-4" aria-hidden />
            </QuoteDialog>
          </div>
        </div>
      </section>

      {service.id === LED_WALL_SERVICE_ID ? <LedScreenRentSection /> : null}

      {service.id === LED_WALL_SERVICE_ID ? <LedWallServicePricingSection /> : null}

      {service.id === LED_WALL_SERVICE_ID ? (
        <OtherServicesStrip services={LedWallAddonServices} />
      ) : null}

      {service.id === LED_WALL_SERVICE_ID ? <LedWallCityLinks /> : null}

      {service.useCases?.length ? (
        <section
          aria-labelledby="service-use-cases-heading"
          className="bg-surface px-4 py-16 sm:px-8 sm:py-20 lg:px-16"
        >
          <h2
            id="service-use-cases-heading"
            className="mb-8 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Best suited for
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.useCases.map((useCase) => (
              <li
                key={useCase.label}
                className="relative min-h-64 overflow-hidden sm:min-h-72"
              >
                <Image
                  src={useCase.img}
                  alt={`${service.title} for ${useCase.label} in Sri Lanka`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-lg font-bold text-white">{useCase.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">
                    {useCase.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {service.portfolio?.length ? (
        <ServicePortfolioGallery
          items={service.portfolio}
          eyebrow={
            service.id === LED_WALL_SERVICE_ID
              ? LedWallPortfolioIntro.eyebrow
              : "Portfolio"
          }
          title={
            service.id === LED_WALL_SERVICE_ID
              ? LedWallPortfolioIntro.title
              : "Recent work from YC Events"
          }
          description={
            service.id === LED_WALL_SERVICE_ID
              ? LedWallPortfolioIntro.description
              : undefined
          }
        />
      ) : null}

      {service.faqs?.length ? (
        <section
          aria-labelledby="service-faq-heading"
          className="bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-16"
        >
          <h2
            id="service-faq-heading"
            className="mb-8 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
          >
            Common questions
          </h2>
          <FaqList items={service.faqs} listId="service-faq-list" />
        </section>
      ) : null}

      {related.length ? (
        <section
          aria-labelledby="related-services-heading"
          className="bg-ink px-4 py-14 sm:px-8 sm:py-16 lg:px-16"
        >
          <h2
            id="related-services-heading"
            className="mb-8 text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
          >
            Other services from YC Events
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="group relative block min-h-48 overflow-hidden sm:min-h-56"
                >
                  <Image
                    src={item.img}
                    alt={item.seo.h1}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-ink/55 transition-colors group-hover:bg-ink/65" />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/95 to-transparent p-5">
                    <p className="font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-xs text-white/55">{item.sub}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                      Learn more
                      <ArrowRight className="size-3" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section
        aria-labelledby="service-cta-heading"
        className="flex flex-col items-start justify-between gap-6 bg-brand px-4 py-12 sm:flex-row sm:items-center sm:px-8 sm:py-14 lg:px-16"
      >
        <div>
          <h2
            id="service-cta-heading"
            className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
          >
            Ready to book {service.title.toLowerCase()} in Sri Lanka?
          </h2>
          <p className="mt-2 text-sm text-white/75 sm:text-base">
            Island-wide delivery. Itemised quote within 60 minutes.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <QuoteDialog
            triggerClassName="h-12 w-full bg-white px-5 text-sm font-semibold text-brand hover:bg-surface sm:w-auto"
          >
            Get a Quote
            <ArrowRight className="size-4" aria-hidden />
          </QuoteDialog>
          <Button
            nativeButton={false}
            render={<Link href="/services" />}
            variant="outline"
            className="h-12 w-full border-white/30 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
          >
            All Services
          </Button>
        </div>
      </section>
    </>
  );
}
