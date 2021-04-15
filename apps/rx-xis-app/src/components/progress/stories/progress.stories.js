import React from 'react';
import { ThemeProvider } from 'styled-components';
import Text from '../../typography';
import Theme from '../../theme/typography';
import GlobalStyle from '../../theme/globalStyles';
export default {
  title: 'Progress',
  component: Progressbar
};
export const Progressbar = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
     <Text variant='H1' aria-label="prgress stories" >im from progress storis</Text>
    </ThemeProvider>
  );
};
