import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        foregroundLightTheme: '#595959',
        backgroundLightTheme: '#fff',
        foregroundDarkTheme: '#a9a9a9',
        backgroundDarkTheme: '#1f1f1f',
      },
    },
  },
  plugins: [],
}
export default config
