import { useState } from "react";
import { Scissors, Droplets, Gem, UserRound, Check } from "lucide-react";
import Reveal from "./Reveal";
import SnippingScissors from "./SnippingScissors";

const CATEGORIES = [
  {
    key: "hair",
    label: "Hair Care & Styling",
    icon: Scissors,
    color: "barber",
    blurb:
      "Precision cuts and expert colour work tailored to your face and lifestyle.",
    items: [
      "Haircuts & Trims",
      "Advanced Colouring — Highlights & Balayage",
      "Hair Rebonding",
      "Hair Straightening",
      "Professional Blow Dry",
      "Nourishing Hair Treatments",
    ],
  },
  {
    key: "skin",
    label: "Skin & Spa",
    icon: Droplets,
    color: "navy",
    blurb:
      "Restorative facials and skin treatments that leave you glowing, naturally.",
    items: [
      "Herbal Facials",
      "Brightening Facials",
      "Anti-Aging Treatments",
      "Deep Cleansing Skin Treatments",
      "De-Tan Therapy",
      "Relaxing Spa Rituals",
    ],
  },
  {
    key: "bridal",
    label: "Bridal & Special Occasions",
    icon: Gem,
    color: "brass",
    blurb:
      "Flawless, camera-ready looks for your most important celebrations.",
    items: [
      "Professional Bridal Makeup",
      "Bridal Hair Styling",
      "Engagement & Reception Looks",
      "Party Makeup & Draping",
      "Pre-Bridal Skin Prep",
      "Trial Sessions Available",
    ],
  },
  {
    key: "men",
    label: "Men's Grooming",
    icon: UserRound,
    color: "ink",
    blurb: "Sharp, classic grooming with meticulous attention to detail.",
    items: [
      "Expert Beard Styling",
      "Classic & Modern Shaving",
      "Precision Trimming",
      "Men's Haircuts",
      "Facial for Men",
      "Head Massage",
    ],
  },
];

// Static class strings (not template-interpolated) so Tailwind's content
// scanner can find and generate them.
const COLOR_CLASSES = {
  barber: {
    badge: "bg-barber",
    activeTab: "border-barber bg-barber text-parchment shadow-soft",
  },
  navy: {
    badge: "bg-navy",
    activeTab: "border-navy bg-navy text-parchment shadow-soft",
  },
  brass: {
    badge: "bg-brass",
    activeTab: "border-brass bg-brass text-ink shadow-soft",
  },
  ink: {
    badge: "bg-ink",
    activeTab: "border-parchment bg-parchment text-ink shadow-soft",
  },
};

export default function Services() {
  const [active, setActive] = useState(CATEGORIES[0].key);
  const activeCategory = CATEGORIES.find((c) => c.key === active);

  return (
    <section id="services" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-tag justify-center before:hidden">
              <span className="h-px w-8 bg-brass" />
              What We Offer
            </span>
            <h2 className="mt-4 font-display text-4xl tracking-wide text-parchment sm:text-5xl">
              SERVICES CRAFTED AROUND YOU
            </h2>
            <p className="mt-4 text-parchment/70">
              From everyday grooming to once-in-a-lifetime celebrations,
              explore our full range of hair, skin, bridal, and men&rsquo;s
              services.
            </p>
          </div>
        </Reveal>

        {/* Tabs styled like a menu board */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.key === active;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`group flex items-center gap-2 rounded-sm border-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
                    isActive
                      ? COLOR_CLASSES[cat.color].activeTab
                      : "border-parchment/15 bg-transparent text-parchment/70 hover:border-brass hover:text-brass"
                  }`}
                >
                  <Icon size={16} className="transition-transform group-hover:animate-wiggle" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div
            key={active}
            className="mt-12 grid animate-fadeUp grid-cols-1 gap-8 border-2 border-parchment/10 bg-ink-soft/20 p-6 sm:p-10 lg:grid-cols-[280px_1fr] lg:gap-12"
          >
            <div>
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-full text-parchment transition-transform hover:animate-wiggle ${COLOR_CLASSES[activeCategory.color].badge}`}
              >
                {activeCategory.key === "hair" ? (
                  <SnippingScissors size={30} className="text-parchment" />
                ) : (
                  <activeCategory.icon size={26} strokeWidth={1.75} />
                )}
              </span>
              <h3 className="mt-5 font-display text-3xl tracking-wide text-parchment">
                {activeCategory.label.toUpperCase()}
              </h3>
              <p className="mt-3 text-sm text-parchment/70">
                {activeCategory.blurb}
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {activeCategory.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border border-parchment/10 bg-ink px-4 py-3.5 text-sm text-parchment/90"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass text-ink">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
