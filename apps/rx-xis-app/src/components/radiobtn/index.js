import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "..";
import Radio from "../radio";
import "./style.css";
import GlobalStyle from "../theme/globalStyles";
import Text from "../typography";
import { Wrapper, ButtonWrapper, InlineWrapper, MainWrapper } from "./css.js";

const Basicbtn = ({ value }) => {
  const [fruit, setfruit] = useState(fruit);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ButtonWrapper 
        role="radiogrooup" 
        aria-labelledby="example-radio-group-label-1"
        >
        <Text mb={10} mr={32}>
          pic your favorite fruit : {value}
        </Text>
        <Radio
          tabIndex='0'
          name="apple"
          value="apple"
          label="Apple"
          backgroundColor="primary"
          color="black"
          borderType="rounded"
          variant={fruit === "apple" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("apple");
          }}
        />
        <Radio
          tabIndex='0'
          name="mango"
          value="mango"
          label="Mango"
          backgroundColor="primary"
          color="black"
          borderType="rounded"
          variant={fruit === "mango" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("mango");
          }}
        />
        <Radio
          tabIndex='0'
          name="orange"
          value="orange"
          label="Orange"
          backgroundColor="primary"
          color="black"
          borderType="rounded"
          variant={fruit === "orange" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("orange");
          }}
        />
        <Text color="primary" mb={32}>your favriote : {fruit}</Text>
      </ButtonWrapper>
    </ThemeProvider>
  );
};

const InlineButton = ({ value }) => {
  const [fruit, setfruit] = useState(fruit);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Text mb={10}>pic your favorite fruit {value}</Text>
      <InlineWrapper>
        <Radio
          name="apple"
          value="apple"
          label="Apple"
          backgroundColor="primary"
          color="black"
          borderType="rounded"
          variant={fruit === "apple" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("apple");
          }}
        />
        <Radio
          name="mango"
          value="mango"
          label="Mango"
          backgroundColor="primary"
          color="black"
          borderType="rounded"
          variant={fruit === "mango" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("mango");
          }}
        />
        <Radio
          name="orange"
          value="orange"
          label="Orange"
          backgroundColor="primary"
          color="black"
          borderType="rounded"
          variant={fruit === "orange" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("orange");
          }}
        />
      </InlineWrapper>
      <Text color="primary">Fruit : {fruit}</Text>
    </ThemeProvider>
  );
};

const RadioBtn = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Text variant="H1" mb={32}>
        Radio Button
      </Text>
      <MainWrapper>
        <Text variant="H3" mb={10}>
          Basic
        </Text>
        <Wrapper>
          <Basicbtn value="value" />
          <Basicbtn value="ng Modal" />
          <Basicbtn value="Reactive Froms" />
        </Wrapper>
        <Text variant="H3" my={10}>
          Inline
        </Text>
        <InlineButton />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default RadioBtn;
