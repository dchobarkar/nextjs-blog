import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        accent: "var(--accent-color)",
        secondary: {
          light: "var(--secondary-bg)",
          DEFAULT: "var(--text-color)",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)"], // For headings
        sans: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
