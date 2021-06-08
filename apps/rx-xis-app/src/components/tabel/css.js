import styled from "styled-components";
import css from "@styled-system/css";
import { Children } from "react";
import { compose, color, layout, space, border, variant } from "styled-system";

export const TableWrapper = styled.div(
  css({
    margin: "TableWrapperMargin",
    display: "flex",
    flexDirection: "column",
  })
);

export const TableHeader = styled.div(
  css({
    display: "flex",
    borderColor: "TableBodyBorderColor",
    borderBottomWidth: "TableBodythborderwidth",
    borderTopWidth: "0",
    borderLeftWidth: "0",
    borderRightWidth: "0",
    borderStyle: "solid",
    borderRadius: "0",
  })
);

export const HeaderContent = styled.div(
  css({
    display: "flex",
    cursor: "pointer",
    flex: "1",
    padding: "TableBodycolumspadding",
    fontSize: "TableTextFontSize",
    fontWeight: "TableHeaderFontWeight",
    lineHeight: "TableHeaderlineHeights",
  })
);

export const TableBody = styled.div(css({}));
export const TableRow = styled("div")(
  // ` &:nthChild(even){
  //     background: 'red',
  //  }`,
  css({
    display: "flex",
  })
  // props => props,
  // compose(border, layout, space, color, variant({ scale: 'TableVariant' }))
);
export const RowData = styled("div")(
  css({
    flex: "1",
    padding: "TableBodycolumspadding",
    borderColor: "TableBodyBorderColor",
    borderBottomWidth: "TableBodyrowborderwidth",
    borderTopWidth: "0",
    borderLeftWidth: "0",
    borderRightWidth: "0",
    borderStyle: "solid",
    borderRadius: "0",
  }),

  (props) => props,
  compose(border, layout, space, color, variant({ scale: "TableVariant" }))
);
