"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ChevronRight, ChevronDown, X } from "lucide-react";
import { navLinks, services, site } from "@/lib/site";
import { blogPosts } from "@/lib/blog";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";

const MEGA_MENU_LABELS = ["Services", "Blog"] as const;

function ServicesMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="w-[420px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft ring-1 ring-slate-900/5">
      <div className="grid grid-cols-2 gap-0.5 p-2">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services#${service.slug}`}
            onClick={onNavigate}
            className="rounded-lg px-3.5 py-2.5 text-sm font-semibold text-fort-navy transition-colors duration-200 hover:bg-fort-green-50 hover:text-fort-green-700"
          >
            {service.title}
          </Link>
        ))}
      </div>
      <div className="border-t border-slate-100 bg-slate-50/70 px-4 py-3">
        <Link
          href="/services"
          onClick={onNavigate}
          className="inline-flex items-center gap-1 text-sm font-bold text-fort-green-700 transition-colors hover:text-fort-green-800"
        >
          View all services
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

function BlogMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="w-[440px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft ring-1 ring-slate-900/5">
      <div className="no-scrollbar grid max-h-96 grid-cols-1 gap-0.5 overflow-y-auto p-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            onClick={onNavigate}
            className="rounded-lg px-3.5 py-2.5 text-sm font-semibold leading-snug text-fort-navy transition-colors duration-200 hover:bg-fort-green-50 hover:text-fort-green-700"
          >
            {post.title}
          </Link>
        ))}
      </div>
      <div className="border-t border-slate-100 bg-slate-50/70 px-4 py-3">
        <Link
          href="/blog"
          onClick={onNavigate}
          className="inline-flex items-center gap-1 text-sm font-bold text-fort-green-700 transition-colors hover:text-fort-green-800"
        >
          View all articles
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>("Services");
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
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
    setOpenDropdown(null);
    setExpandedMobile(null);
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

  // Desktop mega-menu: close on Escape or on any click outside it
  useEffect(() => {
    if (!openDropdown) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenDropdown(null);
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-nav-dropdown]")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [openDropdown]);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const scheduleCloseMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 180);
  };

  const isActive = (href: string) =>
    href === pathname ||
    (href !== "/" &&
      pathname.startsWith(href.split("#")[0]) &&
      href !== "/#service-areas");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-slate-200/70 bg-white transition-shadow duration-300",
        scrolled && "shadow-sm",
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
          {navLinks.map((link) => {
            const hasMenu = (MEGA_MENU_LABELS as readonly string[]).includes(
              link.label,
            );

            if (!hasMenu) {
              return (
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
              );
            }

            const isOpen = openDropdown === link.label;

            return (
              <div
                key={link.label}
                data-nav-dropdown
                className="relative"
                onMouseEnter={() => openMenu(link.label)}
                onMouseLeave={scheduleCloseMenu}
              >
                <div
                  className={cn(
                    "flex items-center rounded-full text-sm font-semibold transition-colors",
                    isActive(link.href) || isOpen
                      ? "text-fort-green-700"
                      : "text-fort-navy/80 hover:text-fort-green-700",
                  )}
                >
                  <Link href={link.href} className="rounded-full py-2 pl-4 pr-1">
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((cur) => (cur === link.label ? null : link.label))
                    }
                    aria-label={`${link.label} menu`}
                    aria-expanded={isOpen}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full mr-1"
                  >
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </div>

                <div
                  className={cn(
                    "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200",
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0",
                  )}
                >
                  {link.label === "Services" ? (
                    <ServicesMenu onNavigate={() => setOpenDropdown(null)} />
                  ) : (
                    <BlogMenu onNavigate={() => setOpenDropdown(null)} />
                  )}
                </div>
              </div>
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
          {navLinks.map((link, i) => {
            const hasSub = (MEGA_MENU_LABELS as readonly string[]).includes(
              link.label,
            );

            if (!hasSub) {
              return (
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
              );
            }

            const expanded = expandedMobile === link.label;
            const subItems =
              link.label === "Services"
                ? services.map((s) => ({ key: s.slug, label: s.title, href: `/services#${s.slug}` }))
                : blogPosts.map((p) => ({ key: p.slug, label: p.title, href: `/blog/${p.slug}` }));

            return (
              <div
                key={link.label}
                style={{ transitionDelay: open ? `${i * 40 + 80}ms` : "0ms" }}
                className={cn(
                  "rounded-xl transition-all duration-300 ease-out",
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                  isActive(link.href)
                    ? "bg-fort-green-50 text-fort-green-700"
                    : "text-fort-navy",
                )}
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className="flex-1 rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:text-fort-green-700"
                  >
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setExpandedMobile(expanded ? null : link.label)}
                    aria-label={`${expanded ? "Collapse" : "Expand"} ${link.label}`}
                    aria-expanded={expanded}
                    className="flex h-11 w-11 shrink-0 items-center justify-center text-fort-navy/40 transition-colors hover:text-fort-green-700"
                  >
                    <ChevronDown
                      className={cn(
                        "h-4.5 w-4.5 transition-transform duration-300",
                        expanded && "rotate-180",
                      )}
                    />
                  </button>
                </div>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-0.5 py-1 pl-4">
                      {subItems.map((item) => (
                        <Link
                          key={item.key}
                          href={item.href}
                          className="rounded-lg px-4 py-2 text-sm font-medium text-fort-navy/70 transition-colors hover:bg-white hover:text-fort-green-700"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
