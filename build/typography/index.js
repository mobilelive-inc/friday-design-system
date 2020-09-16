"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Text = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _styledComponents2 = require("rebass/styled-components");

var BaseText = (0, _styledComponents.default)(_styledComponents2.Text).withConfig({
  displayName: "typography__BaseText",
  componentId: "sc-1l1tlnp-0"
})((0, _styledSystem.compose)(_styledSystem.border, _styledSystem.color, _styledSystem.typography, _styledSystem.layout, _styledSystem.space, (0, _styledSystem.variant)({
  scale: 'typography'
})));

var Text = props => {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-props-no-spreading
    _react.default.createElement(BaseText, props)
  );
};

exports.Text = Text;
var _default = Text;
exports.default = _default;
Text.propTypes = {
  /** Text for Text could be string or node. */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),

  /** Typography variant consumes typography object in the theme file */
  variant: _propTypes.default.string,

  /** Defines color of text. Property maps to colors object in theme */
  color: _propTypes.default.string,

  /** Defines font size of child elements. Accepts responsive value from theme */
  fontSize: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines line height of child elements. Accepts responsive value from theme */
  lineHeight: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines font weight of child elements. Accepts responsive value from theme */
  fontWeight: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

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