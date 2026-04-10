import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F5F1EA",
        ink: "#1A1A1A",
        clay: "#C9B8A5",
        moss: "#3E4A3D",
        blush: "#E8D9CC",
      },
      fontFamily: {
        serif: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
