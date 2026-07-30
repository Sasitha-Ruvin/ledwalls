"use client"

import { EventTypes, EventTypesIntro } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import { EventTypeTab, SectionIntro } from "@/types/site"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { SectionHeading } from "../shared/SectionHeading";
import Image from "next/image";
import QuoteDialog from "../layout/QuoteDialog";
import { ArrowRight } from "lucide-react";

interface EventTypesSectionProps{
    tabs?:EventTypeTab[];
    intro?:SectionIntro;
    className?:string;
}
const EventTypeSection = ({tabs = EventTypes, intro = EventTypesIntro, className}:EventTypesSectionProps) => {
  return (
    <section className={cn("bg-white", className)} id="pricing">
        <div className="border-b border-line px-4 pt-14 sm:px-6 sm:pt-16 lg:px-16 lg:pt-20">
            <Tabs defaultValue={tabs[0]?.id}>
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <SectionHeading
                        eyebrow={intro.eyebrow}
                        title={
                            <>
                                {intro.titleLine1}
                                <br/>
                                <span className={intro.titleLine2Muted ? "text-muted-yc": undefined}>
                                    {intro.titleLine2}
                                </span>
                            </>
                        }
                    />
                    <TabsList
                        variant="line"
                        className="mb-0 h-auto w-full flex-wrap justify-start gap-0 bg-transparent p-0 lg:w-auto"
                    >
                        {tabs.map((tab) =>(
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="rounded-none border-b-2 border-transparent px-4 py-3 text-sm data-active:border-brand data-active:bg-transparent data-active:font-bold data-active:shadow-none sm:px-5 sm:text-base"
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>
                {tabs.map((tab) => (
                    <TabsContent key={tab.id} value={tab.id} className="mt-8">
                        <div className="flex min-h-0 flex-col lg:min-h-120 lg:flex-row">
                            <div className="relative min-h-64 w-full overflow-hidden sm:min-h-80 lg:w-7/12">
                            <Image
                                src={tab.img}
                                alt={tab.label}
                                fill
                                className="object-cover"
                                sizes="(max-wdith:1024px) 100vw, 55vw"
                            />
                            </div>
                            <div className="flex w-full flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 md:px-12 lg:w-5/12 lg:px-16">
                                <h3 className="mb-4 text-xl leading-snug font-bold text-ink sm:text-2xl md:text-3x;">
                                    {tab.heading}
                                </h3>
                                <p className="mb-6 text-sm leading-relaxed text-muted-yc sm:text-base">
                                    {tab.body}
                                </p>
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {tab.tags.map((tag) =>(
                                        <span key={tag} className="rounded border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-ink">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <QuoteDialog
                                    nativeTrigger
                                    triggerClassName="flex items-center gap-1.5 text-sm font-semibold text-brand"
                                >
                                    Get a Quote <ArrowRight className="size-3.5"/>
                                </QuoteDialog>
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    </section>
  )
}

export default EventTypeSection
