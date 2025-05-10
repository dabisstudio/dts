import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luminous Precision color palette
        charcoal: "#2A2A2A",
        "off-white": "#F8F8F8",
        "electric-blue": "#00A3FF",
        "refined-gold": "#D4AF37",
        "deep-navy": "#001F3F",
      },
      fontFamily: {
        // You'll need to import these fonts in your CSS
        "serif-primary": ["var(--font-serif-primary)"],
        "sans-primary": ["var(--font-sans-primary)"],
      },
    },
  },
  plugins: [],
};

export default config;
