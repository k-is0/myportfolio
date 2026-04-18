"use client";

import { useState } from "react";
import { profile } from "@/content/profile";

const ROWS = [
  { label: "Linkedin", href: profile.links.linkedin, display: "linkedin.com/in/kevin" },
  { label: "Github", href: profile.links.github, display: "github.com/kevin" },
];

export default function ContactPanel({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className={className}>
      <div className="grid grid-cols-12 gap-6 items-baseline">
        <span className="col-span-12 md:col-span-2 caption text-[var(--color-muted)]">
          Email
        </span>
        <div className="col-span-12 md:col-span-10">
          <button
            type="button"
            onClick={copyEmail}
            className="group block text-left"
            aria-label={`Copy email address ${profile.email} to clipboard`}
          >
            <span className="text-h1 relative inline-block">
              {profile.email}
              <span className="absolute left-0 -bottom-1 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </span>
          </button>
          <span
            aria-live="polite"
            className={`caption mt-3 inline-block transition-opacity duration-200 ${
              copied ? "opacity-100" : "opacity-0"
            }`}
            style={{ color: "var(--color-accent)" }}
          >
            Copied to clipboard
          </span>
        </div>
      </div>

      <div className="mt-16 border-t border-[var(--color-rule)]">
        {ROWS.map(({ label, href, display }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="grid grid-cols-12 gap-6 items-baseline py-6 border-b border-[var(--color-rule)] group"
          >
            <span className="col-span-12 md:col-span-2 caption text-[var(--color-muted)]">
              {label}
            </span>
            <span className="col-span-10 md:col-span-9 text-h3 group-hover:text-[var(--color-accent)] transition-colors">
              {display}
            </span>
            <span className="col-span-2 md:col-span-1 text-h3 text-right text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
              ⟶
            </span>
          </a>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <p className="caption text-[var(--color-muted)] mb-2">Location</p>
          <p className="text-body">{profile.location}</p>
        </div>
        <div className="col-span-12 md:col-span-4">
          <p className="caption text-[var(--color-muted)] mb-2">Response</p>
          <p className="text-body">Typically within a few days.</p>
        </div>
      </div>
    </div>
  );
}
