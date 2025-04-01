import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': 'var(--primary-purple)',
        'light-purple': 'var(--light-purple)',
        'dark-purple': 'var(--dark-purple)',
      },
    },
  },
  plugins: [],
};

export default config; 