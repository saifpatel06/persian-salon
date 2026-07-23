/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: "#F6EEDF",
          deep: "#ECE0C8",
        },
        ink: {
          DEFAULT: "#161311",
          soft: "#453D36",
        },
        barber: {
          DEFAULT: "#A11E2B",
          light: "#C43B48",
          dark: "#6E141E",
        },
        brass: {
          DEFAULT: "#B8902F",
          light: "#D6B460",
          dark: "#8A6A20",
        },
        navy: {
          DEFAULT: "#1E3A5F",
          light: "#2F5788",
          dark: "#132A45",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(180deg, rgba(22,19,17,0.55) 0%, rgba(22,19,17,0.92) 100%)",
        "barber-stripes":
          "repeating-linear-gradient(45deg, #A11E2B 0 22px, #F6EEDF 22px 44px, #161311 44px 66px)",
      },
      boxShadow: {
        soft: "0 16px 44px -16px rgba(22, 19, 17, 0.45)",
        card: "0 10px 30px -12px rgba(22, 19, 17, 0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pole: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 88px" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-15deg)" },
          "100%": { transform: "translateX(220%) skewX(-15deg)" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(10deg)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-120px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        dropIn: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fall: {
          "0%": { transform: "translateY(-10%) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "90%": { opacity: "0.6" },
          "100%": { transform: "translateY(650%) rotate(340deg)", opacity: "0" },
        },
        snipA: {
          "0%, 100%": { transform: "rotate(-9deg)" },
          "50%": { transform: "rotate(9deg)" },
        },
        snipB: {
          "0%, 100%": { transform: "rotate(9deg)" },
          "50%": { transform: "rotate(-9deg)" },
        },
      },
      animation: {
        pole: "pole 1.1s linear infinite",
        marquee: "marquee 22s linear infinite",
        shine: "shine 1.4s ease-in-out",
        kenburns: "kenburns 18s ease-in-out infinite alternate",
        bob: "bob 3s ease-in-out infinite",
        wiggle: "wiggle 0.5s ease-in-out",
        slideInLeft: "slideInLeft 0.7s cubic-bezier(0.16,1,0.3,1) 1.2s both",
        dropIn: "dropIn 0.6s cubic-bezier(0.16,1,0.3,1) both",
        fall: "fall 8s linear infinite",
        "snip-a": "snipA 1.15s ease-in-out infinite",
        "snip-b": "snipB 1.15s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
