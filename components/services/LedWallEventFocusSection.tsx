import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  IndoorLedWallEvents,
  LedWallEventFocusIntro,
  OutdoorLedWallEvents,
} from "@/lib/data/services";
import type { LedWallEventCard } from "@/types/site";

function EventCard({ event }: { event: LedWallEventCard }) {
  return (
    <Link
      href={event.href}
      className="group relative block min-h-56 overflow-hidden rounded-lg sm:min-h-64"
    >
      <Image
        src={event.img}
        alt={`LED wall rental for ${event.title} in Sri Lanka`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-lg font-bold text-white">{event.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-white/75">
          {event.description}
        </p>
      </div>
    </Link>
  );
}

export function LedWallEventFocusSection() {
  return (
    <section
      aria-labelledby="led-wall-event-focus-heading"
      className="bg-ink px-4 py-16 sm:px-8 sm:py-20 lg:px-16"
    >
      <SectionHeading
        eyebrow={LedWallEventFocusIntro.eyebrow}
        title={
          <h2 id="led-wall-event-focus-heading" className="text-3xl sm:text-4xl">
            {LedWallEventFocusIntro.title}
          </h2>
        }
        description={LedWallEventFocusIntro.description}
        tone="dark"
        className="max-w-2xl"
      />

      <div className="mt-12">
        <div className="mb-5 flex items-center gap-3">
          <span className="rounded bg-brand/15 px-3 py-1 text-xs font-bold tracking-wide text-brand uppercase">
            Indoor, P3
          </span>
          <p className="text-sm text-white/60">
            Fine-pitch panels for close viewing distances
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IndoorLedWallEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-5 flex items-center gap-3">
          <span className="rounded bg-brand/15 px-3 py-1 text-xs font-bold tracking-wide text-brand uppercase">
            Outdoor, P4, IP65
          </span>
          <p className="text-sm text-white/60">
            Weatherproof panels for daylight and open ground events
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OutdoorLedWallEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/services/led-wall"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-opacity hover:opacity-80"
        >
          Full LED wall rental details
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
