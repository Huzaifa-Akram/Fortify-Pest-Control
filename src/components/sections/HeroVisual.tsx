"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// Vertical fade: gently softens the top and dissolves the waist crop at the bottom.
const fadeY =
  "linear-gradient(to bottom, transparent 0%, #000 5%, #000 72%, rgba(0,0,0,0.55) 87%, rgba(0,0,0,0.15) 96%, transparent 100%)";
// Horizontal fade: melts the hard left/right edges of the photo into the background.
const fadeX =
  "linear-gradient(to right, transparent 0%, #000 11%, #000 89%, transparent 100%)";

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="relative flex items-center justify-center"
    >
      {/* Soft lighting + ground pool */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${pos.x * -16}px, ${pos.y * -10}px, 0)` }}
      >
        <div className="absolute h-[68%] w-[68%] -translate-y-6 rounded-full bg-fort-green/25 blur-[100px]" />
        <div className="absolute h-[42%] w-[42%] -translate-y-2 rounded-full bg-fort-navy-500/30 blur-3xl" />
        {/* Light pooling beneath the figure so the cropped waist reads as grounded */}
        <div className="absolute bottom-3 left-1/2 h-14 w-1/2 -translate-x-1/2 rounded-[50%] bg-fort-green/30 blur-2xl" />
      </div>

      {/* Technician */}
      <div
        className="relative z-10 w-[78%] max-w-[420px] transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${pos.x * 12}px, ${pos.y * 7}px, 0)` }}
      >
        {/* Nesting two masks intersects them, so all four edges of the black
            photo dissolve into the navy instead of ending in a sharp corner. */}
        <div style={{ WebkitMaskImage: fadeY, maskImage: fadeY }}>
          <div style={{ WebkitMaskImage: fadeX, maskImage: fadeX }}>
            <Image
              src="/pest-pro.png"
              alt="Certified Fortify pest control technician in protective gear"
              width={1500}
              height={1800}
              priority
              sizes="(max-width: 1024px) 70vw, 480px"
              className="h-auto w-full select-none object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
