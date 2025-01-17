import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        mono: {
          100: "#F1F1F1",
          200: "#E1E1E1",
          300: "#C8C8C9",
          400: "#9F9EA1",
          500: "#8A898C",
          600: "#555555",
          700: "#403E43",
          800: "#333333",
          900: "#222222"
        },
        brand: {
          cream: "#fcf9e6", // Primary color (R 252, G 248, B 230)
          white: "#ffffff", // Primary color (R 255, G 255, B 255)
          offwhite: "#eeeeee", // Off white
          dark: "#333333", // Charcoal black
          black: "#000000", // Jet black
          coral: {
            light: "#ff8d76", // Secondary accent (R 255, G 141, B 118)
            DEFAULT: "#f37f5a" // Secondary accent (R 243, G 127, B 90)
          },
          blue: {
            light: "#5ca4f2",
            DEFAULT: "#035c8e"
          }
        }
      },
      fontFamily: {
        sans: ["Helvetica Neue", "sans-serif"],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'screen-90': '90vh',
      },
      width: {
        'screen-90': '90vw',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;