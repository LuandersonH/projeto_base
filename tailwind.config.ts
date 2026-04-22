import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Limelight", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
