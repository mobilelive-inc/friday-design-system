import styled, { css } from 'styled-components';
import {
  compose,
  color,
  typography,
  layout,
  space,
  border,
  variant
} from 'styled-system';
import { Text as RebassText, Box } from 'rebass/styled-components';
import PropTypes from 'prop-types';
import MediaQuery from '../../utils/mediaQuery';

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
