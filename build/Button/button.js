function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { width } from 'styled-system';
import styled from 'styled-components'; // import { Button as BaseButton } from 'rebass/styled-components';

const BaseButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "button__BaseButton",
  componentId: "l86p9e-0"
})(["background-color:black;color:white;width:150px;height:50px;cursor:pointer;display:flex;align-items:center;justify-content:space-evenly;", ""], width);

const SecondaryButton = ({
  children,
  type,
  onClick
}) => {
  return /*#__PURE__*/React.createElement(BaseButton, {
    type: type,
    onClick: onClick
  }, children);
};

export default SecondaryButton;
SecondaryButton.propTypes = _objectSpread(_objectSpread({}, width.propTypes), {}, {
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
});
SecondaryButton.defaultProps = {
  type: 'button'
};