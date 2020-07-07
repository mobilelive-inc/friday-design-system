import styled from 'styled-components';
import {
  compose,
  color,
  typography,
  layout,
  space,
  border,
  variant
} from 'styled-system';
import { Text as RebassText } from 'rebass/styled-components';

export const Text = styled(RebassText)(
  compose(
    border,
    color,
    typography,
    layout,
    space,
    variant({ scale: 'typography' }),
  ),
);
