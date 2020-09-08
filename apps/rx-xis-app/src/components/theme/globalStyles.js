import { createGlobalStyle } from 'styled-components';
import MediaQuery from '../../utils/mediaQuery';
import { colors } from './colors';

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
    // height: 100%;
    // opacity: 0.5;
    // background-color: rgba(0,0,0,0.5);
    transition: opacity 0.15s linear;
    ${MediaQuery.desktop`
      position: relative;
    `};
  }
  div[data-react-modal-body-trap] {
    position: absolute;
    opacity: 1;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    opacity: 1 !important;
    top: 0;
    left: 0;
    // z-index: 1049;
  }


  .noPaddingLeftRight div {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  
`;

export default GlobalStyle;