/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Gotham SSm A, sans-serif"],
    },
    extend: {
      height: {
        header: "5rem",
      },
      colors: {
        "bg-color": "#17191e",
        mainColor: "#3245ff",
        "text-main": "#17191e",
        "blue-color": "#3245ff",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
