// src/components/Gallery.jsx
import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import Reveal from "./Reveal";

const PHOTOS = [
  {
    src: "/gallery/salon.jpeg",
    alt: "Persian Salon styling stations and mirrors",
    caption: "Inside Persian Salon",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/gallery/client.jpeg",
    alt: "Client receiving a precision colour application",
    caption: "Precision Colour Application",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery/haircolor.jpeg",
    alt: "Barber performing a hair colour service",
    caption: "Hair Colour Service",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery/haircut.jpeg",
    alt: "Hair colour transformation, stage one",
    caption: "Colour Transformation",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery/staff.jpeg",
    alt: "The Persian Salon team",
    caption: "Our Team",
    span: "col-span-2 row-span-1 sm:col-span-1",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % PHOTOS.length);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <section id="gallery" className="bg-parchment-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-tag justify-center before:hidden">
              <span className="h-px w-8 bg-brass" />
              Our Work
            </span>
            <h2 className="mt-4 font-display text-4xl tracking-wide text-ink sm:text-5xl">
              FROM THE CHAIR &amp; THE SALON FLOOR
            </h2>
            <p className="mt-4 text-ink-soft">
              A look inside Persian Salon — our space, our team, and the
              work we&rsquo;re proud of.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3 lg:auto-rows-[220px]">
            {PHOTOS.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`group relative overflow-hidden rounded-lg border-2 border-ink/10 shadow-card ${photo.span}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-2 p-3 text-xs font-semibold uppercase tracking-wide text-parchment sm:p-4 sm:text-sm">
                    <Expand size={14} />
                    {photo.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setActiveIndex(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-parchment/25 text-parchment transition-colors hover:border-barber hover:text-barber-light"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-parchment/25 text-parchment transition-colors hover:border-barber hover:text-barber-light sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-parchment/25 text-parchment transition-colors hover:border-barber hover:text-barber-light sm:right-6"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <Image
                src={PHOTOS[activeIndex].src}
                alt={PHOTOS[activeIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-center text-sm font-semibold uppercase tracking-wide text-parchment/80">
              {PHOTOS[activeIndex].caption}
              <span className="ml-2 text-parchment/40">
                {activeIndex + 1} / {PHOTOS.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}