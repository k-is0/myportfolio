"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT_EDITORIAL } from "@/lib/motion";

export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ ease: EASE_OUT_EDITORIAL, duration: 0.6 }}
    >
      {children}
    </MotionConfig>
  );
}
