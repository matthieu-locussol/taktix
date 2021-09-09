/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
   purge: ['./src/**/*.{ts,tsx}'],
   darkMode: false,
   theme: {
      colors: {
         blue: colors.blue,
         blueGray: colors.blueGray,
      },
      extend: {},
   },
   variants: {
      extend: {},
   },
   plugins: [
      plugin(({ addBase, theme }) => {
         addBase({
            body: {
               height: '100vh',
               backgroundColor: theme('colors.blueGray.500'),
            },
         });
      }),
   ],
};
