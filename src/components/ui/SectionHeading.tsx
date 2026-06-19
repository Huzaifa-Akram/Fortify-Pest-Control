import { cn } from "@/lib/cn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider",
            light
              ? "bg-white/10 text-fort-green-200"
              : "bg-fort-green-50 text-fort-green-700",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-fort-green" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl",
          light ? "text-white" : "text-fort-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-fort-navy-100" : "text-slate-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
