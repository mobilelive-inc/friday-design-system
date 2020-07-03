"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledComponents2 = require("rebass/styled-components");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mediaQuery = _interopRequireDefault(require("../../utils/mediaQuery"));

var Text = (0, _styledComponents.default)(_styledComponents2.Text).withConfig({
  displayName: "typography__Text",
  componentId: "a2n5i3-0"
})((0, _styledSystem.compose)(_styledSystem.border, _styledSystem.color, _styledSystem.typography, _styledSystem.layout, _styledSystem.space, (0, _styledSystem.variant)({
  scale: 'typography'
})));
exports.Text = Text;