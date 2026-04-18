import Link from "next/link";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="px-[var(--edge-gutter)] pt-24 pb-10 border-t border-[var(--color-rule)] mt-[var(--section-gap)]">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-baseline gap-3">
          <span className="font-bold tracking-[var(--tracking-wordmark)] text-[15px]">
            {profile.shortName}
          </span>
          <span className="caption text-[var(--color-muted)]">
            © {new Date().getFullYear()} · {profile.location}
          </span>
        </div>

        <div className="flex flex-wrap gap-6">
          <Link
            href="/contact"
            className="caption hover:text-[var(--color-accent)] transition-colors"
          >
            Get in touch ⟶
          </Link>
          <a
            href="#top"
            className="caption text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            Top ⟵
          </a>
        </div>
      </div>

      <p className="caption text-[var(--color-muted)] mt-12 max-w-[40ch]">
        {profile.signoff}
      </p>
    </footer>
  );
}
