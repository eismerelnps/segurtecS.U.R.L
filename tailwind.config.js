/** @type {import('tailwindcss').Config} */
module.exports = {
  //darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,ts,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e9e5e5",
          100: "#826b6d",
          200: "#36171c",
          300: "#660919",
          400: "#9a131a",
          500: "#cd290e",
          600: "#9a131a",
          700: "#660919",
          800: "#260004",
          900: "#210000"
        },

      },
      // backgroundImage: {
      //   "gradient-radial":
      //     "radial-gradient(circle, rgba(0,0,0,1) 36%, rgba(255,255,255,0) 100%)",
      //   "gradient-conic":
      //     "radial-gradient(circle, rgba(0,0,0,1) 36%, rgba(255,255,255,0) 100%)",
      // },
    },
  },
  plugins: [require("daisyui")],
};
