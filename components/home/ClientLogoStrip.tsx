import { ClientLogos } from "@/lib/data/clients";
import { cn } from "@/lib/utils";
import { ClientLogo } from "@/types/site";
import { ClientLogoMarquee } from "@/components/home/ClientLogoMarquee";

interface ClientLogoStripProps {
    logos?: ClientLogo[];
    title?:string;
    className?:string;
}
const ClientLogoStrip = ({logos = ClientLogos, title = "Trusted by Sri Lanka's leading organisations", className,}:ClientLogoStripProps) => {
  return (
    <section className={cn("bg-surface py-10 sm:py-12", className)}>
        <p className="mb-6 text-center text-xs font-medium tracking-widest text-muted-yc uppercase sm:mb-7">
            {title}
        </p>
        <ClientLogoMarquee logos={logos} />
    </section>
  )
}

export default ClientLogoStrip
