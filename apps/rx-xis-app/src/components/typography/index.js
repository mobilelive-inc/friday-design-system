import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const BaseText = styled(RebassText)(
  props => getDerivedProps(props),
  compose(
    border,
    color,
    typography,
    layout,
    space,
    variant({ scale: 'typography' })
  )
);

const getDerivedProps = props => {
  const { underline, deleted, mark, italic, bold } = props;

  console.log('Props: ', props);

  const styles = {};

  if (underline) {
    styles[`text-decoration`] = `underline`;
  }
  if (deleted) {
    styles[`text-decoration`] = `line-through`;
  }
  if (mark) {
    styles[`backgroundColor`] = `#FFFCE1`;
  }
  if (italic) {
    styles[`font-style`] = `italic`;
  }
  if (bold) {
    styles[`font-weight`] = `bold`;
  }
  console.log('Styles: ', styles);
  return styles;
};

export const Text = props => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BaseText {...props} />
  );
};

export default Text;

Text.propTypes = {
  /** Text for Text could be string or node. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /** Typography variant consumes typography object in the theme file */
  variant: PropTypes.string,
  /** Defines color of text. Property maps to colors object in theme */
  color: PropTypes.string,
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
