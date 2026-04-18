"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import PianoMark from "./PianoMark";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/index", label: "Index" },
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
      className={`fixed inset-x-0 top-0 z-50 h-16 bg-[var(--color-paper)] transition-[border-color] duration-300 ${
        scrolled ? "border-b border-[var(--color-rule)]" : "border-b border-transparent"
      }`}
    >
      <div className="flex h-full items-center justify-between px-[var(--edge-gutter)]">
        <Link
          href="/"
          aria-label={`${profile.shortName} — home`}
          className="group inline-flex items-center gap-2.5"
        >
          <span className="font-bold tracking-[var(--tracking-wordmark)] text-[15px]">
            {profile.shortName}
          </span>
          <PianoMark
            height={12}
            className="text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]"
            ariaLabel=""
          />
        </Link>

        <ul className="flex items-center gap-7 sm:gap-9">
          {NAV_LINKS.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="caption transition-colors duration-200 hover:text-[var(--color-accent)]"
                  style={{ color: active ? "var(--color-accent)" : undefined }}
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
