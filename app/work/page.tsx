import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Highlight from "@/components/Highlight";
import WorkGrid from "@/components/WorkGrid";
import { featuredProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work: cleantech hardware, product design, simulation, medtech, additive manufacturing.",
};

export default function WorkPage() {
  return (
    <div className="px-[var(--edge-gutter)] pt-16 pb-[var(--section-gap)]">
      <SectionHeader
        index="01"
        label="Selected work"
        heading={
          <>
            Seven projects at the intersection of engineering, design, and{" "}
            <Highlight animated delay={0.55}>performance</Highlight>.
          </>
        }
        subheading="Each one is a different way of asking: what do you do when the system you have isn't the system you need?"
        align="split"
      />

      <WorkGrid projects={featuredProjects} className="mt-32 md:mt-40" />
    </div>
  );
}
