import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        full: "9999px",
        "24": "24px",
      },
      boxShadow: {
        "slider-thumb": "0px 4px 24px rgba(16, 24, 64, 0.12)",
      },
      height: {
        "slider-track": "8px",
        "slider-thumb": "20px",
      },
      backgroundColor: {
        "slider-track": "#EBEBEB",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        // Headings
        h1: [
          "56px",
          {
            lineHeight: "76px",
            letterSpacing: "-0.84px",
            fontWeight: "500",
          },
        ],
        h2: [
          "48px",
          {
            lineHeight: "72px",
            letterSpacing: "-0.72px",
            fontWeight: "500",
          },
        ],
        h3: [
          "40px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.4px",
            fontWeight: "500",
          },
        ],
        h5: [
          "24px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.24px",
            fontWeight: "500",
          },
        ],
        // Text styles
        "text-sm": [
          "14px",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        "text-sm-accented": [
          "14px",
          {
            lineHeight: "150%",
            fontWeight: "600",
          },
        ],
        "text-lg": [
          "16px",
          {
            lineHeight: "26px",
            fontWeight: "400",
          },
        ],
        "text-lg-accented": [
          "16px",
          {
            lineHeight: "150%",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
