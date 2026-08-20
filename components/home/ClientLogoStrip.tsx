import { ClientLogos } from "@/lib/data/clients";
import { cn } from "@/lib/utils";
import { ClientLogo } from "@/types/site";
import { Marquee } from "../shared/Marquee";
import Image from "next/image";

interface ClientLogoStripProps {
    logos?: ClientLogo[];
    title?:string;
    className?:string;
}
const ClientLogoStrip = ({logos = ClientLogos, title = "Trusted by Sri Lanka's leading organisations", className,}:ClientLogoStripProps) => {
    const loop = [...logos, ...logos];

  return (
    <section className={cn("bg-surface py-10 sm:py-12", className)}>
        <p className="mb-6 text-center text-xs font-medium tracking-widest text-muted-yc uppercase sm:mb-7">
            {title}
        </p>
        <Marquee animationClass="lg" pauseOnHover>
            {loop.map((logo,index) =>(
                <div
                    key={`${logo.id}-${index}`}
                    className={cn(
                        "flex min-w-44 items-center justify-center px-6 sm:min-w-52 sm:px-8",
                        index > 0 && "border-l border-line"
                    )}
                >
                    <Image
                        src={logo.src}
                        alt={logo.name}
                        width={logo.width ?? 160}
                        height={logo.height ?? 56}
                        className="h-12 w-auto object-contain sm:h-14"
                    />
                </div>
            ))}
        </Marquee>
    </section>
  )
}

export default ClientLogoStrip
