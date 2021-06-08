import React from "react";
import { ThemeProvider } from "styled-components";
import tableTheme from "../../theme/styles/table";
import defaultTheme from "../../theme/defaultTheme";
import GlobalStyle from "../../theme/globalStyles";
import Table from "./../index";

export default {
  title: "Table",
  component: Table,
};

export const Default_Table = () => {
  return (
    <ThemeProvider theme={tableTheme}>
      <GlobalStyle />
      <Table variant="primary" />
    </ThemeProvider>
  );
};
export const Dark_Table = () => {
  return (
    <ThemeProvider theme={tableTheme}>
      <GlobalStyle />
      <Table tabelbackgroundcolor="black" tabelcolor="white" />
    </ThemeProvider>
  );
};
export const Dark_Table_Head = () => {
  return (
    <ThemeProvider theme={tableTheme}>
      <GlobalStyle />
      <Table textcolor="white" backgroundcolor="black" />
    </ThemeProvider>
  );
};
export const Light_Table_Head = () => {
  return (
    <ThemeProvider theme={tableTheme}>
      <GlobalStyle />
      <Table backgroundcolor="#F2F2F2" />
    </ThemeProvider>
  );
};
export const Striped_Rows = () => {
  return (
    <ThemeProvider theme={tableTheme}>
      <GlobalStyle />
      <Table />
    </ThemeProvider>
  );
};
export const Striped_Rows_Even = () => {
  return (
    <ThemeProvider theme={tableTheme}>
      <GlobalStyle />
      <Table />
    </ThemeProvider>
  );
};

export const Hoverable_Rows = () => {
  return (
    <ThemeProvider theme={tableTheme}>
      <GlobalStyle />
      <Table />
    </ThemeProvider>
  );
};
