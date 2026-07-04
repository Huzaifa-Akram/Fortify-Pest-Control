import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import BlogCard from "@/components/BlogCard";
import RelatedArticlesCarousel from "@/components/RelatedArticlesCarousel";
import ShareBar from "@/components/ShareBar";
import { blogPosts, formatBlogDate } from "@/lib/blog";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://fortifypest.ca${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: site.name,
      url: "https://fortifypest.ca",
    },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `https://fortifypest.ca/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden bg-fort-navy text-white">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-fort-navy/85 via-fort-navy/55 to-fort-navy/25" />
        </div>
        <Container className="relative py-16 sm:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-fort-navy-100 transition-colors hover:text-fort-green-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <h1 className="mt-5 max-w-3xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-5 text-sm font-semibold text-fort-navy-100">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatBlogDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-6xl">
            <Reveal className="space-y-6">
              {post.body.map((block, i) =>
                block.startsWith("## ") ? (
                  <h2
                    key={i}
                    className="!mt-12 border-l-4 border-fort-green pl-4 text-xl font-extrabold tracking-tight text-fort-navy sm:text-2xl"
                  >
                    {block.slice(3)}
                  </h2>
                ) : i === 0 ? (
                  <p
                    key={i}
                    className="text-lg font-medium leading-relaxed text-slate-700 sm:text-xl"
                  >
                    {block}
                  </p>
                ) : (
                  <p
                    key={i}
                    className="text-base leading-loose text-slate-600 sm:text-lg"
                  >
                    {block}
                  </p>
                ),
              )}
            </Reveal>

            {/* Tags & share */}
            <Reveal
              delay={40}
              className="mt-10 flex flex-col gap-5 border-y border-slate-100 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-fort-navy">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ShareBar title={post.title} slug={post.slug} />
            </Reveal>

            <Reveal
              delay={80}
              className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-slate-100 bg-slate-50/70 px-7 py-8 text-center sm:flex-row sm:text-left"
            >
              <div>
                <p className="text-lg font-bold text-fort-navy">
                  Dealing with a pest problem?
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Book a free inspection and get a tailored treatment plan.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button href="/contact">Book a Free Inspection</Button>
                <Button href={site.phoneHref} variant="outline">
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Related articles */}
          <div className="mt-16 max-w-6xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-fort-navy">
              Related articles
            </h2>
            <div className="mt-8 sm:hidden">
              <RelatedArticlesCarousel posts={related} />
            </div>
            <div className="mt-8 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedPost, i) => (
                <Reveal
                  key={relatedPost.slug}
                  delay={i * 80}
                  className="h-full"
                >
                  <BlogCard post={relatedPost} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
