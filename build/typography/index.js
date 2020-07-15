import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { compose, color, typography, layout, space, border, variant } from 'styled-system';
import { Text as RebassText } from 'rebass/styled-components';
const BaseText = /*#__PURE__*/styled(RebassText).withConfig({
  displayName: "typography__BaseText",
  componentId: "sc-1l1tlnp-0"
})(compose(border, color, typography, layout, space, variant({
  scale: 'typography'
})));
export const Text = props => {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-props-no-spreading
    React.createElement(BaseText, props)
  );
};
Text.propTypes = {
  /** Text for Text could be string or node. */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

  /** Typography variant consumes typography object in the theme file */
  variant: PropTypes.string,

  /** Defines color of text. Property maps to colors object in theme */
  color: PropTypes.string,

  /** Defines font size of child elements. Accepts responsive value from theme */
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

  /** Defines line height of child elements. Accepts responsive value from theme */
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

  /** Defines font weight of child elements. Accepts responsive value from theme */
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

  /** Shorthand to add margin to button. ml, mr, mt, mb, my and mx are also supported to
   * to add margins on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  m: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

  /** Shorthand to add padding to button. pl, pr, pt, pb, py and px are also supported to
   * to add paddings on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  p: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
};