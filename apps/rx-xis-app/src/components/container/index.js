import React from 'react';
import { ThemeProvider } from 'styled-components';
import stepperTheme from './../theme/defaultTheme';
import GlobalStyle from './../theme/globalStyles';
import { ContainerDiv } from './css';

const Container = ({ children }) => {
  return (
    <ThemeProvider theme={stepperTheme}>
      <GlobalStyle />
      <ContainerDiv> {children} </ContainerDiv>
    </ThemeProvider>
  );
};

export default Container;
