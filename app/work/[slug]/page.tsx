import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import {
  projects,
  featuredProjects,
  getProject,
  getAdjacentProjects,
} from "@/content/projects";
import ProjectPlaceholder from "@/components/ProjectPlaceholder";
import ProjectBody from "@/components/ProjectBody";
import RuleLine from "@/components/RuleLine";

type Params = { slug: string };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.descriptor,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const adjacent = getAdjacentProjects(slug);
  const position = featuredProjects.findIndex((p) => p.slug === slug);
  const index = (position + 1).toString().padStart(2, "0");

  const metaRows: { term: string; desc?: string }[] = [
    { term: "Year", desc: String(project.year) },
    { term: "Role", desc: project.role },
    { term: "Client", desc: project.client },
    { term: "Category", desc: project.category },
  ];

  return (
    <article className="pb-[var(--section-gap)]">
      <header className="px-[var(--edge-gutter)] pt-8">
        <Link
          href="/work"
          className="caption text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-ink)]"
        >
          ⟵ Back to work
        </Link>

        <div className="mt-12 flex items-baseline justify-between gap-6 pb-3">
          <span className="caption">
            {index}{" "}
            <span className="text-[var(--color-muted)]">
              / {project.category}
            </span>
          </span>
          <span className="caption text-[var(--color-muted)] tabular-nums">
            {project.year}
          </span>
        </div>

        <RuleLine />

        <h1 className="text-h1 mt-12 max-w-[26ch]">{project.title}</h1>
        <p className="text-h3 mt-6 max-w-[55ch] text-[var(--color-muted)]">
          {project.descriptor}
        </p>
      </header>

      <div className="px-[var(--edge-gutter)] mt-16 md:mt-20">
        <ViewTransition name={`project-${slug}`} share="morph">
          <div
            className="bg-[var(--color-ink)] overflow-hidden"
            style={{ aspectRatio: "16 / 9" }}
          >
            {project.cover.kind === "placeholder" ? (
              <ProjectPlaceholder pattern={project.cover.pattern} />
            ) : (
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                width={project.cover.width}
                height={project.cover.height}
                priority
                className="h-full w-full object-cover"
                sizes="100vw"
              />
            )}
          </div>
        </ViewTransition>
      </div>

      <div className="px-[var(--edge-gutter)] mt-20 md:mt-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <div className="col-span-12 md:col-span-7">
            {project.body && <ProjectBody blocks={project.body} />}
          </div>

          <aside className="col-span-12 md:col-span-4 md:col-start-9 md:sticky md:top-24 self-start">
            <dl className="border-y border-[var(--color-ink)]">
              {metaRows
                .filter((r) => r.desc)
                .map((r) => (
                  <div
                    key={r.term}
                    className="py-4 grid grid-cols-3 gap-4 border-b border-[var(--color-rule)] last:border-b-0"
                  >
                    <dt className="caption text-[var(--color-muted)]">
                      {r.term}
                    </dt>
                    <dd
                      className="col-span-2"
                      style={{ fontSize: "var(--text-body-sm)" }}
                    >
                      {r.desc}
                    </dd>
                  </div>
                ))}

              {project.tools && project.tools.length > 0 && (
                <div className="py-4 border-b border-[var(--color-rule)] last:border-b-0 grid grid-cols-3 gap-4">
                  <dt className="caption text-[var(--color-muted)]">Tools</dt>
                  <dd className="col-span-2 flex flex-wrap gap-x-4 gap-y-1">
                    {project.tools.map((t) => (
                      <span key={t} className="caption">
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </div>

      {adjacent && (
        <nav
          className="px-[var(--edge-gutter)] mt-32 pt-12 border-t border-[var(--color-rule)]"
          aria-label="Project navigation"
        >
          <div className="grid grid-cols-2 gap-6">
            <Link
              href={`/work/${adjacent.prev.slug}`}
              className="group block"
              data-cursor="hover"
            >
              <span className="caption text-[var(--color-muted)] block mb-3">
                ⟵ Previous
              </span>
              <span className="text-h3 transition-colors duration-200 group-hover:text-[var(--color-accent)]">
                {adjacent.prev.title}
              </span>
            </Link>
            <Link
              href={`/work/${adjacent.next.slug}`}
              className="group block text-right"
              data-cursor="hover"
            >
              <span className="caption text-[var(--color-muted)] block mb-3">
                Next ⟶
              </span>
              <span className="text-h3 transition-colors duration-200 group-hover:text-[var(--color-accent)]">
                {adjacent.next.title}
              </span>
            </Link>
          </div>
        </nav>
      )}
    </article>
  );
}
