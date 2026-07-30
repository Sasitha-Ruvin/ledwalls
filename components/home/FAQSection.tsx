import { FaqIntro, Faqs } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import { FaqItem, SectionIntro } from "@/types/site"
import { SectionHeading } from "../shared/SectionHeading";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "../ui/accordion";

interface FAQSectionProps {
    items?:FaqItem[];
    intro?:SectionIntro;
    className?:string;
}

const FAQSection = ({items = Faqs, intro = FaqIntro, className}:FAQSectionProps) => {
  return (
    <section className={cn("bg-white px-4 sm:px-6 sm:py-20 lg:px-16 lg:py-24", className)}>
        <SectionHeading
            eyebrow={intro.eyebrow}
            title={
                <>
                    {intro.titleLine1}
                    <br/>
                    <span className={intro.titleLine2Muted ? "text-muted-yc":undefined}>
                        {intro.titleLine2}
                    </span>
                </>
            }
            description={intro.description}
        />
        {intro.ctaLabel ? (
            <Button className="mt-8 h-11 rounded bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark">
                {intro.ctaLabel} <ArrowRight className="size-3.5"/>
            </Button>
        ):null}

        <Accordion defaultValue={["item-0"]} className="mt-10 w-full border-t border-line lg:mt-12">
            {items.map((item, index) =>(
                <AccordionItem
                    key={item.question}
                    value={`item-${index}`}
                >
                    <AccordionTrigger className="py-5 text-sm font-semibold text-ink sm:text-base">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-yc">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </section>
  )
}

export default FAQSection
