import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Theme from "../theme/defaultTheme";
import { Wrapper, Progresbar, Value, ButtonContainer } from "./css";
import Text from "../typography";
import GlobalStyle from "../theme/globalStyles";
import progressbarTheme from "./../theme/styles/progressbar";
import Button from "../Button";

const Progress = () => {
  const [progress, setProgress] = useState(3);

  const handleIncrement = () => {
    if (progress !== 10) {
      setProgress((progress) => progress + 1), () => console.log(progress);
    } else alert("oops, you hit the max value!");
  };

  const handleDecrement = () => {
    if (progress !== 0) {
      setProgress((progress) => progress - 1), () => console.log(progress);
    } else alert("oops, you hit the min value!");
  };
  const test = progress + `0%`;
  let style = { width: test };

  return (
    <ThemeProvider theme={progressbarTheme}>
      <GlobalStyle />
      <Text variant="H2" mb="PbMargin">
        Progress
      </Text>
      <Wrapper px={15}>
        <Progresbar
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="10"
          aria-label={style}
        >
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
            onClick={handleDecrement}
          >
            {" "}
            Prev{" "}
          </Button>
          <Button variant="primary" width="7%" m={7} onClick={handleIncrement}>
            {" "}
            Next{" "}
          </Button>
        </ButtonContainer>
      </Wrapper>
    </ThemeProvider>
  );
};

Progress.defaultProps = {
  onClick: () => {},
  progress: 3,
  minValue: 0,
  maxValue: 100,
  handleDecrement: () => {},
  handleIncrement: () => {},
};
Progress.propTypes = {
  /** Completion value of the progressbar, from minValue to maxValue. Required */
  value: PropTypes.number,
  /** Minimum value of the progressbar*/
  minValue: PropTypes.number,
  /** Maximum value of the progressbar*/
  maxValue: PropTypes.number,
  /**  text to display progressbar heading */
  text: PropTypes.string,
  /** progress is initial state of useState hook */
  progress: PropTypes.number,
  /** setProgress is func used to update initial state */
  setProgress: PropTypes.number,
  /** Text for Button could be string or node. */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  /** Click handler for Button you can incress and decress value of progressbar */
  onClick: PropTypes.func,
  /** onclick handledecrement decress 1 value from current value */
  handleDecrement: PropTypes.func,
  /** onclick handleIncrement incress 1 value from current value */
  handleIncrement: PropTypes.func,
  /** For add padding to main component */
  p: PropTypes.number,
  /** For add top padding to main component */
  pt: PropTypes.number,
  /** For add bottom padding to main component */
  pb: PropTypes.number,
  /** For add left padding to main component */
  pl: PropTypes.number,
  /** For add right padding to main component */
  pr: PropTypes.number,
  /** For add left & right padding to main component */
  px: PropTypes.number,
  /** For add top & bottom padding to main component */
  py: PropTypes.number,
  /** For add margin to main component */
  m: PropTypes.number,
  /** For add top margin to main component */
  mt: PropTypes.number,
  /** For add bottom margin to main component */
  mb: PropTypes.number,
  /** For add left margin to main component */
  ml: PropTypes.number,
  /** For add right margin to main component */
  mr: PropTypes.number,
  /** For add left & right margin to main component */
  mx: PropTypes.number,
  /** For add top & bottom margin to main component */
  my: PropTypes.number,
  /** For giving width to main component */
  width: PropTypes.number,
  /** For giving height to main component */
  height: PropTypes.number
};

export default Progress;
