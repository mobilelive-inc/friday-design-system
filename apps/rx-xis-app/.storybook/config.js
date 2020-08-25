import { addParameters } from '@storybook/react';
import theme from './defaultTheme';

addParameters({
  options: {
    theme,
    isToolshown: true,
    showPanel: false,
    showCanvas: false,
  },
});
