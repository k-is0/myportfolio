"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { profile } from "@/content/profile";
import { EASE_OUT_EDITORIAL, EASE_IN_OUT_EDITORIAL } from "@/lib/motion";

const LINKS = [
  { href: "/work", index: "01", label: "Work" },
  { href: "/about", index: "02", label: "About" },
  { href: "/archive", index: "03", label: "Index" },
  { href: "/contact", index: "04", label: "Contact" },
] as const;

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-40 bg-[var(--color-paper)] pt-[var(--nav-height)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE_IN_OUT_EDITORIAL }}
        >
          <div className="flex h-full flex-col px-[var(--edge-gutter)] pb-10 pt-8 overflow-y-auto">
            <ul className="flex flex-col">
              {LINKS.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: EASE_OUT_EDITORIAL,
                      delay: 0.08 + i * 0.05,
                    }}
                    className="border-b border-[var(--color-rule)] first:border-t"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-baseline justify-between gap-4 py-5"
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="caption text-[var(--color-muted)] tabular-nums">
                          {link.index}
                        </span>
                        <span
                          className={`text-h1 transition-colors duration-200 ${
                            active ? "text-[var(--color-ink)]" : "text-[var(--color-ink)]"
                          }`}
                        >
                          {link.label}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="text-h3 text-[var(--color-muted)] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        {active ? "●" : "⟶"}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              className="mt-auto pt-12 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: EASE_OUT_EDITORIAL,
                delay: 0.08 + LINKS.length * 0.05,
              }}
            >
              <div>
                <p className="caption text-[var(--color-muted)] mb-2">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  onClick={onClose}
                  className="hover:text-[var(--color-accent)] transition-colors"
                  style={{ fontSize: "var(--text-body-sm)" }}
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="caption text-[var(--color-muted)] mb-2">Location</p>
                <p style={{ fontSize: "var(--text-body-sm)" }}>{profile.location}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
