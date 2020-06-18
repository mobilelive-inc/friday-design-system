import {
  addParameters
} from '@storybook/react';
import theme from './defaultTheme';


addParameters({
  options: {
    theme,
    isToolshown:false,
    showPanel:false,
    showCanvas:false
  },
});