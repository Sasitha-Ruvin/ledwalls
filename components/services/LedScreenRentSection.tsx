import Link from "next/link";
import { ArrowRight } from "lucide-react";
import QuoteDialog from "@/components/layout/QuoteDialog";
import { FaqList } from "@/components/shared/FaqList";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildLedScreenRentSchema } from "@/lib/data/services";
import type { FaqItem } from "@/types/site";

const LedScreenRentFaqs: FaqItem[] = [
  {
    question: "How much does it cost to rent an LED screen in Sri Lanka?",
    answer:
      "LED screen rent starts from LKR 55,000 per 8-hour business day for a 10×8 ft screen. Final LED screen rental Sri Lanka pricing depends on size, pixel pitch and indoor vs outdoor use. See the rate table below or our pricing page for exact figures.",
  },
  {
    question: "Do you provide island-wide LED screen delivery?",
    answer:
      "Yes. LED screen hire Sri Lanka bookings are delivered, rigged and operated in all 25 districts, from rent LED screen Colombo jobs to outstation venues in Kandy, Galle and Jaffna.",
  },
  {
    question: "What's the difference between LED wall rental and LED screen rental?",
    answer:
      "None technically. LED wall rental, LED screen rental Sri Lanka and LED video wall rent Sri Lanka all describe the same product: modular LED panels assembled into one display, with the same panels, operator and setup either way.",
  },
  {
    question: "Can I rent an LED screen in Colombo for a single day event?",
    answer:
      "Yes. Rent LED screen Colombo bookings are quoted per 8-hour business day, ideal for one-day corporate events, product launches and single-night wedding functions.",
  },
];

export function LedScreenRentSection() {
  return (
    <section
      aria-labelledby="led-screen-rent-heading"
      className="bg-surface px-4 py-16 sm:px-8 sm:py-20 lg:px-16"
    >
      <JsonLd data={buildLedScreenRentSchema()} id="json-ld-led-screen-rent" />

      <div className="mx-auto max-w-3xl">
        <h2
          id="led-screen-rent-heading"
          className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
        >
          LED Screen Rent in Sri Lanka
        </h2>

        <p className="mt-5 text-base leading-relaxed text-muted-yc">
          Looking to rent an LED screen in Sri Lanka for your next event? YC
          Events provides full-service LED screen rental across Colombo and
          island-wide — from small indoor displays for corporate meetings to
          large outdoor LED walls for concerts, weddings and exhibitions.
          Whether you search for LED screen rental Sri Lanka, LED screen hire
          Sri Lanka, or rent LED screen Colombo, it is the same island-wide
          service and crew.
        </p>

        <p className="mt-4 text-base leading-relaxed text-muted-yc">
          Every LED screen rent package includes:
        </p>

        <ul className="mt-4 space-y-2.5 text-base leading-relaxed text-muted-yc">
          <li className="flex gap-3">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
            Delivery, setup, and breakdown handled by our technical team
          </li>
          <li className="flex gap-3">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
            On-site operator for the full duration of your event
          </li>
          <li className="flex gap-3">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
            P2, P2.5, P3, and P4 pixel pitch options depending on viewing
            distance and budget
          </li>
          <li className="flex gap-3">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
            Video processor, power distribution, and rigging included
          </li>
          <li className="flex gap-3">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
            Island-wide service, based in Colombo
          </li>
        </ul>

        <p className="mt-5 text-base leading-relaxed text-muted-yc">
          Whether you need an LED screen rental for a wedding stage backdrop,
          a corporate product launch, or an outdoor concert, our team can
          recommend the right pixel pitch and LED video wall rent size for
          your venue.{" "}
          <Link
            href="#service-pricing-heading"
            className="font-semibold text-brand underline-offset-4 hover:underline"
          >
            See LED screen rent pricing
          </Link>{" "}
          or get a quote for LED screen hire in Sri Lanka today.
        </p>

        <div className="mt-6">
          <QuoteDialog
            triggerClassName="h-11 rounded bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Get a quote
            <ArrowRight className="size-4" aria-hidden />
          </QuoteDialog>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-bold text-ink">
            LED screen rent, quick answers
          </h3>
          <FaqList
            items={LedScreenRentFaqs}
            listId="led-screen-rent-faq-list"
            className="mt-3"
          />
        </div>
      </div>
    </section>
  );
}
