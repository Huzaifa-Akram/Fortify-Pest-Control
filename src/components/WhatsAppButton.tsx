"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.16 5.335 5.495 0 12.05 0c3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.253-.462-2.386-1.473-.882-.788-1.477-1.761-1.65-2.059-.173-.297-.018-.458.131-.606.149-.149.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.247-.595-.499-.514-.669-.514-.169 0-.371-.012-.57.025-.198.038-.521.198-.793.495-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.066 2.875 1.214 3.073.149.198 2.058 3.146 5.058 4.282 3.001 1.136 3.001.764 3.544.713.544-.05 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "fixed bottom-5 right-5 z-40 flex items-center transition-all duration-500 ease-out sm:bottom-7 sm:right-7",
        mounted ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-75 opacity-0",
      )}
    >
      {/* Tooltip label, slides out on hover (desktop only) */}
      <span
        className={cn(
          "mr-3 hidden whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-fort-navy shadow-soft transition-all duration-300 sm:flex",
          hovered ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-3 opacity-0",
        )}
      >
        Chat with us
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center">
        {/* Sonar rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-pulse" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-pulse [animation-delay:1.1s]" />

        {/* Core button */}
        <span
          className={cn(
            "relative flex h-14 w-14 items-center justify-center rounded-full",
            "bg-linear-to-br from-[#2EDC6B] to-[#1DA851] text-white",
            "shadow-[0_10px_28px_-6px_rgba(29,168,81,0.6)] ring-1 ring-white/20",
            "transition-transform duration-300 ease-out",
            "hover:scale-110 hover:rotate-[8deg] active:scale-95",
            !hovered && "animate-whatsapp-breathe",
          )}
        >
          <WhatsAppIcon className="h-7 w-7" />
        </span>
      </span>
    </a>
  );
}
