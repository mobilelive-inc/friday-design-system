import { fontSizes } from '../properties/fontSizes'
import { colors } from '../properties/colors'
import { space } from '../properties/space'

export const fontSizes = {
    collapseHeadingTextFontSize: fontSizes.fontsize_2x_tiny,
    collapseHeadingIconFontSize: fontSizes.fontsize_tiny,
}

export const colors = {
    collapseHeadingTextColor: colors.black,
    collapseHeadingIconColor: colors.black,
}

export const space = {
    collapseHeadingPadding: space.space_6x_small + ' ' + space.space_small,
    collapseContentPadding: space.space_small + ' ' + space.space_6x_small,
}