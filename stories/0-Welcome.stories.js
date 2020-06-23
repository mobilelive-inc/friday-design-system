import * as React from 'react';
import { Welcome } from '@storybook/react/demo';
import GetStarted from './getStarted';
import Colors from './colors';

export default {
  title: 'Get Started',
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
      isToolshown:true,
      showPanel:false,
      showCanvas:false
    },
    docs: { page: null },
    viewMode: 'story',
  },
};

colorTokens.story = {
  name: 'Color Swatch',
  // parameters: { docs: { disable: false }, canvas:{disable: false} }
  parameters: {
    options: {
      isToolshown:true,
      showPanel:false,
      showCanvas:false
    },
    docs: { page: null },
    viewMode: 'story'
  },
}
