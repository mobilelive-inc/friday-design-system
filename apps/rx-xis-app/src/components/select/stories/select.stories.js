import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import  Select from "..";
import Option from '../../option';
import Text from '../../typography';
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
  title: 'Select',
  component: Select,
};

export const Selects = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Text variant="H5" ml={10}>Select</Text>
    <Flex>
      <Box m={10} width={1/3}>
        <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          value=""
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
        <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          value=""
          borderType="curved"
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
        <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          value=""
          borderType="rounded"
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
    </Flex>
    <Flex>
      <Box m={10} width={1/3}>
        <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          rightIcon="icon-clear_24px"
          value=""
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
        <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          leftIcon="icon-today_24px"
          value=""
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
        <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          rightIcon="icon-clear_24px"
          leftIcon="icon-today_24px"
          value=""
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
    </Flex>
    <Flex>
      <Box m={10} width={1/3}>
        <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          rightIcon="icon-clear_24px"
          value=""
          withBorderBottomOnly
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
        <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          leftIcon="icon-today_24px"
          value=""
          withBorderBottomOnly
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
        <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          rightIcon="icon-clear_24px"
          leftIcon="icon-today_24px"
          value=""
          withBorderBottomOnly
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
    </Flex>
    <Flex>
      <Box m={10} width={1/3}>
        <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          rightIcon="icon-clear_24px"
          value=""
          validationIcon="icon-check_circle_24px"
          isValid
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
        <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          leftIcon="icon-today_24px"
          value=""
          validationIcon="icon-check_circle_24px"
          isValid
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
      <Box m={10} width={1/3}>
        <Select
          name="select"
          placeholder="select on option"
          chevron="icon-keyboard_arrow_down_24px"
          rightIcon="icon-clear_24px"
          leftIcon="icon-today_24px"
          value=""
          validationIcon="icon-check_circle_24px"
          isValid={false}
          withBorderBottomOnly
          onChange={(e) => setSelected(e.target.value)}
          color="black">
          <Option value="">React</Option>
          <Option value="">Angular</Option>
          <Option value="">Vue</Option>
        </Select>
      </Box>
    </Flex>
  </ThemeProvider>
);