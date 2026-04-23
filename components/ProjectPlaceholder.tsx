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
      {pattern === "pulse" && <Pulse />}
      {pattern === "keys" && <Keys />}
      {pattern === "steps" && <Steps />}
      {pattern === "radial" && <Radial />}
      {pattern === "cascade" && <Cascade />}
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

function Pulse() {
  return (
    <g fill="none" stroke={paper}>
      <g strokeWidth={0.4} opacity={0.3} strokeDasharray="2 4">
        <line x1={20} y1={180} x2={380} y2={180} />
        <line x1={20} y1={250} x2={380} y2={250} />
        <line x1={20} y1={320} x2={380} y2={320} />
      </g>
      <path
        d="M 20 250 L 90 250 L 100 240 L 110 250 L 155 250 L 165 175 L 175 325 L 185 220 L 195 250 L 260 250 L 270 235 L 280 250 L 380 250"
        strokeWidth={0.9}
      />
      <path
        d="M 20 400 Q 100 380, 200 400 T 380 400"
        strokeWidth={0.5}
        opacity={0.35}
      />
      <circle cx={165} cy={175} r={2.5} fill={paper} stroke="none" />
      <circle cx={175} cy={325} r={2} fill={paper} stroke="none" />
    </g>
  );
}

function Keys() {
  const whiteCount = 8;
  const whiteW = 42;
  const whiteH = 280;
  const y0 = 110;
  const x0 = (400 - whiteW * whiteCount) / 2;
  const blackAfter = [0, 1, 3, 4, 5];
  const blackW = 26;
  const blackH = 170;
  return (
    <g>
      {Array.from({ length: whiteCount }).map((_, i) => (
        <rect
          key={`w-${i}`}
          x={x0 + i * whiteW}
          y={y0}
          width={whiteW}
          height={whiteH}
          fill={ink}
          stroke={paper}
          strokeWidth={0.9}
        />
      ))}
      {blackAfter.map((i) => (
        <rect
          key={`b-${i}`}
          x={x0 + (i + 1) * whiteW - blackW / 2}
          y={y0}
          width={blackW}
          height={blackH}
          fill={paper}
        />
      ))}
    </g>
  );
}

function Steps() {
  const count = 7;
  const barW = 32;
  const gap = 14;
  const baseH = 36;
  const stepH = 28;
  const totalW = count * barW + (count - 1) * gap;
  const x0 = (400 - totalW) / 2;
  const baseY = 420;
  return (
    <g fill="none" stroke={paper}>
      <line x1={20} y1={baseY} x2={380} y2={baseY} strokeWidth={0.6} opacity={0.7} />
      {Array.from({ length: count }).map((_, i) => {
        const h = baseH + i * stepH;
        const x = x0 + i * (barW + gap);
        return (
          <rect
            key={i}
            x={x}
            y={baseY - h}
            width={barW}
            height={h}
            strokeWidth={0.7}
            opacity={0.85}
          />
        );
      })}
      <line
        x1={x0 + barW / 2}
        y1={baseY - baseH}
        x2={x0 + (count - 1) * (barW + gap) + barW / 2}
        y2={baseY - (baseH + (count - 1) * stepH)}
        strokeWidth={0.4}
        strokeDasharray="2 4"
        opacity={0.5}
      />
    </g>
  );
}

function Radial() {
  const cx = 200;
  const cy = 250;
  const r1 = 40;
  const r2 = 90;
  const r3 = 150;
  const lines = 8;
  return (
    <g fill="none" stroke={paper}>
      <circle cx={cx} cy={cy} r={r3} strokeWidth={0.5} opacity={0.4} />
      <circle cx={cx} cy={cy} r={r2} strokeWidth={0.6} opacity={0.7} />
      <circle cx={cx} cy={cy} r={r1} strokeWidth={0.8} />
      {Array.from({ length: lines }).map((_, i) => {
        const a = (i / lines) * Math.PI * 2;
        const x1 = cx + Math.cos(a) * r1;
        const y1 = cy + Math.sin(a) * r1;
        const x2 = cx + Math.cos(a) * r3;
        const y2 = cy + Math.sin(a) * r3;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            strokeWidth={0.6}
            opacity={0.6}
          />
        );
      })}
      <g transform={`rotate(45 ${cx} ${cy})`} strokeWidth={0.6} opacity={0.5}>
        <rect x={cx - 70} y={cy - 70} width={140} height={140} />
      </g>
      <circle cx={cx} cy={cy} r={3} fill={paper} stroke="none" />
    </g>
  );
}

function Cascade() {
  const rows = 10;
  const cols = 10;
  const dx = 38;
  const dy = 44;
  const x0 = 30;
  const y0 = 60;
  return (
    <g stroke={paper} strokeLinecap="square">
      {Array.from({ length: rows }).flatMap((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const offset = (r % 2) * (dx / 2);
          const cxp = x0 + c * dx + offset;
          const cyp = y0 + r * dy;
          return (
            <line
              key={`${r}-${c}`}
              x1={cxp - 7}
              y1={cyp + 7}
              x2={cxp + 7}
              y2={cyp - 7}
              strokeWidth={0.8}
              opacity={0.55 + ((r + c) % 3) * 0.12}
            />
          );
        })
      )}
    </g>
  );
}
