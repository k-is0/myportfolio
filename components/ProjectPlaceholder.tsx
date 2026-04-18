import type { PlaceholderPattern } from "@/lib/types";

type Props = {
  pattern: PlaceholderPattern;
  className?: string;
};

export default function ProjectPlaceholder({ pattern, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
      aria-hidden
    >
      <rect width="400" height="500" fill="var(--color-ink)" />
      {pattern === "rings" && <Rings />}
      {pattern === "beacon" && <Beacon />}
      {pattern === "wireframe" && <Wireframe />}
      {pattern === "curve" && <Curve />}
      {pattern === "lattice" && <Lattice />}
      {pattern === "grip" && <Grip />}
    </svg>
  );
}

const ink = "var(--color-ink)";
const paper = "var(--color-paper)";

function Rings() {
  return (
    <g fill="none" stroke={paper} strokeWidth={0.6}>
      {Array.from({ length: 18 }).map((_, i) => {
        const r = 16 + i * 16;
        return (
          <circle
            key={i}
            cx={200}
            cy={250}
            r={r}
            opacity={1 - (i / 18) * 0.75}
          />
        );
      })}
      <circle cx={200} cy={250} r={3} fill={paper} stroke="none" />
    </g>
  );
}

function Beacon() {
  const rays = Array.from({ length: 18 }).map((_, i) => {
    const a = (i / 18) * Math.PI * 2;
    const x1 = 200 + Math.cos(a) * 40;
    const y1 = 250 + Math.sin(a) * 40;
    const x2 = 200 + Math.cos(a) * 170;
    const y2 = 250 + Math.sin(a) * 170;
    return { x1, y1, x2, y2, key: i };
  });
  return (
    <g stroke={paper} strokeWidth={0.6} fill="none">
      {rays.map(({ x1, y1, x2, y2, key }) => (
        <line
          key={key}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          strokeDasharray="3 6"
          opacity={0.75}
        />
      ))}
      <circle cx={200} cy={250} r={40} opacity={0.35} />
      <circle cx={200} cy={250} r={80} opacity={0.2} />
      <circle cx={200} cy={250} r={180} opacity={0.12} />
      <circle cx={200} cy={250} r={6} fill={paper} stroke="none" />
    </g>
  );
}

function Wireframe() {
  return (
    <g fill="none" stroke={paper} strokeWidth={0.8} opacity={0.9}>
      <polygon points="60,330 200,180 340,260 240,390" />
      <polygon points="60,330 200,180 340,260 240,390" transform="translate(0 -8)" opacity={0.4} />
      <line x1={60} y1={330} x2={60} y2={322} />
      <line x1={200} y1={180} x2={200} y2={172} />
      <line x1={340} y1={260} x2={340} y2={252} />
      <line x1={240} y1={390} x2={240} y2={382} />
      <line x1={200} y1={180} x2={240} y2={390} opacity={0.6} />
      <line x1={60} y1={330} x2={340} y2={260} opacity={0.5} />
      <g strokeWidth={0.4} opacity={0.5}>
        <line x1={30} y1={420} x2={370} y2={420} strokeDasharray="2 4" />
        <line x1={30} y1={420} x2={30} y2={100} strokeDasharray="2 4" />
      </g>
    </g>
  );
}

function Curve() {
  return (
    <g fill="none" stroke={paper} strokeWidth={0.9}>
      <path d="M 20 420 C 80 420, 120 360, 160 300 S 260 180, 380 80" />
      <path d="M 20 440 C 80 440, 120 380, 160 320 S 260 200, 380 100" opacity={0.4} />
      <path d="M 20 460 C 80 460, 120 400, 160 340 S 260 220, 380 120" opacity={0.18} />
      <circle cx={160} cy={300} r={3} fill={paper} stroke="none" />
      <circle cx={20} cy={420} r={2} fill={paper} stroke="none" />
      <circle cx={380} cy={80} r={2} fill={paper} stroke="none" />
      <g strokeWidth={0.4} opacity={0.5} strokeDasharray="2 4">
        <line x1={160} y1={300} x2={160} y2={480} />
        <line x1={160} y1={300} x2={0} y2={300} />
      </g>
    </g>
  );
}

function Lattice() {
  const r = 18;
  const dx = r * Math.sqrt(3);
  const dy = r * 1.5;
  const cells: { cx: number; cy: number; key: string }[] = [];
  for (let row = -1; row < 18; row++) {
    for (let col = -1; col < 14; col++) {
      const cx = col * dx + (row % 2 ? dx / 2 : 0);
      const cy = row * dy;
      cells.push({ cx, cy, key: `${row}-${col}` });
    }
  }
  const hexPath = (cx: number, cy: number) => {
    const pts = Array.from({ length: 6 }).map((_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 2;
      return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`;
    });
    return `M ${pts.join(" L ")} Z`;
  };
  return (
    <g fill="none" stroke={paper} strokeWidth={0.5} opacity={0.8}>
      {cells.map(({ cx, cy, key }) => (
        <path key={key} d={hexPath(cx, cy)} />
      ))}
    </g>
  );
}

function Grip() {
  return (
    <g fill="none" stroke={paper} strokeWidth={0.9}>
      <path d="M 80 110 C 80 250, 180 280, 200 300" />
      <path d="M 320 110 C 320 250, 220 280, 200 300" />
      <path d="M 100 110 C 100 240, 180 270, 200 290" opacity={0.35} />
      <path d="M 300 110 C 300 240, 220 270, 200 290" opacity={0.35} />
      <circle cx={200} cy={310} r={3} fill={paper} stroke="none" />
      <line x1={80} y1={110} x2={70} y2={100} />
      <line x1={320} y1={110} x2={330} y2={100} />
      <g strokeWidth={0.4} opacity={0.5} strokeDasharray="2 4">
        <line x1={200} y1={30} x2={200} y2={470} />
      </g>
    </g>
  );
}
