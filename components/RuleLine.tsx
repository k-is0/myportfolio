"use client";

import { motion } from "motion/react";
import { EASE_OUT_EDITORIAL } from "@/lib/motion";

type RuleLineProps = {
  delay?: number;
  duration?: number;
  className?: string;
  weight?: "hair" | "regular";
  bleed?: "right" | "both" | "none";
};

export default function RuleLine({
  delay = 0,
  duration = 0.9,
  className = "",
  weight = "hair",
  bleed = "right",
}: RuleLineProps) {
  const heightClass = weight === "hair" ? "h-px" : "h-[2px]";
  const bleedClass =
    bleed === "right"
      ? "mr-[calc(var(--edge-gutter)*-1)]"
      : bleed === "both"
        ? "mx-[calc(var(--edge-gutter)*-1)]"
        : "";
  return (
    <motion.div
      aria-hidden
      className={`${heightClass} bg-[var(--color-ink)] origin-left ${bleedClass} ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration, ease: EASE_OUT_EDITORIAL, delay }}
    />
  );
}
