import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass/styled-components';
import {
  Label, Input, InputContainer, Flex
} from './css';
import Span from '../span/span';

/**
 * Checkbox
 */
function Checkbox({
  id,
  label,
  onChange,
  name,
  testId,
  errorMessage,
  backgroundColor,
  variant,
}) {
  const isChecked = variant === 'checked';
  const isDisabled = variant === 'disabled';
  return (
    <Flex alignItems="center" data-testid="checkbox">
      <Box>
        <InputContainer
          variant={variant}
          data-testid={testId}
          error={errorMessage}
          p={0}
          width="38px"
          height="38px"
          // borderRadius="50px"
          mt={1}
          position="relative"
          display="flex"
          lineHeight="0"
          justifyContent="center"
          alignItems="center"
          bg={backgroundColor}>
          {variant === 'checked' && (
            <Span
              className="icon-check_circle_outline_24px"/>
          )}
          <Input
            checked={variant === 'checked'}
            disabled={isDisabled}
            id={name}
            name={name}
            onChange={onChange}
            top={0}
            bottom={0}
            left={0}
            right={0}
            p={0}
            overflow="hidden"
            border="0"
            width="100%"
            height="100%"
            position="absolute"/>
        </InputContainer>
      </Box>
      <Label
        htmlFor={id}
        error={errorMessage}
        pl={[17]}
        mb={0}
        lineHeight={10}
        color={errorMessage && !isChecked ? 'errorRed' : 'charcoal'}
        fontWeight={isChecked ? [2] : [0]}
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
  /**
   * Unique Test Id of the toggle button for testing
   */
  testId: PropTypes.string,
  /** It is a validation's error message */
  errorMessage: PropTypes.string,
  size: PropTypes.number,
};

Checkbox.defaultProps = {
  variant: 'unchecked',
  onChange: () => {},
  testId: '',
  errorMessage: '',
  size: 2,
};

export default Checkbox;
