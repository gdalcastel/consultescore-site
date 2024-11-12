import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)']
      },
      boxShadow: {
        'white-card': '7px 8px 27.4px 2px #0000001A',
        'header-card': '0px 2px 7.5px 0px #00000014'
      }
    }
  },
  plugins: []
};
export default config;
