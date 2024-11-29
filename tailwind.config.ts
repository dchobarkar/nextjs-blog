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
      fontSize: {
        h1: ["36px", { lineHeight: "1.2", fontWeight: "700" }], // Bold
        h2: ["28px", { lineHeight: "1.3", fontWeight: "600" }], // Semi-Bold
        h3: ["20px", { lineHeight: "1.4", fontWeight: "600" }], // Semi-Bold
        body: ["16px", { lineHeight: "1.5", fontWeight: "400" }], // Regular
      },
    },
  },
  plugins: [],
} satisfies Config;
