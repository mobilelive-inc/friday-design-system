import React from 'react'
import PropTypes from 'prop-types';
import { width } from 'styled-system';
import styled from 'styled-components'
// import { Button as BaseButton } from 'rebass/styled-components';


const BaseButton = styled.button`
  background-color: #F9C0A2;
  color: black;
  width: 150px;
  height: 50px;
  cursor: pointer;
  ${width}
`

const Button = ({
  children, type, onClick, radius, disabled
}) => {
  return (
    <BaseButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        borderRadius: radius || "0px"
      }}>{children}</BaseButton>
  )
}

export default Button;

Button.propTypes = {
  ...width.propTypes,
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  radius: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
Button.defaultProps = {
  type: 'button',
};