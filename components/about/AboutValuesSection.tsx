import { AboutValues } from "@/lib/data/about";
import { cn } from "@/lib/utils";
import { AboutValueItem } from "@/types/site"

interface AboutValuesSectionProps {
    items?: AboutValueItem[];
    className?:string;
}

const AboutValuesSection = ({items = AboutValues, className}:AboutValuesSectionProps) => {
  return (
    <section
        aria-labelledby="about-values-heading"
        className={cn("bg-surface px-4 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24", className)}
    >
        <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <div className="h-0.5 w-7 bg-brand"/>
            <span className="text-xs font-medium tracking-widest text-muted-yc uppercase">
                How We Work
            </span>
        </div>
        <h2
            id="about-values-heading"
            className="mb-10 text-3xl font-bold tracking-tight text-ink sm:mb-12 sm:text-4xl"
        >
            The things we do not compromise on.
        </h2>
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {items.map((item) =>(
                <li key={item.title} className="min-w-0">
                    <div className="mb-4 size-2 bg-brand" aria-hidden/>
                    <h3 className="mb-3 text-xl font-bold text-ink sm:text-2xl">
                        {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-yc lg:max-w-none">
                        {item.description}
                    </p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default AboutValuesSection
