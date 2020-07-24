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
        <Select
          name="greetings"
          width="15%"
          height="40px"
          rightIcon="icon-delete_24px"
          leftIcon="icon-delete_24px"
          disabled
          onLeftIconClick={() => alert("on left")}
          // backgroundColor="gray"
          placeholder="select on option"
          // borderType="rounded"
          errorMessage="this is error"
          validationIcon="icon-check_circle_24px"
          // withBorderBottomOnly
          chevron="icon-keyboard_arrow_down_24px"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          
          {
            options.map((option) => <Option value={option.id}>{option.value}</Option>)
          }
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
            name="services1" value="internet1" label="dong"
            backgroundColor="primary"
            color="primary"
            errorMessage="dasdasd"
            checkedIconClass="icon-check_circle_24px"
            borderType="rounded"
            isFilled={false}
            variant="checked"
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
        <Label position="absolute">This is outside label</Label>
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
        <Label>This is outside label</Label>
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
          type="search"
          value="sdfsdf"
          placeholder="Emasdfsdfsdfil"
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
      <Flex width="100%" mt={10}>
        <Input
          type="Email"
          value="asdasdasdas"
          textAlign="right"
          bg="primary"
          placeholder="Email"
          label="Email"
          id="Email"
          showErrorMessage
          errorMessage=""
          isClearButtonVisible
          leftIcon="icon-search_24px"
          validationIcon="icon-check_circle_24px"
          isValid
          // leftIconClick={() => alert("left icon clicked")}
          rightIcon="icon-clear_24px"
          // rightIconClick={() => alert("right icon clicked")}
          borderType="rounded"
          // borderRadius="10px"
          color="orange"
          borderBottom="5px solid red"
          withBottomBorderOnly
          disabled={false}/>
      </Flex>
      {/* <Flex>
        <Box mt={10}>
          <Checkbox
            name="services" value="internet" label="Internet"
            backgroundColor="yellow"
            color="black"
            errorMessage=""
            isFilled
            variant={isChecked ? "checked":"unchecked"}
            onChange={() => {setIschecked(!isChecked)}}/>
        </Box>
      </Flex> */}
    </ThemeProvider>
  );
}

export default App;
