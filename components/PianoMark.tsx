type PianoMarkProps = {
  className?: string;
  height?: number;
  ariaLabel?: string;
};

export default function PianoMark({
  className,
  height = 28,
  ariaLabel = "Piano motif — a quiet nod to the other discipline",
}: PianoMarkProps) {
  const whiteKeys = 7;
  const whiteW = 6;
  const whiteH = height;
  const totalW = whiteKeys * whiteW;
  const blackW = whiteW * 0.62;
  const blackH = height * 0.62;

  const blackOffsets = [
    whiteW * 1 - blackW / 2,
    whiteW * 2 - blackW / 2,
    whiteW * 4 - blackW / 2,
    whiteW * 5 - blackW / 2,
    whiteW * 6 - blackW / 2,
  ];

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      width={totalW}
      height={whiteH}
      viewBox={`0 0 ${totalW} ${whiteH}`}
      className={className}
      shapeRendering="crispEdges"
    >
      {Array.from({ length: whiteKeys }).map((_, i) => (
        <rect
          key={`w-${i}`}
          x={i * whiteW}
          y={0}
          width={whiteW}
          height={whiteH}
          fill="var(--color-paper)"
          stroke="currentColor"
          strokeWidth={1}
        />
      ))}
      {blackOffsets.map((x, i) => (
        <rect
          key={`b-${i}`}
          x={x}
          y={0}
          width={blackW}
          height={blackH}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
