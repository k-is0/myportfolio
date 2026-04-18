"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import type { ProjectBodyBlock } from "@/lib/types";

export default function ProjectBody({
  blocks,
}: {
  blocks: ReadonlyArray<ProjectBodyBlock>;
}) {
  return (
    <div className="space-y-10">
      {blocks.map((block, i) => {
        if (block.kind === "para") {
          return (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.2)}>
              <p className="text-body max-w-[60ch]">{block.text}</p>
            </Reveal>
          );
        }
        if (block.kind === "quote") {
          return (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.2)}>
              <figure className="relative pl-6 my-6 max-w-[44ch] border-l border-[var(--color-ink)]">
                <blockquote>
                  <p className="text-h3 leading-snug">“{block.text}”</p>
                </blockquote>
                {block.cite && (
                  <figcaption className="caption text-[var(--color-muted)] mt-4">
                    — {block.cite}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          );
        }
        if (block.kind === "image") {
          return (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.2)}>
              <figure className="my-4">
                <div className="relative bg-[var(--color-ink)] overflow-hidden">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={block.width}
                    height={block.height}
                    className="w-full h-auto"
                  />
                </div>
                {block.caption && (
                  <figcaption className="caption text-[var(--color-muted)] mt-3">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          );
        }
        return null;
      })}
    </div>
  );
}
