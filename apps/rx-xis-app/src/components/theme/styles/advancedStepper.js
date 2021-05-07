import { _fontSizes } from '../properties/fontSizes';
import { _colors } from '../properties/colors';
import { _space } from '../properties/space';
import { _radii } from '../properties/radius';
import { _sizes } from '../properties/sizes';
import { _borderWidths } from '../properties/borderWidths';

export const fontSizes = {
  collapseHeadingTextFontSize: _fontSizes.fontsize_2x_tiny,
  collapseHeadingIconFontSize: _fontSizes.fontsize_tiny
};

export const colors = {
  stepperThemeColor: _colors.primary
};

export const space = {
  stepperProgressBarMargin: _space.globalSpacer,
  stepperProgressBarAlignmentFromTop: _space.spacerSS
};

export const radii = {
  stepperItemRadius: _radii.borderRadiusHalf
};

export const borderWidths = {
  collapseBorderWidth: _borderWidths.borderWidth
};

const sizes = {
  stepperItemHeight: _sizes.size_2_25rem,
  stepperItemWidth: _sizes.size_2_25rem
};

export default {
  fontSizes,
  colors,
  space,
  radii,
  borderWidths,
  sizes
};
