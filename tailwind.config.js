/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**.{js,ts,jsx,tsx}",
    "./src/app/components/**.{js,ts,jsx,tsx}",
    "./src/app/components/auth/**.{js,ts,jsx,tsx}",
    "./src/app/components/ui/**.{js,ts,jsx,tsx}",
    "./src/app/components/detail/**.{js,ts,jsx,tsx}",
    
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

