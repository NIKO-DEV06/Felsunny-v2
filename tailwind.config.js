/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        integral: ["Integral CF", "sans-serif"],
        "integral-bold": ["Integral CF Bold", "sans-serif"],
        "integral-demibold": ["Integral CF Demibold", "sans-serif"],
        "integral-extrabold": ["Integral CF Extrabold", "sans-serif"],
        "integral-heavy": ["Integral CF Heavy", "sans-serif"],
        "integral-medium": ["Integral CF Medium", "sans-serif"],
        sofia: ["Sofia", "sans-serif"],
        "sofia-extralight": ["Sofia-Extralight", "sans-serif"],
        "sofia-regular": ["Sofia-Regular", "sans-serif"],
        "sofia-medium": ["Sofia-Medium", "sans-serif"],
        "sofia-semibold": ["Sofia-Semibold", "sans-serif"],
        "sofia-bold": ["Sofia-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
