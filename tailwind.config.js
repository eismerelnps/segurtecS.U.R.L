/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, rgba(0,0,0,1) 36%, rgba(255,255,255,0) 100%)",
        "gradient-conic":
          "radial-gradient(circle, rgba(0,0,0,1) 36%, rgba(255,255,255,0) 100%)",
      },
      colors: {
        'red': "#E32227",
        'bone': "#F2ECFF",
        'pink': "#ff49db",
        'orange': "#ff7849",
        'green': "#13ce66",
        'yellow': "#ffc82c",
        'gray_dark': "#273444",
        'gray': "#8492a6",
        'gray_light': "#d3dce6",
      },
    },
  },
  plugins: [],
};
