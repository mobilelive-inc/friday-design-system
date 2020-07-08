import React from 'react';
import { action } from '@storybook/addon-actions';
import  Button from "../src/components/Button";
import SecondButton  from '../src/components/Button/button'
// import DeleteIcon from '../src/icons/delete.svg'
// import Favorite from '../src/icons/favorite.svg';
// import AddPhoto from '../src/icons/add_a_photo.svg';
import { Flex } from './getStarted';
import { Box } from './colors';

export default {
  title: 'Button',
  component: Button,
};

export const PrimaryButton = () => <Button onClick={action('clicked')}>Primary Button</Button>;

// eslint-disable-next-line react/no-multi-comp
export const SecondaryButton =  () => (
  <SecondButton onClick={action('clicked')} >Secondary Button</SecondButton>
)

// eslint-disable-next-line react/no-multi-comp
export const WithRadius = () => (
  <Flex>
    <Box width="25%">
      <Button onClick={action('clicked')} radius="30px">
        Rounded Button
      </Button>
    </Box>
    <Box width="25%">
      <Button onClick={action('clicked')} radius="8px">
        Curved Button
      </Button>
    </Box>
  </Flex>
);

// eslint-disable-next-line react/no-multi-comp
export const WithIcon = () => (
  <Flex>
    <Box p="10px" width="25%">
      <SecondButton onClick={action('clicked')}>
        <span>Delete Button</span>
      </SecondButton>
    </Box>
    <Box p="10px" width="25%">
      <SecondButton onClick={action('clicked')}>
        <span>Add To Whishlist  </span>
      </SecondButton>
    </Box>
    <Box p="10px" width="25%">
      <SecondButton onClick={action('clicked')}>
        <span>Upload Photo  </span>
      </SecondButton>
    </Box>
    <Box p="10px" width="25%">
      {/* <SecondButton onClick={action('clicked')}>
        <AddPhoto />
      </SecondButton> */}
    </Box>
  </Flex>
);

// eslint-disable-next-line react/no-multi-comp
export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);




