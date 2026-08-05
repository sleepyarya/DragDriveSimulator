/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        drag: {
          orange: '#ff6b00',
          orangeHover: '#ea580c',
          orangeLight: '#fff7ed',
          orangeBorder: '#ffded0',
          textDark: '#0f172a',
          textMuted: '#475569',
          card: '#ffffff',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        avenir: ['Avenir Next', 'Avenir', 'Nunito', 'Segoe UI', 'sans-serif'],
        sans: ['Avenir Next', 'Avenir', 'Nunito', 'Segoe UI', 'sans-serif'],
        impact: ['Avenir Next', 'Avenir', 'Nunito', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'orange-glow': '0 10px 30px -5px rgba(255, 107, 0, 0.3)',
        'card-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
