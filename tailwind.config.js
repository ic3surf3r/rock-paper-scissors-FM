/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "scissors-start": "hsl(39, 89%, 49%)",
      "scissors-end": "hsl(40, 84%, 53%)",
      "paper-start": "hsl(230, 89%, 62%)",
      "paper-end": "hsl(230, 89%, 65%)",
      "rock-start": "hsl(349, 71%, 52%)",
      "rock-end": "hsl(349, 70%, 56%)",
      "cyan-start": "hsl(189, 59%, 53%)",
      "cyan-end": "hsl(189, 58%, 57%)",
      "dark-Text-Color": " hsl(229, 25%, 31%)",
      "score-Text-Color": "hsl(229, 64%, 46%)",
      "header-Outline-Color": "hsl(217, 16%, 45%)",
      "background-Start-Color": "hsl(214, 47%, 23%)",
      "background-end-Color": "hsl(237, 49%, 15%)",
      white: "#fff",
    },
    fontFamily: {
      body: ['"Barlow Semi Condensed"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
