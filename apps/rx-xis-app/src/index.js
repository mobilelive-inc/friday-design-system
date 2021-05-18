import React from 'react';
// import {
//   Button, index, Innput
// } from '../build'
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';
import Button from './components/Button';
import {
  Accordion,
  AccordionCollapse,
  AccordionHeader,
  AccordionContainer
} from './components/accordion';
import {
  PrimaryButton,
  OutlineButtons,
  ClearButton,
  RoundedButtons,
  RoundedOutlineButtons,
  CurvedButtons,
  CurvedOutlineButtons,
  FilledSocialButtons,
  OutlineSocialButtons
} from './../stories/1-Button.stories';
import { OtherSpecs } from './../stories/typography.stories';
// import Button from '../../../build';
import { Text } from './components/typography';
import Stepper from './components/stepper';
import { Tabs, Tab, TabPanel } from './components/tab';
import Span from './components/span/span';
import Icon from './components/icon/Icon';
import Input from './components/Input';
import theme from './components/theme/defaultTheme';
import './../../../libs/icons/icomons_styles.scss';
import Checkbox from './components/checkbox';
import Radio from './components/radio';
import Select from './components/select';
import Label from './components/label';
import Option from './components/option';
import TextArea from './components/textArea';
import Tooltip from './components/tooltip';
import Toggle from './components/toggle';
import SkipLink from './components/skipLink';

