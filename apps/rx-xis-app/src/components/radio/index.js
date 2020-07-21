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
function Radio(props) {
  const {
    id,
    label,
    onChange,
    name,
    testId,
    errorMessage,
    backgroundColor,
    color,
    border,
    isFilled,
    variant,
    className,
    borderType
  } = props;
  const isChecked = variant === 'checked';
  const isDisabled = variant === 'disabled';
  return (
    <Flex alignItems="center" data-testid="radio">
      <InputContainer
        variant={variant}
        error={errorMessage}
        bg={backgroundColor}
        isFilled={isFilled}
        border={border}
        borderType={borderType}
        className={className}
        color={color}>
        {variant === 'checked' && (
          <Span
            className="icon-check_circle_outline_24px"/>
        )}
        <Input
          checked={variant === 'checked'}
          disabled={isDisabled}
          id={name}
          testId={testId}
          name={name}
          onChange={onChange}/>
      </InputContainer>
      <Label
        htmlFor={id}
        error={errorMessage}
        pl={[10]}
        mt='-22px'
        lineHeight={10}
        fontWeight={600}
        color={errorMessage && !isChecked ? 'error' : 'black'}
        as="label">
        {label}
      </Label>
    </Flex>
  );
}

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

Radio.defaultProps = {
  variant: 'unchecked',
  onChange: () => {},
  errorMessage: '',
};

export default Radio;
