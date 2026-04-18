"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { EASE_OUT_EDITORIAL } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  distance = 16,
  duration = 0.6,
  once = true,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ y: distance, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once, margin: "0px 0px -8% 0px" }}
      transition={{ duration, ease: EASE_OUT_EDITORIAL, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
