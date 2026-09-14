"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Marquee } from "@/components/shared/Marquee";
import { cn } from "@/lib/utils";
import type { ClientLogo } from "@/types/site";

interface ClientLogoMarqueeProps {
  logos: ClientLogo[];
}

export function ClientLogoMarquee({ logos }: ClientLogoMarqueeProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const displayLogos = animate ? [...logos, ...logos] : logos;

  return (
    <Marquee animationClass={animate ? "lg" : undefined} pauseOnHover={animate}>
      {displayLogos.map((logo, index) => (
        <div
          key={`${logo.id}-${index}`}
          className={cn(
            "flex min-w-44 items-center justify-center px-6 sm:min-w-52 sm:px-8",
            index > 0 && "border-l border-line"
          )}
          aria-hidden={animate && index >= logos.length ? true : undefined}
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
  );
}
