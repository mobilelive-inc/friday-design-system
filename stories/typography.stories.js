import React from 'react';
import { ThemeProvider } from 'styled-components';
import  { Text } from "../src/components/typography";
import theme from '../src/components/theme/defaultTheme';

export default {
  title: 'Typography',
  component: Text,
};

export const TextStory = () => (
  <ThemeProvider theme={theme}>
    <Text variant="H1"> Heading 1 </Text>
    <Text mt="20px" variant="H2"> Heading 2 </Text>
    <Text mt="20px" variant="H3">Heading 3</Text>
    <Text mt="20px" variant="H4">Heading 4</Text>
    <Text mt="20px" variant="H5">Heading 5</Text>
    <Text mt="20px" variant="H6">Heading 5</Text>
    <Text mt="20px">This is a paragraph</Text>
  </ThemeProvider>
)