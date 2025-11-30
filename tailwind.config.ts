export default {
  theme: {
    extend: {
      colors: {
        // Define teal as primary color using new palette
        teal: {
          50: "#EFF6E0", // Beige
          100: "#d9eff3", // Light teal from logo
          200: "#b3e5ea",
          300: "#4cb3c6", // Teal Light
          400: "#0092ae", // Teal (brighter for buttons)
          500: "#124559", // Dark Teal (main brand)
          600: "#0f3a49",
          700: "#0c2e39",
          800: "#092329",
          900: "#01161E", // Ink Black
          950: "#000b0f",
        },
        // Override slate to use our palette for neutral colors
        slate: {
          50: "#EFF6E0", // Beige
          100: "#dce6dc", // Light Ash Grey
          200: "#c9d5ca",
          300: "#AEC3B0", // Ash Grey
          400: "#8ca98e",
          500: "#598392", // Air Force Blue (less green)
          600: "#124559", // Dark Teal
          700: "#0c2e39",
          800: "#092329",
          900: "#01161E", // Ink Black
          950: "#000b0f",
        },
        // Custom moretaste colors
        moretaste: {
          // New palette
          "ink-black": "#01161E",
          "dark-teal": "#124559",
          "air-force-blue": "#598392",
          "ash-grey": "#AEC3B0",
          beige: "#EFF6E0",
          // Original logo colors (kept for reference)
          teal: {
            DEFAULT: "#0092ae",
            light: "#4cb3c6",
            lighter: "#d9eff3",
          },
          red: {
            DEFAULT: "#e63312",
            light: "#ea5444",
            medium: "#e8472a",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
