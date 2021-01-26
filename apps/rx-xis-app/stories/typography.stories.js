import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from '../src/components/typography';
import theme from '../src/components/theme/defaultTheme';
import Span from '../src/components/span/span';

export default {
  title: 'Typography',
  component: Text
};

export const Typography = () => (
  <ThemeProvider theme={theme}>
    <Text variant="H1">
      {' '}
      <span>Heading 1</span>{' '}
    </Text>
    <Text mt="20px" color="primary" variant="H2">
      {' '}
      Heading 2{' '}
    </Text>
    <Text mt="20px" color="secondary" variant="H3">
      Heading 3
    </Text>
    <Text mt="20px" color="success" variant="H4">
      Heading 4
    </Text>
    <Text mt="20px" color="danger" variant="H5">
      Heading 5
    </Text>
    <Text mt="20px" color="blue" variant="H6">
      Heading 5
    </Text>
    <Text mt="20px" color="green">
      This is a paragraph
    </Text>
  </ThemeProvider>
);

export const OtherSpecs = () => (
  <ThemeProvider theme={theme}>
    <Text mt="20px" width="30%" mark>
      {' '}
      You can use the mark tag to highlight the text.
    </Text>
    <Text mt="20px" deleted>
      This line of text is meant to be treated as deleted text.
    </Text>
    <Text mt="20px" underline>
      This line of text will render as underlined
    </Text>
    <Text mt="20px">
      This line of text is meant to be treated as fine print.
    </Text>
    <Text mt="20px" bold>
      This line rendered as bold text.
    </Text>
    <Text mt="20px" italic>
      This line rendered as italicized text.
    </Text>
  </ThemeProvider>
);
