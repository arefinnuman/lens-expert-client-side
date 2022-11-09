/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#232b84",

          secondary: "#eac7fc",

          accent: "#6de8d3",

          neutral: "#241825",

          "base-100": "#E3E6E8",

          info: "#73C1D9",

          success: "#2ACFAC",

          warning: "#C5780D",

          error: "#EA4D6F",
        },
      },
    ],
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
