"use client";

import { useEffect, useRef } from "react";

/* Two stacked wave bands that tile every 720 user units, so the CSS drift
   loops seamlessly. The back band also parallax-shifts with scroll. */
// Fill over-extends to y=140 (past the 120 viewBox) so the bottom edge is solid
// white with no anti-aliased hairline letting the navy gradient bleed through.
const FRONT =
  "M0 46 q180 -22 360 0 t360 0 t360 0 t360 0 t360 0 t360 0 t360 0 t360 0 V140 H0 Z";
const BACK =
  "M0 54 q180 26 360 0 t360 0 t360 0 t360 0 t360 0 t360 0 t360 0 t360 0 V140 H0 Z";

export default function HeroWave() {
  const back = useRef<SVGGElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // Negative-only translate keeps us inside the tiled path (no edge gaps)
        const x = -((window.scrollY * 0.12) % 720);
        if (back.current)
          back.current.style.transform = `translateX(${x}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-15 h-16 sm:h-22 lg:h-27.5"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {/* Back band — drifts + parallax on scroll */}
        <g ref={back} className="will-change-transform">
          <g className="wave-drift-slow">
            <path d={BACK} fill="#ffffff" opacity="0.18" />
          </g>
        </g>
        {/* Front band — solid white, seats into the Stats section below */}
        <g className="wave-drift">
          <path d={FRONT} fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}
