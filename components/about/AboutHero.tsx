import { AboutHeroData } from "@/lib/data/about"
import { cn } from "@/lib/utils"
import { AboutHeroContent } from "@/types/site"
import Image from "next/image"
import { StatItem } from "../shared/StatItem"

interface AboutHeroSectionProps {
    content?: AboutHeroContent
}

const AboutHero = ({content = AboutHeroData}:AboutHeroSectionProps) => {
  return (
    <section
        aria-labelledby="about-hero-heading"
        className="relative flex min-h-[min(88vh,40rem)] flex-col bg-ink lg:min-h-[min(88vh,37,5rem)]"
    >
        <div className="absolute top-0 right-0 h-full w-full lg:w-[42%]">
            <Image
                src={content.imageSrc}
                alt={content.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 42vw"
            />
            <div
                className="absolute inset-0 bg-linear-to-r from-ink via-ink/50 to-transparent lg:from-ink lg:via-ink/40"
                aria-hidden
            />
        </div>
        <div className="relative z-10 flex flex-1 flex-col justify-end px-4 pb-12 pt-24 sm:px-8 sm:pb-16 lg:w-[58%] lg:px-16 lg:pb-20">
            <p className="mb-5 text-xs font-medium tracking-widest text-brand uppercase sm:mb-6">
                {content.eyebrow}
            </p>
            <h1
                id="about-hero-heading"
                className="mb-6 text-5xl leading-[0.88] font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
            >
                {content.headlineLines.map((line)=>(
                    <span
                        key={line.text}
                        className={cn("block", line.accent ? "text-brand":"text-white")}
                    >
                        {line.text}
                    </span>
                ))}
            </h1>
            <p className="mb-8 max-w-md text-base leading-relaxed text-muted-yc sm:mb-10">
                {content.description}
            </p>
            <div className="flex items-center">
                <StatItem
                    value={content.stats[0].value}
                    label={content.stats[0].label}
                    tone="dark"
                    size="sm"
                />
            </div>
        </div>
    </section>
  )
}

export default AboutHero
