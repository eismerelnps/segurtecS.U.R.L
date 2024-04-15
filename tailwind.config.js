/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
    extend: {
      colors: {
        carbon: {
          50: "#171717",
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
        white: {
          50: "#ffffff",
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
        primaryRed: {
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
        secondary: {
          50: "#331515",
          100: "",
          200: "",
          300: "",
          400: "",
          500: "",
          600: "",
          700: "",
          800: "",
          900: ""
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
  plugins: [],
};
