import styled from "styled-components";
import css from "@styled-system/css";
import { compose, border, layout, variant, space, color } from "styled-system";

export const Section = styled.section(
  css({
    maxWidth: `container_max_width`,
    minWidth: `container_min_width`,
    margin: "0 auto",
  })
);
export const Wrapper = styled("div")(
  css({
    display: `flex`,
    justifyContent: `center`,
    flexDirection: `column`,
    borderColor: 'progressBorderColor',
    borderWidth: 'progressBorderWidth',
    borderStyle: 'solid',
    borderRadius: 'progressBordeRadius',
    borderColor: "BgProgressbar",
    padding: "PbPadding",
    marginBottom: "PbMargin",
  }),
  compose(border, layout, space, color)
);

export const Progressbar = styled("div")(
  css({
    backgroundColor: "BgProgressbar",
    height: "ProgressbarHeight",
    width: "ProgressbarValue",
    position: "relative",
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.5) inset",
    marginY: "PbMargin;",
    borderRadius: "ProgressbarRadius",
  }),
  props => props,
  compose(color, layout, space, border),
  variant({ scale: 'progress' })
);
export const Progressdone = styled.span(
  css({
    backgroundColor: "SteperBroderColor",
    boxShadow: "0 3px 3px -5px #f2709c, 0 2px 5px #f2709c",
    borderRadius: "ProgressbarRadius",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "ProgressbarValue",
    position: "relative",
    width: "0",
    opacity: "0",
    transition: "8s ease 0.3s",
  }),
  props => props,
  compose(color, layout, space, border),
  variant({ scale: 'progressWrapper' })
);
