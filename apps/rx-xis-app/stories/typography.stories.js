import React from 'react';
import { ThemeProvider } from 'styled-components';
import  { Text } from "../src/components/typography";
import theme from '../src/components/theme/defaultTheme';

export default {
  title: 'Typography',
  component: Text,
};

export const Typography = () => (
  <ThemeProvider theme={theme}>
    <Text variant="H1"> <span>Heading 1</span> </Text>
    <Text mt="20px" color="primary" variant="H2"> Heading 2 </Text>
    <Text mt="20px" color="secondary" variant="H3">Heading 3</Text>
    <Text mt="20px" color="success" variant="H4">Heading 4</Text>
    <Text mt="20px" color="danger" variant="H5">Heading 5</Text>
    <Text mt="20px" color="blue" variant="H6">Heading 5</Text>
    <Text mt="20px" color="green">This is a paragraph</Text>
  </ThemeProvider>
)