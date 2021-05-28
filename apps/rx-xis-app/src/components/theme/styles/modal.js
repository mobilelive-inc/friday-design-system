import { _fontSizes } from '../properties/fontSizes';
import { _colors } from '../properties/colors';
import { _space } from '../properties/space';
import { _radii } from '../properties/radius';
import { _borderWidths } from '../properties/borderWidths';
import { _sizes } from '../properties/sizes';
import { buttons, borderCurved, borderRounded } from '../variants/buttons';

export const fontSizes = {
  ModalHeadingfontSize: _fontSizes.fontsize_2x_tiny,
  ModalHeadingIconFontSize: _fontSizes.fontsize_tiny
};

export const colors = {
  ModalHeadingTextColor: _colors.black,
  ModalHeadingIconColor: _colors.black,
  ModalBorderColor: _colors.primaryLighter,
  ModalHeaderBackground: _colors.primary,
  ModalHeaderBackgroundHover: _colors.primaryHover
};

export const space = {
  ModalHeadingPaddingX: _space.globalSpacer,
  ModalHeadingPadding: _space.spacerMid,
  ModalContentPaddingX: _space.spacerMid,
  ModalContentPaddingY: _space.globalSpacer,
  ModalHeadingIconPaddingX: _space.space_5x_tiny,
  ModalHeadingIconPaddingY: _space.space_5x_tiny,
  SectionMarginBottom:_space.globalSpacer,
};

export const radii = {
  ModalBordeRadius: _radii.radius_0_063rem
};

export const borderWidths = {
  ModalBorderWidth: _borderWidths.borderWidth
};
export const sizes = {
  Xl: '1089px',
  Lg: '864px',
  Md: '576px',
  Sm: '300px',
  Modalbodyheight:'368px',
  Modalwidth: "100%",
  Modalhight: "96px",
  container_max_width: '1140px',
  container_min_width: '960px',
};
export const shadows = {
  ModalBoxShadow: '0 4px 25px rgba(0, 0, 0, 0.2)'
};
export default {
  fontSizes,
  colors,
  space,
  radii,
  borderWidths,
  sizes,
  shadows,
  buttons,
  borderCurved,
  borderRounded
};
