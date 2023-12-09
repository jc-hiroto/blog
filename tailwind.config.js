import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./mdx-components.tsx",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./app/api/og/route.tsx",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-icons/lib/esm/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    hljs: {
      theme: "github-dark",
    },
    extend: {},
  },
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  darkMode: "class",
  plugins: [nextui(), require("tailwind-highlightjs")],
};
