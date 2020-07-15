import React from 'react';
import PropTypes from 'prop-types';
import { Input as BaseInput } from './css';
import { Text } from '../typography';
import Span from '../span/span';

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
      <div>
        {
          label && <p>{label}</p>
        }
        {leftIcon && (
          <button type="button" onClick={onLeftIconClick}>
            <Span className={leftIcon} />
          </button>
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
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...restProps}/>
        {
          validationIcon && (
            <Span className={validationIcon}/>
          )
        }
      
        {rightIcon && (
          <button type="button" onClick={rightIconClick}>
            <Span className={rightIcon} />
          </button>
        )}
      </div>
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
