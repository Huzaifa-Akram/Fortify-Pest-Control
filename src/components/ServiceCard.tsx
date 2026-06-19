import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/site";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-fort-green-200 hover:shadow-soft"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-fort-green-50 text-fort-green-600 transition-colors duration-300 group-hover:bg-fort-green group-hover:text-white">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-fort-navy">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {service.short}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-fort-green-700">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
