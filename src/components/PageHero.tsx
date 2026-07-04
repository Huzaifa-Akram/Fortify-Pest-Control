import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export default function PageHero({
  title,
  subtitle,
  crumb,
  image,
  imagePosition = "object-top-right",
}: {
  title: string;
  subtitle?: string;
  crumb: string;
  image?: string;
  imagePosition?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-fort-navy text-white">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className={cn("object-cover", imagePosition)}
          />
          <div className="absolute inset-0 bg-linear-to-r from-fort-navy-900/65 via-fort-navy-900/45 to-fort-navy-900/15" />
          <div className="absolute inset-0 bg-linear-to-t from-fort-navy/65 via-fort-navy/5 to-transparent" />
        </div>
      )}
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      <div className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-fort-green/15 blur-3xl" />
      <Container
        className={cn(
          "relative",
          image ? "py-16 sm:py-24 lg:py-28" : "py-16 sm:py-20",
        )}
      >
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
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fort-navy-100 text-balance">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
