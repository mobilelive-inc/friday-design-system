import React from "react";
import { ThemeProvider } from "styled-components";
import progressbarTheme from "../../theme/styles/progressbar";
import GlobalStyle from "../../theme/globalStyles";
import Progress from "..";

export default {
  title: "Progress",
  component: Progress,
};

export const Progressbar = () => {
  return (
    <ThemeProvider theme={progressbarTheme}>
      <GlobalStyle />
      <Progress />
    </ThemeProvider>
  );
};
