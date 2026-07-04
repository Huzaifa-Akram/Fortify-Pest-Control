import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import { services, serviceAreas, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-fort-navy text-fort-navy-100">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center">
                <Image
                  src="/logo-white.svg"
                  alt="Fortify Pest Control logo"
                  width={48}
                  height={31}
                  className="h-10 w-auto"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-tight text-white">
                  FORTIFY
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fort-green-300">
                  Pest Control Inc.
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fort-navy-100/80">
              Building a fort around your home and business — one pest-free
              property at a time. Locally owned and operated in Manitoba.
            </p>
          </div>

          {/* Grouped Services and Areas for mobile side-by-side layout */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:col-span-5 lg:grid-cols-5">
            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Services
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm">
                {services.slice(0, 8).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services#${s.slug}`}
                      className="text-fort-navy-100/80 transition-colors hover:text-fort-green-300"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Service Areas
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 text-fort-navy-100/80"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-fort-green-400" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-fort-navy-100/90 transition-colors hover:text-fort-green-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-fort-green-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 text-fort-navy-100/90 transition-colors hover:text-fort-green-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-fort-green-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-fort-navy-100/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-fort-green-400" />
                <div className="space-y-1">
                  {site.hours.map((h) => (
                    <div key={h.day} className="flex gap-2">
                      <span className="w-20 font-semibold text-white/90">
                        {h.day}
                      </span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-fort-navy-100/70 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Serving Winnipeg, Brandon &amp; Manitoba — Eco-friendly pest
            control you can trust.
          </p>
        </div>
      </Container>
    </footer>
  );
}
