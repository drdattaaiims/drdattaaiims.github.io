import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./main.tsx",
    "./{components,hooks,lib,pages}/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
        xl: "0",
      },
      colors: {
        /* Brand */
        navy: "var(--navy)",
        "slate-blue": "var(--slate-blue)",
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        elevated: "var(--elevated)",
        orange: "var(--orange)",

        /* Semantic text/rule names used across components */
        paper: "var(--canvas)",
        "paper-sunk": "var(--elevated)",
        ink: "var(--text)",
        "ink-quiet": "var(--text-3)",
        "ink-faint": "var(--text-faint)",
        rule: "var(--rule)",
        "rule-subtle": "var(--rule-subtle)",

        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
          border: "var(--card-border)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
          border: "var(--popover-border)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent-role)",
          foreground: "var(--accent-role-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        ring: "var(--ring)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
