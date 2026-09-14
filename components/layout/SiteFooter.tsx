import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import BrandMark from "@/components/shared/BrandMark";
import {
  FooterBlurb,
  FooterContactLinks,
  FooterCoverage,
  FooterLegal,
  FooterPhoneLines,
  FooterServiceLinks,
} from "@/lib/data/footer";
import { cn } from "@/lib/utils";

interface SiteFooterProps {
  className?: string;
}

export default function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer className={cn("bg-ink text-white", className)}>
      <div className="grid gap-10 px-4 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10 lg:px-16">
        <div>
          <BrandMark variant="footer" className="mb-4 w-fit" />
          <p className="max-w-xs text-sm leading-relaxed text-muted-yc">
            {FooterBlurb}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold tracking-widest text-brand uppercase">
            Services
          </h2>
          <ul className="space-y-2.5">
            {FooterServiceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-yc transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold tracking-widest text-brand uppercase">
            Coverage
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-yc">
            {FooterCoverage.map((place) => {
              const href = "href" in place ? place.href : undefined;
              return (
                <li key={place.label}>
                  {href ? (
                    <Link
                      href={href}
                      className="transition-colors hover:text-white"
                    >
                      {place.label}
                    </Link>
                  ) : (
                    place.label
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold tracking-widest text-brand uppercase">
            Contact
          </h2>
          <ul className="space-y-3">
            {FooterPhoneLines.map((line) => (
              <li key={line.display}>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                  <a
                    href={line.phoneHref}
                    className="inline-flex items-center gap-2 text-muted-yc transition-colors hover:text-white"
                  >
                    <Phone className="size-3.5 shrink-0 text-brand" aria-hidden />
                    {line.tag ? (
                      <>
                        <span className="text-white/55">{line.tag}</span>
                        {line.display}
                      </>
                    ) : (
                      line.display
                    )}
                  </a>
                  <span className="text-white/20" aria-hidden>
                    ·
                  </span>
                  <a
                    href={line.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-whatsapp transition-opacity hover:opacity-80"
                  >
                    <MessageCircle className="size-3.5" aria-hidden />
                    WhatsApp
                  </a>
                </div>
              </li>
            ))}

            {FooterContactLinks.map((item) => {
              const Icon = item.icon;
              const content = (
                <span className="flex items-center gap-2.5 text-sm text-muted-yc">
                  <Icon className="size-3.5 shrink-0 text-brand" aria-hidden />
                  {item.label}
                </span>
              );

              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="transition-colors hover:text-white"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col items-start justify-between gap-4 border-t border-ink-soft px-4 py-5 text-xs text-muted-yc sm:flex-row sm:items-center sm:px-8 lg:px-16"
      >
        <span>{FooterLegal.copyright}</span>
        <div className="flex gap-4">
          {FooterLegal.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
