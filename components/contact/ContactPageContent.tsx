import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import TickerBar from "@/components/home/TickerBar";
import { ContactEnquiryForm } from "@/components/contact/ContactEnquiryForm";
import {
  ContactBusinessHours,
  ContactCoverageContent,
  ContactDirectIntro,
  ContactHeroContent,
  ContactOfficeContent,
  ContactPageMethods,
  ContactResponseTimes,
} from "@/lib/data/contact-page";
import { OFFICE_MAP_EMBED_URL } from "@/lib/data/contact";
import { cn } from "@/lib/utils";

export function ContactPageContent() {
  return (
    <>
      <section
        aria-labelledby="contact-hero-heading"
        className="flex min-h-[28vh] flex-col bg-ink lg:flex-row lg:items-center lg:min-h-[220px]"
      >
        <div className="flex flex-1 flex-col justify-center px-4 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
          <p className="mb-3 text-xs font-medium tracking-widest text-brand uppercase">
            {ContactHeroContent.eyebrow}
          </p>
          <h1
            id="contact-hero-heading"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-none"
          >
            {ContactHeroContent.title}
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-yc sm:text-base">
            {ContactHeroContent.description}
          </p>
        </div>

        <div className="flex shrink-0 justify-end px-4 pb-10 sm:px-8 lg:px-16 lg:pb-0">
          <div
            className="w-full max-w-xs rounded-lg border border-ink-soft bg-ink-soft p-6 sm:max-w-sm"
            aria-label="Typical response times"
          >
            <p className="text-sm font-semibold text-white">
              Typical response times
            </p>
            <ul className="mt-4 space-y-3">
              {ContactResponseTimes.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-brand"
                    aria-hidden
                  />
                  <span className="text-sm text-muted-yc">
                    <span className="font-medium text-white">{item.label}</span>
                    {" · "}
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TickerBar />

      <section
        aria-labelledby="contact-main-heading"
        className="bg-white px-4 py-14 sm:px-8 sm:py-20 lg:px-16"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-0">
          <div className="lg:pr-12">
            <h2
              id="contact-main-heading"
              className="text-2xl font-bold tracking-tight text-ink"
            >
              {ContactDirectIntro.title}
            </h2>

            <ul className="mt-6 flex flex-col gap-2.5">
              {ContactPageMethods.map((method) => {
                const Icon = method.icon;
                const external = method.href.startsWith("http");
                return (
                  <li key={method.id}>
                    <a
                      href={method.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex h-[4.25rem] items-center gap-3.5 rounded-lg border border-ink-soft bg-ink px-5 transition-colors hover:border-brand"
                    >
                      <Icon
                        className={cn("size-5 shrink-0", method.iconClassName)}
                        aria-hidden
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white">
                          {method.label}
                        </p>
                        <p className="truncate text-sm text-muted-yc">
                          {method.detail}
                        </p>
                      </div>
                      <ChevronRight
                        className="size-4 shrink-0 text-white/30 transition-colors group-hover:text-white/60"
                        aria-hidden
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-muted-yc">
              {ContactDirectIntro.hint}
            </p>

            <div className="mt-6 rounded-lg bg-surface p-6">
              <p className="text-sm font-semibold text-ink">Business hours</p>
              <ul className="mt-3 space-y-2">
                {ContactBusinessHours.map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-2.5 text-sm text-muted-yc"
                  >
                    <span
                      className="size-1 shrink-0 rounded-full bg-brand"
                      aria-hidden
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-lg border border-line bg-surface p-6">
              <p className="text-xs font-medium tracking-widest text-brand uppercase">
                {ContactOfficeContent.eyebrow}
              </p>
              <p className="mt-2 font-semibold text-ink">
                {ContactOfficeContent.title}
              </p>
              <p className="mt-2 flex gap-2 text-sm leading-relaxed text-muted-yc">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                {ContactOfficeContent.address}
              </p>
              <Link
                href={ContactOfficeContent.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
              >
                {ContactOfficeContent.directionsLabel}
                <ChevronRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="border-t border-line pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
            <ContactEnquiryForm />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-map-heading"
        className="grid min-h-[30rem] grid-cols-1 bg-surface lg:grid-cols-2"
      >
        <div className="relative min-h-80 border-b border-line lg:min-h-[30rem] lg:border-b-0 lg:border-r">
          <iframe
            src={OFFICE_MAP_EMBED_URL}
            title="YC Events office location, Yasitha Creations Kandy Sri Lanka"
            className="absolute inset-0 size-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="flex flex-col justify-center px-4 py-12 sm:px-10 sm:py-16 lg:px-14">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-0.5 w-7 bg-brand" aria-hidden />
            <p className="text-xs font-medium tracking-widest text-muted-yc uppercase">
              {ContactCoverageContent.eyebrow}
            </p>
          </div>
          <h2
            id="contact-map-heading"
            className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {ContactCoverageContent.title}
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-yc sm:text-base">
            {ContactCoverageContent.description}
          </p>
          <ul
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Districts we serve"
          >
            {ContactCoverageContent.districts.map((district) => (
              <li key={district}>
                <span className="inline-flex rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink">
                  {district}
                </span>
              </li>
            ))}
            {ContactCoverageContent.highlightLabel ? (
              <li>
                <span className="inline-flex rounded-full border border-brand bg-white px-3.5 py-1.5 text-sm font-medium text-brand">
                  {ContactCoverageContent.highlightLabel}
                </span>
              </li>
            ) : null}
          </ul>
        </div>
      </section>
    </>
  );
}
