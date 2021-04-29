import styled from "styled-components";
import css from "@styled-system/css";

export const Wrapper = styled.div(
  css({
    display: `flex`,
    justifyContent: `center`,
    flexDirection: `column`,
    border: "4px solid",
    borderColor: "MianWrapperBorder",
    paddingBottom: "PaddingWrapper",
  })
);
export const Pwrapper = styled.div(
  css({
    border: "1px solid",
    borderColor: "ThemeColor",
    padding: "PaddingWrapper",
  })
);
export const Figuare = styled.figure(
  css({
    display: "block",
    margin: 0,
    border: "CardFiguareBorder",
    borderColor: "CardBorderColor",
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
    border: "1px solid",
    borderColor: "CardBorderColor",
    width: "CardIconewidth",
  })
);
export const IconeWrapper = styled.div(
  css({
    textAlign: "center",
    padding: "CardBasicPadding",
    border: "1px solid",
    borderColor: "CardBorderColor",
    width: "40%",
  })
);

export const ShadowWrapper = styled.div(
  css({
    textAlign: "center",
    padding: "globalSpace",
    border: "1px solid",
    borderColor: "grayDark",
    width: "CardShadowWidth",
    boxShadow: "5px 10px",
    color: "ThemeColor",
  })
);
