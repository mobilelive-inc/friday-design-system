import React from 'react'
import PropTypes from 'prop-types';
import { width } from 'styled-system';
import styled from 'styled-components'
// import { Button as BaseButton } from 'rebass/styled-components';


const BaseButton = styled.button`
  background-color: black;
  color: white;
  width: 150px;
  height: 50px;
  cursor: pointer;
  ${width}
`

const SecondaryButton = ({
  children, type, onClick
}) => {
  return <BaseButton type={type} onClick={onClick}>{children}</BaseButton>
}

export default SecondaryButton;

SecondaryButton.propTypes = {
  ...width.propTypes,
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
SecondaryButton.defaultProps = {
  type: 'button',
};