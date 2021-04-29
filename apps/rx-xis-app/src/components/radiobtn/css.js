import styled from "styled-components";
import css from "@styled-system/css";

export const Wrapper = styled.div(
  css({
    display: `flex`,
    flexFlow: `row`,
    flexDirection: `row`,
  })
);
export const MainWrapper = styled.div(
  css({
    border: `4px solid`,
    borderColor: "primaryLighter",
    paddingY: "spacerMid",
    marginBottom: "spacerMid",
  })
);
export const ButtonWrapper = styled.div(
  css({
    display: `flex`,
    flexDirection: `column`,
    marginLeft: ` spacerML`,
    marginBottom: " spacerML",
  })
);
export const InlineWrapper = styled.div(
  css({
    display: `flex`,
    flexDirection: `row`,
    marginRight: `50px`,
  })
);
