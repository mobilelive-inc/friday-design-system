"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROPS_FOR_THEME_ATTRIBUTES = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var PROPS_FOR_THEME_ATTRIBUTES = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]);

exports.PROPS_FOR_THEME_ATTRIBUTES = PROPS_FOR_THEME_ATTRIBUTES;