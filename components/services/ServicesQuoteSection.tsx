"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactMethodList from "@/components/shared/ContactMethod";
import FormField, { LightInputClass } from "@/components/shared/FormField";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  EmptyQuoteForm,
  QuoteAudienceOptions,
  QuoteServiceOptions,
} from "@/lib/data/home";
import {
  ServicesQuoteContacts,
  ServicesQuoteContentData,
} from "@/lib/data/services";
import { cn } from "@/lib/utils";
import type { QuoteFormValues, ServicesQuoteContent } from "@/types/site";

interface ServicesQuoteSectionProps {
  content?: ServicesQuoteContent;
  className?: string;
  onSubmit?: (values: QuoteFormValues) => void;
}

export function ServicesQuoteSection({
  content = ServicesQuoteContentData,
  className,
  onSubmit,
}: ServicesQuoteSectionProps) {
  const [form, setForm] = useState<QuoteFormValues>(EmptyQuoteForm);

  const updateField = <K extends keyof QuoteFormValues>(
    key: K,
    value: QuoteFormValues[K]
  ) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(form);
    setForm(EmptyQuoteForm);
  };

  return (
    <section
      aria-labelledby="services-quote-heading"
      className={cn("bg-surface px-4 py-16 sm:px-8 lg:px-16", className)}
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={
              <h2 id="services-quote-heading">
                {content.titleLine1}
                <br />
                {content.titleLine2}
                <br />
                <span className="text-muted-yc">{content.titleMuted}</span>
              </h2>
            }
            description={content.description}
          />
          <ContactMethodList
            items={ServicesQuoteContacts}
            className="mt-8 w-full"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-line bg-white p-6 sm:p-10"
          aria-label="Service enquiry form"
          noValidate
        >
          <div className="flex flex-col gap-4">
            <FormField label="Your name" htmlFor="svc-name">
              <input
                id="svc-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                required
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className={LightInputClass}
              />
            </FormField>

            <FormField label="Service needed" htmlFor="svc-service">
              <select
                id="svc-service"
                name="service"
                required
                value={form.service}
                onChange={(e) => updateField("service", e.target.value)}
                className={LightInputClass}
              >
                <option value="">Select a service</option>
                {QuoteServiceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </FormField>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Event date" htmlFor="svc-date">
                <input
                  id="svc-date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  className={LightInputClass}
                />
              </FormField>

              <FormField label="Venue / location" htmlFor="svc-venue">
                <input
                  id="svc-venue"
                  name="venue"
                  type="text"
                  placeholder="Venue or city"
                  value={form.venue}
                  onChange={(e) => updateField("venue", e.target.value)}
                  className={LightInputClass}
                />
              </FormField>
            </div>

            <FormField label="Audience size" htmlFor="svc-audience">
              <select
                id="svc-audience"
                name="audience"
                value={form.audience}
                onChange={(e) => updateField("audience", e.target.value)}
                className={LightInputClass}
              >
                <option value="">Select audience size</option>
                {QuoteAudienceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="Tell us more" htmlFor="svc-message">
              <textarea
                id="svc-message"
                name="message"
                rows={4}
                placeholder="Wall size, event type, special requirements..."
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className={cn(LightInputClass, "h-auto resize-y py-3")}
              />
            </FormField>

            <Button
              type="submit"
              className="h-13 w-full bg-brand text-white hover:bg-brand-dark"
            >
              Send Enquiry
              <ArrowRight className="size-4" aria-hidden />
            </Button>

            <p className="text-center text-xs text-muted-yc">
              Quote within 60 minutes during business hours.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}