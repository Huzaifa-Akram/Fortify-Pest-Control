"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ChevronRight, X } from "lucide-react";
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

  // Close on route change, Escape, and lock body scroll while the drawer is open
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === pathname ||
    (href !== "/" &&
      pathname.startsWith(href.split("#")[0]) &&
      href !== "/#service-areas");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300",
        scrolled && "border-b border-slate-200/70 shadow-sm",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={site.name}>
          <Image
            src="/logo.svg?v=2"
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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                isActive(link.href)
                  ? "text-fort-green-700"
                  : "text-fort-navy/80 hover:text-fort-green-700",
              )}
            >
              {link.label}
            </Link>
          ))}
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

        {/* Animated bun-to-cross toggle, kept above the backdrop so it stays clickable while open */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "relative z-70 flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
            open ? "bg-fort-green-50 text-fort-green-700" : "text-fort-navy",
          )}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                "absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out",
                open ? "top-1.5 rotate-45" : "top-0 rotate-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out",
                open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out",
                open ? "top-1.5 -rotate-45" : "top-3 rotate-0",
              )}
            />
          </span>
        </button>
      </div>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-55 bg-fort-navy-900/55 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Drawer — slides in from the right */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-y-0 right-0 z-60 flex w-[82%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <span className="flex items-center gap-2.5">
            <Image
              src="/logo.svg?v=2"
              alt=""
              aria-hidden
              width={40}
              height={26}
              className="h-8 w-auto"
            />
            <span className="flex flex-col leading-none">
              <span className="text-sm font-extrabold tracking-tight text-fort-navy">
                FORTIFY
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-fort-green-600">
                Pest Control
              </span>
            </span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-fort-navy/50 transition-colors hover:bg-slate-100 hover:text-fort-navy"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              style={{ transitionDelay: open ? `${i * 40 + 80}ms` : "0ms" }}
              className={cn(
                "group flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all duration-300 ease-out",
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                isActive(link.href)
                  ? "bg-fort-green-50 text-fort-green-700"
                  : "text-fort-navy hover:bg-slate-50 hover:text-fort-green-700",
              )}
            >
              {link.label}
              <ChevronRight className="h-4 w-4 text-fort-navy/25 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-fort-green" />
            </Link>
          ))}
        </nav>

        <div className="border-t border-slate-100 bg-fort-green-50/30 px-5 py-5">
          <a
            href={site.phoneHref}
            onClick={() => setOpen(false)}
            className="mb-3 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-100 transition-colors hover:ring-fort-green/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-fort-green-50 text-fort-green-700">
              <Phone className="h-4 w-4" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Call us now
              </span>
              <span className="text-sm font-bold text-fort-navy">
                {site.phone}
              </span>
            </span>
          </a>
          <div onClick={() => setOpen(false)}>
            <Button href="/contact" size="lg" className="w-full">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
