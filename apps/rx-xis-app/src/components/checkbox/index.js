import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import {
  Input, InputContainer, Flex
} from './css';
import Span from '../span/span';

import Label from '../label';
/**
 * Checkbox
 */
function Checkbox(props) {
  const {
    id,
    label,
    className,
    onChange,
    name,
    errorMessage,
    backgroundColor,
    color,
    border,
    isFilled,
    checkedIconClass,
    variant,
    borderType
  } = props;
  const isChecked = variant === 'checked';
  const isDisabled = variant === 'disabled';
  return (
    <Flex alignItems="center" data-testid="checkbox">
      <InputContainer
        variant={variant}
        error={errorMessage}
        bg={backgroundColor}
        className={className}
        isFilled={isFilled}
        border={border}
        borderType={borderType}
        color={color}>
        {variant === 'checked' && (
          <Span
            className={checkedIconClass}/>
        )}
        <Input
          checked={variant === 'checked'}
          disabled={isDisabled}
          id={name}
          name={name}
          onChange={onChange}/>
      </InputContainer>
      <Label
        htmlFor={id}
        error={errorMessage}
        pl={[10]}
        mt='-22px'
        lineHeight={4}
        fontWeight={600}
        color={errorMessage && !isChecked ? 'error' : 'black'}
        // fontWeight={isChecked ? [2] : [0]}
        as="label">
        {label}
      </Label>
    </Flex>
  );
}


Checkbox.propTypes = {
  /**
   * The label.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * The ID. Need to be defined for labels.
   */
  id: PropTypes.string.isRequired,
  /**
   * Associate this checkbox with a group. Set as the HTML name attribute.
   */
  name: PropTypes.string.isRequired,
  /**
   * The variant state
   */
  variant: PropTypes.oneOf(['unchecked', 'checked', 'disabled']),
  /**
   * A callback function to be invoked when the checkbox is checked or unchecked.
   */
  onChange: PropTypes.func,
  /** It is a validation's error message */
  errorMessage: PropTypes.string,
  borderType: PropTypes.oneOf(['curved', 'rounded'])
};

Checkbox.defaultProps = {
  variant: 'unchecked',
  onChange: () => {},
  errorMessage: '',
};

export default Checkbox;
