import styled from 'styled-components';
import {
  compose,
  color,
  layout,
  space,
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
    layout,
  ),
);

export default  Label