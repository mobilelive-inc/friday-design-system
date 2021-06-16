import React from 'react';
// import {
//   Button, index, Innput
// } from '../build'
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';
import Button from './components/Button';
import AdvancedStepper from './components/advanced-stepper';
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
import Container, { MainContainer } from './components/container';
import Input from './components/Input';
import theme, { colors } from './components/theme/defaultTheme';
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
import Modalcomp from './components/modal';
import Cards from './components/cards';
import Progress from './components/progress/index';
import Tab from './components/tabs/index';

function App(props) {
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
  const [reset, setReset] = React.useState(true);
  const [count, setCount] = React.useState(1);

  const Xl = '1089px';
  const Lg = '864px';
  const Md = '576px';
  const Sm = '300px';

  const data = [
    {id : '1',
     tabTitle: "Custom Header 1",
     tabContent: 'consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. '
    },
    {id : '2',
     tabTitle: "Header Text 2",
     tabContent: 'Tab Content 2'
    },
    {id : '3',
     tabTitle: " Header Text 3",
     tabContent: 'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'
    }
  ]

  return (
    <ThemeProvider theme={theme}>
      <Box
        p={25}
        bg={colors.bgLight}
        justifyContent="center"
        alignItems="center">
        <MainContainer>
          <Text bold fontSize="fontSizeH1">
            React Components Demo
          </Text>
          <Text fontSize="fontSizeBase" alignText="center">
            Here are all the components we have built in React for Friday Design
            System. Below are the examples we have formed here using these
            componenet. We tried to implement all the usabily cases for every
            component
          </Text>
        </MainContainer>
      </Box>
      <MainContainer >
         <Text fontSize="fontSizeH2">Advanced Stepper</Text>
        <Container>
          <AdvancedStepper
            variant="primary"
            value={count}
            total={3}
            hideName={true}
            dataList={['Option 1', 'Option 2', 'Option 3']}
          />

          <Flex mt={20}>
            <Button
              disabled={count === 1}
              variant={count === 1 ? 'disabled' : 'primary'}
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}>
              Previous
            </Button>
            <Button
              disabled={count === 3}
              variant={count === 3 ? 'disabled' : 'secondary'}
              onClick={() => {
                if (count < 3) {
                  setCount(count + 1);
                }
              }}>
              Next
            </Button>
          </Flex>
        </Container>
        <Text fontSize="fontSizeH2">Accordion</Text>
        <Container>
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
        </Container>

        <Text fontSize="fontSizeH2">Primary Buttons</Text>
        <Container>
          <PrimaryButton />
        </Container>

        <Text fontSize="fontSizeH2">Outline Buttons</Text>
        <Container>
          <OutlineButtons />
        </Container>

        <Text fontSize="fontSizeH2">Clear Buttons</Text>
        <Container>
          <ClearButton />
        </Container>

        <Text fontSize="fontSizeH2">Rounded Buttons</Text>
        <Container>
          <RoundedButtons />
        </Container>

        <Text fontSize="fontSizeH2">Rounded Outline Buttons</Text>
        <Container>
          <RoundedOutlineButtons />
        </Container>

        <Text fontSize="fontSizeH2">Curved Buttons</Text>
        <Container>
          <CurvedButtons />
        </Container>

        <Text fontSize="fontSizeH2">Curved Outline Buttons</Text>
        <Container>
          <CurvedOutlineButtons />
        </Container>

        <Text fontSize="fontSizeH2">Filled Social Buttons</Text>
        <Container>
          <FilledSocialButtons />
        </Container>

        <Text fontSize="fontSizeH2">Outline Social Buttons</Text>
        <Container>
          <OutlineSocialButtons />
        </Container>

        <Text fontSize="fontSizeH2">Typography</Text>
        <Container>
          <OtherSpecs />
        </Container>

        <Text fontSize="fontSizeH2">Skip Navigation</Text>
        <Container>
          <div style={{ height: '100px', background: colors.primary }}></div>
          <SkipLink
            href="#"
            focusableID="newId"
            title="Skip"
            top={150}
            border="none"
            backgroundColor="blue"
            color="white"
          />
        </Container>

        <Text fontSize="fontSizeH2">Stepper</Text>
        <Container>
          <Stepper
            variant="primary"
            value={85}
            total={100}
            isCountVisible={true}
          />
        </Container>
      
      <Text fontSize="fontSizeH2">Toggle</Text>
       <Container>
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
      </Container>
      <Text fontSize="fontSizeH2">Select</Text>
      <Container>
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
          </Container>
          <Text fontSize="fontSizeH2">Tooltip</Text>
          <Container>
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
          </Container>
          <Text fontSize="fontSizeH2">Check boxes</Text>
          <Container>
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
        </Container>
        <Text fontSize="fontSizeH2">Radio Button</Text>
        <Container>
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
        </Container>
        <Text fontSize="fontSizeH2">Text Fields</Text>
        <Container>
        <Flex>
          <Label position="absolute" mb={20}>This is outside label</Label>
          <Input
            type="Password"
            value=""
            placeholder="Password"
            label=""
            id="Password"
            showErrorMessage
            errorMessage=""
            isClearButtonVisible
            mt={16}
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
        <Flex mt={10} style={{display:'block'}}>
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
        </Container>
        <Text fontSize="fontSizeH2">Modal</Text>
        <Container>
          <Modalcomp 
            width={Md}
            heading="What is cupcake? This is a title."
            text="standard cupcake uses the same basic ingredients as
                  standard-sized cakes: butter, sugar, eggs, and flour. Nearly any
                  recipe that is suitable for a layer cake can be used to bake
                  cupcakes. The cake batter used for cupcakes may be flavored or
                  have other ingredients stirred in, such as raisins, berries,
                  nuts, or chocolate chips. standard cupcake uses the same basic
                  ingredients as standard-sized cakes: butter, sugar, eggs, and
                  flour. Nearly any recipe that is suitable for a layer cake can
                  be used to bake cupcakes. The cake batter used for cupcakes may
                  be flavored or have other ingredients stirred in, such as
                  raisins, berries, nuts, or chocolate chips." 
          />
        </Container>
        
        <Progress progressbarstatus="70" progressbarheading="Progress" />
        <Cards /> 
        <Text fontSize="fontSizeH2">Tabs</Text>
        <Container>
          <Tab data={data}/>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
