import { RedStats } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import { StatItemData } from "@/types/site"
import { StatItem } from "../shared/StatItem";

interface StatsBarProps{
    stats?: StatItemData[];
    className?:string;
}

const StatsBar = ({stats = RedStats, className}:StatsBarProps) => {
  return (
    <section
        className={cn("flex items-center bg-brand py-8 sm:py-10 md:py-12", className)}
    >
        <div className="grid w-full grid-cols-2 gap-6 px-4 sm:px-6 md:flex md:gap-10 lg:px-16">
            {stats.map((stat, index)=>(
                <StatItem
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    tone="brand"
                    size="lg"
                    className="md:flex-1"
                    showDivider={index > 0}
                />
            ))}
        </div>
    </section>
  )
}

export default StatsBar
