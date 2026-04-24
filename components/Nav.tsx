"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import PianoMark from "./PianoMark";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/archive", label: "Index" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-50 h-[var(--nav-height)] bg-[var(--color-paper)] transition-[border-color] duration-300 ${
        scrolled ? "border-b border-[var(--color-rule)]" : "border-b border-transparent"
      }`}
    >
      <div
        className="flex h-full items-center justify-between px-[var(--edge-gutter)]"
        style={{ gap: "clamp(0.75rem, 4vw, 2.25rem)" }}
      >
        <Link
          href="/"
          aria-label={`${profile.shortName} — home`}
          className="group inline-flex items-center shrink-0"
          style={{ gap: "clamp(0.375rem, 1.4vw, 0.625rem)" }}
        >
          <span
            className="font-bold tracking-[var(--tracking-wordmark)]"
            style={{ fontSize: "var(--wordmark-size)" }}
          >
            {profile.shortName}
          </span>
          <PianoMark
            height={12}
            className="text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]"
            ariaLabel=""
          />
        </Link>

        <ul
          className="flex items-center"
          style={{ gap: "clamp(0.75rem, 3.2vw, 2.25rem)" }}
        >
          {NAV_LINKS.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`caption transition-colors duration-200 hover:text-[var(--color-accent)] ${
                    active
                      ? "relative text-[var(--color-ink)] after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-[var(--color-ink)]"
                      : "text-[var(--color-muted)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
