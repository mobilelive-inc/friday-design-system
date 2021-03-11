import React from 'react';
import { ThemeProvider } from 'styled-components';
import Steper from './../index';
import Text from './../index';
import Theme from '../../theme/defaultTheme';
import GlobalStyle from '../../theme/globalStyles';
import '../../icomoon_icons.css';

export default {
  title: 'Steppet',
  component: St
};

export const Selects = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Text>kdjfldksjflkdsjlkf</Text>
    <Steper />
  </ThemeProvider>
);
