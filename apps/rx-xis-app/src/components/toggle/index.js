import React, { Component } from 'react';
import Box from '../box';
import { Heading } from 'rebass';
import PropTypes from 'prop-types';
import Text from '../typography';
// TODO: Icon
// import { QuestionCircle } from 'styled-icons/fa-regular/QuestionCircle';
import {
  Label,
  ToggleLable,
  HiddenCheckbox,
  InnerBox,
  Flex,
  CheckIconContainer,
} from './css';

const Toggle = (props) => {
  const { id, isToggled, onChange, styles : { 
    toggledOnBgColor,
    toggledOffBgColor,
    toggledOnBorderColor,
    toggledOffBorderColor,
    switchOnColor,
    switchOffColor},
    className,
    label,
    size,
    error } = props;
  return (
    <Flex alignItems="center">
      <Box  style={{borderRadius:'50px'}}>
        <Label htmlFor={id}>
          <HiddenCheckbox
            onChange={(e) => {onChange(e)}}
            id={id}
            aria-labelledby={id}
            aria-checked={isToggled}
          />
          <InnerBox toggleStatus={isToggled} 
            className={`toggle-box ${className}`}
            toggledOnBgColor={toggledOnBgColor}
            toggledOffBgColor={toggledOffBgColor}
            switchOnColor={switchOnColor}
            switchOffColor={switchOffColor}
            toggledOnBorder={`2px solid ${toggledOnBorderColor}`}
            toggledOffBorder={`2px solid ${toggledOffBorderColor}`}
            isError={error}
            size={size}
            >
            <CheckIconContainer toggleStatus={"toggleState"}>
              <span className="icon_checkmark" />
            </CheckIconContainer>
          </InnerBox>
        </Label>
      </Box>
      {
        label && <Box style={{marginBottom: size === 'lg' ? '14px': '30px'}}>
        <ToggleLable
          ml="40px"
          fontSize="16px"
          fontWeight={600}
          as="label"
          htmlFor={id}
          error={error}
          cursor= 'pointer'
        >
          {label}
        </ToggleLable>
      </Box>
      }
    </Flex>
  );
}

Toggle.propTypes = {
  /**
   * label text to the right of the toggle
   */
  label: PropTypes.string,
  /**
   * Callback to be executed when onChange event is fired to the component
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Unique Id of the toggle
   */
  id: PropTypes.string.isRequired,
  /**
   * State of the toggle
   */
  isToggled: PropTypes.bool.isRequired,

  /** controls the size of toggle */
  size: PropTypes.oneOf(['lg', 'sm']),

  /** style object to define colors for the toggle */
  styles: PropTypes.shape({
    toggledOnBgColor: PropTypes.string,
    toggledOffBgColor: PropTypes.string,
    switchOnColor: PropTypes.string,
    switchOffColor:PropTypes.string,
    toggledOnBorderColor: PropTypes.string,
    toggledOffBorderColor: PropTypes.string,
  }),

  /** className to pass class based styles to the toggle */
  className: PropTypes.string,
  /** Flag to control error state */
  error: PropTypes.bool,
};

Toggle.defaultProps = {
  id: 'toggle',
  isToggled: false,
  size: 'lg',
  styles: {
    toggledOnBgColor: 'white',
    toggledOffBorderColor: '#B3B3B3',
    toggledOnBorderColor: '#B3B3B3',
    switchOnColor: '#34A84D',
    switchOffColor: '#B3B3B3',
  }
};

export default Toggle;
