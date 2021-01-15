import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RxXisProps {}

const StyledRxXis = styled.div`
  color: pink;
`;

export const RxXis = (props: RxXisProps) => {
  return (
    <StyledRxXis>
      <h1>Welcome to rx-xis!</h1>
    </StyledRxXis>
  );
};

export default RxXis;
