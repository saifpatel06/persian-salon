import { useState } from "react";

const WHATSAPP_HREF = "https://wa.me/919371234444";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Persian Salon on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group fixed bottom-5 left-5 z-50 flex animate-slideInLeft items-center sm:bottom-7 sm:left-7"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/40 animate-ping" />

      <span
        className={`pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-sm bg-ink px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-parchment shadow-soft transition-all duration-200 ${
          hovered ? "opacity-100 translate-x-0" : "-translate-x-1 opacity-0"
        }`}
      >
        Chat on WhatsApp
      </span>

      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <svg
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.223.61 4.377 1.766 6.27L3 29l7.94-2.71A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818A9.77 9.77 0 0 1 10.9 23.4l-.363-.216-4.71 1.608 1.626-4.59-.238-.375A9.78 9.78 0 0 1 5.99 15c0-5.53 4.49-10.02 10.014-10.02 5.522 0 10.013 4.49 10.013 10.02 0 5.53-4.49 10.02-10.013 10.02Zm5.503-7.485c-.3-.15-1.77-.874-2.045-.974-.274-.1-.474-.15-.674.15-.198.3-.773.974-.947 1.174-.174.2-.348.224-.648.075-.3-.15-1.266-.467-2.412-1.49-.892-.795-1.494-1.777-1.668-2.077-.174-.3-.019-.462.131-.611.135-.134.3-.35.45-.524.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.674-1.626-.923-2.226-.243-.585-.49-.506-.674-.516l-.574-.01c-.2 0-.524.075-.798.375-.274.3-1.048 1.024-1.048 2.499 0 1.475 1.073 2.9 1.222 3.1.15.2 2.112 3.226 5.117 4.523.715.309 1.273.494 1.708.632.717.228 1.37.196 1.886.119.575-.086 1.77-.724 2.02-1.423.25-.699.25-1.298.175-1.423-.075-.125-.274-.2-.574-.35Z" />
        </svg>
      </span>
    </a>
  );
}
