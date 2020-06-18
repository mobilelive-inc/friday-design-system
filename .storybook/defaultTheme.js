import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#f48245',
  colorSecondary: '#f48245',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#f48245',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: 'black',
  barBg: '#f48245',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'The Andromaida',
  brandUrl: 'https://mobilelive.ca/',
  brandImage: 'https://images.ctfassets.net/6krz4kg7somr/4rbWt1PlMkYo4wM0AG404E/3f7fd80ac8a62bd48a235d98bc04127e/logo.png',
});