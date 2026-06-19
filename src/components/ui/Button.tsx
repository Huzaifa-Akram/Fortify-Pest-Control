import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "navy" | "outline" | "white";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-fort-green disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-fort-green text-white shadow-soft hover:bg-fort-green-600 hover:-translate-y-0.5",
  navy: "bg-fort-navy text-white hover:bg-fort-navy-500 hover:-translate-y-0.5",
  outline:
    "border-2 border-fort-navy/15 text-fort-navy hover:border-fort-green hover:text-fort-green",
  white:
    "bg-white text-fort-navy shadow-soft hover:-translate-y-0.5 hover:text-fort-green",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
