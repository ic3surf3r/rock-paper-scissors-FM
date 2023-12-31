/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "scissors-end": "hsl(39, 89%, 49%)",
      "scissors-start": "hsl(40, 84%, 53%)",
      "scissors-shadow": "#C76C1B",
      "paper-start": "hsl(230, 89%, 62%)",
      "paper-end": "hsl(230, 89%, 65%)",
      "paper-shadow": "#2945C1",
      "rock-start": "hsl(349, 71%, 52%)",
      "rock-end": "hsl(349, 70%, 56%)",
      "rock-shadow": "#9F1933",
      "cyan-start": "hsl(189, 59%, 53%)",
      "cyan-end": "hsl(189, 58%, 57%)",
      "dark-Text-Color": " hsl(229, 25%, 31%)",
      "score-Text-Color": "hsl(229, 64%, 46%)",
      "header-Outline-Color": "hsl(217, 16%, 45%)",
      "background-Start-Color": "hsl(214, 47%, 23%)",
      "background-end-Color": "hsl(237, 49%, 15%)",
      white: "#fff",
      black: "#000",
      "white-shadow": "#BBBFD2",
      "gradient-b1": "#2C3858",
      "gradient-b2": "#263554",
      "gradient-b3": "#213351",
      playAgainColor: "#CC5068",
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
