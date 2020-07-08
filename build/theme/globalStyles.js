let _ = t => t,
    _t,
    _t2,
    _t3;

import { createGlobalStyle } from 'styled-components';
import MediaQuery from '../../utils/mediaQuery';
import { colors } from './colors'; // add style from reset here

const GlobalStyle = /*#__PURE__*/createGlobalStyle(_t || (_t = _`

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
    background-color: ${0};
  }

  body.disable-scroll {
   overflow:hidden;
   ${0};
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
    ${0};
  }

  .noPaddingLeftRight div {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  
`), colors.white, MediaQuery.desktop(_t2 || (_t2 = _`
     overflow:visible;
   `)), MediaQuery.desktop(_t3 || (_t3 = _`
      position: relative;
    `)));
export default GlobalStyle;