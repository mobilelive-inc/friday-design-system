import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import  Input from "..";
import  Theme from '../../theme/defaultTheme'
import '../../icomons_styles.css';
// import DeleteIcon from '../src/icons/delete.svg'
// import Favorite from '../src/icons/favorite.svg';
// import AddPhoto from '../src/icons/add_a_photo.svg';

export default {
  title: 'Input',
  component: Input,
};

export const TextFields = () => (
  <ThemeProvider theme={Theme}>
    <Input
      type="Email"
      value=""
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
      withBottomBorderOnly
      disabled={false}/>
  </ThemeProvider>
);





