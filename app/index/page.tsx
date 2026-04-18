import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import IndexList from "@/components/IndexList";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Index",
  description: "Every project, listed by year and discipline.",
};

export default function IndexPage() {
  return (
    <div className="px-[var(--edge-gutter)] pt-16 pb-[var(--section-gap)]">
      <SectionHeader
        index="03"
        label="Index"
        heading="Every project, listed."
        subheading="A flat typographic record. Year, title, discipline. Click any row for the writeup."
        align="split"
      />

      <div className="mt-32 md:mt-40">
        <div className="grid grid-cols-12 gap-4 pb-4 border-b border-[var(--color-ink)]">
          <span className="col-span-2 md:col-span-1 caption text-[var(--color-muted)]">
            Year
          </span>
          <span className="col-span-7 md:col-span-7 caption text-[var(--color-muted)]">
            Title
          </span>
          <span className="col-span-2 md:col-span-3 caption text-[var(--color-muted)]">
            Discipline
          </span>
          <span className="col-span-1 caption text-[var(--color-muted)] text-right">
            Link
          </span>
        </div>

        <IndexList projects={projects} className="mt-0" />

        <p className="caption text-[var(--color-muted)] mt-10">
          {projects.length} projects · sorted newest first
        </p>
      </div>
    </div>
  );
}
