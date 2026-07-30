"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ChipToggleGroup from "@/components/shared/ChipToggleGroup";
import { EnquirySuccessDialog } from "@/components/shared/EnquirySuccessDialog";
import FormField, { DarkInputClass } from "@/components/shared/FormField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  EmptyQuoteForm,
  QuoteAudienceOptions,
  QuoteNeedOptions,
  QuoteServiceOptions,
} from "@/lib/data/home";
import { QuoteDialogContacts } from "@/lib/data/contact";
import { submitEnquiry } from "@/lib/submit-enquiry";
import { cn } from "@/lib/utils";
import type { QuoteFormValues } from "@/types/site";

interface QuoteDialogProps {
  children: React.ReactNode;
  triggerClassName?: string;
  /** Use a plain `<button>` instead of the shadcn `Button` (for custom card/link triggers). */
  nativeTrigger?: boolean;
  onSubmit?: (values: QuoteFormValues) => void;
}

const SidebarContacts = QuoteDialogContacts;

export default function QuoteDialog({
  children,
  triggerClassName,
  nativeTrigger = false,
  onSubmit,
}: QuoteDialogProps) {
  const [open, setOpen] = useState(false);
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
      await submitEnquiry(form, "quote-dialog");
      onSubmit?.(form);
      setForm(EmptyQuoteForm);
      setOpen(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          nativeTrigger ? (
            <button type="button" className={cn(triggerClassName)} />
          ) : (
            <Button className={cn(triggerClassName)} />
          )
        }
      >
        {children}
      </DialogTrigger>

      <DialogContent
        className={cn(
          "max-h-dvh gap-0 overflow-hidden border border-white/10 bg-ink p-0 sm:max-w-4xl",
          "[&_[data-slot=dialog-close]]:text-white"
        )}
      >
        <div className="flex max-h-dvh flex-col md:flex-row">
          <aside className="hidden w-full shrink-0 flex-col justify-between bg-brand p-8 text-white md:flex md:w-2/5 md:p-10">
            <div>
              <p className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                Get a quote in 60 minutes
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Tell us about your event. We&apos;ll come back with an itemised
                quote with equipment, crew, transport, setup and breakdown.
              </p>
            </div>
            <div className="mt-10 space-y-4">
              {SidebarContacts.map((item) => {
                const Icon = item.icon;
                const row = (
                  <>
                    <div className="flex size-9 items-center justify-center rounded-lg bg-white/15">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{item.label}</div>
                      <div className="text-xs text-white/60">{item.detail}</div>
                    </div>
                  </>
                );

                if (item.href) {
                  const external = item.href.startsWith("http");
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-lg transition-colors hover:bg-white/10"
                    >
                      {row}
                    </a>
                  );
                }

                return (
                  <div key={item.id} className="flex items-center gap-3">
                    {row}
                  </div>
                );
              })}
            </div>
          </aside>

          <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10">
            <DialogHeader className="mb-6 sm:mb-8">
              <DialogTitle className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Your Event Details
              </DialogTitle>
            </DialogHeader>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <FormField label="Your Name">
                <input
                  className={DarkInputClass}
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </FormField>

              <FormField label="Service Needed">
                <select
                  className={DarkInputClass}
                  value={form.service}
                  onChange={(e) => updateField("service", e.target.value)}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select a Service</option>
                  {QuoteServiceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </FormField>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <FormField label="Event date">
                  <input
                    type="date"
                    className={DarkInputClass}
                    value={form.date}
                    onChange={(e) => updateField("date", e.target.value)}
                  />
                </FormField>
                <FormField label="Venue / Location">
                  <input
                    className={DarkInputClass}
                    placeholder="e.g. BMICH Colombo"
                    value={form.venue}
                    onChange={(e) => updateField("venue", e.target.value)}
                  />
                </FormField>
              </div>

              <FormField label="Audience Size">
                <select
                  className={DarkInputClass}
                  value={form.audience}
                  onChange={(e) => updateField("audience", e.target.value)}
                >
                  <option value="">Select Audience Size</option>
                  {QuoteAudienceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </FormField>

              <div>
                <span className="mb-2.5 block text-xs font-medium tracking-wider text-muted-yc uppercase">
                  What do you need?
                </span>
                <ChipToggleGroup
                  options={QuoteNeedOptions}
                  value={form.needs}
                  onChange={(needs) => updateField("needs", needs)}
                />
              </div>

              <FormField label="Tell us more">
                <textarea
                  rows={3}
                  className={cn(DarkInputClass, "h-auto resize-none py-3")}
                  placeholder="Wall size, special requirements..."
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                />
              </FormField>

              {error ? (
                <p className="rounded-lg border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand">
                  {error}
                </p>
              ) : null}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 h-12 rounded-lg bg-brand text-sm font-bold text-white hover:bg-brand-dark sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Send My Enquiry"}
                {!isSubmitting ? <ArrowRight className="size-4" /> : null}
              </Button>
              <p className="text-center text-xs text-muted-yc">
                Itemised quote within 60 minutes · 9am-8pm daily
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    <EnquirySuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
    </>
  );
}
