/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#151515',
        'ink-2': '#1C1C1C',
        'ink-3': '#232323',
        green: '#00EB2B',
        pulse: '#00B4FB',
        offwhite: '#F4F6F4',
        muted: '#9BA39D',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
        pill: '999px',
      },
      boxShadow: {
        glow: '0 0 36px rgba(0,235,43,.35)',
        card: '0 40px 80px -30px rgba(0,0,0,.8)',
      },
      maxWidth: {
        site: '1240px',
      },
      backgroundImage: {
        ignite: 'linear-gradient(90deg,#00EB2B 0%,#00B4FB 100%)',
      },
    },
  },
  plugins: [],
};
