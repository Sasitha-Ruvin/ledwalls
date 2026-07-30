import { AboutMilestones } from "@/lib/data/about";
import { cn } from "@/lib/utils";
import { AboutMilestone } from "@/types/site"

interface AboutTimelineSectionProps {
    milestones?: AboutMilestone[];
    className?:string
}
const AboutTimelineSection = ({milestones = AboutMilestones, className}:AboutTimelineSectionProps) => {
  return (
    <section
        aria-labelledby="about-timeline-heading"
        className={cn("bg-ink px-4 py-16 sm:py-20 lg:px-16 lg:py-24", className)}
    >
        <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <div className="h-0/5 w-7 bg-brand"/>
            <span className="text-xs font-medium tracking-widest text-brand uppercase">
                Our Journey
            </span>
        </div>
        <h2
            id="about-timeline-heading"
            className="mb-12 text-3xl font-bold tracking-tight text-white sm:mb-16 sm:text-4xl"
        >
            Seven Years on the ground
        </h2>
        <ol className="relative space-y-8 border-l border-brand pl-6 md:hidden">
            {milestones.map((m) =>(
                <li key={m.year} className="relative">
                    <span
                        className="absolute top-1 -left-[1.625rem] size-2.5 rounded-full bg-brand"
                        aria-hidden
                    />
                    <p className="text-lg font-bold text-brand">{m.year}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-yc">{m.description}</p>
                </li>
            ))}
        </ol>
        <div className="relative hidden md:block">
            <div className="absolute top-1/2 right-0 left-0 h-px bg-brand -translate-y-1/2" aria-hidden/>
            <div
                className="relative z-10 grid gap-2"
                style={{
                    gridTemplateColumns: `repeat(${milestones.length}, minmax(0,1fr))`
                }}
            >
                {milestones.map((m) =>(
                    <div key={m.year}
                        className="flex min-h-48 flex-col items-center text-center"
                    >
                        {m.yearAboveSpine ? (
                            <>
                                <div className="flex flex-1 flex-col justify-end pb-5">
                                    <span className="text-xl font-bold text-brand">
                                        {m.year}
                                    </span>
                                </div>
                                <div className="size-2.5 shrink-0 rounded-full bg-brand" aria-hidden/>
                                <div className="flex-1 px-2 pt-5">
                                    <p className="mx-auto max-w-xs leading-relaxed text-muted-yc">
                                        {m.description}
                                    </p>
                                </div>
                            </>
                        ):(
                            <>
                                <div className="flex flex-1 flex-col justify-end px-2 pb-5">
                                    <p className="mx-auto max-w-36 text-xs leading-relaxed text-muted-yc">
                                        {m.description}
                                    </p>
                                </div>
                                <div className="size-2.5 shrink-0 rounded-full bg-brand" aria-hidden/>
                                <div className="flex-1 pt-5">
                                    <span className="text-xl font-bold text-brand">
                                        {m.year}
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

         
        </div>
    </section>
  )
}

export default AboutTimelineSection
