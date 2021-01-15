import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.div`
  color: pink;
`;

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton>
      <h1>Welcome to button!</h1>
    </StyledButton>
  );
};

export default Button;
