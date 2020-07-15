import React from 'react';
// import {
//   Button, index, Innput
// } from '../build'
import { ThemeProvider } from 'styled-components';
import {
  Flex, Box
} from 'rebass/styled-components';
import Button from './components/Button';
// import Button from '../../../build';
import { Text } from './components/typography';
import Span from './components/span/span';
import Input from './components/Input';
import theme from './components/theme/defaultTheme';
import './components/icomons_styles.scss';
import Checkbox from './components/checkbox';

function App() {
  const [isChecked, setIschecked] = React.useState(false)
  return (
    <ThemeProvider theme={theme}>
      <Flex>
        <Checkbox name="services" value="internet" label="Internet"
        backgroundColor="primary"
         variant={isChecked ? "checked":"unchecked"}
         onChange={() => {setIschecked(!isChecked)}}
          />
      </Flex>
      <Flex>
        <Input
          type="Password"
          value=""
          placeholder="Password"
          label=""
          id="Password"
          showErrorMessage
          errorMessage=""
          isClearButtonVisible
          leftIcon="icon-delete_24px"
          leftIconClick={() => alert("left icon clicked")}
          rightIcon="icon-delete_24px"
          rightIconClick={() => alert("right icon clicked")}
          clearButtonClasses="icon-delete_24px"
          onClear={() => {}}
          // borderType="curved"
          // borderRadius="10px"
          withBottomBorderOnly
          disabled={false}/>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
