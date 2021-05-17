import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import Text from '../../typography';
import modalTheme from '../../theme/styles/modal';
import GlobalStyle from '../../theme/globalStyles';
import Modalcomp from '..';

export default {
  title: 'Modal',
  component: Modal
};

export const Modal = () => (
  <ThemeProvider theme={modalTheme}>
    <GlobalStyle />
    <Modalcomp width="300px" title="Small" />
    <Modalcomp width="864px" title="Large" />
    <Modalcomp width="1089" title="Extra Large" />
  </ThemeProvider>
);
export const ScrollBarModal = () => (
  <ThemeProvider theme={modalTheme}>
    <GlobalStyle />
    <Modalcomp width="300px" title="Small" />
    <Modalcomp width="864px" title="Large" />
    <Modalcomp width="1089" title="Extra Large" />
  </ThemeProvider>
);
