import { useState } from "react";
import { Phone } from "lucide-react";

const CALL_HREF = "tel:+919371234444";

export default function CallFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={CALL_HREF}
      aria-label="Call Persian Salon"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group fixed bottom-24 right-5 z-50 flex animate-slideInRightLate items-center sm:bottom-28 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-barber/40 animate-ping" />

      <span
        className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-sm bg-ink px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-parchment shadow-soft transition-all duration-200 ${
          hovered ? "opacity-100 translate-x-0" : "translate-x-1 opacity-0"
        }`}
      >
        Call Us
      </span>

      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-barber text-parchment shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <Phone size={24} fill="currentColor" strokeWidth={0} />
      </span>
    </a>
  );
}