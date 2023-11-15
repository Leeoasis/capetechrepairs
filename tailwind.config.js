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
        'custom-image': 'url("/newboard.jpg")',
      },
      backgroundColor: {
        'overlay': 'rgba(80, 144, 175, 0.8)',
      },
      zIndex: {
        '10': 10,
        '20': 20,
      },
      container: {
        center: true,
      },
      colors: {
        customPurple: ' rgba(175, 80, 144, 0.9)',
        customDarkGreen: ' rgba(60, 290, 90, 1)',
        customRed: 'rgba(255, 0, 0, 0.6)',
        customYellow: 'rgba(255, 165, 0, 1)',
        customBlue: 'rgba(5, 19, 125, 0.8)',
      },
    
    },
  },
  plugins: [],
}
