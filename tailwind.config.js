/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#b6ccff",
          300: "#85a9ff",
          400: "#5285f8",
          500: "#2165ea",
          600: "#1a52c4",
          700: "#153f96",
          800: "#112f6f",
          900: "#0c214f",
        },
        accent: {
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(33, 101, 234, 0.25)",
        glow: "0 0 0 6px rgba(33, 101, 234, 0.15)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #0c214f 0%, #153f96 45%, #2165ea 100%)",
        "hero-radial":
          "radial-gradient(circle at 15% 20%, rgba(250,204,21,0.18) 0, transparent 40%), radial-gradient(circle at 85% 75%, rgba(255,255,255,0.12) 0, transparent 35%)",
      },
    },
  },
  plugins: [],
};
