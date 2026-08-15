/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#152318",
        canopy: {
          50: "#eef6f0",
          100: "#d6ebda",
          200: "#aed7b6",
          300: "#7ebd8c",
          400: "#4f9c63",
          500: "#2f6b4f",
          600: "#255943",
          700: "#1d4736",
          800: "#16362a",
          900: "#0f281f",
        },
        soil: {
          400: "#a9764f",
          500: "#7f5539",
          600: "#5f3f2a",
        },
        amber: {
          300: "#f2c14e",
          400: "#e3a008",
          500: "#c4890a",
        },
        paper: "#f6f7f2",
        mist: "#eef1e9",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(21,35,24,0.04), 0 8px 24px -12px rgba(21,35,24,0.18)",
        card: "0 1px 1px rgba(21,35,24,0.03), 0 2px 12px -4px rgba(21,35,24,0.10)",
      },
    },
  },
  plugins: [],
};
