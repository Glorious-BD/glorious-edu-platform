import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // High contrast, premium colors
        primary: {
          DEFAULT: "#0F172A", // Deep Navy / Slate 900
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#2563EB", // Royal Blue
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D4A017", // Gold / Premium Champagne
          foreground: "#0F172A",
        },
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#DC2626",
        background: "#FFFFFF",
        surface: {
          DEFAULT: "#F8FAFC", // Off-white/slate tint background
          muted: "#F1F5F9",
        },
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
        bengali: ["var(--font-hind-siliguri)", "sans-serif"],
      },
      fontSize: {
        hero: ["4rem", { lineHeight: "1.1", fontWeight: "800" }],
        h1: ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["1.75rem", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      borderRadius: {
        premium: "12px",
        large: "16px",
      },
      boxShadow: {
        soft: "0 4px 30px rgba(15, 23, 42, 0.03)",
        elevation: "0 10px 50px -12px rgba(15, 23, 42, 0.08)",
        glass: "0 8px 32px 0 rgba(15, 23, 42, 0.04)",
      },
      backgroundImage: {
        "gradient-premium": "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        "gradient-radial-accent": "radial-gradient(circle at top right, rgba(37, 99, 235, 0.08), transparent 40%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;