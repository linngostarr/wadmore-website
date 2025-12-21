// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wd: {
          ink: "#050814",
          navy: "#0A1A2F",
          slate: "#3E4A59",
          mute: "#9CA3AF",
          border: "#E5E7EB",
          cloud: "#F7F9FA",
          accent: "#E3A36F",
          accentSoft: "#F2D3B5",
          success: "#1B7F5C",
          warning: "#C05621",
          danger: "#B91C1C",
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "wd-soft": "0 18px 45px rgba(15,23,42,0.12)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      maxWidth: {
        "wd-content": "72rem", // ~1152px
      },
    },
  },
  plugins: [],
};
