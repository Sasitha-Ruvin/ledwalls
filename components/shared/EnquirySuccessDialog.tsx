"use client";

import { CheckCircle2, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_WHATSAPP_HREF,
} from "@/lib/data/contact";
import { cn } from "@/lib/utils";

interface EnquirySuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
}

export function EnquirySuccessDialog({
  open,
  onOpenChange,
  className,
}: EnquirySuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "gap-0 overflow-hidden border border-line bg-white p-0 sm:max-w-md",
          className
        )}
      >
        <div className="bg-brand px-6 py-8 text-center text-white">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-white/15">
            <CheckCircle2 className="size-8" aria-hidden />
          </div>
          <DialogTitle className="text-2xl font-extrabold tracking-tight text-white">
            Enquiry sent successfully
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm text-white/75">
            Thank you. Our team has your event details and will reply with an
            itemised quote within 60 minutes during business hours.
          </DialogDescription>
        </div>

        <div className="space-y-4 px-6 py-6">
          <div className="flex items-start gap-3 rounded-lg bg-surface p-4">
            <Clock className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-ink">What happens next?</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-yc">
                We review your wall size, location and services, then send a
                detailed quote by email or WhatsApp. No hidden costs.
              </p>
            </div>
          </div>

          <a
            href={PRIMARY_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <MessageCircle className="size-4 text-whatsapp" aria-hidden />
            WhatsApp us on {PRIMARY_PHONE_DISPLAY}
          </a>

          <Button
            type="button"
            onClick={() => onOpenChange(false)}
            className="h-11 w-full rounded-lg bg-brand font-semibold text-white hover:bg-brand-dark"
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
