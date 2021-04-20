import styled from "styled-components";
import css from "@styled-system/css";

export const Wrapper = styled.div(
  css({
    display: `flex`,
    justifyContent: `center`,
    flexDirection: `column`,
    border: `4px solid`,
    borderColor: "lightprimary",
    paddingY: [10],
    margin: [10],
  })
);
export const Pwrapper = styled.div(
  css({
    border: "2px solid",
    borderColor: "primary",
    padding: [13],
  })
);
export const Figuare = styled.figure(
  css({
    display: "block",
    margin: [0],
    border: "2px solid",
    borderColor: "grayDark",
  })
);

export const Image = styled.img(
  css({
    height: "auto",
    display: "block",
    maxWidth: "100%",
    verticalAlign: "middle",
    borderStyle: "none",
  })
);
export const BoxShadow = styled.div(
  css({
    boxShadow: "black",
  })
);
export const SolidShadow = styled.div(
  css({
    boxShadow: "5px 10px",
    color: `primary`,
  })
);
export const TextWrapper = styled.div(
  css({
    textAlign: "center",
    padding: [7],
  })
);
export const CardWrapper = styled.div(
  css({
    textAlign: "center",
    padding: [7],
    border: "1px solid",
    borderColor: "grayDark",
    width: "732px",
  })
);
export const ShadowWrapper = styled.div(
  css({
    textAlign: "center",
    padding: [7],
    border: "1px solid",
    borderColor: "grayDark",
    width: "732px",
    boxShadow: "5px 10px",
    color: "primary",
  })
);
