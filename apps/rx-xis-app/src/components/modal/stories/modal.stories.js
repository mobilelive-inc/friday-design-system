import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import Text from '../../typography';
import modalTheme from '../../theme/styles/modal';
import GlobalStyle from '../../theme/globalStyles';
import Modalcomp, { ScrollModal } from '..';

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
    <Modalcomp width="576px" title="Inner Scrollbar"
      text="Because their small size is more efficient for heat conduction, cupcakes bake much faster than a normal layered cake.[7] During baking, the volume of the batter initially increases due to the production of carbon dioxide, then decreases upon cooling due to the release of leavening gases.
      A standard cupcake uses the same basic ingredients as standard-sized cakes: butter, sugar, eggs, and flour. Nearly any recipe that is suitable for a layer cake can be used to bake cupcakes. The cake batter used for cupcakes may be flavored or have other ingredients stirred in, such as raisins, berries, nuts, or chocolate chips.
      
      Because their small size is more efficient for heat conduction, cupcakes bake much faster than a normal layered cake.[7] During baking, the volume of the batter initially increases due to the production of carbon dioxide, then decreases upon cooling due to the release of leavening gases."
    />
    <ScrollModal />
  </ThemeProvider>
);
