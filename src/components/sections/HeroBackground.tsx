"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

/* object-position is tuned per image so the technician stays framed even
   when object-cover crops hard on narrow (mobile) viewports, where the
   crop eats the sides of these landscape photos rather than top/bottom. */
const SLIDES = [
  { src: "/hero-bg-1.png", position: "object-[70%_30%] lg:object-[62%_32%]" },
  { src: "/hero-bg-2.png", position: "object-[68%_42%] lg:object-[50%_38%]" },
  { src: "/hero-bg-3.png", position: "object-[46%_60%] lg:object-[46%_52%]" },
];

const INTERVAL_MS = 6000;

export default function HeroBackground() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt=""
          aria-hidden
          fill
          priority={i === 0}
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out",
            slide.position,
            i === active ? "animate-hero-zoom opacity-100" : "opacity-0",
          )}
        />
      ))}
    </>
  );
}
