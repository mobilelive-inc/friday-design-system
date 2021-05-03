import styled from "styled-components";
import css from "@styled-system/css";
export const Section = styled.section(
  css({
    maxWidth:`container_max_width`,
    minWidth:`container_min_width`,
    margin:'0 auto',
  })
);

export const Wrapper = styled.div(
  css({
    display: `flex`,
    flexFlow: `row`,
    flexDirection: `row`,
    justifyContent:'space-between',
  })
);
export const MainWrapper = styled.div(
  css({
    borderWidth:'borderWidth4',
    borderStyle:'solid',
    borderColor: "primaryLighter",
    borderRadius:'borderRadiusNone',
    paddingY: "spacerMid",
    marginBottom: "spacerMid",
    paddingX:'spacerMid'
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
    marginRight: `spacerML`,
  })
);
