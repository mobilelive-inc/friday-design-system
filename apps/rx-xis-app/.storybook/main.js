module.exports = {
  stories: ['../stories/**/*.stories.js',
            '../src/components/**/stories/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-queryparams',
  ],
};
