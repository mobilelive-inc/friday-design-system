import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "..";
import Radio from "../radio";
import "./style.css";
import GlobalStyle from "../theme/globalStyles";
import PropTypes from 'prop-types';
import Text from "../typography";
import { Section,Wrapper, ButtonWrapper, InlineWrapper, MainWrapper } from "./css.js";

const Basicbtn = ({ value }) => {
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
      <Section>
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
      </Section>
    </ThemeProvider>
  );
};
RadioBtn.propTypes = {
   /** Text for Button could be string or node. */
   children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  /**
   * The label.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * The ID. Need to be defined for labels.
   */
  id: PropTypes.string.isRequired,
  /**
   * Associate this checkbox with a group. Set as the HTML name attribute.
   */
  name: PropTypes.string.isRequired,
  /**
   * The variant state
   */
  variant: PropTypes.oneOf(['unchecked', 'checked', 'disabled']),
  /**
   * A callback function to be invoked when the checkbox is checked or unchecked.
   */
  onChange: PropTypes.func,
  /**
   * color controld the color for border and fill color.
   */
  color: PropTypes.string,
  /** It is a validation's error message */
  error: PropTypes.bool,
  borderType: PropTypes.oneOf(['curved', 'rounded']),
  className: PropTypes.string,
  borderType: PropTypes.oneOf(['curved', 'rounded']),

};

RadioBtn.defaultProps = {
  variant: 'unchecked',
  onChange: () => {},
  error: false,
  disabled: false,

};

export default RadioBtn;
