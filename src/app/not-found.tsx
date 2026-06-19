import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <Container className="flex flex-col items-center text-center">
        <span className="text-6xl font-extrabold text-fort-green-600">404</span>
        <h1 className="mt-4 text-3xl font-extrabold text-fort-navy sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back to safety.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Looking for something specific?{" "}
          <Link href="/services" className="font-semibold text-fort-green-700">
            Browse our services
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
