module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {      
      colors: {
        'primary': {
          '50': '#D6E9FF',
          '100': '#ADD2FF',
          '200': '#70B0FF',
          '300': '#3993FF',
          '400': '#0A78FF',
          '500': '#005CCC',
          '600': '#00408F',
          '700': '#002552',
        },
        'secondary': {
          '50': '#D6E2EA',
          '100': '#9FBAD0',
          '200': '#4A7496',
          '300': '#2F4A60',
          '400': '#1B2937',
          '500': '#142029',
          '600': '#0D151B',
          '700': '#070A0E',
        }
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
  },
  plugins: [],
}
