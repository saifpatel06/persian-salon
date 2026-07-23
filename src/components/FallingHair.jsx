// Fixed (non-random) set of drifting hair-clipping strands so server and
// client render identically -- avoids hydration mismatches from Math.random().
const STRANDS = [
  { left: "6%", size: 22, duration: 9, delay: 0, rotate: -20 },
  { left: "14%", size: 16, duration: 11, delay: 2.4, rotate: 40 },
  { left: "23%", size: 26, duration: 8, delay: 1.1, rotate: -35 },
  { left: "34%", size: 18, duration: 10, delay: 3.6, rotate: 15 },
  { left: "45%", size: 24, duration: 12, delay: 0.6, rotate: -10 },
  { left: "55%", size: 15, duration: 9.5, delay: 4.2, rotate: 30 },
  { left: "64%", size: 20, duration: 10.5, delay: 1.8, rotate: -25 },
  { left: "73%", size: 17, duration: 8.5, delay: 3, rotate: 45 },
  { left: "82%", size: 23, duration: 11.5, delay: 0.2, rotate: -15 },
  { left: "91%", size: 19, duration: 9, delay: 2.8, rotate: 20 },
];

function HairStrand({ size }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className="text-parchment/50">
      <path
        d="M3 12c3-6 9-9 15-6 2 1 3 3 2 5-1 1.5-3 1-4-.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Purely decorative: thin curved "hair clipping" strands drifting down and
 * slowly rotating through the hero, like freshly cut hair falling. Sits
 * behind the hero copy, in front of the background image/overlay.
 */
export default function FallingHair() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[3] overflow-hidden"
    >
      {STRANDS.map((s, i) => (
        <div
          key={i}
          className="absolute top-0 animate-fall"
          style={{
            left: s.left,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            transform: `rotate(${s.rotate}deg)`,
          }}
        >
          <HairStrand size={s.size} />
        </div>
      ))}
    </div>
  );
}
