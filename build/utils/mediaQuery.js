"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.desktopOnly = void 0;

var _styledComponents = require("styled-components");

var _defaultTheme = require("../components/theme/defaultTheme");

var desktopOnly = "@media only screen and (min-width: ".concat(_defaultTheme.mediaqueryBreakpoints.md, ")");
exports.desktopOnly = desktopOnly;
var MediaQuery = {
  desktop: function desktop() {
    return (0, _styledComponents.css)(["", "{", ";}"], desktopOnly, (0, _styledComponents.css)(...arguments));
  }
};
var _default = MediaQuery;
exports.default = _default;