import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import  TextArea from "..";
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
  title: 'Text Area',
  component: TextArea,
};

export const TextFields = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Text variant="H5" ml={10}>Text Area (Icon Inside)</Text>
    <Flex>
      <Box m={10} width="250px">
        <TextArea
          value=""
          label=""
          validationIcon="icon-check_circle_24px"
          isValid
          iconPosition="inside"
          placeholder="Please Enter Details"
          id="Default"/>
      </Box>
      <Box m={10} width="250px">
        <TextArea
          value=""
          label=""
          validationIcon="icon-check_circle_24px"
          isValid={false}
          iconPosition="inside"
          placeholder="Please Enter Details"
          id="Default"/>
      </Box>
      <Box m={10} width="250px">
        <TextArea
          value=""
          error
          validationIcon="icon-info_24px"
          isValid={false}
          iconPosition="inside"
          errorMessage="This field is required"
          placeholder="Please Enter Details"
          id="Default"/>
      </Box>
    </Flex>
    <Text variant="H5" ml={10}>Text Area (Icon Outside)</Text>
    <Flex>
      <Box m={10} width="250px">
        <TextArea
          value=""
          label=""
          validationIcon="icon-check_circle_24px"
          isValid
          iconPosition="outside"
          placeholder="Please Enter Details"
          id="Default"/>
      </Box>
      <Box m={10} width="250px">
        <TextArea
          value=""
          label=""
          validationIcon="icon-check_circle_24px"
          isValid={false}
          iconPosition="outside"
          placeholder="Please Enter Details"
          id="Default"/>
      </Box>
      <Box m={10} width="250px">
        <TextArea
          value=""
          error
          validationIcon="icon-info_24px"
          isValid={false}
          iconPosition="outside"
          errorMessage="This field is required"
          placeholder="Please Enter Details"
          id="Default"/>
      </Box>
    </Flex>
  </ThemeProvider>
);





