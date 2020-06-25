import React from 'react'
import PropTypes from 'prop-types';
import { width } from 'styled-system';
import styled from 'styled-components'
// import { Button as BaseButton } from 'rebass/styled-components';


const BaseButton = styled.button`
  background-color: #f48245;
  color: white;
  width: 150px;
  height: 50px;
  cursor: pointer;
  ${width}
`

const Button = ({
  children, status
}) => {
  return <BaseButton type="button" value={status}>{children}</BaseButton>
}

export default Button;

Button.propTypes = {
  ...width.propTypes,
  status: PropTypes.oneOf(['positive', 'negative', 'neutral', 'error', 'warning']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
Button.defaultProps = {
  status: 'neutral',
};