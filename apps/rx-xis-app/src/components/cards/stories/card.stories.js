import React from "react";
import { ThemeProvider } from "styled-components";
import CardTheme from "../../theme/styles/card";
import Theme from "../../theme/defaultTheme";
import GlobalStyle from "../../theme/globalStyles";
import Cards from "..";

export default {
  title: "Card",
  component: Cards,
};
export const DifferentCards = () => {
  return (
    <ThemeProvider theme={CardTheme}>
      <GlobalStyle />
      <Cards />
    </ThemeProvider>
  );
};
