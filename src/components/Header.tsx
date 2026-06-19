"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/70 bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={site.name}>
          <Image
            src="/logo.svg"
            alt="Fortify Pest Control logo"
            width={48}
            height={31}
            priority
            className="h-10 w-auto"
          />
          <span className="flex flex-col leading-none">
            <span className="text-base font-extrabold tracking-tight text-fort-navy">
              FORTIFY
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-fort-green-600">
              Pest Control
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === pathname ||
              (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]) && link.href !== "/#service-areas");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  active
                    ? "text-fort-green-700"
                    : "text-fort-navy/80 hover:text-fort-green-700",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-fort-navy transition-colors hover:text-fort-green-700"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-fort-green-50 text-fort-green-700">
              <Phone className="h-4 w-4" />
            </span>
            {site.phone}
          </a>
          <Button href="/contact" size="md">
            Free Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-fort-navy lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-slate-100 bg-white transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[420px]" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-semibold text-fort-navy hover:bg-fort-green-50 hover:text-fort-green-700"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-4">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 px-3 text-base font-bold text-fort-navy"
            >
              <Phone className="h-4 w-4 text-fort-green-600" /> {site.phone}
            </a>
            <Button href="/contact" size="lg" className="mt-1 w-full">
              Get a Free Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
