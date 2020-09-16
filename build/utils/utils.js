"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalizeFirstLetter = capitalizeFirstLetter;

function capitalizeFirstLetter(str) {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return "";
}