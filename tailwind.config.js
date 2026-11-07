/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mozhi: {
          primary: '#7041D8',
          electric: '#8B5CF6',
          lavender: '#B69AFB',
          soft: '#F7F5FC',
          lavenderGrey: '#F0ECF8',
          dark: '#29243A',
          muted: '#706B7C',
          border: '#E9E5F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(41, 36, 58, 0.04), 0 1px 2px -1px rgba(41, 36, 58, 0.04)',
        'card': '0 4px 20px -2px rgba(112, 65, 216, 0.05), 0 2px 6px -1px rgba(41, 36, 58, 0.04)',
        'composer': '0 12px 36px -4px rgba(112, 65, 216, 0.09), 0 4px 16px -2px rgba(41, 36, 58, 0.05)',
        'elevated': '0 20px 40px -12px rgba(112, 65, 216, 0.12)',
        'glow': '0 0 24px -4px rgba(112, 65, 216, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
