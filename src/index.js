import React from 'react';
import ReactDOM from 'react-dom';
// import {
//   Button, index, Innput
// } from '../build'
import { ThemeProvider } from 'styled-components';
import Button from './components/Button'
import theme from './components/theme/defaultTheme';

function App(){
  return(
    <ThemeProvider theme={theme}>
      <h1>Design System</h1>
      <Button
        width="10%" m="10px">Primary</Button>
      <Button
        variant="secondary"
        width="10%" m="10px">Secondary</Button>
      <Button
        variant="success"
        width="10%" m="10px">Success</Button>
      <Button
        variant="danger"
        width="10%" m="10px">Success</Button>
      <Button
        variant="warning"
        width="10%" m="10px">Success</Button>
      <Button
        variant="info"
        width="10%" m="10px">Success</Button>
      <Button
        variant="light"
        width="10%" m="10px">Success</Button>
      <Button
        variant="outlinePrimary"
        width="10%" m="10px">Primary</Button>
      <Button
        variant="outlineSecondary"
        width="10%" m="10px">Secondary</Button>
      <Button
        variant="outlineSuccess"
        width="10%" m="10px">Success</Button>
      <Button
        variant="outlineDanger"
        width="10%" m="10px">Danger</Button>
      <Button
        variant="outlineInfo"
        width="10%" m="10px">Info</Button>
      <Button
        variant="outlineLight"
        width="10%" m="10px">Light</Button>
      <Button
        variant="outlineDark"
        width="10%" m="10px">Secondary</Button>
      <Button
        // variant="outlineWarning"
        color="blue"
        width="10%" m="10px">Warning</Button>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));