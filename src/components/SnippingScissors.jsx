/**
 * A stylised scissors icon with blades that continuously open and close
 * (a snipping motion), built as plain SVG + CSS animation so it works
 * without any animation library.
 */
export default function SnippingScissors({ size = 40, className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* handles */}
      <circle cx="14" cy="38" r="5" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="34" cy="38" r="5" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M22 24 L14.5 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M26 24 L33.5 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* top blade -- rotates around the pivot */}
      <g style={{ transformOrigin: "24px 22px" }} className="animate-snip-a">
        <path
          d="M24 22 L9 5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* bottom blade -- rotates opposite the top blade */}
      <g style={{ transformOrigin: "24px 22px" }} className="animate-snip-b">
        <path
          d="M24 22 L39 5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* pivot rivet */}
      <circle cx="24" cy="22" r="2.2" fill="currentColor" />
    </svg>
  );
}
