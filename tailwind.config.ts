import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFDFB",
        primary: {
          DEFAULT: "#5B21B6",
          dark: "#4C1D95",
          light: "#7C3AED",
        },
        secondary: "#EDE9FE",
        accent: {
          DEFAULT: "#D4AF37",
          light: "#E7C766",
          dark: "#B4912B",
        },
        ink: "#312E81",
        neutral: "#F8F5FF",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(91, 33, 182, 0.10)",
        card: "0 8px 32px -8px rgba(49, 46, 129, 0.12)",
        gold: "0 8px 24px -6px rgba(212, 175, 55, 0.35)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(91,33,182,0.12), transparent 45%), linear-gradient(180deg, #F8F5FF 0%, #FFFDFB 100%)",
        "gold-shimmer":
          "linear-gradient(120deg, #D4AF37 0%, #F3E3A3 45%, #D4AF37 100%)",
      },
      letterSpacing: {
        wider2: "0.15em",
        wider3: "0.25em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
