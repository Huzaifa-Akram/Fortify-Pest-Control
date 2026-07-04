import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatBlogDate, type BlogPost } from "@/lib/blog";

export default function BlogCard({
  post,
  compact = false,
}: {
  post: BlogPost;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group flex w-60 shrink-0 flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-900/5 shadow-card transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-soft hover:ring-fort-green-200 sm:w-68"
      >
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="272px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-fort-navy/0 transition-colors duration-500 group-hover:bg-fort-navy/10" />
        </div>

        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
            <span>{formatBlogDate(post.date)}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>{post.readTime}</span>
          </div>

          <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-snug text-fort-navy transition-colors duration-300 group-hover:text-fort-green-700">
            {post.title}
          </h3>

          <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-fort-green-700">
            Read More
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-900/5 shadow-card transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-soft hover:ring-fort-green-200"
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-fort-navy/0 transition-colors duration-500 group-hover:bg-fort-navy/10" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <span>{formatBlogDate(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-snug text-fort-navy transition-colors duration-300 group-hover:text-fort-green-700">
          {post.title}
        </h3>

        <p className="mt-2.5 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {post.category}
          </span>
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-fort-green-700">
          Read More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
