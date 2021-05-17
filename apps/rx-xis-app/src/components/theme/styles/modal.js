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
  ModalHeadingIconPaddingY: _space.space_5x_tiny
};

export const radii = {
  ModalBordeRadius: _radii.radius_0_063rem
};

export const borderWidths = {
  ModalBorderWidth: _borderWidths.borderWidth
};
export const sizes = {
  ModalSl: '1089px',
  ModalLg: '864px',
  ModalMd: '576px',
  ModalSm: '300px'
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

// Modals
//
// Define Modal colors, font size and border radius.
