"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _utils = require("../utils/utils");

var getDerivedStyles = props => {
  var {
    theme,
    borderType,
    withIcon
  } = props; // default styles for button

  var styles = {
    boxSizing: 'border-box',
    cursor: 'pointer',
    borderRadius: "".concat(theme["border".concat((0, _utils.capitalizeFirstLetter)(borderType))], " !important"),
    '&:disabled': {
      opacity: theme.opacity
    }
  }; // styles conditionally applied w.r.t props

  if (withIcon) {
    styles.alignItems = "center";
    styles.justifyContent = "space-evenly";
  }

  return styles;
};

var BaseButton = (0, _styledComponents.default)('button').withConfig({
  displayName: "Button__BaseButton",
  componentId: "fu7qve-0"
})(props => getDerivedStyles(props), (0, _styledSystem.compose)(_styledSystem.border, _styledSystem.layout, _styledSystem.space, _styledSystem.typography, _styledSystem.color, (0, _styledSystem.variant)({
  scale: 'buttons'
})));

var Button = props => {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-props-no-spreading
    _react.default.createElement(BaseButton, props)
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
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]).isRequired,

  /** Click handler for Button */
  onClick: _propTypes.default.func,

  /** Option to disable Button */
  disabled: _propTypes.default.bool,

  /** button variant consumes buttons object in the theme file */
  variant: _propTypes.default.string,

  /** The props needs to be passed in when using icons in buttons */
  withIcon: _propTypes.default.bool,

  /** borderType consumes borderCurved and borderRounded variables from Theme file */
  borderType: _propTypes.default.oneOf(['curved', 'rounded']),

  /** Defines font size of child elements. Accepts responsive value from theme */
  fontSize: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines line height of child elements. Accepts responsive value from theme */
  lineHeight: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines font weight of child elements. Accepts responsive value from theme */
  fontWeight: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** The display property specifies the display behavior (the type of rendering box) of an element. */
  display: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines width of button. Accepts responsive value from theme */
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines height of button. Accepts responsive value from theme */
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** textAlign property specifies the horizontal
   * alignment of text in an element. Accepts responsive value from theme */
  textAlign: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines border radius on the button. Accepts responsive value from theme. */
  borderRadius: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines button's border. It's a shorthand for border-width, border-style, and border-color.  */
  border: _propTypes.default.string,
  borderX: _propTypes.default.string,
  borderY: _propTypes.default.string,
  color: _propTypes.default.string,

  /** Shorthand to add margin to button. ml, mr, mt, mb, my and mx are also supported to
   * to add margins on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  m: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Shorthand to add padding to button. pl, pr, pt, pb, py and px are also supported to
   * to add paddings on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  p: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)])
};
var _default = Button;
exports.default = _default;