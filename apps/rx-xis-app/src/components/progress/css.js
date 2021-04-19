import styled from "styled-components";
import css from "@styled-system/css";

export const Wrapper = styled.div(
  css({
    display: `flex`,
    justifyContent: `center`,
    flexDirection: `column`,
    border: `4px solid`,
    borderColor: "lightprimary",
    paddingY: [20],
    margin: [10],
  })
);

export const Progresbar = styled.div(
  css({
    backgroundColor: "lightprimary",
    height: [9],
    width: "20%",
    position: "relative",
    borderRadius: [3],
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.5) inset",
  })
);
export const Value = styled.span(
  css({
    display: "inline-block",
    height: "100%",
    position: "relative",
    transition: "width 0.6s ease",
    backgroundColor: "primary",
  })
);

export const ButtonContainer = styled.div(
  css({
    paddingTop: [17],
  })
);
