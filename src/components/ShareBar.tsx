"use client";

import { useState } from "react";
import { Check, Link2, Mail } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.119 20.452H3.554V9h3.565v11.452z" />
    </svg>
  );
}

export default function ShareBar({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const [copied, setCopied] = useState(false);
  const url = `https://fortifypest.ca/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on Facebook",
      Icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "Share on X",
      Icon: XIcon,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: "Share on LinkedIn",
      Icon: LinkedInIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Share via Email",
      Icon: Mail,
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — nothing to fall back to.
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 text-sm font-bold text-fort-navy">Share:</span>
      {links.map(({ label, Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors duration-200 hover:bg-fort-green-50 hover:text-fort-green-700"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors duration-200 hover:bg-fort-green-50 hover:text-fort-green-700"
      >
        {copied ? (
          <Check className="h-4 w-4 text-fort-green-600" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
