import { addParameters } from '@storybook/angular';
import theme from './defaultTheme';

addParameters({
  options: {
    theme,
    isToolshown: true,
    showPanel: false,
    showCanvas: false,
  },
});
