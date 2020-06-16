import { createGlobalStyle } from 'styled-components';
import MediaQuery from '../../utils/mediaQuery';
import { colors } from './defaultTheme';

const GlobalStyle = createGlobalStyle`

  @font-face { font-display: swap; }

  * {
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

  p,
  span,
  label {
    line-height: 1.5em;
    font-weight: 300;
  }

  input, select, textarea {
    background-color: transparent;
    border-style: none;
    color: inherit;
    font-size: 1em;
    margin: 0;
  }

  body, h1, h2, h3, h4 {
    margin: 0;
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
