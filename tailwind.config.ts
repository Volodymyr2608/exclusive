import type { Config } from "tailwindcss";

const config = {
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
        "xl": "1170px",
      },
    },
    extend: {
      colors: {
        primary: {
          1: 'hsl(var(--color-primary-1))',
          2: 'hsl(var(--color-primary-2))',
        },
        text: {
          1: 'hsl(var(--color-text-1))',
          2: 'hsl(var(--color-text-2))',
          button: 'hsl(var(--color-text-button))',
          card: 'hsl(var(--color-text-card))',
        },
        secondary: {
          1: 'hsl(var(--color-secondary-1))',
          2: 'hsl(var(--color-secondary-2))',
          3: 'hsl(var(--color-secondary-3))',
        },
        background: {
          1: 'hsl(var(--color-background-1))',
        },
        logo: {
          default: 'hsl(var(--color-logo-default))',
        },
        other: {
          button1: 'hsl(var(--color-other-button1))',
          button2: 'hsl(var(--color-other-button2))',
          hoverButton1: 'hsl(var(--color-other-hover-button1))',
          hoverButton2: 'hsl(var(--color-other-hover-button2))',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
