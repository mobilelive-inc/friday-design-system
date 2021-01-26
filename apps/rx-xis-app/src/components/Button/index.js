import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import {
  compose,
  border,
  layout,
  variant,
  space,
  typography,
  color
} from 'styled-system';
import { capitalizeFirstLetter } from '../utils/utils';
const padding = '1rem 2rem';

const getDerivedStyles = props => {
  const { theme, borderType, withIcon, clear, variant, disabled } = props;
  // default styles for button
  const styles = {
    boxSizing: 'border-box',
    cursor: 'pointer',
    borderRadius: `${
      theme[`border${capitalizeFirstLetter(borderType)}`]
    } !important`,
    '&:disabled': {
      opacity: theme.opacity
    }
  };
  // styles conditionally applied w.r.t props
  if (withIcon) {
    styles.alignItems = 'center';
    styles.justifyContent = 'space-evenly';
    styles.display = 'inline-flex';
  }
  return styles;
};

const BaseButton = styled('button')(
  props => getDerivedStyles(props),
  compose(
    border,
    layout,
    space,
    typography,
    color,
    variant({ scale: 'buttons' })
  )
);

const Button = props => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BaseButton {...props} />
  );
};

Button.defaultProps = {
  disabled: false,
  fontSize: [2, 3],
  lineHeight: [4],
  m: [0],
  fontWeight: [3],
  // display: ['inline-block'],
  width: [1],
  textAlign: ['center'],
  borderRadius: [0],
  onClick: () => {},
  withIcon: false
};

Button.propTypes = {
  /** Text for Button could be string or node. */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  /** Click handler for Button */
  onClick: PropTypes.func,
  /** Option to disable Button */
  disabled: PropTypes.bool,
  /** button variant consumes buttons object in the theme file */
  variant: PropTypes.string,
  /** The props needs to be passed in when using icons in buttons */
  withIcon: PropTypes.bool,
  /** borderType consumes borderCurved and borderRounded variables from Theme file */
  borderType: PropTypes.oneOf(['curved', 'rounded']),
  /** Defines font size of child elements. Accepts responsive value from theme */
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Defines line height of child elements. Accepts responsive value from theme */
  lineHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Defines font weight of child elements. Accepts responsive value from theme */
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** The display property specifies the display behavior (the type of rendering box) of an element. */
  display: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Defines width of button. Accepts responsive value from theme */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Defines height of button. Accepts responsive value from theme */
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** textAlign property specifies the horizontal
   * alignment of text in an element. Accepts responsive value from theme */
  textAlign: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Defines border radius on the button. Accepts responsive value from theme. */
  borderRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Defines button's border. It's a shorthand for border-width, border-style, and border-color.  */
  border: PropTypes.string,
  borderX: PropTypes.string,
  borderY: PropTypes.string,
  color: PropTypes.string,
  /** Shorthand to add margin to button. ml, mr, mt, mb, my and mx are also supported to
   * to add margins on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /** Shorthand to add padding to button. pl, pr, pt, pb, py and px are also supported to
   * to add paddings on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ])
};

export default Button;
