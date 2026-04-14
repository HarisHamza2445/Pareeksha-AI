/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "on-surface": "#101b30",
              "on-tertiary-fixed-variant": "#004b74",
              "surface-tint": "#3f6653",
              "on-primary-fixed-variant": "#274e3d",
              "surface-container-highest": "#d7e2ff",
              "primary-container": "#002114",
              "outline-variant": "#c4c6cc",
              "on-primary-container": "#648d78",
              "tertiary": "#000000",
              "surface": "#f9f9ff",
              "on-tertiary": "#ffffff",
              "outline": "#74777d",
              "secondary": "#47607e",
              "on-secondary-container": "#48617e",
              "on-background": "#101b30",
              "on-surface-variant": "#44474c",
              "on-secondary-fixed-variant": "#2f4865",
              "secondary-fixed-dim": "#afc9ea",
              "on-tertiary-container": "#2d8aca",
              "on-secondary-fixed": "#001d36",
              "background": "#f9f9ff",
              "secondary-fixed": "#d1e4ff",
              "primary-fixed": "#c1ecd4",
              "on-error-container": "#93000a",
              "surface-dim": "#cfdaf6",
              "inverse-on-surface": "#edf0ff",
              "on-error": "#ffffff",
              "on-primary": "#ffffff",
              "on-primary-fixed": "#002114",
              "on-tertiary-fixed": "#001d32",
              "surface-variant": "#d7e2ff",
              "inverse-surface": "#263046",
              "tertiary-container": "#001d32",
              "error": "#ba1a1a",
              "surface-container-lowest": "#ffffff",
              "tertiary-fixed-dim": "#94ccff",
              "error-container": "#ffdad6",
              "surface-container": "#e8edff",
              "surface-container-high": "#e0e8ff",
              // Use primary #000000 by default (as in templates) or #0f172a from Security template
              "primary": "#0f172a", 
              "secondary-container": "#c2dcff",
              "surface-bright": "#f9f9ff",
              "inverse-primary": "#a5d0b9",
              "surface-container-low": "#f1f3ff",
              "primary-fixed-dim": "#a5d0b9",
              "on-secondary": "#ffffff",
              "tertiary-fixed": "#cde5ff"
      },
      "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
      },
      "fontFamily": {
              "headline": ["Manrope", "sans-serif"],
              "body": ["Inter", "sans-serif"],
              "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
