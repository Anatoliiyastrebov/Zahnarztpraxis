import type { Config } from "tailwindcss";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const config: Config = {
  content: [
    path.join(projectRoot, "src/**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#b9dffd",
          300: "#7cc4fb",
          400: "#36a5f6",
          500: "#0c87e8",
          600: "#0069c5",
          700: "#0154a0",
          800: "#064884",
          900: "#0b3d6e",
        },
        accent: {
          50: "#f0fdf6",
          100: "#dcfce9",
          200: "#bbf7d4",
          300: "#86efad",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
        },
        slate: {
          850: "#1a2332",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        card: "0 8px 32px -8px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
