import React from 'react';
import { ThemeProvider } from 'styled-components';
import stepperTheme from './../theme/defaultTheme';
import GlobalStyle from './../theme/globalStyles';
import { ContainerDiv,Div } from './css';

const Container = ({ children }) => {
  return (
    <ThemeProvider theme={stepperTheme}>
      <GlobalStyle />
      <ContainerDiv> {children} </ContainerDiv>
    </ThemeProvider>
  );
};

export default Container;

export const MainContainer = ({children}) => {
  return (
    <ThemeProvider theme={stepperTheme}>
      <GlobalStyle />
      <Div>{children} </Div>
    </ThemeProvider>
  );
}