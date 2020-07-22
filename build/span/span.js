"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var getDerivedStyles = spanProps => {
  var styles = {};
  if (!spanProps) return styles;

  if (spanProps.iconMarginLeft) {
    styles.marginLeft = spanProps.theme.iconMarginLeft;
  }

  if (spanProps.iconMarginRight) {
    styles.marginRight = spanProps.theme.iconMarginRight;
  }

  return styles;
};

var Span = (0, _styledComponents.default)('div').withConfig({
  displayName: "span__Span",
  componentId: "sc-173pz2m-0"
})(props => getDerivedStyles(props), (0, _styledSystem.compose)(_styledSystem.typography, _styledSystem.space, _styledSystem.layout));
var _default = Span;
exports.default = _default;