import styled from "styled-components";
import css from "@styled-system/css";

export const Wrapper = styled.div(
  css({
    display: `flex`,
    justifyContent: `center`,
    flexDirection: `column`,
    border: `4px solid`,
    borderColor: "lightprimary",
    paddingBottom: [13],
    paddingTop: [7],
    paddingX: [7],
    margin: [10],
  })
);

export const Button = styled.button(
  css({
    border: `2px solid`,
    borderColor: "primary",
    width: "max-content",
    backgroundColor: "white",
    color: "primary",
    paddingY: [2],
    paddingX: [9],
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    fontSize: [2],
    fontWeight: [4],
    height: [39],
    justifyContent: "center",
    lineHeight: [7],
    marginRight: [7],
    minHeight: [15],
    minWidth: [0],
    textAlign: "center",
    textDecorationColor: "rgb(255, 255, 255)",
    textDecorationLine: "none",
    textDecorationStyle: "solid",
    textDecorationThickness: "auto",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "normal",
    "&:hover": {
      color: "white",
      backgroundColor: "primary",
    },
  })
);
export const Wrapperdiv = styled.div(
  css({
    padding: [7],
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 25px 0px",
    boxSizing: "order-box",
    display: "block",
    fontSize: [7],
    fontWeight: [1],
    height: [40],
    outlineStyle: " none",
    outlineWidth: [0],
    pointerEvents: "auto",
    textAlign: "left",
    transform: "none",
    width: [41],
  })
);
export const Modalhead = styled.h5(
  css({
    color: "grayDarker",
    display: "block",
    fontSize: [4],
    fontWeight: [3],
    height: [11],
    lineHeight: [11],
    marginBlockEnd: [7],
    marginBlockStart: [0],
    marginBottom: [7],
    marginInlineEnd: [0],
    marginInlineStart: [0],
    marginTop: [0],
    pointerEvents: "auto",
    textAlign: "left",
  })
);
export const Closebutton = styled.button(
  css({
    alignItems: "flex-start",
    appearance: " auto",
    backgroundAttachment: "scroll",
    backgroundClip: "border-box",
    backgroundColor: "rgba(0, 0, 0, 0)",
    position: "relative",
    top: "-25%",
    left: "95%",
    border: "none",
    fontSize: [11],
    fontWeight: [1],
  })
);
export const Sronly = styled.span(
  css({
    border: "0 !important",
    clip: "rect(1px, 1px, 1px, 1px) !important",
    height: "1px !important",
    margin: "-1px !important",
    overflow: "hidden !important",
    padding: "0 !important",
    position: "absolute !important",
    width: "1px !important",
    whiteSpace: "nowrap !important",
  })
);
export const Description = styled.div(
  css({
    color: "grayDarker",
    display: "block",
    fontSize: [3],
    fontWeight: [1],
    lineHeight: [5],
    pointerEvents: "auto",
    textAlign: "left",
  })
);
