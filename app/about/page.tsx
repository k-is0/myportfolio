import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Highlight from "@/components/Highlight";
import AboutBody from "@/components/AboutBody";

export const metadata: Metadata = {
  title: "About",
  description:
    "MSc Design Engineering at Imperial College London's Dyson School. Concert pianist on the side.",
};

export default function AboutPage() {
  return (
    <div className="px-[var(--edge-gutter)] pt-16 pb-[var(--section-gap)]">
      <SectionHeader
        index="02"
        label="About"
        heading="Two disciplines held side by side."
        subheading={
          <>
            Engineering by training;{" "}
            <Highlight animated delay={0.55}>piano</Highlight>{" "}
            since I could reach the pedals. The two have more in common than
            people assume.
          </>
        }
        align="split"
      />

      <AboutBody className="mt-32 md:mt-40" />
    </div>
  );
}
