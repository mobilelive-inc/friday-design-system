import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import {
  Input, InputContainer, Flex, InnerBox
} from './css';
import Span from '../span/span';

import Label from '../label';


function Radio(props) {
  const {
    id,
    label,
    onChange,
    name,
    testId,
    error,
    color,
    variant,
    className,
    borderType,
    ...restProps
  } = props;
  const isChecked = variant === 'checked';
  const isDisabled = variant === 'disabled';
  return (
    <Flex alignItems="center" data-testid="radio">
      <InputContainer
        variant={variant}
        error={error}
        borderType={borderType}
        className={className}
        color={color}
        {...restProps}>
        {variant === 'checked' && (
          <InnerBox color={color} borderType={borderType} error={error} />
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
        error={error}
        pl={[10]}
        mt='-22px'
        lineHeight={10}
        fontWeight={600}
        color={error ? 'error' : 'black'}
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
  /**
   * color controld the color for border and fill color.
   */
  color: PropTypes.string,
  /** It is a validation's error message */
  error: PropTypes.bool,
  borderType: PropTypes.oneOf(['curved', 'rounded']),
  className: PropTypes.string
};

Radio.defaultProps = {
  variant: 'unchecked',
  onChange: () => {},
  error: false
};

export default Radio;
