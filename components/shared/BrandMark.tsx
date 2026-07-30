import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

type BrandMarkVariant = "nav" | "footer";

interface BrandMarkProps {
  href?: string;
  className?: string;
  priority?: boolean;
  variant?: BrandMarkVariant;
  /** White pad behind logo on dark headers/footers */
  withBackground?: boolean;
}

const variantStyles: Record<
  BrandMarkVariant,
  {
    box: string;
    image: string;
    width: number;
    height: number;
  }
> = {
  nav: {
    box: "h-14 px-2",
    image: "max-h-[3.25rem] w-auto max-w-44 object-contain sm:max-h-[3.375rem] sm:max-w-48",
    width: 280,
    height: 98,
  },
  footer: {
    box: "px-3 py-2.5 sm:px-4 sm:py-3",
    image: "h-14 w-auto sm:h-16 md:h-[4.5rem]",
    width: 280,
    height: 98,
  },
};

export function BrandMark({
  href = "/",
  className,
  priority = false,
  variant = "nav",
  withBackground = true,
}: BrandMarkProps) {
  const styles = variantStyles[variant];

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        withBackground &&
          cn("rounded-md bg-white shadow-sm", styles.box),
        className
      )}
      aria-label="YC Events home"
    >
      <Image
        src={images.logo}
        alt="YC Events"
        width={styles.width}
        height={styles.height}
        priority={priority}
        className={styles.image}
      />
    </Link>
  );
}

export default BrandMark;
