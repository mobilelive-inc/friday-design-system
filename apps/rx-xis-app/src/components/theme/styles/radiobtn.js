import { _fontSizes } from '../properties/fontSizes'
import { _colors } from '../properties/colors'
import { _space } from '../properties/space'
import { _radii } from '../properties/radius'
import { _borderWidths } from '../properties/borderWidths'

export const fontSizes = {
    RadioBtnTextFontSize: _fontSizes.fontsize_2x_tiny,
    RadioBtnIconFontSize: _fontSizes.fontsize_tiny,
}

export const colors = {
    RadioBtnTextColor: _colors.black,
    RadioBtnIconColor: _colors.black,
    RadioBtnBorderColor: _colors.grayLight,
    collapseHeaderBackground: _colors.primary,
    collapseHeaderBackgroundHover: _colors.primaryHover
}

export const space = {
    RadioBtnPaddingX: _space.globalSpacer,
    RadioBtnPaddingY: _space.spacerMid,
    collapseContentPaddingX: _space.spacerMid,
    collapseContentPaddingY: _space.globalSpacer,
    RadioBtnIconPaddingX: _space.space_5x_tiny,
    RadioBtnIconPaddingY: _space.space_5x_tiny,
}

export const radii = {
    collapseBordeRadius: _radii.radius_0_063rem
}

export const borderWidths = {
    collapseBorderWidth: _borderWidths.borderWidth4
}

export default {
    fontSizes,
    colors,
    space,
    radii,
    borderWidths
}