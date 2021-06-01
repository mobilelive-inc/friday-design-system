import { _fontSizes } from '../properties/fontSizes'
import { _colors } from '../properties/colors'
import { _space } from '../properties/space'
import { _radii } from '../properties/radius'
import { _borderWidths } from '../properties/borderWidths'
import {table} from '../variants/table'

export const fontSizes = {
   TabelTextFontSize: _fontSizes.fontsize_2x_tiny,
   TabelIconFontSize: _fontSizes.fontsize_tiny,
}

// Tables Generic Styles

export const colors = {
    TabelBodyBgColor: _colors.white,
    TabelBodyColor: _colors.dark,
    TabelBodyHeadTextColor:_colors.dark,
    TabelBodyBorderColor: _colors.graylight,
    TabelBodyhoverTextColor: _colors.dark,
    TabelBodyhoverBgColor: _colors.graylight,
    TabelBodydarkhHoverTextColor: _colors.dark,
    TabelBodydarkHoverBgColor: _colors.graylight,
    TabelBodyrowBorderColor: _colors.graylight,

    TabelBodydarkBgColor: _colors.dark,
    TabelBodyDarkTextColor: _colors.graylight,
    TabelBodydarkborderColor: _colors.graylight,
  
    TabelBodyHeadDarkBgColor: _colors.dark,
    TabelBodyHeaddarkTextColor: _colors.graylight,
  
    TabelBodylightHeadTextColor: _colors.dark,
    TabelBodylightHeadbgcolor: _colors.graylight,
  
    StripeTabelBodylightOddBgColor: _colors.graylight,
    StripeTabelBodylightEvenBgColor: _colors.graylight,
}

export const space = {
    TabelBodycolumspadding: '0.5rem 1rem',
    TabelBodyborderwidth: 0,
    TabelBodycolumnsborderwidth: 0,
    TabelBodythborderwidth: '0 0 2px',
    TabelBodytdborderwidth: '0 0 1px',
    TabelBodyrowpaddingsm: '0',
    TabelBodyrowborderwidth:' 0 0 2px',
   
    TabelBodyborderedwidth: '1px 1px 1px 1px',
    TabelBodyborderedthborderwidth: '1px 1px 1px 1px',
    TabelBodyborderedtdborderwidth: '1px 1px 1px 1px',

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
    borderWidths,
    table
}
