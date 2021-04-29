import { _fontSizes } from "../properties/fontSizes";
import { _colors } from "../properties/colors";
import { _space } from "../properties/space";
import { _radii } from "../properties/radius";
import { _borderWidths } from "../properties/borderWidths";
import { _sizes } from "../properties/sizes";
import { BoxShadow } from "../../cards/css";
export const colors = {
  CardColor: "#282828",
  DividerColor: "#121212",
  WhiteColor: "#ffffff",
  ThemeColor: _colors.primary,
  SecondaryColor: _colors.secondary,
  BorderColor: "#bcbbba",
  BgCard: _colors.WhiteColor,
  PrimaryBorderColor: _colors.primary,
  SecondaryBorderColor: _colors.secondary,
  CardBorderColor: "#bcbbba",
  CardShadowColor: "rgba(0, 0, 0, 0.12)",
  MianWrapperBorder: _colors.primaryLighter,
  CardBorderColor: _colors.grayDark,
};

export const space = {
  CardBorderRadius: 0,
  CardSolidshadowMarginTop: "1rem",
  CardSolidShadowMarginRight: "1rem",
  CardSolidShadowMarginBottom: "1rem",
  CardSolidShadowMarginLeft: "1rem",
  CardShadowHorizontalLength: 0,
  CardShadowVerticalLength: "2px",
  CardSolidShadowHorizontalLength: "0.7rem",
  CardSolidShadowVerticalLength: "0.7rem",
  CardSmSolidShadowHorizontalLength: "0.5rem",
  CardSmSolidShadowVerticalLength: "0.5rem",
  PaddingWrapper: _space.spacerMid,
  CardFiguareBorder: "4px solid",
  CardBasicPadding: _space.globalSpace,
  CardBasicMargin: _space.globalSpace,
  WrapperBorder: "4px solid",
  PwrapperBorder: "1px solid",
  BoxShadow: "5px 10px",
};

export const radii = {
  CardSadowBlurRadius: "8px",
  CardSolidShadowBlurRadius: 0,
};
export const sizes = {
  CardImageSize: _sizes.size_100pc,
  CardIconewidth: _sizes.size_45_75rem,
  CardShadowWidth: _sizes.size_65pc,
  IconeCardWidth: _sizes.size_40pc,
};

export const borderWidths = {
  CardBorderWidth: _borderWidths.borderWidth,
};

export default {
  colors,
  space,
  radii,
  borderWidths,
  sizes,
};
