"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import {
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
  PRIMARY_WHATSAPP_HREF,
  HOTLINE_PHONE_DISPLAY,
  HOTLINE_PHONE_HREF,
  HOTLINE_WHATSAPP_HREF,
  SECONDARY_PHONE_DISPLAY,
  SECONDARY_PHONE_HREF,
  SECONDARY_WHATSAPP_HREF,
} from "@/lib/data/contact";
import { cn } from "@/lib/utils";

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <div
        className={cn(
          "origin-bottom-right transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        )}
        aria-hidden={!open}
      >
        <div
          className="mb-2 w-72 rounded-xl border border-line bg-white p-4 shadow-xl sm:w-80"
          role="dialog"
          aria-label="Contact YC Events"
        >
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-ink">LED wall rental quote</p>
              <p className="mt-0.5 text-xs text-muted-yc">
                WhatsApp or call either line. Quote in 60 minutes.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded p-1 text-muted-yc hover:bg-surface hover:text-ink"
              aria-label="Close contact menu"
            >
              <X className="size-4" />
            </button>
          </div>

          <ul className="flex flex-col gap-2">
            <li>
              <a
                href={PRIMARY_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-whatsapp/10 px-3 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-whatsapp/15"
              >
                <MessageCircle className="size-4 text-whatsapp shrink-0" />
                WhatsApp {PRIMARY_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={SECONDARY_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-whatsapp/10 px-3 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-whatsapp/15"
              >
                <MessageCircle className="size-4 text-whatsapp shrink-0" />
                WhatsApp {SECONDARY_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={HOTLINE_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-whatsapp/10 px-3 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-whatsapp/15"
              >
                <MessageCircle className="size-4 text-whatsapp shrink-0" />
                WhatsApp hotline {HOTLINE_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={PRIMARY_PHONE_HREF}
                className="flex items-center gap-3 rounded-lg border border-line px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <Phone className="size-4 shrink-0" />
                Call {PRIMARY_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={SECONDARY_PHONE_HREF}
                className="flex items-center gap-3 rounded-lg border border-line px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <Phone className="size-4 shrink-0" />
                Call {SECONDARY_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={HOTLINE_PHONE_HREF}
                className="flex items-center gap-3 rounded-lg border border-line px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <Phone className="size-4 shrink-0" />
                Hotline {HOTLINE_PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
        aria-label={open ? "Close WhatsApp contact menu" : "Open WhatsApp contact menu"}
        aria-expanded={open}
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <MessageCircle className="size-7" />
        )}
      </button>
    </div>
  );
}
