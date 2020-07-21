import React from 'react';
import PropTypes from 'prop-types';
import {
  Input as BaseInput, RightIconButton,LeftIconButton, InputWrapper, ValidationIcon, LeftIcon
} from './css';
import { Text } from '../typography';
import Span from '../span/span';


const Input = (props) => {
  const {
    id,
    placeholder,
    value,
    type,
    onChange,
    onBlur,
    error,
    errorMessage,
    isValid,
    disabled,
    leftIcon,
    leftIconBtn,
    onLeftIconBtnClick,
    rightIcon,
    width,
    display,
    rightIconClick,
    validationIcon,
    ...restProps
  } = props;
  
  return (
    <>
      <InputWrapper rightIcon={rightIcon} leftIcon={leftIcon} width={width} display={display}>
        {leftIcon && (
          <LeftIcon className={leftIcon} />
        )}
        {
          leftIconBtn && (
            <LeftIconButton type="button" onClick={onLeftIconBtnClick}>
              <span className={rightIcon} />
            </LeftIconButton>
          )
        }
        <BaseInput
          id={id}
          placeholder={placeholder}
          value={value}
          error={error}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          mt={5}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...restProps}/>
        {
          validationIcon && (
            <ValidationIcon className={validationIcon} isValid={isValid}/>
          )
        }
      
        {rightIcon && (
          <RightIconButton type="button" onClick={rightIconClick}>
            <span className={rightIcon} />
          </RightIconButton>
        )}
      </InputWrapper>
      <div>
        {error && errorMessage && (
          <Text
            as="p"
            color="red"
            fontSize="10px"
            lineHeight="1px"
            pl={3}
            pt={0}>{errorMessage}</Text>
        )}
      </div>
    </>
  );
};

Input.propTypes = {
  /**  A unique id to identify element */
  id: PropTypes.string,
  /** Text field placeholder */
  placeholder: PropTypes.string,
  /** Initial value of the input field */
  value: PropTypes.string,
  /** A valid type for the input field */
  type: PropTypes.string,
  /** Call to be executed when onChange event is fired on the input field */
  onChange: PropTypes.func,
  /** Call to be executed when onBlur event is fired on the input field */
  onBlur: PropTypes.func,
  /** Call to be executed when OnFocus event is fired on the input field */
  onFocus: PropTypes.func,
  /** Call to be executed when onKeyPress event is fired on the input field */
  onKeyPress: PropTypes.func,
  /** Whether or not inline error message will shown */
  error: PropTypes.bool,
  /** Error message to be shown when input in in error state */
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  /** renders input with border only on the bottom */
  withBottomBorderOnly: PropTypes.bool,
  /** The icon class for the  icon on left of input field */
  leftIcon: PropTypes.string,
  /** Callback to be executed when left icon is clicked */
  leftIconClick: PropTypes.func,
  /** The icon class for the  icon on right of input field */
  rightIcon: PropTypes.string,
  /** Callback to be executed when right icon is clicked */
  rightIconClick: PropTypes.func,
  /** Validation icon class for successfull or unsuccessfull validation */
  validationIcon: PropTypes.string,
  /** Boolean to represent validation state of input field */
  isValid: PropTypes.bool,
  /** borderType consumes borderCurved and borderRounded variables from Theme file */
  borderType: PropTypes.oneOf(['curved', 'rounded']),
  /** Defines font size of child elements. Accepts responsive value from theme */
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Defines line height of child elements. Accepts responsive value from theme */
  lineHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** textAlign property specifies the horizontal
   * alignment of text in an element. Accepts responsive value from theme */
  textAlign: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Defines font weight of child elements. Accepts responsive value from theme */
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** The display property specifies the display behavior (the type of rendering box) of an element. */
  display: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Defines height of input field. Accepts responsive value from theme */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Defines height of input field. Accepts responsive value from theme */
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Defines input fields's border. It's a shorthand for border-width, border-style, and border-color.  */
  border: PropTypes.string,
  borderX: PropTypes.string,
  borderY: PropTypes.string,
  borderTop: PropTypes.string,
  borderBottom: PropTypes.string,
  borderLeft: PropTypes.string,
  borderRight: PropTypes.string,
  /** Defines border radius on the input field. Accepts responsive value from theme. */
  borderRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Defines color of the input field */
  color: PropTypes.string,
  /** Defines background color of the input field. Can also be used with bg shorthand.
   Consumes colors variable from theme
   */
  backgroundColor: PropTypes.string,
  /** Shorthand to add margin to input field. ml, mr, mt, mb, my and mx are also supported to
   * to add margins on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** Shorthand to add padding to input field. pl, pr, pt, pb, py and px are also supported to
   * to add paddings on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
};

Input.defaultProps = {
  type: 'text',
  value: '',
  error: false,
  errorMessage: '',
  onChange: () => {},
  onBlur: () => {},
};

export default Input;
