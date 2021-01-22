import styled from 'styled-components';
import {
  compose,
  color,
  layout,
  space,
  position,
  typography
} from 'styled-system';

const Link = styled('a')(color, layout, space, position, typography);

export default Link;
