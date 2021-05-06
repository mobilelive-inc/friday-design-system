import React from 'react';
import { ThemeProvider } from 'styled-components';
import SkipLink from '..';
import Theme from '../../theme/defaultTheme';
import { Flex } from 'rebass/styled-components';

export default {
  title: 'Skip Link',
  component: SkipLink
};

export const SkipNavigation = () => (
  <ThemeProvider theme={Theme}>
    <div style={{ height: '100px', background: 'blue' }}></div>
    <Flex mt={5}>
      <SkipLink
        href="#"
        focusableID="newId"
        title="Skip"
        top={150}
        border="none"
        backgroundColor="blue"
        color="white"
      />
    </Flex>
  </ThemeProvider>
);
