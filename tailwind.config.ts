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
          white: 'hsl(var(--primary-white))',
          black: 'hsl(var(--primary-black))'
        },
        text: {
          primary: 'hsl(var(--text-primary))',
          secondary: 'hsl(var(--text-secondary))',
          tertiary: 'hsl(var(--text-tertiary))'
        },
        secondary: {
          grey: 'hsl(var(--secondary-grey))',
          white: 'hsl(var(--secondary-white))',
          red: 'hsl(var(--secondary-red))',
        },
        background: {
          default: 'hsl(var(--background))'
        },
        'border-color': {
          default: 'hsl(var(--border))'
        },
        button: {
          card: 'hsl(var(--button-card))',
          primary: 'hsl(var(--button-primary))',
          'primary-hover': 'hsl(var(--button-primary-hover))',
          secondary: 'hsl(var(--button-secondary))',
          'secondary-hover': 'hsl(var(--button-secondary-hover))',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        primary: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)"
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
