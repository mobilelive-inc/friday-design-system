import styled from "styled-components";
import css from "@styled-system/css";

export const Wrapper = styled.div(
  css({
    display: `flex`,
    justifyContent: `center`,
    flexDirection: `column`,
    border: [14],
    borderColor: "lightprimary",
    paddingY: [10],
    margin: [10],
  })
);
export const Pwrapper = styled.div(
  css({
    border: [12],
    borderColor: "primary",
    padding: [13],
  })
);
export const Figuare = styled.figure(
  css({
    display: "block",
    margin: [0],
    border: [12],
    borderColor: "grayDark",
  })
);

export const Image = styled.img(
  css({
    height: "auto",
    display: "block",
    maxWidth: [19],
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
    boxShadow: [1],
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
    border: [11],
    borderColor: "grayDark",
    width:[40],
  })
);
export const ShadowWrapper = styled.div(
  css({
    textAlign: "center",
    padding: [7],
    border: [11],
    borderColor: "grayDark",
    width: [40],
    boxShadow: [1],
    color: "primary",
  })
);
