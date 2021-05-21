import { _fontSizes } from '../properties/fontSizes';
import { _colors } from '../properties/colors';
import { _space } from '../properties/space';
import { _radii } from '../properties/radius';
import { _borderWidths } from '../properties/borderWidths';
import { _sizes } from '../properties/sizes';
import { buttons, borderCurved, borderRounded } from '../variants/buttons';
import { progress, progressWrapper } from '../variants/progress';

export const radii = {
  ProgressRadiusRounded: 0,
  ProgressbarRadius: '20px'
};
export const sizes = {
  ProgressbarHeight: '24px',
  ProgressbarWidth: _sizes.size_15pc,
  ProgressbarValue: _sizes.size_100pc,
  container_max_width: '1140px',
  container_min_width: '960px'
};
export const space = {
  BeforeTopValue: '20px',
  BeforeLeftValue: '50%',
  PbPadding: _space.spacerMid,
  PbMargin: _space.spacerMid,
  statuspadding: '25px'
};
export const fontSizes = {
  StatusFontSize: _fontSizes.fontSizeBase,
  collapseHeadingIconFontSize: _fontSizes.fontsize_tiny
};
export const colors = {
  BgProgressbar: _colors.primaryLighter,
  SteperBroderColor: _colors.primary,
  BgColorProgressStatusText: _colors.white,
  BgcolorCounter: _colors.grayLight,
  StepDoneColor: _colors.dark,
  StepDoneBgColor: _colors.primary,
  StepDoneBorderColor: _colors.primary,
  StepDoneHoverBgColor: _colors.primary,
  StepDoneHoverBorderColor: _colors.primary
};
export default {
  fontSizes,
  colors,
  space,
  radii,
  sizes,
  buttons,
  borderCurved,
  borderRounded,
  progress,
  progressWrapper
};
