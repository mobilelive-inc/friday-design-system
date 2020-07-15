import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';

import {
  RadioBoxContainer,
  Flex,
  HiddenRadioBox,
} from './radioContainer';
import Label from '../label';

const Radio = ({
  id,
  checked,
  label,
  onChange,
  name,
  value,
  testId,
  disabled,
}) => {
  const checkedBg = checked ? 'blue' : 'pureWhite';
  const bg = disabled ? 'grey' : checkedBg;
  return (
    <RadioBoxContainer onClick={onChange} data-testid="radio">
      <Flex>
        <HiddenRadioBox
          checked={checked}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          data-testid={testId}
          disabled={disabled}/>
        <Box
          width="2.25em"
          height="2.25em"
          bg={bg}
          p={disabled ? [11] : 0}
          className="radio-box"
          sx={disabled && { cursor: 'auto' }}/>
      </Flex>
      <Label
        htmlFor={id}
        fontWeight={checked ? 500 : 300}
        x-ms-format-detection="none">
        {label}
      </Label>
    </RadioBoxContainer>
  );
};

Radio.propTypes = {
  /**
   * The label.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * The ID. Need to be defined for labels.
   */
  id: PropTypes.string.isRequired,
  /**
   * Associate this radio with a group. Set as the HTML name attribute.
   */
  name: PropTypes.string.isRequired,
  /**
   * The value. Must be unique within the group.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  /**
   * The checked state.
   */
  checked: PropTypes.bool,
  /**
   * A callback function to be invoked when the radio is checked or unchecked.
   */
  onChange: PropTypes.func,
  testId: PropTypes.string,
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
  testId: '',
};

export default Radio;

