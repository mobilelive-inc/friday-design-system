import * as React from 'react';
import { Welcome } from '@storybook/react/demo';
import GetStarted from './getStarted';
import Colors from './colors';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <GetStarted />;
// eslint-disable-next-line react/no-multi-comp
export const colorTokens = () => <Colors />

ToStorybook.story = {
  name: 'Get Started',
  // parameters: { docs: { disable: false }, canvas:{disable: false} }
  parameters: {
    options: {
      isToolshown:false,
      showPanel:false,
      showCanvas:true
    },
    docs: { page: null } ,
  },
};

colorTokens.story = {
  name: 'Color Swatch',
  // parameters: { docs: { disable: false }, canvas:{disable: false} }
  parameters: {
    options: {
      isToolshown:false,
      showPanel:false,
      showCanvas:true
    }
  },
}
