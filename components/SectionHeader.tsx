import type { ReactNode } from "react";
import RuleLine from "./RuleLine";

type SectionHeaderProps = {
  index: string;
  label: string;
  heading: ReactNode;
  subheading?: ReactNode;
  align?: "left" | "split";
  className?: string;
};

export default function SectionHeader({
  index,
  label,
  heading,
  subheading,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`relative ${className}`}>
      <div className="flex items-baseline justify-between gap-6 pb-3">
        <span className="caption">
          {index} <span className="text-[var(--color-muted)]">/ {label}</span>
        </span>
        <span aria-hidden className="caption text-[var(--color-muted)]">
          ⟶
        </span>
      </div>

      <RuleLine />

      {align === "split" ? (
        <div className="mt-12 grid grid-cols-12 gap-6 items-end">
          <h1 className="col-span-12 md:col-span-7 text-h1 max-w-[18ch]">
            {heading}
          </h1>
          {subheading && (
            <p className="col-span-12 md:col-span-5 text-body text-[var(--color-muted)] max-w-[42ch]">
              {subheading}
            </p>
          )}
        </div>
      ) : (
        <>
          <h1 className="mt-12 text-h1 max-w-[22ch]">{heading}</h1>
          {subheading && (
            <p className="mt-6 text-body max-w-[55ch] text-[var(--color-muted)]">
              {subheading}
            </p>
          )}
        </>
      )}
    </header>
  );
}
