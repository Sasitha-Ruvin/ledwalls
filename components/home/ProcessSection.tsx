import { ProcessIntro, ProcessSteps } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import { ProcessStep, SectionIntro } from "@/types/site"
import { SectionHeading } from "../shared/SectionHeading";

interface ProcessSectionProps {
    steps?:ProcessStep[];
    intro?:SectionIntro;
    className?:string;
}

const ProcessSection = ({steps = ProcessSteps, intro = ProcessIntro, className}:ProcessSectionProps) => {
  return (
    <section className={cn("bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24", className)}>
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
            className="mb-10 sm:mb-14 lg:mb-16"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {steps.map((step, index)=>(
                <div
                    key={step.num}
                    className={cn("relative", index < steps.length - 1 && "lg-border-r lg:border-line lg:pr-10",
                        index > 0 && "lg:pl-10"
                    )}
                >
                    <div className="-mb-3 text-6xl leading-none font-black text-line sm:text-7xl lg:text-8xl">
                        {step.num}
                    </div>
                    <h3 className="mb-2.5 text-base font-bold text-ink sm:text-lg">
                        {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-yc">
                        {step.description}
                    </p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default ProcessSection
