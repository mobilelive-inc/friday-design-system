import { _fontSizes } from '../properties/fontSizes';
import { _colors } from '../properties/colors';
import { _space } from '../properties/space';
import { _radii } from '../properties/radius';
import { _borderWidths } from '../properties/borderWidths';

export const fontSizes = {
  collapseHeadingTextFontSize: _fontSizes.fontsize_2x_tiny,
  collapseHeadingIconFontSize: _fontSizes.fontsize_tiny
};

export const colors = {
  collapseHeadingTextColor: _colors.black,
  collapseHeadingIconColor: _colors.black,
  collapseBorderColor: _colors.grayLight,
  collapseHeaderBackground: _colors.primary,
  collapseHeaderBackgroundHover: _colors.primaryHover
};

export const space = {
    collapseHeadingPaddingX: _space.globalSpacer,
    collapseHeadingPaddingY: _space.spacerMid,
    collapseContentPaddingX: _space.spacerMid,
    collapseContentPaddingY: _space.globalSpacer,
    collapseHeadingIconPaddingX: _space.space_5x_tiny,
    collapseHeadingIconPaddingY: _space.space_5x_tiny,
}

export const radii = {
  collapseBordeRadius: _radii.radius_0_063rem
};

export const borderWidths = {
  collapseBorderWidth: _borderWidths.borderWidth
};

export default {
  fontSizes,
  colors,
  space,
  radii,
  borderWidths
};
