import { createGlobalStyle } from 'styled-components';
import MediaQuery from '../../utils/mediaQuery';
import { colors } from './properties/colors';

// add style from reset here

const GlobalStyle = createGlobalStyle`

  @font-face { font-display: swap; }

  body {
    font-family: Gotham SSm A, Gotham SSm B, sans-serif !important;
    font-style: normal;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: ${colors.white};
  }

  body.disable-scroll {
   overflow:hidden;
   ${MediaQuery.desktop`
     overflow:visible;
   `};
 }

  .ReactModal__Body--open {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
    ${MediaQuery.desktop`
      position: relative;
    `};
  }

  .noPaddingLeftRight div {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  
`;

export default GlobalStyle;
