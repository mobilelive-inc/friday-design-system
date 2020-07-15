import styled from 'styled-components';
import {
  border,
  compose,
  color,
  flexbox,
  layout,
  space,
  typography,
  variant,
  position,
} from 'styled-system';
import PropTypes from 'prop-types';

export const Label = styled('label')(
  {
    verticalAlign: 'middle',
    cursor: 'pointer',
  },
  compose(
    color,
    space,
    typography,
    layout,
  ),
);

export const Flex = styled('div')({
  display: 'flex',
  verticalAlign: 'middle',
});

// Hide checkbox visually but remain accessible to screen readers.
export const Input = styled.input.attrs({ type: 'checkbox' })(
  {
    opacity: 0,
    cursor: 'pointer',
  },
  compose(
    border,
    layout,
    position,
  ),
);

export const InputContainer = styled('div')(
  {
    cursor: 'pointer',
    boxAlign: 'center',
    alignItems: 'center',
    boxPack: 'center',
    outline: 0,
    transition: 'border-color 0.1s linear 0s, background-color 0.1s linear 0s',
  },

  compose(
    flexbox,
    position,
    border,
    layout,
    color,
    variant({ scale: 'checkBoxes' }),
  ),
);

InputContainer.defaultProps = {
  variant: 'unchecked',
};

InputContainer.propTypes = {
  variant: PropTypes.oneOf(['unchecked', 'checked', 'disabled']),
};
