import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../theme/defaultTheme';
import { Wrapper, Progresbar, Value, ButtonContainer } from './css';
import Text from '../typography';
import GlobalStyle from '../theme/globalStyles';
import progressbarTheme from './../theme/styles/progressbar';
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

Progress.defaultProps = {
  // disabled: false,
  // fontSize: [fontSizes.fontSizeSM, fontSizes.fontSizeBase],
  // lineHeight: [lineHeights.lineheight_1x_tiny],
  // m: [0],
  // fontWeight: [fontWeights.fontweight_medium],
  // // display: ['inline-block'],
  // width: [1],
  // textAlign: ['center'],
  // borderRadius: [radii.borderRadiusNone],
  onClick: () => {},
  // withIcon: false
};
Progress.propTypes = {

   /** Text for Button could be string or node. */
   children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  /** Click handler for Button */
  onClick: PropTypes.func,
}

export default Progress;
