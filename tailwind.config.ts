import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
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
        }
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