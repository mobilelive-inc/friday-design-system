import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../";
import Radio from "../";
import './style.css'
import GlobalStyle from "../../theme/globalStyles";
import Text from "../../typography";
import {
  Section,
  Wrapper,
  ButtonWrapper,
  InlineWrapper,
  MainWrapper,
} from "./css.js";

export default {
  title: 'Radio Button',
  component: Radio,
};
const Basicbtn = ({ value,btntype }) => {
  const [fruit, setfruit] = useState(fruit);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ButtonWrapper
        role="radiogroup"
        aria-labelledby="example-radio-group-label-1"
      >
        <Text mb={10} mr={32}>
          pic your favorite fruit : {value}
        </Text>
        <Radio
          tabIndex="0"
          name="apple"
          value="apple"
          label="Apple"
          backgroundColor="primary"
          color="black"
          borderType={btntype}
          variant={fruit === "apple" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("apple");
          }}
        />
        <Radio
          tabIndex="0"
          name="mango"
          value="mango"
          label="Mango"
          backgroundColor="primary"
          color="black"
          borderType={btntype}
          variant={fruit === "mango" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("mango");
          }}
        />
        <Radio
          tabIndex="0"
          name="orange"
          value="orange"
          label="Orange"
          backgroundColor="primary"
          color="black"
          borderType={btntype}
          variant={fruit === "orange" ? "checked" : "unchecked"}
          onChange={() => {
            setfruit("orange");
          }}
        />
        <Text color="primary" mb={32}>
          your favriote : {fruit}
        </Text>
      </ButtonWrapper>
    </ThemeProvider>
  );
};

const InlineButton = ({ value,btntype }) => {
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
          borderType={btntype}
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
          borderType={btntype}
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
          borderType={btntype}
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

export const RadioRounded = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Section>
        <Text variant="H1" mb={32}>
          Radio Button
        </Text>
        <MainWrapper>
          <Text variant="H3" mb={10}>
            Basic
          </Text>
          <Wrapper>
            <Basicbtn value="value" btntype="rounded"/>
            <Basicbtn value="ng Modal"  btntype="rounded"/>
            <Basicbtn value="Reactive Froms"  btntype="rounded" />
          </Wrapper>
          <Text variant="H3" my={10}>
            Inline
          </Text>
          <InlineButton btntype="rounded"/>
        </MainWrapper>
      </Section>
    </ThemeProvider>
  );
};

export const RadioCurved = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Section>
        <Text variant="H1" mb={32}>
          Radio Button
        </Text>
        <MainWrapper>
          <Text variant="H3" mb={10}>
            Basic
          </Text>
          <Wrapper>
            <Basicbtn value="value" btntype="curved"/>
            <Basicbtn value="ng Modal"  btntype="curved"/>
            <Basicbtn value="Reactive Froms"  btntype="curved" />
          </Wrapper>
          <Text variant="H3" my={10}>
            Inline
          </Text>
          <InlineButton btntype="curved"/>
        </MainWrapper>
      </Section>
    </ThemeProvider>
  );
};