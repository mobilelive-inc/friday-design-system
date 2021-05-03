import styled from "styled-components";
import css from "@styled-system/css";
import { compose, border, layout, variant, space, color } from "styled-system";

export const Section = styled.section(
  css({
    maxWidth:`container_max_width`,
    minWidth:`container_min_width`,
    margin:'0 auto',
  })
);
export const Wrapper = styled("div")(
  css({
    display: `flex`,
    justifyContent: `center`,
    flexDirection: `column`,
    border: "4px solid",
    borderColor: "BgProgressbar",
    paddingY: "PbPadding",
    marginBottom: "PbMargin",
  }),
  compose(border, layout, space, color)
);

export const Progresbar = styled("div")(
  css({
    backgroundColor: "BgProgressbar",
    height: "ProgressbarHeight",
    width: "100%",
    position: "relative",
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.5) inset",
  })
);
export const Value = styled.span(
  css({
    display: "inline-block",
    height: "ProgressbarValue",
    position: "relative",
    transition: "width 0.6s ease",
    backgroundColor: "SteperBroderColor",
  })
);

export const ButtonContainer = styled("div")(
  css({
    textAlign:'center'
  })
);
