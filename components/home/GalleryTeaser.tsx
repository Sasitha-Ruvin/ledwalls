import { GalleryIntro, GalleryTeasers } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import { GalleryTeaserItem, SectionIntro } from "@/types/site"
import { SectionHeading } from "../shared/SectionHeading";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface GalleryTeaserProps {
    items?:GalleryTeaserItem[];
    intro?:SectionIntro;
    className?:string;
}


const GalleryTeaser = ({items = GalleryTeasers, intro = GalleryIntro, className}:GalleryTeaserProps) => {
    const featured = items.find((item) => item.featured) ?? items[0]
    const rest = items.filter((item) => item !== featured);
  return (
    <section className={cn("bg-ink pb-16 sm:pb-20 lg:pb-24", className)}>
        <div className="relative z-10 mb-8 flex flex-col gap-6 bg-ink px-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-16">
            <SectionHeading
                tone="dark"
                eyebrow={intro.eyebrow}
                title={
                    <>
                        {intro.titleLine1}
                        <br/>
                        <span className={intro.titleLine2Muted ? "text-white/25":undefined}>
                            {intro.titleLine2}
                        </span>
                    </>
                }
            />
            {intro.ctaHref && intro.ctaLabel ? (
                    <Button
                        nativeButton={false}
                        render={<Link href={intro.ctaHref}/>}
                        variant="outline"
                        className="h-9 w-fit rounded border-ink-soft text-sm text-muted-yc hover:border-brand hover:text-white"
                    >
                        {intro.ctaLabel}<ArrowUpRight className="size-3.5"/>
                    </Button>
            ):null}
        </div>
        <div className="grid grid-cols-1 gap-1 px-4 sm:grid-cols-2 sm:px-6 md:grid-cols-3 lg:min-h-[32rem] lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-2 lg:px-16">
            <div className="group relative min-h-64 overflow-hidden sm:min-h-72 md:row-span-2 lg:col-span-1 lg:min-h-full">
                <Image
                    src={featured.img}
                    alt={featured.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 to-transparent"/>
                <span className="absolute bottom-4 left-4 text-sm font-semibold text-white sm:bottom-5 sm:left-5">
                    {featured.label}
                </span>
            </div>
            {rest.map((item) =>(
                <div
                    key={item.label}
                    className="group relative min-h-48 overflow-hidden sm:min-h-56 lg:min-h-0"
                >
                    <Image
                        src={item.img}
                        alt={item.label}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink/70 to-transparent"/>
                    <span className="absolute bottom-3 left-3 text-xs font-medium text-white/85">
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default GalleryTeaser
