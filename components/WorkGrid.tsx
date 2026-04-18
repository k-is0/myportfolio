"use client";

import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/types";
import { EASE_OUT_EDITORIAL } from "@/lib/motion";

type Props = {
  projects: Project[];
  className?: string;
};

const SPAN_CLASS: Record<number, string> = {
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  12: "md:col-span-12",
};

export default function WorkGrid({ projects, className = "" }: Props) {
  return (
    <div className={`grid grid-cols-12 gap-x-6 gap-y-24 md:gap-y-32 ${className}`}>
      {projects.map((project, i) => (
        <motion.div
          key={project.slug}
          className={`col-span-12 ${SPAN_CLASS[project.layout.span] ?? "md:col-span-6"}`}
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{
            duration: 0.7,
            ease: EASE_OUT_EDITORIAL,
            delay: (i % 2) * 0.08,
          }}
        >
          <ProjectCard project={project} index={i} />
        </motion.div>
      ))}
    </div>
  );
}
