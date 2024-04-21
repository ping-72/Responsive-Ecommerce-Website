/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#fff",
        text: "#000",
        primary: "#f7f6f0",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#deded6",
        },
        dimgray: "#505050",
        "button-hover": "rgba(217, 217, 217, 0.35)",
        gray: "rgba(0, 0, 0, 0.8)",
      },
      spacing: {},
      fontFamily: {
        h3: "Inter",
        "crimson-text": "'Crimson Text'",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xl: "20px",
      "5xl": "24px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
