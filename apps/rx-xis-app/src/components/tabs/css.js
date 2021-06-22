import styled from "styled-components";
import css from "@styled-system/css";

export const Tabs = styled("div")({});

export const TabsTitles = styled("ul")({
  display: "flex",
  listStyle: "none",
  padding: "0px",
  margin: "0",
});
export const TabContent = styled("div")({
  backgroundColor: "#f5f5f5",
  padding: "5px",
  margin: "0",
});
export const Closebutton = styled.button(
  css({
    alignItems: "flex-start",
    appearance: " auto",
    backgroundAttachment: "scroll",
    backgroundClip: "border-box",
    backgroundColor: "white",
    position: "relative",
    border: "none",
    fontSize: "ModalButtonFontSize",
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
