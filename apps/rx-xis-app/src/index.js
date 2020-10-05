import React from 'react';
// import {
//   Button, index, Innput
// } from '../build'
import { ThemeProvider } from 'styled-components';
// import {
//   Flex, Box
// } from 'rebass/styled-components';
// import Button from './components/Button';
// // import Button from '../../../build';
// import { Text } from './components/typography';
// import Span from './components/span/span';
// import Input from './components/Input';
import theme from './components/theme/defaultTheme';
// import './components/icomons_styles.scss';
// import Checkbox from './components/checkbox';
// import Radio from './components/radio';
// import Select from './components/select';
// import Label from './components/label';
// import Option from './components/option';
// import TextArea from './components/textArea';
// import Tooltip from './components/tooltip';
// import Toggle from './components/toggle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <button></button>
    </ThemeProvider>
  );
}

export default App;
