"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { profile } from "@/content/profile";
import Highlight from "./Highlight";
import { EASE_OUT_EDITORIAL } from "@/lib/motion";

const STAGGER = 0.06;
const DURATION = 0.6;

const fadeUp = (i: number) => ({
  initial: { y: 14, opacity: 1 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: DURATION,
    ease: EASE_OUT_EDITORIAL,
    delay: i * STAGGER,
  },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-var(--nav-height))] flex flex-col justify-between px-[var(--edge-gutter)] pt-16 pb-12"
    >
      <div>
        <motion.p
          {...fadeUp(0)}
          className="caption text-[var(--color-muted)]"
        >
          01 — Index of work, in motion since 2018
        </motion.p>
      </div>

      <div className="py-12">
        <h1
          className="text-display leading-[0.9]"
          style={{ viewTransitionName: "wordmark" }}
        >
          {profile.shortName}
        </h1>

        <motion.div
          {...fadeUp(3)}
          className="mt-12 grid grid-cols-12 gap-6"
        >
          <p className="col-span-12 md:col-span-7 lg:col-span-6 text-h2 max-w-[28ch]">
            Design engineer working on{" "}
            <Highlight animated delay={1.0}>cleantech hardware</Highlight>{" "}
            and product systems.{" "}
            <Highlight animated delay={1.25}>Concert pianist</Highlight>{" "}
            on the side. Based in London.
          </p>
          <div className="col-span-12 md:col-span-5 lg:col-span-4 md:col-start-8 lg:col-start-9 self-end">
            <p className="caption text-[var(--color-muted)] mb-3">Status</p>
            <p className="text-body max-w-[28ch]">
              Available for new projects from June 2026. Currently writing up
              the MSc thesis on ultrasonic microplastic separation.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="space-y-8">
        <motion.div
          aria-hidden
          className="h-px bg-[var(--color-ink)] origin-left mr-[calc(var(--edge-gutter)*-1)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1,
            ease: EASE_OUT_EDITORIAL,
            delay: 4 * STAGGER,
          }}
        />

        <motion.div
          {...fadeUp(5)}
          className="flex flex-wrap items-baseline justify-between gap-6"
        >
          <Link
            href="/work"
            className="text-h2 inline-flex items-baseline gap-3 group"
          >
            Selected work
            <span className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
              ⟶
            </span>
          </Link>
          <span className="caption text-[var(--color-muted)]">
            Six projects · 2018 — 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
