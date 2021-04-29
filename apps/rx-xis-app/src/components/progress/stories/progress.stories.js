import React,{useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper, Progresbar, Value, ButtonContainer } from '../css';
import Text from '../../typography';
import Theme from '../../theme/typography';
import progressbarTheme from '../../theme/styles/progressbar';
import GlobalStyle from '../../theme/globalStyles';
import Button from '../../Button';
export default {
  title: 'Progress',
  component: Progressbar
};
export const Progressbar = () => {
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
    <ThemeProvider theme={progressbarTheme}>
    <GlobalStyle />
    <Text variant="H2" mb="PbMargin">
      Progress
    </Text>
    <Wrapper>
      <Progresbar
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="10"
        aria-label={style}>
        <Value style={style}></Value>
      </Progresbar>
      
      <Text variant="h3" mt={7} ml={64}>
        ({`${progress}`} of 10)
      </Text>
      <br />
      <ButtonContainer>
        <Button
          variant="secondary"
          width="7%"
          m={0}
          onClick={handleDecrement}>
          {' '}
          Prev{' '}
        </Button>
        <Button variant="primary" width="7%" m={7} onClick={handleIncrement}>
          {' '}
          Next{' '}
        </Button>
      </ButtonContainer>
    </Wrapper>
  </ThemeProvider>
  );
};
