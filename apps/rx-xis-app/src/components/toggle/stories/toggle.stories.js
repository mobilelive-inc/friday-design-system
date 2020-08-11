import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import  Toggle from "..";
import Text from '../../typography';
import Label from '../../label';
import  Theme from '../../theme/defaultTheme'
import GlobalStyle from '../../theme/globalStyles';
import '../../icomoon_icons.css';
import {
  Flex, Box
} from 'rebass/styled-components'
// import DeleteIcon from '../src/icons/delete.svg'
// import Favorite from '../src/icons/favorite.svg';
// import AddPhoto from '../src/icons/add_a_photo.svg';

export default {
  title: 'Toggle Button',
  component: Toggle,
};

export const ToggleButton = () => {
  const [isOn, setIsOn] = React.useState(false);
  const [isOnLabeled, setIsOnLabeled] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [toggleLabeled, setToggleLabeled] = React.useState(false);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Text variant="H5" ml={10}>Toggle Buttons</Text>
      <Flex>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1"
          size='lg'
          isToggled={isOn}
          onChange={() => {setIsOn(!isOn)}}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1"
          size='lg'
          isToggled={true}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt2"
          size='sm'
          isToggled={toggle}
          onChange={() => {setToggle(!toggle)}}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1" 
          size='sm'
          isToggled={true}
          />
        </Box>
      </Flex>
      <Text variant="H5" ml={10}>Toggle Buttons With Label</Text>
      <Flex>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1Labeled"
          size='lg'
          styles= {{
            toggledOffBgColor: '#B3B3B3',
            toggledOffBorderColor: '#B3B3B3',
            toggledOnBgColor:'#34A84D',
            toggledOnBorderColor: '#34A84D',
            switchOnColor: 'white',
            switchOffColor: 'white',
          }}
          isToggled={isOnLabeled}
          label={isOnLabeled ? "ON":"OFF"}
          onChange={() => {setIsOnLabeled(!isOnLabeled)}}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1"
          size='lg'
          styles= {{
            toggledOffBgColor: '#34A84D',
            toggledOffBorderColor: '#B3B3B3',
            toggledOnBorderColor: '#34A84D',
            switchOnColor: 'white',
            switchOffColor: 'white',
          }}
          label={"ON"}
          isToggled={true}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt2Labled"
          size='sm'
          isToggled={toggleLabeled}
          label={toggleLabeled ? "ON":"OFF"}
          onChange={() => {setToggleLabeled(!toggleLabeled)}}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1error"
          size='sm'
          isToggled={true}
          label={"ON"}
          />
        </Box>
      </Flex>
      <Text variant="H5" ml={10}>Toggle Buttons Error States</Text>
      <Flex>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1Labelederror"
          size='lg'
          error
          isToggled={false}
          label="OFF"
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1"
          size='lg'
          error
          label={"ON"}
          isToggled={true}
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt2Lablederror" 
          error
          size='sm'
          isToggled={false}
          label="OFF"
          />
        </Box>
        <Box p={10} width={1/4}>
          <Toggle
          id="bt1error" 
          error
          size='sm'
          isToggled={true}
          label={"ON"}
          />
        </Box>
      </Flex>
    </ThemeProvider>
  )
};





