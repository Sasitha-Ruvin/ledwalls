import Link from "next/link";
import { FaqIntro, Faqs } from "@/lib/data/home";
import { FaqList } from "@/components/shared/FaqList";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { FaqItem, SectionIntro } from "@/types/site";
import { ArrowRight } from "lucide-react";

interface FAQSectionProps {
  items?: FaqItem[];
  intro?: SectionIntro;
  className?: string;
  listId?: string;
  footerLink?: { label: string; href: string };
}

const FAQSection = ({
  items = Faqs,
  intro = FaqIntro,
  className,
  listId,
  footerLink,
}: FAQSectionProps) => {
  return (
    <section
      className={cn("bg-white px-4 sm:px-6 sm:py-20 lg:px-16 lg:py-24", className)}
      aria-labelledby="faq-section-heading"
    >
      <SectionHeading
        eyebrow={intro.eyebrow}
        title={
          <h2 id="faq-section-heading">
            {intro.titleLine1}
            <br />
            <span className={intro.titleLine2Muted ? "text-muted-yc" : undefined}>
              {intro.titleLine2}
            </span>
          </h2>
        }
        description={intro.description}
      />
      {intro.ctaLabel ? (
        <Button className="mt-8 h-11 rounded bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark">
          {intro.ctaLabel} <ArrowRight className="size-3.5" />
        </Button>
      ) : null}

      <FaqList
        items={items}
        listId={listId}
        className="mt-10 lg:mt-12"
      />

      {footerLink ? (
        <Link
          href={footerLink.href}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-opacity hover:opacity-80"
        >
          {footerLink.label}
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      ) : null}
    </section>
  );
};

export default FAQSection;
