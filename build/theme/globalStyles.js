"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _mediaQuery = _interopRequireDefault(require("../../utils/mediaQuery"));

var _colors = require("./colors");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n      position: relative;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n     overflow:visible;\n   "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n\n  @font-face { font-display: swap; }\n\n  body {\n    font-family: Gotham SSm A, Gotham SSm B, sans-serif !important;\n    font-style: normal;\n  }\n\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    background-color: ", ";\n  }\n\n  body.disable-scroll {\n   overflow:hidden;\n   ", ";\n }\n\n  .ReactModal__Body--open {\n    overflow: hidden;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    ", ";\n  }\n\n  .noPaddingLeftRight div {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// add style from reset here
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), _colors.colors.white, _mediaQuery.default.desktop(_templateObject2()), _mediaQuery.default.desktop(_templateObject3()));
var _default = GlobalStyle;
exports.default = _default;