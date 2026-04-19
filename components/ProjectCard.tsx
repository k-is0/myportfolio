import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import ProjectPlaceholder from "./ProjectPlaceholder";
import type { Project } from "@/lib/types";

type Props = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index }: Props) {
  const { slug, title, year, category, descriptor, cover, layout } = project;

  return (
    <Link
      href={`/work/${slug}`}
      className="group block"
      data-cursor="hover"
    >
      <ViewTransition name={`project-${slug}`} share="morph">
        <div
          className="relative overflow-hidden bg-[var(--color-ink)]"
          style={{ aspectRatio: layout.aspect }}
        >
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            {cover.kind === "placeholder" ? (
              <ProjectPlaceholder pattern={cover.pattern} />
            ) : (
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                sizes={`(min-width: 1024px) ${Math.round((layout.span / 12) * 100)}vw, 100vw`}
                className="object-cover"
                priority={index === 0}
              />
            )}
          </div>

          <div className="absolute bottom-5 right-5 caption text-[var(--color-paper)] opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
            View ⟶
          </div>

          <div className="absolute top-5 left-5 caption text-[var(--color-paper)] opacity-70">
            {String((index ?? 0) + 1).padStart(2, "0")}
          </div>
        </div>
      </ViewTransition>

      <div className="mt-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-h3">
            <span className="relative inline-block">
              {title}
              <span
                aria-hidden
                className="absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </span>
          </h2>
          <span className="caption text-[var(--color-muted)] tabular-nums">
            {year}
          </span>
        </div>
        <p className="mt-3 max-w-[48ch] text-[var(--color-muted)]" style={{ fontSize: "var(--text-body-sm)" }}>
          {descriptor}
        </p>
        <p className="caption mt-4 text-[var(--color-muted)]">{category}</p>
      </div>
    </Link>
  );
}
