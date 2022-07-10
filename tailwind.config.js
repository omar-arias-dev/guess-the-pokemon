/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
        fontFamily: {
            rubik: "'Rubik', sans-serif",
        },
        backgroundImage: {
            homeWallpaper: "url('https://w.wallhaven.cc/full/wq/wallhaven-wq78d7.png')",
            laprasWallpaper: "url('https://w.wallhaven.cc/full/p8/wallhaven-p81yoe.png')",
            results: "url('https://w.wallhaven.cc/full/4x/wallhaven-4x81po.jpg')",
        }
    },
  },
  plugins: [],
}
