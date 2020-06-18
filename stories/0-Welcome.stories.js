import * as React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import GetStarted from './getStarted'

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <GetStarted />;

ToStorybook.story = {
  name: 'Get Started',
};
