import React, { useState, useEffect } from 'react';
import { ProgressWrapper, ProgressStepper } from './css';
import Span from '../icon/Icon';
import Box from '../box';
import { Flex } from '../toggle/css';

const Stepper = props => {
  const { total, value } = props;
  const [progressWidth, setProgressWidth] = useState(20);

  useEffect(() => {
    setProgressWidth((value / total) * 100);
  }, [total, value]);

  return (
    <Box width="100%">
      <ProgressWrapper {...props}>
        <ProgressStepper {...props} width={`${progressWidth}%`} />
      </ProgressWrapper>
      <Span textAlign="center" mt={5}>{`${value} of ${total}`}</Span>
    </Box>
  );
};

export default Stepper;
