import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import Reveal from "./Reveal";
import FallingHair from "./FallingHair";
import SnippingScissors from "./SnippingScissors";

const TICKER_ITEMS = [
  "WALK-INS WELCOME",
  "100+ YEARS OF LEGACY",
  "4TH GENERATION FAMILY BUSINESS",
  "CAMP, PUNE",
  "4.8★ RATED",
  "MEN'S HAIR & FACIAL SPECIALISTS",
];

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const marqueeLoop = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      {/* Scrolling ticker strip */}
      <div className="relative z-10 flex h-9 items-center overflow-hidden bg-barber">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeLoop.map((item, i) => (
            <span
              key={i}
              className="mx-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-parchment"
            >
              {item}
              <span className="text-brass">&bull;</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex min-h-[88vh] w-full items-center overflow-hidden pt-8">
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1600&auto=format&fit=crop"
          alt="Classic barbershop interior"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover object-top"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <FallingHair />

        {/* Decorative animated barber pole strip, desktop only */}
        <div className="pole-strip absolute inset-y-0 right-10 hidden w-3 rounded-full opacity-80 lg:block" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <SnippingScissors size={40} className="mx-auto mb-3 text-brass" />
            <span className="section-tag justify-center before:hidden">
              <span className="h-px w-8 bg-brass" />
              100+ Years in Pune &middot; 4th Generation Family Business
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-wide text-parchment sm:text-6xl lg:text-7xl">
              YOUR GO-TO DESTINATION FOR A{" "}
              <span className="text-barber-light">FRESH LOOK</span> &amp;
              COMPLETE TRANSFORMATION
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-base text-parchment/80 sm:text-lg">
              For over 100 years and four generations, our family has cared
              for Camp&rsquo;s hair and skin — now specialising in men&rsquo;s
              hair care and facials, with innovative cutting and colour
              techniques and globally sourced products.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo("#contact")}
                className="group btn-primary w-full sm:w-auto"
              >
                <span className="btn-shine-sweep" />
                Book an Appointment
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="group btn-secondary w-full sm:w-auto"
              >
                <span className="btn-shine-sweep" />
                Explore Services
              </button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex items-center justify-center gap-1.5 text-brass">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
              <span className="ml-1.5 text-sm font-semibold text-parchment">
                4.8 rated by 600+ clients
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}