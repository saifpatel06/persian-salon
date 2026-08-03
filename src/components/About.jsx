import Image from "next/image";
import { ShieldCheck, Award, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const HIGHLIGHTS = [
  { icon: Award, text: "4th Generation Family Business", color: "bg-barber" },
  { icon: ShieldCheck, text: "Men's Hair & Facial Specialists", color: "bg-navy" },
  { icon: Sparkles, text: "Globally Sourced Products", color: "bg-brass" },
];

export default function About() {
  return (
    <section id="about" className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal as="div" className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Vintage double-border frame */}
            <div className="relative border-4 border-ink p-2">
              <div className="border border-brass p-1.5">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=1100&auto=format&fit=crop"
                    alt="Certified barber at work in a clean, classic salon"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover grayscale-[15%]"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 animate-bob rounded-sm bg-barber px-6 py-4 text-parchment shadow-soft sm:-right-6">
              <p className="font-display text-3xl">
                <CountUp value={100} suffix="+" />
              </p>
              <p className="text-[10px] uppercase tracking-wide text-parchment/80">
                Years of Legacy
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="section-tag">Our Story</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-4xl tracking-wide text-ink sm:text-5xl">
                FOUR GENERATIONS OF FAMILY LEGACY IN CAMP
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 text-ink-soft">
                Persian Salon has been part of Pune for more than 100 years.
                It was established by the great-grandfather of our current
                owner, Mr. Mushtaque Ahmed, and has served its loyal
                customers ever since — it has been our family&rsquo;s
                business since the very beginning.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-ink-soft">
                With the business flourishing, the fourth generation of our
                family now carries it forward, focusing solely on
                men&rsquo;s hair care and facials. Alongside innovative
                cutting and colouring techniques, we offer a wide range of
                globally sourced retail products to ensure perfect tresses —
                backed by friendly customer service and a creative team
                whose passion for style and beauty keeps us at the forefront
                of the industry.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {HIGHLIGHTS.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={h.text}
                      className="group flex items-center gap-3 border border-ink/10 bg-white px-4 py-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                    >
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${h.color} text-parchment transition-transform group-hover:animate-wiggle`}>
                        <Icon size={16} />
                      </span>
                      <span className="text-sm font-medium text-ink">
                        {h.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Animated stats row */}
        <Reveal delay={100}>
          <div className="mt-16 grid grid-cols-3 gap-4 border-t-2 border-ink/10 pt-8 text-center">
            <div>
              <p className="font-display text-4xl text-barber sm:text-5xl">
                <CountUp value={100} suffix="+" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft sm:text-sm">
                Years of Legacy
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-navy sm:text-5xl">
                <CountUp value={4.8} decimals={1} suffix="★" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft sm:text-sm">
                600+ Reviews
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-brass-dark sm:text-5xl">
                <CountUp value={100} suffix="%" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft sm:text-sm">
                Client Satisfaction
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
