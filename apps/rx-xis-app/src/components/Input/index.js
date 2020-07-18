import React from 'react';
import PropTypes from 'prop-types';
import {
  Input as BaseInput, RightIconButton,LeftIconButton, InputWrapper, ValidationIcon
} from './css';
import { Text } from '../typography';
import Span from '../span/span';
import Label from '../label';


const inputIconDiv={
  position: 'relative',
  height: 'auto',
}

const Input = (props) => {
  const {
    id,
    placeholder,
    value,
    type,
    label,
    onChange,
    onBlur,
    showErrorMessage,
    errorMessage,
    isValid,
    disabled,
    leftIcon,
    onLeftIconClick,
    rightIcon,
    rightIconClick,
    validationIcon,
    ...restProps
  } = props;
  
  return (
    <>
      <InputWrapper rightIcon={rightIcon} leftIcon={leftIcon}>
        {
          label && <Label fontWeight={600}>{label}</Label>
        }
        {leftIcon && (
          <LeftIconButton type="button" onClick={onLeftIconClick}>
            <Span className={leftIcon} />
          </LeftIconButton>
        )}
        <BaseInput
          id={id}
          placeholder={placeholder}
          value={value}
          error={showErrorMessage}
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
        {showErrorMessage && errorMessage && (
          <Text as="p">{errorMessage}</Text>
        )}
      </div>
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  showErrorMessage: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  borderType: PropTypes.oneOf(['curved', 'rounded']),
  disabled: PropTypes.bool,
  withBottomBorderOnly: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  showErrorMessage: false,
  errorMessage: '',
  onChange: () => {},
  onBlur: () => {},
};

export default Input;
