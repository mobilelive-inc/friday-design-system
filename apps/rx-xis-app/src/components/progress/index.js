import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../theme/defaultTheme';
import { Wrapper, Progresbar, Value, ButtonContainer } from './css';
import Text from '../typography';
import GlobalStyle from '../theme/globalStyles';
import Button from '../Button';

const Progress = () => {
  const [progress, setProgress] = useState(3);

  const handleIncrement = () => {
    if (progress !== 10) {
      setProgress(progress => progress + 1), () => console.log(progress);
    } else alert('oops, you hit the max value!');
  };

  const handleDecrement = () => {
    if (progress !== 0) {
      setProgress(progress => progress - 1), () => console.log(progress);
    } else alert('oops, you hit the min value!');
  };
  const test = progress + `0%`;
  let style = { width: test };

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Text variant="H1" ml="space_6x_small" mb="space_5x_small">
        Progress
      </Text>
      <Wrapper>
        <Progresbar
          role="progressbar"
          aria-valuenow="3"
          aria-valuemin="0"
          aria-valuemax="10"
          aria-label={style}>
          <Value style={style}></Value>
        </Progresbar>
        <Text variant="h3" mt="space_6x_small" ml="space_2x_large">
          ({`${progress}`} of 10)
        </Text>
        <br />
        <ButtonContainer>
          <Button
            variant="secondary"
            width="10%"
            m={0}
            onClick={handleDecrement}>
            {' '}
            Prev{' '}
          </Button>
          <Button variant="primary" width="10%" m={7} onClick={handleIncrement}>
            {' '}
            Next{' '}
          </Button>
        </ButtonContainer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Progress;
