"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttons = exports.borderRounded = exports.borderCurved = void 0;

var _lighten = require("../utils/lighten");

var _colors = require("./colors");

var buttonBorder = '2px solid transparent';
var borderCurved = "10px";
exports.borderCurved = borderCurved;
var borderRounded = "50px";
exports.borderRounded = borderRounded;
var padding = "1rem 2rem";

var getBorder = color => {
  return "2px solid ".concat(color);
};

var buttons = {
  primary: {
    color: _colors.colors.black,
    backgroundColor: _colors.colors.primary,
    padding,
    border: buttonBorder,
    '&:hover': {
      color: _colors.colors.white
    }
  },
  secondary: {
    color: _colors.colors.white,
    backgroundColor: _colors.colors.grayDark,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: (0, _lighten.lighten)(_colors.colors.grayDark, -20)
    }
  },
  success: {
    color: _colors.colors.white,
    backgroundColor: _colors.colors.success,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: (0, _lighten.lighten)(_colors.colors.success, -20)
    }
  },
  danger: {
    color: _colors.colors.white,
    backgroundColor: _colors.colors.danger,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: (0, _lighten.lighten)(_colors.colors.danger, -20)
    }
  },
  warning: {
    color: _colors.colors.black,
    backgroundColor: _colors.colors.warning,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: (0, _lighten.lighten)(_colors.colors.warning, -5)
    }
  },
  info: {
    color: _colors.colors.black,
    backgroundColor: _colors.colors.info,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: (0, _lighten.lighten)(_colors.colors.info, -20)
    }
  },
  light: {
    color: _colors.colors.black,
    backgroundColor: _colors.colors.light,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: (0, _lighten.lighten)(_colors.colors.light, -20)
    }
  },
  outlinePrimary: {
    color: _colors.colors.primary,
    backgroundColor: _colors.colors.white,
    padding,
    border: getBorder(_colors.colors.primary),
    '&:hover': {
      backgroundColor: _colors.colors.primary,
      color: _colors.colors.black
    }
  },
  outlineSecondary: {
    color: _colors.colors.secondary,
    backgroundColor: _colors.colors.white,
    padding,
    border: getBorder(_colors.colors.secondary),
    '&:hover': {
      backgroundColor: _colors.colors.secondary,
      color: _colors.colors.white
    }
  },
  outlineSuccess: {
    color: _colors.colors.success,
    backgroundColor: _colors.colors.white,
    padding,
    border: getBorder(_colors.colors.success),
    '&:hover': {
      backgroundColor: _colors.colors.success,
      color: _colors.colors.white
    }
  },
  outlineDanger: {
    color: _colors.colors.danger,
    backgroundColor: _colors.colors.white,
    padding,
    border: getBorder(_colors.colors.danger),
    '&:hover': {
      backgroundColor: _colors.colors.danger,
      color: _colors.colors.white
    }
  },
  outlineInfo: {
    color: _colors.colors.info,
    backgroundColor: _colors.colors.white,
    padding,
    border: getBorder(_colors.colors.info),
    '&:hover': {
      backgroundColor: _colors.colors.info,
      color: _colors.colors.white
    }
  },
  outlineWarning: {
    color: _colors.colors.warning,
    backgroundColor: _colors.colors.white,
    padding,
    border: getBorder(_colors.colors.warning),
    '&:hover': {
      backgroundColor: _colors.colors.warning,
      color: _colors.colors.black
    }
  },
  outlineLight: {
    color: _colors.colors.light,
    backgroundColor: _colors.colors.white,
    padding,
    border: getBorder(_colors.colors.light),
    '&:hover': {
      backgroundColor: _colors.colors.light,
      color: _colors.colors.black
    }
  },
  outlineDark: {
    color: _colors.colors.black,
    backgroundColor: _colors.colors.white,
    padding,
    border: getBorder(_colors.colors.black),
    '&:hover': {
      backgroundColor: _colors.colors.black,
      color: _colors.colors.white
    }
  },
  iconBtn: {
    color: _colors.colors.black,
    backgroundColor: _colors.colors.white,
    padding: "0.5rem 0.5rem",
    border: buttonBorder
  },
  link: {
    color: _colors.colors.black,
    backgroundColor: _colors.colors.white,
    border: buttonBorder
  }
};
exports.buttons = buttons;