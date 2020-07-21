import styled from 'styled-components';
import {
  compose,
  background,
  border,
  position,
  shadow,
  layout,
} from 'styled-system';

/**
 * Rebass Box with additional support
 */

const Box = styled('div')(
  {
    boxSizing: 'border-box'
  },
  compose(
    background,
    border,
    position,
    shadow,
    layout,
  ),
);

export default Box;
