import React, { useState, useEffect } from 'react';
import { ProgressWrapper, ProgressStepper } from './css';
import Span from '../icon/Icon';
import Box from '../box';
import { ThemeProvider } from 'styled-components';
import stepperTheme from './../theme/styles/stepper';
import GlobalStyle from './../theme/globalStyles';
import PropTypes from 'prop-types';

const Stepper = props => {
  const { total, value } = props;
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    setProgressWidth((value / total) * 100);
  }, [total, value]);

  return (
    <ThemeProvider theme={stepperTheme}>
      <GlobalStyle />
      <Box width="100%">
        <ProgressWrapper {...props}>
          <ProgressStepper {...props} width={`${progressWidth}%`} />
        </ProgressWrapper>
        <Span textAlign="center" mt={5}>{`${value} of ${total}`}</Span>
      </Box>
    </ThemeProvider>
  );
};

Stepper.defaultProps = {
  total: 10,
  value: 3,
  variant: 'primary'
};

Stepper.propTypes = {
  /** Total Number of steps */
  total: PropTypes.number.isRequired,
  /** Step no where user stands */
  value: PropTypes.number.isRequired,
  /** To manage theme*/
  variant: PropTypes.string
};

export default Stepper;
