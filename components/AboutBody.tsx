import Reveal from "./Reveal";
import { about } from "@/content/about";

type LabelRow = { period: string; label: string; where: string };

function MetaList({
  title,
  rows,
}: {
  title: string;
  rows: ReadonlyArray<LabelRow>;
}) {
  return (
    <div>
      <p className="caption text-[var(--color-muted)] pb-4 border-b border-[var(--color-rule)]">
        {title}
      </p>
      <ul className="divide-y divide-[var(--color-rule)]">
        {rows.map(({ period, label, where }) => (
          <li key={`${period}-${label}`} className="py-4 grid grid-cols-12 gap-2">
            <span className="col-span-3 caption text-[var(--color-muted)] tabular-nums">
              {period}
            </span>
            <div className="col-span-9">
              <p style={{ fontSize: "var(--text-body-sm)" }}>{label}</p>
              <p className="caption text-[var(--color-muted)] mt-1">{where}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutBody({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-12 gap-x-6 gap-y-16 ${className}`}>
      <div className="col-span-12 md:col-span-7 space-y-8">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="text-body max-w-[60ch] first:text-h3 first:max-w-[42ch]">
              {p}
            </p>
          </Reveal>
        ))}
      </div>

      <aside className="col-span-12 md:col-span-5 md:col-start-9 space-y-12">
        <Reveal>
          <div>
            <p className="caption text-[var(--color-muted)] pb-4 border-b border-[var(--color-rule)]">
              Now
            </p>
            <ul className="space-y-3 pt-4">
              {about.now.map((line) => (
                <li
                  key={line}
                  className="flex gap-3"
                  style={{ fontSize: "var(--text-body-sm)" }}
                >
                  <span className="text-[var(--color-muted)] tabular-nums">
                    ·
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <MetaList title="Education" rows={about.education} />
        </Reveal>

        <Reveal delay={0.16}>
          <MetaList title="Performance" rows={about.performances} />
        </Reveal>

        <Reveal delay={0.24}>
          <div>
            <p className="caption text-[var(--color-muted)] pb-4 border-b border-[var(--color-rule)]">
              Tools
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-4">
              {about.tools.map((t) => (
                <li
                  key={t}
                  className="caption text-[var(--color-ink)]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </aside>
    </div>
  );
}
