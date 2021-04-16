import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Theme, { space } from "../theme/defaultTheme";
import { Wrapper, Progresbar, Value, ButtonContainer, Button } from "./css";
import Text from "../typography";
import GlobalStyle from "../theme/globalStyles";

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
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Text variant="H1" mb={10} ml={8}>
        Progress
      </Text>
      <Wrapper>
        <Progresbar
          role="progressbar"
          aria-valuenow="3"
          aria-valuemin="0"
          aria-valuemax="10"
          aria-label={style}
        >
          <Value style={style}></Value>
        </Progresbar>
        <Text variant="h3" mt={5} ml={25}>
          ({`${progress}`} of 10)
        </Text>
        <br />
        <ButtonContainer>
          <Button
            className="btn btn-primary"
            role="button"
            onClick={handleDecrement}
            style={{ background: "#707070" }}
          >
            Prev
          </Button>
          <Button role="button" onClick={handleIncrement} next>
            Next
          </Button>
        </ButtonContainer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Progress;
