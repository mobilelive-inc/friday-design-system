import React from "react";
import { ThemeProvider } from "styled-components";
import RadioBtn from "..";
import { Theme } from "../..";
import GlobalStyle from "../../theme/globalStyles";

export default {
    title: 'Radio Button',
    component: RadioBtn
  };

  export const RadioBtnGroup = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RadioBtn />
    </ThemeProvider>
  );
};


