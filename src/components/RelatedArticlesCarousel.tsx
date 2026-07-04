"use client";

import { useEffect, useRef } from "react";
import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/lib/blog";

/** Repeats the post list so the strip is long enough to scroll seamlessly in a loop. */
function buildLoop(posts: BlogPost[]) {
  if (posts.length === 0) return [];
  const repeats = Math.max(2, Math.ceil(6 / posts.length));
  return Array.from({ length: repeats }, () => posts).flat();
}

export default function RelatedArticlesCarousel({
  posts,
}: {
  posts: BlogPost[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loop = buildLoop(posts);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || loop.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // The carousel is only rendered (via sm:hidden) below the sm breakpoint.
    if (window.matchMedia("(min-width: 640px)").matches) return;

    let frame: number;
    const speed = 0.5;

    const step = () => {
      if (!pausedRef.current) {
        const half = track.scrollWidth / 2;
        track.scrollLeft += speed;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [loop.length]);

  if (loop.length === 0) return null;

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const resume = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 1800);
  };

  return (
    <div
      ref={trackRef}
      onPointerEnter={pause}
      onPointerLeave={resume}
      onPointerCancel={resume}
      className="no-scrollbar flex touch-pan-x gap-5 overflow-x-auto pb-2"
    >
      {loop.map((relatedPost, i) => (
        <BlogCard key={`${relatedPost.slug}-${i}`} post={relatedPost} compact />
      ))}
    </div>
  );
}
