import styled from 'styled-components';
import {
  compose,
  color,
  layout,
  space,
  position,
  typography
} from 'styled-system';

const Label = styled('label')(
  {
    verticalAlign: 'middle',
    cursor: 'pointer',
  },
  compose(
    color,
    space,
    typography,
    position,
    layout,
  ),
);

export default  Label