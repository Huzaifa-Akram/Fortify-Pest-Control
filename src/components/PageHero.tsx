import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function PageHero({
  title,
  subtitle,
  crumb,
}: {
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-fort-navy text-white">
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      <div className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-fort-green/15 blur-3xl" />
      <Container className="relative py-16 sm:py-20">
        <nav className="flex items-center gap-1.5 text-sm text-fort-navy-100/80">
          <Link href="/" className="transition-colors hover:text-fort-green-300">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-fort-green-300">{crumb}</span>
        </nav>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fort-navy-100">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
