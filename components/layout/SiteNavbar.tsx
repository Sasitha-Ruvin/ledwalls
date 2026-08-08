"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import BrandMark from "@/components/shared/BrandMark";
import QuoteDialog from "@/components/layout/QuoteDialog";
import {
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_HREF,
  HOTLINE_PHONE_DISPLAY,
  HOTLINE_PHONE_HREF,
  SECONDARY_PHONE_DISPLAY,
  SECONDARY_PHONE_HREF,
} from "@/lib/data/contact";
import { NavLinks } from "@/lib/data/nav";
import { cn } from "@/lib/utils";

interface SiteNavbarProps {
  className?: string;
}

const LINK_DELAYS = [
  "delay-0",
  "delay-75",
  "delay-100",
  "delay-150",
  "delay-200",
  "delay-300",
] as const;

function isLinkActive(pathname: string, href: string, label: string): boolean {
  if (label === "Home") return pathname === "/";
  if (label === "Services") return pathname.startsWith("/services");
  if (label === "Gallery") return pathname.startsWith("/gallery");
  if (label === "About") return pathname.startsWith("/about");
  if (label === "Contact") return pathname.startsWith("/contact");
  if (label === "Pricing") return pathname.startsWith("/pricing");
  return false;
}

export default function SiteNavbar({ className }: SiteNavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex h-18 items-center justify-between border-b border-ink-soft px-4 backdrop-blur-md transition-colors sm:px-6 lg:px-16",
          scrolled || menuOpen ? "bg-ink/97" : "bg-ink",
          className
        )}
      >
        <BrandMark priority variant="nav" />

        <div className="hidden items-center gap-8 lg:flex">
          {NavLinks.map((link) => {
            const active = isLinkActive(pathname, link.href, link.label);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "border-b-2 py-1 text-sm font-medium transition-colors",
                  active
                    ? "border-brand text-white"
                    : "border-transparent text-white/50 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={PRIMARY_PHONE_HREF}
              className="flex items-center gap-1.5 text-xs font-medium text-white/60 transition-colors hover:text-white"
            >
              <Phone className="size-3.5 shrink-0 text-brand" />
              {PRIMARY_PHONE_DISPLAY}
            </a>
            <span className="text-white/20">·</span>
            <a
              href={SECONDARY_PHONE_HREF}
              className="text-xs font-medium text-white/60 transition-colors hover:text-white"
            >
              {SECONDARY_PHONE_DISPLAY}
            </a>
            <span className="text-white/20">·</span>
            <a
              href={HOTLINE_PHONE_HREF}
              className="text-xs font-medium text-white/60 transition-colors hover:text-white"
            >
              Hotline {HOTLINE_PHONE_DISPLAY}
            </a>
          </div>

          <div className="hidden sm:block">
            <QuoteDialog triggerClassName="h-10 rounded bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark">
              Get a Quote <ArrowRight className="size-3.5" />
            </QuoteDialog>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded border border-white/10 text-white transition-colors hover:border-brand hover:bg-white/5 lg:hidden"
          >
            <span className="relative size-5">
              <Menu
                className={cn(
                  "absolute inset-0 size-5 transition-all duration-300",
                  menuOpen
                    ? "rotate-90 scale-75 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 size-5 transition-all duration-300",
                  menuOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-75 opacity-0"
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      <div
        className={cn(
          "fixed inset-x-0 top-18 z-40 grid overflow-hidden border-b border-ink-soft bg-ink transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden",
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-1 px-4 py-6 sm:px-6">
            {NavLinks.map((link, index) => {
              const active = isLinkActive(pathname, link.href, link.label);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-all duration-300",
                    LINK_DELAYS[index] ?? "delay-300",
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-3 opacity-0",
                    active
                      ? "bg-brand/15 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <div
              className={cn(
                "mt-4 flex flex-col gap-2 transition-all duration-300 delay-300",
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              )}
            >
              <a
                href={PRIMARY_PHONE_HREF}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white"
              >
                <Phone className="size-4 text-brand" />
                {PRIMARY_PHONE_DISPLAY}
              </a>
              <a
                href={SECONDARY_PHONE_HREF}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white"
              >
                <Phone className="size-4 text-brand" />
                {SECONDARY_PHONE_DISPLAY}
              </a>
              <a
                href={HOTLINE_PHONE_HREF}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white"
              >
                <Phone className="size-4 text-brand" />
                Hotline {HOTLINE_PHONE_DISPLAY}
              </a>
            </div>

            <div
              className={cn(
                "mt-4 transition-all duration-300 delay-300",
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              )}
            >
              <QuoteDialog triggerClassName="h-12 w-full rounded bg-brand text-sm font-semibold text-white hover:bg-brand-dark">
                Get a Quote <ArrowRight className="size-4" />
              </QuoteDialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
