"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { EASE_IN_OUT_EDITORIAL } from "@/lib/motion";

type HighlightProps = {
  children: ReactNode;
  animated?: boolean;
  delay?: number;
  duration?: number;
  className?: string;
};

const STATIC_BOX: CSSProperties = {
  boxDecorationBreak: "clone",
  WebkitBoxDecorationBreak: "clone",
  padding: "0.05em 0.12em",
  margin: "0 -0.04em",
  borderRadius: "1px",
};

export default function Highlight({
  children,
  animated = false,
  delay = 0,
  duration = 0.7,
  className = "",
}: HighlightProps) {
  const reduced = useReducedMotion();

  if (!animated || reduced) {
    return (
      <span
        className={`bg-[var(--color-ink)] text-[var(--color-paper)] ${className}`}
        style={STATIC_BOX}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`relative inline-grid align-baseline ${className}`}
      style={{ gridTemplateColumns: "auto" }}
    >
      <span className="col-start-1 row-start-1">{children}</span>
      <motion.span
        aria-hidden
        className="col-start-1 row-start-1 bg-[var(--color-ink)] text-[var(--color-paper)]"
        style={{ borderRadius: "1px" }}
        initial={{ clipPath: "inset(-12% 100% -12% 0%)" }}
        whileInView={{ clipPath: "inset(-12% 0% -12% 0%)" }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration, ease: EASE_IN_OUT_EDITORIAL, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
