"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/types";
import { EASE_OUT_EDITORIAL } from "@/lib/motion";

type Props = {
  projects: Project[];
  className?: string;
};

export default function IndexList({ projects, className = "" }: Props) {
  const sorted = [...projects].sort(
    (a, b) => b.year - a.year || a.title.localeCompare(b.title)
  );

  return (
    <ul
      className={`border-y border-[var(--color-rule)] ${className}`}
      aria-label="All projects by year"
    >
      {sorted.map((p, i) => (
        <motion.li
          key={p.slug}
          className="border-b border-[var(--color-rule)] last:border-b-0"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          transition={{
            duration: 0.5,
            ease: EASE_OUT_EDITORIAL,
            delay: Math.min(i * 0.04, 0.2),
          }}
        >
          <Link
            href={`/work/${p.slug}`}
            data-cursor="hover"
            aria-label={`${p.year} — ${p.title} — ${p.category}`}
            className="group grid grid-cols-12 gap-x-4 gap-y-2 md:gap-y-0 md:items-baseline px-3 -mx-3 py-5 md:py-8 transition-colors duration-300 ease-out hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
          >
            <span className="col-span-11 md:col-span-1 caption tabular-nums opacity-60 transition-opacity duration-300 group-hover:opacity-100">
              {p.year}
            </span>
            <span
              aria-hidden
              className="col-span-1 md:col-start-12 text-right text-h3 opacity-60 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-1"
            >
              ⟶
            </span>
            <span className="col-span-12 md:col-span-7 md:col-start-2 text-h3 leading-tight">
              {p.title}
            </span>
            <span className="col-span-12 md:col-span-3 md:col-start-9 caption opacity-60 transition-opacity duration-300 group-hover:opacity-100">
              {p.category}
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
