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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        paper: "var(--paper)",
        "paper-sunk": "var(--paper-sunk)",
        ink: "var(--ink)",
        "ink-quiet": "var(--ink-quiet)",
        "ink-faint": "var(--ink-faint)",
        rule: "var(--rule)",

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
