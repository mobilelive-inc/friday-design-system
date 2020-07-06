"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { Button as BaseButton } from 'rebass/styled-components';
var BaseButton = _styledComponents.default.button.withConfig({
  displayName: "Button__BaseButton",
  componentId: "xw2fa0-0"
})(["background-color:#f48245;color:white;width:150px;height:50px;cursor:pointer;", ""], _styledSystem.width);

var Button = (_ref) => {
  var {
    children,
    status
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(BaseButton, {
    type: "button",
    value: status
  }, children);
};

var _default = Button;
exports.default = _default;
Button.propTypes = _objectSpread(_objectSpread({}, _styledSystem.width.propTypes), {}, {
  status: _propTypes.default.oneOf(['positive', 'negative', 'neutral', 'error', 'warning']),
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node])
});
Button.defaultProps = {
  status: 'neutral'
};