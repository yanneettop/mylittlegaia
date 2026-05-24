import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F1E8",
        sand: "#D8C3A5",
        sage: "#9CAF88",
        forest: "#24382F",
        rose: "#C9A7A0",
        gold: "#C8A96A",
        charcoal: "#252525",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(36, 56, 47, 0.18)",
        glow: "0 20px 60px -20px rgba(200, 169, 106, 0.45)",
      },
      spacing: {
        18: "4.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        kenburns: {
          "0%,100%": { transform: "scale(1.025) translate3d(0,0,0)" },
          "50%": { transform: "scale(1.045) translate3d(-0.6%,-0.35%,0)" },
        },
        drift: {
          "0%":   { transform: "translate3d(0,0,0) scale(0.5) rotate(0deg)", opacity: "0" },
          "8%":   { opacity: "0.34" },
          "20%":  { transform: "translate3d(-18px,-110px,0) scale(1.2) rotate(40deg)" },
          "45%":  { transform: "translate3d(22px,-260px,0) scale(0.9) rotate(-25deg)", opacity: "0.3" },
          "70%":  { transform: "translate3d(-10px,-400px,0) scale(1.1) rotate(60deg)", opacity: "0.22" },
          "90%":  { opacity: "0.08" },
          "100%": { transform: "translate3d(14px,-540px,0) scale(0.6) rotate(90deg)", opacity: "0" },
        },
        drift2: {
          "0%":   { transform: "translate3d(0,0,0) scale(0.4) rotate(0deg)", opacity: "0" },
          "10%":  { opacity: "0.28" },
          "25%":  { transform: "translate3d(24px,-130px,0) scale(1.3) rotate(-50deg)" },
          "55%":  { transform: "translate3d(-16px,-300px,0) scale(1.0) rotate(30deg)", opacity: "0.26" },
          "80%":  { transform: "translate3d(30px,-440px,0) scale(0.8) rotate(-70deg)", opacity: "0.12" },
          "100%": { transform: "translate3d(-8px,-560px,0) scale(0.5) rotate(-110deg)", opacity: "0" },
        },
        drift3: {
          "0%":   { transform: "translate3d(0,0,0) scale(0.6) rotate(0deg)", opacity: "0" },
          "12%":  { opacity: "0.38" },
          "30%":  { transform: "translate3d(-30px,-150px,0) scale(1.1) rotate(70deg)" },
          "60%":  { transform: "translate3d(20px,-320px,0) scale(0.85) rotate(-40deg)", opacity: "0.28" },
          "85%":  { transform: "translate3d(-22px,-460px,0) scale(1.0) rotate(100deg)", opacity: "0.1" },
          "100%": { transform: "translate3d(10px,-560px,0) scale(0.55) rotate(130deg)", opacity: "0" },
        },
        crystalBreath: {
          "0%,100%": {
            opacity: "0.2",
            transform: "translate3d(0,0,0) scale(0.96)",
          },
          "50%": {
            opacity: "0.42",
            transform: "translate3d(0,-1%,0) scale(1.05)",
          },
        },
        textShimmer: {
          "0%,100%": {
            filter: "drop-shadow(0 0 0 rgba(200,169,106,0)) brightness(1)",
            color: "#A67A2F",
          },
          "50%": {
            filter: "drop-shadow(0 0 28px rgba(232,201,138,0.85)) drop-shadow(0 0 8px rgba(200,169,106,0.6)) brightness(1.15)",
            color: "#D4A24A",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease-out both",
        shimmer: "shimmer 4s ease-in-out infinite",
        kenburns: "kenburns 22s ease-in-out infinite",
        drift: "drift 16s linear infinite",
        drift2: "drift2 19s linear infinite",
        drift3: "drift3 17s linear infinite",
        "crystal-breath": "crystalBreath 8.5s ease-in-out infinite",
        "text-shimmer": "textShimmer 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
