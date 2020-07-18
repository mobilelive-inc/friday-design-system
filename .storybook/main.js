module.exports = {
  stories: ['../apps/rx-xis-app/stories/**/*.stories.js',
            '../apps/rx-xis-app/src/components/**/stories/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-queryparams',
  ],
};
