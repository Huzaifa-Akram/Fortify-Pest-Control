import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const baseUrl = "https://fortifypest.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/contact", "/blog"];
  const now = new Date();

  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
