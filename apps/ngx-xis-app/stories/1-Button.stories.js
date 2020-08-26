import React from 'react';
import { action } from '@storybook/addon-actions';
import  Button from '../src/components/button/';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// eslint-disable-next-line react/no-multi-comp
export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">

    </span>
  </Button>
);

