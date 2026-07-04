"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Search, SearchX, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site, services } from "@/lib/site";

export default function ServiceSearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return services;
    return services.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.features.some((f) => f.toLowerCase().includes(q))
    );
  }, [services, query]);

  return (
    <div>
      <Reveal className="mx-auto max-w-2xl rounded-2xl border border-slate-100 bg-white p-3 shadow-card">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services — bed bugs, rodents, wasps…"
            className="w-full rounded-xl border border-transparent bg-slate-50 py-3 pl-11 pr-4 text-sm text-fort-navy placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-fort-green-300 focus:bg-white focus:ring-4 focus:ring-fort-green-100"
          />
        </div>
      </Reveal>

      {filtered.length > 0 ? (
        <div className="mt-12 flex flex-col gap-8">
          {filtered.map((service, i) => {
            return (
              <Reveal
                key={service.slug}
                id={service.slug}
                delay={(i % 2) * 80}
                className={`group flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-fort-green-200 hover:shadow-card ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="relative w-full aspect-video lg:w-2/5 lg:aspect-auto">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex w-full flex-col justify-center p-5 sm:p-6 lg:w-3/5 lg:p-8">
                  <h2 className="text-xl font-bold text-fort-navy sm:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {service.description}
                  </p>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-fort-green-600" />
                        <span className="text-xs font-medium sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-100 pt-4">
                    <Button href="/contact">
                      Get a Quote
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <a
                      href={site.phoneHref}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-fort-navy transition-colors hover:text-fort-green-700"
                    >
                      <Phone className="h-4 w-4" />
                      {site.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center gap-3 rounded-3xl border border-dashed border-slate-200 bg-white/60 py-16 text-center">
          <SearchX className="h-8 w-8 text-slate-300" />
          <p className="font-semibold text-fort-navy">
            No services match your search.
          </p>
          <p className="text-sm text-slate-500">
            Try a different keyword or check your spelling.
          </p>
          <button
            onClick={() => setQuery("")}
            className="mt-2 rounded-full bg-fort-green px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-fort-green-600"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
