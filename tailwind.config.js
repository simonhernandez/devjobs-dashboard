/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'violet': '#5964E0',
        'lightViolet': '#939BF4',
        'veryLightViolet': '#EFF0FC',
        'veryDarkBlue': '#19202D',
        'midnight': '#121721',
        'white': '#FFFFFF',
        'lightGray': '#F4F6F8',
        'gray': '#9DAEC2',
        'darkGray': '#6E8098',
      },
      fontFamily: {
        primary : ['Kumbh Sans', 'sans-serif'],
      },
      fontSize: {
        fs_h1: '1.625rem',
        fs_h2: '1.375rem',
        fs_h3: '1rem',
        fs_h4: '.8125rem',
        fs_body: '.8125rem',
        fs_h1_lg: '1.75rem',
        fs_h2_lg: '1.5rem',
        fs_h3_lg: '1.25rem',
        fs_h4_lg: '.875rem',
        fs_body_lg: '1rem',
      },
      fontWeight: {
        fw_h1: '700',
        fw_h2: '700',
        fw_h3: '700',
        fw_h4: '700',
        fw_body: '300',
      },
      lineHeight: {
        lh_h1: '2.125rem',
        lh_h2: '1.8125rem',
        lh_h3: '1.5rem',
        lh_h4: '1.125rem',
        lh_body: '1.625rem',
      },
      boxShadow: {
        'searchbar': '0 16px 30px -10px rgba(70, 96, 187, .1986)',
      },
    },
  },
  plugins: [],
}
