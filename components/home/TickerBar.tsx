import { TickerItems } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import { Marquee } from "../shared/Marquee";

interface TickerBarProps {
    items?: readonly string[] | string[];
    className?:string;
}

const TickerBar = ({items = TickerItems, className}:TickerBarProps) => {
    const loop = [...items, ...items]
  return (
    <div className={cn(
        "flex h-10 items-center overflow-hidden bg-brand sm:h-11",
        className
    )}>
        <Marquee animationClass="tk">
            {loop.map((item, index) =>(
                <span
                    key={`${item}-${index}`}
                    className="flex items-center gap-6 px-6 text-xs font-semibold tracking-widest whitespace-nowrap text-white sm:gap-8 sm:px-8"
                >
                    {item}
                    <span className="inline-block size-1 rounded-full bg-white/40"/>
                </span>
            ))}
        </Marquee>
    </div>
  )
}

export default TickerBar
