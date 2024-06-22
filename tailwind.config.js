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
          50: "#fff0f0",
          100: "#ffc0c0",
          200: "#36171c",
          300: "#660919",
          400: "#ff5757",
          500: "#ff0000",
          600: "#b10303",
          700: "#500000",
          800: "#500000",
          900: "#290000"
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
