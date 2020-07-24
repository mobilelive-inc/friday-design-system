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
import Radio from './components/radio';
import Select from './components/select';
import Label from './components/label';
import Option from './components/option';
import TextArea from './components/textArea';

function App() {
  const options = [
    {
      id:0,
      value: 'Javascript'
    },
    {
      id:2,
      value: 'Java'
    },
    {
      id:3,
      value: 'C++'
    }
  ]
  console.log("radio is ", Radio)
  const [isChecked, setIschecked] = React.useState(false)
  const [gender, setGender] = React.useState("male");
  const [selected, setSelected] = React.useState(null);
  return (
    <ThemeProvider theme={theme}>
      <Flex>
        <TextArea
          type="text"
          width="50%"
          value=""
          placeholder="Text Area"
          label="Search"
          borderType="rounded"
          disabled
          errorMessage="required field"
          error
          id="search"
          rows="100"
          colums="14"
          validationIcon="icon-check_circle_24px"
          isValid={true} />
      </Flex>
     
    </ThemeProvider>
  );
}

export default App;
