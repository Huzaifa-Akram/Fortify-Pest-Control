import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function BlogMarquee() {
  // Grab the latest 8 posts for the marquee
  const latestPosts = blogPosts.slice(0, 8);

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Latest Articles"
          title="Pest control insights & tips"
        />

        {/* Marquee Wrapper with fade effect to balance padding */}
        <div className="relative mt-12 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] group py-4">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...latestPosts, ...latestPosts].map((post, i) => (
              <div key={`${post.slug}-${i}`} className="px-3">
                <BlogCard post={post} compact />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/blog" variant="navy" size="lg">
            View All Articles
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
