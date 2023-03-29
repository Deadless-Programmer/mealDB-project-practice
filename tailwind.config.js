/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#73f95e",
        
"secondary": "#fcbff5",
        
"accent": "#4bf280",
        
"neutral": "#151523",
        
"base-100": "#F5F4F5",
        
"info": "#578EE0",
        
"success": "#0F855E",
        
"warning": "#C97713",
        
"error": "#FC5F8E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

