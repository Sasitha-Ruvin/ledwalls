import { AboutStoryData } from "@/lib/data/about";
import { cn } from "@/lib/utils";
import { AboutStoryContent } from "@/types/site"
import Image from "next/image";

interface AboutStorySectionProps {
    content?: AboutStoryContent;
    className?: string;
}

const AboutStorySection = ({content= AboutStoryData, className}:AboutStorySectionProps) => {
  return (
    <section
        aria-labelledby="about-story-heading"
        className={cn("bg-white py-16 sm:py-20 lg:py-24", className)}
    >
        <div className="flex min-h-0 flex-col lg:flex-row lg:items-stretch lg:min-h-[28rem]">
            <div className="flex flex-col justify-center px-4 sm:px-8 lg:w-[52%] lg:px-16">
                <div className="mb-3 flex items-center gap-3 sm:mb-4">
                    <div className="h-0.5 w-7 bg-brand"/>
                    <span className="text-xs font-medium tracking-widest text-muted-yc uppercase">
                        {content.eyebrow}
                    </span>
                </div>
                <h2
                    id="about-story-heading"
                    className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl"
                >
                    {content.titleLine1}
                    {content.titleLine2 ? (
                        <>
                            <br />
                            {content.titleLine2}
                        </>
                    ) : null}
                </h2>
                <div className="mt-6 max-w-lg space-y-5">
                    {content.paragraphs.map((paragraph) =>(
                        <p
                            key={paragraph.slice(0,40)}
                            className="text-base leading-relaxed text-muted-yc"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
            <div className="relative mt-10 flex min-h-72 items-center justify-center bg-surface px-8 py-12 lg:w-[48%] lg:min-h-full">
                <Image
                    src={content.imageSrc}
                    alt={content.imageAlt}
                    width={480}
                    height={480}
                    className="h-auto w-full max-w-sm object-contain"
                    sizes="(max-width:1024px) 80vw, 24vw"
                />
            </div>
        </div>
    </section>
  )
}

export default AboutStorySection
