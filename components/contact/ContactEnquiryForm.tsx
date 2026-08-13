"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ChipToggleGroup from "@/components/shared/ChipToggleGroup";
import { EnquirySuccessDialog } from "@/components/shared/EnquirySuccessDialog";
import FormField, { LightInputClass } from "@/components/shared/FormField";
import { Button } from "@/components/ui/button";
import {
  ContactEventTypeOptions,
  ContactFormIntro,
} from "@/lib/data/contact-page";
import {
  EmptyQuoteForm,
  QuoteAudienceOptions,
  QuoteNeedOptions,
} from "@/lib/data/home";
import { submitEnquiry } from "@/lib/submit-enquiry";
import { cn } from "@/lib/utils";
import type { QuoteFormValues } from "@/types/site";

export function ContactEnquiryForm() {
  const [form, setForm] = useState<QuoteFormValues>(EmptyQuoteForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successOpen, setSuccessOpen] = useState(false);

  const updateField = <K extends keyof QuoteFormValues>(
    key: K,
    value: QuoteFormValues[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await submitEnquiry(form, "contact-page");
      setForm(EmptyQuoteForm);
      setSuccessOpen(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-ink">
          {ContactFormIntro.title}
        </h2>
        <p className="mt-2 text-sm text-muted-yc">{ContactFormIntro.description}</p>

        <form
          className="mt-7 flex flex-col gap-4 sm:gap-5"
          onSubmit={handleSubmit}
        >
          <FormField
            label="Your name"
            labelClassName="normal-case tracking-normal text-ink"
          >
            <input
              className={LightInputClass}
              placeholder="Full name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              required
              disabled={isSubmitting}
            />
          </FormField>

          <FormField
            label="Contact number"
            labelClassName="normal-case tracking-normal text-ink"
          >
            <input
              type="tel"
              className={LightInputClass}
              placeholder="07X XXX XXXX"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              required
              disabled={isSubmitting}
            />
          </FormField>

          <FormField
            label="Event type"
            labelClassName="normal-case tracking-normal text-ink"
          >
            <select
              className={LightInputClass}
              value={form.service}
              onChange={(e) => updateField("service", e.target.value)}
              required
              disabled={isSubmitting}
            >
              <option value="">Select event type</option>
              {ContactEventTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FormField>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              label="Event date"
              labelClassName="normal-case tracking-normal text-ink"
            >
              <input
                type="date"
                className={LightInputClass}
                value={form.date}
                onChange={(e) => updateField("date", e.target.value)}
                disabled={isSubmitting}
              />
            </FormField>
            <FormField
              label="Location"
              labelClassName="normal-case tracking-normal text-ink"
            >
              <input
                className={LightInputClass}
                placeholder="e.g. BMICH, Colombo"
                value={form.venue}
                onChange={(e) => updateField("venue", e.target.value)}
                disabled={isSubmitting}
              />
            </FormField>
          </div>

          <FormField
            label="Audience size"
            labelClassName="normal-case tracking-normal text-ink"
          >
            <select
              className={LightInputClass}
              value={form.audience}
              onChange={(e) => updateField("audience", e.target.value)}
              disabled={isSubmitting}
            >
              <option value="">Select audience size</option>
              {QuoteAudienceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FormField>

          <div>
            <span className="mb-2.5 block text-sm font-medium text-ink">
              What do you need?
            </span>
            <ChipToggleGroup
              options={QuoteNeedOptions}
              value={form.needs}
              onChange={(needs) => updateField("needs", needs)}
            />
          </div>

          <FormField
            label="Tell us more"
            labelClassName="normal-case tracking-normal text-ink"
          >
            <textarea
              rows={4}
              className={cn(LightInputClass, "h-auto resize-y py-3")}
              placeholder="Wall size, event type, any special requirements..."
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              disabled={isSubmitting}
            />
          </FormField>

          {error ? (
            <p className="rounded-lg border border-brand/30 bg-brand/5 px-4 py-3 text-sm text-brand">
              {error}
            </p>
          ) : null}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 rounded-lg bg-brand text-base font-semibold text-white hover:bg-brand-dark sm:h-[52px]"
          >
            {isSubmitting ? "Sending..." : ContactFormIntro.submitLabel}
            {!isSubmitting ? <ArrowRight className="size-4" aria-hidden /> : null}
          </Button>
          <p className="text-center text-xs text-muted-yc">
            {ContactFormIntro.submitNote}
          </p>
        </form>
      </div>

      <EnquirySuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
    </>
  );
}
