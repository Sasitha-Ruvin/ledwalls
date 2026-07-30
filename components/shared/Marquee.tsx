import {cn} from "@/lib/utils";

interface MarqueeProps {
    children:React.ReactNode;
    animationClass: "tk" | "lg";
    className?:string;
    pauseOnHover?:boolean;
}

export function Marquee({
    children, animationClass, className, pauseOnHover = false,
}:MarqueeProps){
    return(
        <div className={cn("overflow-hidden", className)}>
            <div className={cn(
                animationClass,
                pauseOnHover && animationClass === "lg" && "hover:[animation-play-state:paused]"
            )}
            >
                {children}
            </div>
        </div>
    )
}