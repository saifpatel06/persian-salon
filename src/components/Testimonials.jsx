import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    name: "Aditya Deshpande",
    tag: "Hydra Facial",
    color: "brass",
    quote:
      "Such a relaxing, thorough facial and the equipment felt spotless the entire time. You can tell this place has been perfected over generations.",
  },
  {
    name: "Rohan Kulkarni",
    tag: "Men's Grooming",
    color: "navy",
    quote:
      "Best beard styling in Camp, hands down. Professional staff, clean setup, and they actually listen to what you want.",
  },
  {
    name: "Imran Sheikh",
    tag: "Hair Colour & Styling",
    color: "barber",
    quote:
      "My hair colour came out exactly as I imagined. A hundred years of family expertise really shows in how precise and gentle they are.",
  },
  {
    name: "Priya Nair",
    tag: "Brightening Facial",
    color: "navy",
    quote:
      "The whole place has such a luxurious, calming vibe. My skin has never felt this fresh after a facial.",
  },
];

// Static class strings so Tailwind's content scanner can find them.
const TAG_CLASSES = {
  barber: "text-barber",
  navy: "text-navy",
  brass: "text-brass-dark",
};
const QUOTE_CLASSES = {
  barber: "text-barber/50",
  navy: "text-navy/50",
  brass: "text-brass/60",
};

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-parchment-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-tag justify-center before:hidden">
              <span className="h-px w-8 bg-brass" />
              Loved by Our Clients
            </span>
            <h2 className="mt-4 font-display text-4xl tracking-wide text-ink sm:text-5xl">
              STORIES FROM THE CHAIR
            </h2>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-brass">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
              <span className="ml-2 text-sm font-semibold text-ink">
                4.8 out of 5
              </span>
              <span className="text-sm text-ink-soft">
                &nbsp;· 600+ Google reviews
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 80}>
              <figure className="barber-card flex h-full flex-col p-6">
                <Quote size={26} className={QUOTE_CLASSES[review.color]} strokeWidth={1.5} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-ink/10 pt-4">
                  <p className="font-display text-xl tracking-wide text-ink">
                    {review.name.toUpperCase()}
                  </p>
                  <p className={`text-xs uppercase tracking-wide ${TAG_CLASSES[review.color]}`}>
                    {review.tag}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
