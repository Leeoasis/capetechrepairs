/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-image': 'url("/board.jpeg")',
      },
      backgroundColor: {
        'overlay': 'rgba(0, 0, 255, 0.6)',
      },
      zIndex: {
        '10': 10,
        '20': 20,
      },
      container: {
        center: true,
      },
      colors: {
        customGreen: 'rgba(255, 165, 0, 1)',
      },
    
    },
  },
  plugins: [],
}
