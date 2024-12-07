import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        highlightForeground: 'var(--highlightForeground)',
      },
    },
  },
  plugins: [],
} satisfies Config
