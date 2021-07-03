const path = require('path');

module.exports = {
   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
   addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      {
         name: '@storybook/addon-postcss',
         options: {
            ident: 'postcss',
            plugins: [require('tailwindcss'), require('autoprefixer')],
            postcssLoaderOptions: {
               implementation: require('postcss'),
            },
         },
      },
   ],
   webpackFinal: async (config) => {
      config.resolve.alias = {
         '@': path.resolve(__dirname, '../src'),
      };
      return config;
   },
};
