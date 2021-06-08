import { _fontSizes } from "../properties/fontSizes";
import { _colors } from "../properties/colors";
import { _space } from "../properties/space";
import { _radii } from "../properties/radius";
import { _borderWidths } from "../properties/borderWidths";
import { TableVariant } from "../variants/tables";

export const fontSizes = {
  TableTextFontSize: _fontSizes.fontsize_2x_tiny,
  TableIconFontSize: _fontSizes.fontsize_tiny,
};

// Tables Generic Styles
export const fontWeights = {
  TableHeaderFontWeight:'600'
}
export const lineHeights = {
  TableHeaderlineHeights:'24px'
}
lineHeights
export const colors = {
  TableBodyBgColor: _colors.white,
  TableBodyColor: _colors.dark,
  TableBodyHeadTextColor: _colors.dark,
  TableBodyBorderColor: _colors.light,
  TableBodyhoverTextColor: _colors.dark,
  TableBodyhoverBgColor: _colors.light,
  TableBodydarkhHoverTextColor: _colors.dark,
  TableBodydarkHoverBgColor: _colors.light,
  TableBodyrowBorderColor: _colors.light,

  TableBodydarkBgColor: _colors.dark,
  TableBodyDarkTextColor: _colors.light,
  TableBodydarkborderColor: _colors.light,

  TableBodyHeadDarkBgColor: _colors.dark,
  TableBodyHeaddarkTextColor: _colors.light,

  TableBodylightHeadTextColor: _colors.dark,
  TableBodylightHeadbgcolor: _colors.light,

  StripeTableBodylightOddBgColor: _colors.light,
  StripeTableBodylightEvenBgColor: _colors.light,
};

export const space = {
  TableBodycolumspadding: "0.5rem 1rem",
  TableBodyrowpaddingsm: "0",
  TableWrapperMargin:'1rem',
};
export const borders = {
  TableBodyborderwidth: 0,
  TableBodycolumnsborderwidth: 0,
  TableBodythborderwidth: "0 0 2px",
  TableBodytdborderwidth: "0 0 1px",
  TableBodyrowborderwidth: " 0 0 2px",
  TableBodyborderedwidth: "1px 1px 1px 1px",
  TableBodyborderedthborderwidth: "1px 1px 1px 1px",
  TableBodyborderedtdborderwidth: "1px 1px 1px 1px",
};

export const radii = {
  collapseBordeRadius: _radii.radius_0_063rem,
};

export const borderWidths = {
  collapseBorderWidth: _borderWidths.borderWidth4,
};

export default {
  fontSizes,
  colors,
  space,
  radii,
  borderWidths,
  borders,
  TableVariant,
  fontWeights,
  lineHeights
};
