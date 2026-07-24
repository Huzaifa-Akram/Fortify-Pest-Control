import Container from "@/components/ui/Container";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/sections/CTASection";
import BlogSearch from "@/components/BlogSearch";
import JsonLd from "@/components/JsonLd";
import { blogCategories, blogPosts } from "@/lib/blog";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Pest control tips, seasonal guides, and prevention advice from Fortify Pest Control — serving Winnipeg and Manitoba.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        crumb="Blog"
        title="Pest control tips, guides & news"
        subtitle="Seasonal advice, prevention tips, and pest facts from our certified technicians — helping you keep your home and business protected year-round."
        image="/blog-hero.jpg"
      />

      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-28 top-0 h-72 w-72 rounded-full bg-fort-green/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-fort-navy/5 blur-3xl" />

        <Container className="relative">
          <BlogSearch posts={blogPosts} categories={blogCategories} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
