"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { Service } from "@/lib/site";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type ServiceCardData = Pick<
  Service,
  "slug" | "title" | "short" | "description" | "image"
>;

export default function ServiceCard({
  service,
  icon,
}: {
  service: ServiceCardData;
  icon: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="perspective-1600 h-full min-h-100">
      <div
        className={cn(
          "preserve-3d relative h-full w-full transition-transform duration-700 ease-out",
          flipped && "rotate-y-180",
        )}
      >
        {/* Front */}
        <button
          type="button"
          onClick={() => setFlipped(true)}
          aria-label={`View details for ${service.title}`}
          aria-pressed={flipped}
          className="backface-hidden group absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-fort-green-200 hover:shadow-soft"
        >
          <div className="relative aspect-16/10 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-fort-navy/45 via-fort-navy/5 to-transparent" />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-lg font-bold text-fort-navy transition-colors duration-300 group-hover:text-fort-green-700">
              {service.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              {service.short}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-fort-green-700">
              View details
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </button>

        {/* Back */}
        <div
          onClick={() => setFlipped(false)}
          className="rotate-y-180 backface-hidden absolute inset-0 flex h-full w-full cursor-pointer flex-col rounded-2xl border border-fort-navy-700 bg-fort-navy p-6 text-white shadow-soft"
        >
          <Image
            src={icon}
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
          />

          <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
          <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-fort-navy-100">
            {service.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-5">
            <Link
              href="/contact"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center rounded-full bg-fort-green px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-fort-green-600"
            >
              Request this service
            </Link>
            <a
              href={site.phoneHref}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-fort-navy-100 transition-colors duration-200 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