function App() {
  const options = [
    {
      id: 0,
      value: 'Javascript'
    },
    {
      id: 2,
      value: 'Java'
    },
    {
      id: 3,
      value: 'C++'
    }
  ];
  console.log('radio is ', Radio);
  const [isChecked, setIschecked] = React.useState(false);
  const [gender, setGender] = React.useState('male');
  const [selected, setSelected] = React.useState(null);
  const [isOn, setIsOn] = React.useState(false);
  const [selectdTab, setSelectedTab] = React.useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Tabs
        value={selectdTab}
        onChange={setSelectedTab}
        withLeftIcon
        withRightIcon>
        <Tab title="Tab One" />
        <Tab title="Tab Two" disabled />
        <Tab title="Tab Three" />
      </Tabs>
      <TabPanel value={selectdTab} index={0}>
        <Text>Item One</Text>
      </TabPanel>
      <TabPanel value={selectdTab} index={1}>
        <Text>Item Two</Text>
      </TabPanel>
      <TabPanel value={selectdTab} index={2}>
        <Text>Item Three</Text>
      </TabPanel>
      <AccordionContainer hasMultiple={false}>
        <Accordion
          onExpand={() => console.log('Opened')}
          onCollapse={() => console.log('Closed')}>
          <AccordionHeader title={'Heading'}></AccordionHeader>
          <AccordionCollapse>
            <div>This is the for testing purpose</div>
          </AccordionCollapse>
        </Accordion>
        <Accordion
          onExpand={() => console.log('Opened')}
          onCollapse={() => console.log('Closed')}>
          <AccordionHeader title={'Heading'}></AccordionHeader>
          <AccordionCollapse>
            <div>This is the for testing purpose</div>
          </AccordionCollapse>
        </Accordion>
        <Accordion
          onExpand={() => console.log('Opened')}
          onCollapse={() => console.log('Closed')}>
          <AccordionHeader title={'Heading'}></AccordionHeader>
          <AccordionCollapse>
            <div>This is the for testing purpose</div>
          </AccordionCollapse>
        </Accordion>
      </AccordionContainer>
      <PrimaryButton />
      <OutlineButtons />
      <ClearButton />
      <RoundedButtons />
      <RoundedOutlineButtons />
      <CurvedButtons />
      <CurvedOutlineButtons />
      <FilledSocialButtons />
      <OutlineSocialButtons />
      <OtherSpecs />
      <div style={{ height: '100px', background: 'blue' }}></div>
      <div>
        <Flex mt={5}>
          <SkipLink
            href="#"
            focusableID="newId"
            title="Skip"
            top={150}
            border="none"
            backgroundColor="blue"
            color="white"
          />
        </Flex>
        <Text mb={30} underline italic>
          Testing
        </Text>
        <Flex mt={5} mb={100}>
          <Stepper variant="primary" value={5} total={10} />
        </Flex>
        <Flex mt={5} mb={100}>
          <Button
            variant="outlineGoogleBlue"
            width="15%"
            display="flex"
            withIcon>
            <Icon className="icon-facebook" />
            facebook
          </Button>
        </Flex>
        <Toggle
          shortDescription="Test toggle"
          id="bt1"
          //  styles={{
          //   toggledOnBgColor: 'green',
          //   toggledOffBgColor: 'white',
          //   switchOnColor: 'orange',
          //   switchOffColor: 'black',
          //  }}
          size="lg"
          isToggled={isOn}
          error
          label="On"
          onChange={() => {
            setIsOn(!isOn);
          }}
        />
        <Toggle
          shortDescription="Test toggle"
          identity="bt1"
          styles={{
            toggledOnBgColor: 'green',
            toggledOffBgColor: 'white',
            switchOnColor: 'orange',
            switchOffColor: 'black',
            toggledOffBorder: '1px solid black'
          }}
          size="sm"
          isToggled={isOn}
          onChange={() => {
            setIsOn(!isOn);
          }}
        />
        <Toggle
          shortDescription="Test toggle"
          identity="bt1"
          styles={{
            toggledOnBgColor: 'white',
            toggledOffBgColor: 'white',
            switchOnColor: 'black',
            switchOffColor: 'black',
            toggledOffBorder: '1px solid black',
            toggledOnBorder: '1px solid black'
          }}
          label="On"
          size="sm"
          isToggled={isOn}
          onChange={() => {
            setIsOn(!isOn);
          }}
        />
        <Flex>
          <Select
            name="greetings"
            width="15%"
            height="40px"
            rightIcon="icon-delete_24px"
            leftIcon="icon-delete_24px"
            disabled
            onLeftIconClick={() => alert('on left')}
            // backgroundColor="gray"
            placeholder="select on option"
            // borderType="rounded"

            errorMessage="this is error"
            validationIcon="icon-check_circle_24px"
            // withBorderBottomOnly
            chevron="icon-keyboard_arrow_down_24px"
            value={selected}
            onChange={e => setSelected(e.target.value)}
            color="black">
            {options.map(option => (
              <Option value={option.id}>{option.value}</Option>
            ))}
          </Select>
          <Tooltip
            labelText="This"
            arrow
            arrowSize="big"
            animation="fade"
            theme="light"
            size="regular"
            position="bottom-start">
            <button aria-expanded="false" id="newId">
              Tooltip
            </button>
          </Tooltip>
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
            errorMessage="this is error"
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
              name="services"
              value="internet"
              label="Internet"
              backgroundColor="green"
              color="black"
              errorMessage="asdas"
              isFilled
              variant={isChecked ? 'checked' : 'unchecked'}
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
          <Box p={10}>
            <Checkbox
              name="services"
              value="internet"
              label="Internet"
              backgroundColor="green"
              color="black"
              errorMessage="asdas"
              isFilled
              variant="unchecked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        <Flex>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="Internet"
              backgroundColor="black"
              color="white"
              errorMessage=""
              isFilled
              variant="checked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="Internet"
              backgroundColor="black"
              color="white"
              errorMessage=""
              isFilled
              variant="unchecked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        <Flex>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="Internet"
              backgroundColor="black"
              color="black"
              errorMessage=""
              isFilled={false}
              variant="checked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="Internet"
              backgroundColor="black"
              color="black"
              errorMessage=""
              isFilled={false}
              variant="unchecked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        <Flex>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="Internet"
              backgroundColor="primary"
              color="primary"
              errorMessage=""
              isFilled={false}
              variant="checked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="Internet"
              backgroundColor="primary"
              color="primary"
              errorMessage=""
              isFilled={false}
              variant="unchecked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        <Flex>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label=""
              backgroundColor="primary"
              color="primary"
              borderType="curved"
              isFilled={false}
              variant="checked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label=""
              backgroundColor="primary"
              color="primary"
              borderType="curved"
              isFilled={false}
              variant="unchecked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        <Flex>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label=""
              backgroundColor="primary"
              color="primary"
              borderType="rounded"
              isFilled={false}
              variant="checked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
          <Box p={10}>
            <Checkbox
              name="services1"
              value="internet1"
              label="dong"
              backgroundColor="primary"
              color="primary"
              errorMessage="dasdasd"
              checkedIconClass="icon-check_circle_24px"
              borderType="rounded"
              isFilled={false}
              variant="checked"
              onChange={() => {
                setIschecked(!isChecked);
              }}
            />
          </Box>
        </Flex>
        Redio Buttons
        <Flex>
          <Radio
            name="male"
            value="male"
            label="Male"
            backgroundColor="primary"
            color="black"
            borderType="rounded"
            variant={gender === 'male' ? 'checked' : 'unchecked'}
            onChange={() => {
              setGender('male');
            }}
          />
        </Flex>
        <Flex>
          <Radio
            name="female"
            value="female"
            label="female"
            backgroundColor="primary"
            color="blue"
            // errorMessage="dasdasd"
            // borderType="rounded"
            checkedIconClass="icon-check_circle_24px"
            variant={gender === 'female' ? 'checked' : 'unchecked'}
            onChange={() => {
              setGender('female');
            }}
          />
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
            disabled={false}
          />
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
            disabled={false}
          />
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
            disabled={false}
          />
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
            // disabled
            errorMessage="required field"
            error
            id="search"
            rows="20"
            cols="14"
            iconPosition="inside"
            validationIcon="icon-check_circle_24px"
            bottomValidationIcon="icon-check_circle_24px"
            isValid={true}
          />
          <TextArea
            type="text"
            // width="auto"
            // height=""
            value={''}
            ml={10}
            placeholder="Text Area"
            label=""
            onChange={e => {
              setGender(e.target.value);
            }}
            borderType="rounded"
            // disabled
            errorMessage="required field"
            error
            id="search"
            rows="20"
            cols="14"
            iconPosition="inside"
            validationIcon="icon-check_circle_24px"
            bottomValidationIcon="icon-check_circle_24px"
            isValid={true}
          />
        </Flex>
      </div>
    </ThemeProvider>
  );
}

export default App;
