# Persian Salon — Classic Barbershop Variant

A third design variant of the Persian Salon single-page site. Same content
and sections as the original, but a distinct classic-barbershop look and
feel, plus scroll and hover animations throughout.

## What's different from the other variants

- **Palette:** deep black + barber-pole red + brass/gold on a parchment
  (warm off-white) background.
- **Type:** Bebas Neue (bold condensed display) + Oswald (body) — classic
  barbershop signage style.
- **Signature motif:** an animated red/parchment/black barber-pole stripe
  (`.pole-strip`), used around the logo, as a footer border, and as a
  decorative hero accent.
- **Animations added:**
  - Scroll-reveal fade/slide-up on every section (`src/components/Reveal.jsx`,
    built with `IntersectionObserver`, respects `prefers-reduced-motion`).
  - Animated count-up numbers for the 17+ years / 4.8★ / 100% stats
    (`src/components/CountUp.jsx`).
  - A looping marquee ticker strip in the hero ("WALK-INS WELCOME · EST.
    2009 · ...").
  - A rotating barber-pole stripe animation (`animate-pole` keyframe).
  - A shine/sheen sweep across buttons on hover (`.btn-shine-sweep`).
  - Card lift + border-glow on hover for testimonials and info cards.

All content — services, testimonials, address, hours, contact form fields,
and the client's real logo — is unchanged from the original site.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customising

Same as the other variants: update the WhatsApp/phone numbers in
`src/components/Contact.jsx` and `src/components/WhatsAppFloat.jsx`, wire up
`Contact.jsx`'s `handleSubmit` to a real backend, and swap the Unsplash
placeholder images in `Hero.jsx` / `About.jsx` for real salon photography.
