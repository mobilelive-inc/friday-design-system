"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _css = require("./css");

var _typography = require("../typography");

var _span = _interopRequireDefault(require("../span/span"));

var Input = props => {
  var {
    id,
    placeholder,
    value,
    type,
    onChange,
    onBlur,
    error,
    errorMessage,
    isValid,
    disabled,
    leftIcon,
    leftIconBtn,
    onLeftIconBtnClick,
    rightIcon,
    width,
    display,
    rightIconClick,
    validationIcon
  } = props,
      restProps = (0, _objectWithoutProperties2.default)(props, ["id", "placeholder", "value", "type", "onChange", "onBlur", "error", "errorMessage", "isValid", "disabled", "leftIcon", "leftIconBtn", "onLeftIconBtnClick", "rightIcon", "width", "display", "rightIconClick", "validationIcon"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_css.InputWrapper, {
    rightIcon: rightIcon,
    leftIcon: leftIcon,
    width: width,
    display: display
  }, leftIcon && /*#__PURE__*/_react.default.createElement(_css.LeftIcon, {
    className: leftIcon
  }), leftIconBtn && /*#__PURE__*/_react.default.createElement(_css.LeftIconButton, {
    type: "button",
    onClick: onLeftIconBtnClick
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: rightIcon
  })), /*#__PURE__*/_react.default.createElement(_css.Input, (0, _extends2.default)({
    id: id,
    placeholder: placeholder,
    value: value,
    error: error,
    type: type,
    onChange: onChange,
    onBlur: onBlur,
    disabled: disabled,
    mt: 5 // eslint-disable-next-line react/jsx-props-no-spreading

  }, restProps)), validationIcon && /*#__PURE__*/_react.default.createElement(_css.ValidationIcon, {
    className: validationIcon,
    isValid: isValid
  }), rightIcon && /*#__PURE__*/_react.default.createElement(_css.RightIconButton, {
    type: "button",
    onClick: rightIconClick
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: rightIcon
  }))), /*#__PURE__*/_react.default.createElement("div", null, error && errorMessage && /*#__PURE__*/_react.default.createElement(_typography.Text, {
    as: "p",
    color: "red",
    fontSize: "10px",
    lineHeight: "1px",
    pl: 3,
    pt: 0
  }, errorMessage)));
};

Input.propTypes = {
  /**  A unique id to identify element */
  id: _propTypes.default.string,

  /** Text field placeholder */
  placeholder: _propTypes.default.string,

  /** Initial value of the input field */
  value: _propTypes.default.string,

  /** A valid type for the input field */
  type: _propTypes.default.string,

  /** Call to be executed when onChange event is fired on the input field */
  onChange: _propTypes.default.func,

  /** Call to be executed when onBlur event is fired on the input field */
  onBlur: _propTypes.default.func,

  /** Call to be executed when OnFocus event is fired on the input field */
  onFocus: _propTypes.default.func,

  /** Call to be executed when onKeyPress event is fired on the input field */
  onKeyPress: _propTypes.default.func,

  /** Whether or not inline error message will shown */
  error: _propTypes.default.bool,

  /** Error message to be shown when input in in error state */
  errorMessage: _propTypes.default.string,
  disabled: _propTypes.default.bool,

  /** renders input with border only on the bottom */
  withBottomBorderOnly: _propTypes.default.bool,

  /** The icon class for the  icon on left of input field */
  leftIcon: _propTypes.default.string,

  /** Callback to be executed when left icon is clicked */
  leftIconClick: _propTypes.default.func,

  /** The icon class for the  icon on right of input field */
  rightIcon: _propTypes.default.string,

  /** Callback to be executed when right icon is clicked */
  rightIconClick: _propTypes.default.func,

  /** Validation icon class for successfull or unsuccessfull validation */
  validationIcon: _propTypes.default.string,

  /** Boolean to represent validation state of input field */
  isValid: _propTypes.default.bool,

  /** borderType consumes borderCurved and borderRounded variables from Theme file */
  borderType: _propTypes.default.oneOf(['curved', 'rounded']),

  /** Defines font size of child elements. Accepts responsive value from theme */
  fontSize: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines line height of child elements. Accepts responsive value from theme */
  lineHeight: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** textAlign property specifies the horizontal
   * alignment of text in an element. Accepts responsive value from theme */
  textAlign: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines font weight of child elements. Accepts responsive value from theme */
  fontWeight: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** The display property specifies the display behavior (the type of rendering box) of an element. */
  display: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines height of input field. Accepts responsive value from theme */
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines height of input field. Accepts responsive value from theme */
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines input fields's border. It's a shorthand for border-width, border-style, and border-color.  */
  border: _propTypes.default.string,
  borderX: _propTypes.default.string,
  borderY: _propTypes.default.string,
  borderTop: _propTypes.default.string,
  borderBottom: _propTypes.default.string,
  borderLeft: _propTypes.default.string,
  borderRight: _propTypes.default.string,

  /** Defines border radius on the input field. Accepts responsive value from theme. */
  borderRadius: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines color of the input field */
  color: _propTypes.default.string,

  /** Defines background color of the input field. Can also be used with bg shorthand.
   Consumes colors variable from theme
   */
  backgroundColor: _propTypes.default.string,

  /** Shorthand to add margin to input field. ml, mr, mt, mb, my and mx are also supported to
   * to add margins on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  m: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Shorthand to add padding to input field. pl, pr, pt, pb, py and px are also supported to
   * to add paddings on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  p: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)])
};
Input.defaultProps = {
  type: 'text',
  value: '',
  error: false,
  errorMessage: '',
  onChange: () => {},
  onBlur: () => {}
};
var _default = Input;
exports.default = _default;