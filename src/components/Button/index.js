import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  compose,
  border,
  layout,
  variant,
  space,
  typography,
} from 'styled-system';
import { PROPS_FOR_THEME_ATTRIBUTES } from '../../utils/constants';

const Button = styled.button(
  {
    boxSizing: 'border-box',
    cursor: 'pointer',
    '&:disabled': {
      opacity: 0.65,
    },
  },
  compose(
    border,
    layout,
    space,
    typography,
    variant({ scale: 'buttons' }),
  ),
);

/**
 * Button
 */

Button.defaultProps = {
  disabled: false,
  variant: 'primary',
  fontSize: [2, 3],
  lineHeight: [4],
  m: [0],
  fontWeight: [3],
  display: ['inline-block'],
  width: [1],
  textAlign: ['center'],
  borderRadius: [0],
  onClick: () => {},
};

Button.propTypes = {
  /** Text for Button could be string or node */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  /** Click handler for Button */
  onClick: PropTypes.func,
  /** Option to disable Button */
  disabled: PropTypes.bool,
  /** Variant primary or secondary */
  variant: PropTypes.oneOf([
    'primary',
    'primaryDark',
    'secondary',
    'secondaryDark',
    'secondaryDarkFooter',
    'greyed',
    'none',
  ]),
  fontSize: PROPS_FOR_THEME_ATTRIBUTES,
  lineHeight: PROPS_FOR_THEME_ATTRIBUTES,
  fontWeight: PROPS_FOR_THEME_ATTRIBUTES,
  display: PROPS_FOR_THEME_ATTRIBUTES,
  width: PROPS_FOR_THEME_ATTRIBUTES,
  height: PROPS_FOR_THEME_ATTRIBUTES,
  textAlign: PROPS_FOR_THEME_ATTRIBUTES,
  borderRadius: PROPS_FOR_THEME_ATTRIBUTES,
  border: PropTypes.string,
  borderX: PropTypes.string,
  borderY: PropTypes.string,
  color: PropTypes.string,
  m: PROPS_FOR_THEME_ATTRIBUTES,
  ml: PROPS_FOR_THEME_ATTRIBUTES,
  mr: PROPS_FOR_THEME_ATTRIBUTES,
  mt: PROPS_FOR_THEME_ATTRIBUTES,
  mb: PROPS_FOR_THEME_ATTRIBUTES,
  mx: PROPS_FOR_THEME_ATTRIBUTES,
  my: PROPS_FOR_THEME_ATTRIBUTES,
  p: PROPS_FOR_THEME_ATTRIBUTES,
  pl: PROPS_FOR_THEME_ATTRIBUTES,
  pr: PROPS_FOR_THEME_ATTRIBUTES,
  pt: PROPS_FOR_THEME_ATTRIBUTES,
  pb: PROPS_FOR_THEME_ATTRIBUTES,
  px: PROPS_FOR_THEME_ATTRIBUTES,
  py: PROPS_FOR_THEME_ATTRIBUTES,
};

export default Button;
