import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ContactPanel from "@/components/ContactPanel";
import Highlight from "@/components/Highlight";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Email ${profile.email} or find Kevin on LinkedIn and Github.`,
};

export default function ContactPage() {
  return (
    <div className="px-[var(--edge-gutter)] pt-16 pb-[var(--section-gap)]">
      <SectionHeader
        index="04"
        label="Contact"
        heading={
          <>
            <Highlight animated delay={0.55}>Email</Highlight>{" "}
            is the fastest way through.
          </>
        }
        subheading="Open to project work, conversations, and the occasional collaboration. London-based, comfortable working remotely."
        align="split"
      />

      <ContactPanel className="mt-32" />
    </div>
  );
}
