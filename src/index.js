import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import {
  Button, index, Innput
} from '../build'

function App(){
  console.log("index ", Innput);
  return(
    <>
      <h1>Design System</h1>
      <Button>
        I am button exported from design system
      </Button>
      <index />
      <Innput />
    </>
=======
import ReactDOM from 'react-dom'
// import DesignSystem from './app'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/theme/globalStyles';
import theme from './components/theme/defaultTheme';
import { Text } from './components/typography';

function App(){
  const headings=[1,2,3,4,5,6];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {
        headings.map((heading,key) => (
          <Text
            variant={`H${heading}`}
            key={key}>
            This is text
          </Text>
        ))
      }
      <Text variant="paragraph" as="p">This is a paragraph. We can add a bunch of data here.</Text>
    </ThemeProvider>
>>>>>>> e1da331596edf46a4f4f2b9f30051bf84a5252f1
  )
}

ReactDOM.render(<App />, document.getElementById('app'));