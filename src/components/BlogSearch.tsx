"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, SearchX } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/lib/blog";

export default function BlogSearch({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <div>
      {/* Search + category toolbar */}
      <Reveal className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-card sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles — bed bugs, rodents, wasp nests…"
            className="w-full rounded-xl border border-transparent bg-slate-50 py-3 pl-11 pr-4 text-sm text-fort-navy placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-fort-green-300 focus:bg-white focus:ring-4 focus:ring-fort-green-100"
          />
        </div>
        <div className="relative sm:w-60">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full cursor-pointer appearance-none rounded-xl border border-transparent bg-slate-50 py-3 pl-4 pr-10 text-sm font-semibold text-fort-navy outline-none transition-all duration-200 focus:border-fort-green-300 focus:bg-white focus:ring-4 focus:ring-fort-green-100"
          >
            <option value="All">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </Reveal>

      {/* Results meta */}
      <div className="mt-10 flex items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-fort-green-700">
            {category === "All" ? "Browse All" : category}
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-fort-navy sm:text-3xl">
            Latest Articles
          </h2>
        </div>
        <p className="hidden text-sm font-semibold text-slate-500 sm:block">
          {filtered.length} of {posts.length} articles
        </p>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 80} className="h-full">
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center gap-3 rounded-3xl border border-dashed border-slate-200 bg-white/60 py-16 text-center">
          <SearchX className="h-8 w-8 text-slate-300" />
          <p className="font-semibold text-fort-navy">
            No articles match your search.
          </p>
          <p className="text-sm text-slate-500">
            Try a different keyword or category.
          </p>
          <button
            onClick={clearFilters}
            className="mt-2 rounded-full bg-fort-green px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-fort-green-600"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
