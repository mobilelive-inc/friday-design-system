import styled from "styled-components";
import css from "@styled-system/css";

export const Col = styled.div(
  css({
    flex: "0 0 30%",
    margin: "5px",
  })
);
export const Wrapper = styled.div(
  css({
    display: `flex`,
    justifyContent: `center`,
    flexDirection: `column`,
    display: "flex",
    flexFlow: "row wrap",
    alignContent: "flex-start",
    borderWidth: "borderWidth4",
    borderStyle: "solid",
    borderRadius: "borderRadiusNo",
    borderColor: "MianWrapperBorder",
    paddingBottom: "PaddingWrapper",
  })
);
export const Pwrapper = styled.div(
  css({
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "borderRadiusNone",
    borderColor: "ThemeColor",
    padding: "PaddingWrapper",
  })
);
export const Figure = styled.figure(
  css({
    display: "block",
    margin: 0,
    border: "CardFiguareBorder",
    borderColor: "CardBorderColor",
  })
);
export const ShadowFigure = styled.figure(
  css({
    display: "block",
    margin: 0,
    border: "CardFiguareBorder",
    borderColor: "CardBorderColor",
    boxShadow: "5px 10px",
    color: "ThemeColor",
  })
);

export const Image = styled.img(
  css({
    height: "auto",
    display: "block",
    maxWidth: "CardImageSize",
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
    color: "ThemeColor",
  })
);
export const TextWrapper = styled.div(
  css({
    textAlign: "center",
    padding: "CardBasicPadding",
  })
);
export const CardWrapper = styled.div(
  css({
    textAlign: "center",
    padding: "CardBasicPadding",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "borderRadiusNo",
    borderColor: "CardBorderColor",
  })
);
export const IconeWrapper = styled.div(
  css({
    textAlign: "center",
    padding: "CardBasicPadding",
    borderWidth: "borderWidth",
    borderStyle: "solid",
    borderColor: "CardBorderColor",
  })
);

export const ShadowWrapper = styled.div(
  css({
    textAlign: "center",
    padding: "globalSpace",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "grayDark",
    boxShadow: "5px 10px",
    color: "ThemeColor",
  })
);
