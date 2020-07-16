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

function App() {
  console.log("radio is ", Radio)
  const [isChecked, setIschecked] = React.useState(false)
  const [gender, setGender] = React.useState("male")
  return (
    <ThemeProvider theme={theme}>
      <Flex>
        <Select 
          name="greetings"
          width="50%"
          height="40px"
          border="5px solid primary">
          <option value="1">Hey</option>
          <option value="2">There</option>
          <option value="3">Hello</option>
        </Select>
      </Flex>
      <Flex mt={20}>
        <Select 
          name="greetings"
          width="50%"
          height="40px"
          borderRadius="50px">
          <option value="1">Hey</option>
          <option value="2">There</option>
          <option value="3">Hello</option>
        </Select>
      </Flex>
      <Flex mt={20}>
        <Select 
          name="greetings"
          width="50%"
          height="40px"
          borderRadius="10px">
          <option value="1">Hey</option>
          <option value="2">There</option>
          <option value="3">Hello</option>
        </Select>
      </Flex>
      Checkboxes
      <Flex>
        <Box p={10}>
          <Checkbox
            name="services" value="internet" label="Internet"
            backgroundColor="green"
            color="black"
            errorMessage="asdas"
            isFilled
            variant={isChecked ? "checked":"unchecked"}
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
        <Box p={10}>
          <Checkbox
            name="services" value="internet" label="Internet"
            backgroundColor="green"
            color="black"
            errorMessage="asdas"
            isFilled
            variant="unchecked"
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
      </Flex>
      <Flex>
        <Box p={10}>
          <Checkbox
            name="services1" value="internet1" label="Internet"
            backgroundColor="black"
            color="white"
            errorMessage=""
            isFilled
            variant="checked"
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
        <Box p={10}>
          <Checkbox
            name="services1" value="internet1" label="Internet"
            backgroundColor="black"
            color="white"
            errorMessage=""
            isFilled
            variant="unchecked"
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
      </Flex>
      <Flex>
        <Box p={10}>
          <Checkbox
            name="services1" value="internet1" label="Internet"
            backgroundColor="black"
            color="black"
            errorMessage=""
            isFilled={false}
            variant="checked"
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
        <Box p={10}>
          <Checkbox
            name="services1" value="internet1" label="Internet"
            backgroundColor="black"
            color="black"
            errorMessage=""
            isFilled={false}
            variant="unchecked"
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
      </Flex>
      <Flex>
        <Box p={10}>
          <Checkbox
            name="services1" value="internet1" label="Internet"
            backgroundColor="primary"
            color="primary"
            errorMessage=""
            isFilled={false}
            variant="checked"
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
        <Box p={10}>
          <Checkbox
            name="services1" value="internet1" label="Internet"
            backgroundColor="primary"
            color="primary"
            errorMessage=""
            isFilled={false}
            variant="unchecked"
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
      </Flex>
      <Flex>
        <Box p={10}>
          <Checkbox
            name="services1" value="internet1" label=""
            backgroundColor="primary"
            color="primary"
            borderType="curved"
            isFilled={false}
            variant="checked"
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
        <Box p={10}>
          <Checkbox
            name="services1" value="internet1" label=""
            backgroundColor="primary"
            color="primary"
            borderType="curved"
            isFilled={false}
            variant="unchecked"
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
      </Flex>
      <Flex>
        <Box p={10}>
          <Checkbox
            name="services1" value="internet1" label=""
            backgroundColor="primary"
            color="primary"
            borderType="rounded"
            isFilled={false}
            variant="checked"
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
        <Box p={10}>
          <Checkbox
            name="services1" value="internet1" label=""
            backgroundColor="primary"
            color="primary"
            errorMessage="dasdasd"
            borderType="rounded"
            isFilled={false}
            variant="disabled"
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
      </Flex>
      Redio Buttons
      <Flex>
        <Radio
          name="male" value="male" label="Male"
          backgroundColor="primary"
          color="primary"
          errorMessage="dasdasd"
          borderType="rounded"
          isFilled={false}
          variant={gender === 'male' ? 'checked':'unchecked'}
          onChange={() => {setGender('male')}}/>
      </Flex>
      <Flex>
        <Radio
          name="female" value="female" label="female"
          backgroundColor="primary"
          color="black"
          errorMessage="dasdasd"
          borderType="rounded"
          isFilled={false}
          variant={gender === 'female' ? 'checked':'unchecked'}
          onChange={() => {setGender('female')}}/>
      </Flex>
      Text Fields
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
          // leftIcon="icon-delete_24px"
          // leftIconClick={() => alert("left icon clicked")}
          // rightIcon="icon-delete_24px"
          // rightIconClick={() => alert("right icon clicked")}
          clearButtonClasses="icon-delete_24px"
          onClear={() => {}}
          // borderType="curved"
          // borderRadius="10px"
          withBottomBorderOnly
          disabled={false}/>
      </Flex>
      <Flex mt={10}>
        <Input
          type="Email"
          value=""
          placeholder="Email"
          label="Email"
          id="Email"
          showErrorMessage
          errorMessage=""
          isClearButtonVisible
          // leftIcon="icon-delete_24px"
          // leftIconClick={() => alert("left icon clicked")}
          // rightIcon="icon-delete_24px"
          // rightIconClick={() => alert("right icon clicked")}
          // borderType="curved"
          // borderRadius="10px"
          // withBottomBorderOnly
          disabled={false}/>
      </Flex>
      <Flex mt={10}>
        <Input
          type="Email"
          value=""
          placeholder="Email"
          label="Email"
          id="Email"
          showErrorMessage
          errorMessage=""
          isClearButtonVisible
          // leftIcon="icon-delete_24px"
          // leftIconClick={() => alert("left icon clicked")}
          // rightIcon="icon-delete_24px"
          // rightIconClick={() => alert("right icon clicked")}
          borderType="curved"
          // borderRadius="10px"
          // withBottomBorderOnly
          disabled={false}/>
      </Flex>
      <Flex mt={10}>
        <Input
          type="Email"
          value=""
          placeholder="Email"
          label="Email"
          id="Email"
          showErrorMessage
          errorMessage=""
          isClearButtonVisible
          // leftIcon="icon-delete_24px"
          // leftIconClick={() => alert("left icon clicked")}
          // rightIcon="icon-delete_24px"
          // rightIconClick={() => alert("right icon clicked")}
          borderType="rounded"
          // borderRadius="10px"
          // withBottomBorderOnly
          disabled={false}/>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
