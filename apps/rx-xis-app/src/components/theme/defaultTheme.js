import { colors } from './colors';
import { buttons, borderCurved, borderRounded } from './buttons';
import {
    iconMarginLeft,
    iconMarginRight,
    micro,
    tiny,
    small,
    mid,
    large,
    xLarge
} from './spacing';

// Typography
const fonts = {
    Gotham:
        "Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif"
};

export const font = fonts.Gotham;
export const fontFamilies = fonts;

export const fontSizes = {
    fontsize_5x_tiny: '0.625rem',
    fontsize_4x_tiny: '0.75rem',
    fontsize_3x_tiny: '0.875rem',
    fontsize_2x_tiny: '1rem',
    fontsize_1x_tiny: '1.125rem',
    fontsize_tiny: '1.25rem',
    fontsize_5x_small: '1.375rem',
    fontsize_4x_small: '1.5rem',
    fontsize_3x_small: '1.75rem',
    fontsize_2x_small: '2rem',
    fontsize_1x_small: '2.25rem',
    fontsize_small: '2.5rem',
    fontsize_normal: '2.75rem',
    fontsize_large: '3rem',
    fontsize_1x_large: '3.25rem',
    fontsize_2x_large: '3.5rem',
    fontsize_3x_large: '3.75rem',
    fontsize_4x_large: '4rem',
    fontsize_5x_large: '4.25rem',
    fontsize_h1: '4.5rem',
    fontsize_h2: '4.75rem',
    fontsize_h3: '5rem',
    fontsize_h4: '5.25rem',
    fontsize_h5: '5.5rem',
    fontsize_h6: '5.75rem',
    fontsize_h7: '6rem'
};

export const fontWeights = {
    fontweight_tiny: 300,
    fontweight_small: 400,
    fontweight_normal: 500,
    fontweight_medium: 600,
    fontweight_large: 700
};

export const lineHeights = {
    lineheight_3x_tiny: '0.875rem',
    lineheight_2x_tiny: '1rem',
    lineheight_1x_tiny: '1.125rem',
    lineheight_tiny: '1.2rem',
    lineheight_3x_small: '1.25rem',
    lineheight_2x_small: '1.5rem',
    lineheight_1x_small: '1.75rem',
    lineheight_small: '2.25rem',
    lineheight_normal: '2.50rem',
    lineheight_large: '3.5rem',
    lineheight_1x_large: '4.5rem',
    lineheight_2x_large: '3rem',
    lineheight_3x_large: '2rem'
};

export const letterSpacings = {
    letterspacing_tiny: 1.6,
    letterspacing_small: 1.2,
    letterspacing_normal: -0.2,
    letterspacing_medium: 1,
    letterspacing_large: 2.0
};

export const borderWidths = {
    read: '0',
    hover: '1px',
    unread: '4px'
};

export const breakpoints = {
    breakpoint_tiny: '0',
    breakpoint_small: '576px',
    breakpoint_normal: '768px',
    breakpoint_medium: '992px',
    breakpoint_large: '1200px'
};

export const mediaqueryBreakpoints = {
    xs: breakpoints.breakpoint_tiny,
    sm: breakpoints.breakpoint_small,
    md: breakpoints.breakpoint_small,
    lg: breakpoints.breakpoint_small,
    xl: breakpoints.breakpoint_small
};

//for hight width
export const sizes = {
    size_0pc: '0', // 0
    size_10pc: '10%', // 1
    size_15pc: '15%', // 2
    size_20pc: '20%', // 3
    size_25pc: '25%', // 4
    size_30pc: '30%', // 5
    size_35pc: '35%', // 6
    size_40pc: '40%', // 7
    size_45pc: '45%', // 8
    size_50pc: '50%', // 9
    size_55pc: '55%', // 10
    size_60pc: '60%', // 11
    size_65pc: '65%', // 12
    size_70pc: '70%', // 13
    size_75pc: '75%', // 14
    size_80pc: '80%', // 15
    size_85pc: '85%', // 16
    size_90pc: '90%', // 17
    size_95pc: '95%', // 18
    size_100pc: '100%', // 19
    size_neg_1rem: '-1rem', // 36
    size_neg_0_75rem: '-0.75rem', // 35
    size_neg_0_5rem: '-0.5rem', // 34
    size_neg_0_375rem: '-0.375rem', // 33
    size_neg_0_25rem: '-0.25rem', // 32
    size_neg_0_125rem: '-0.125rem', // 31
    size_auto: 'auto', // 30
    size_3_75rem: '3.75rem', // 20
    size_4rem: '4rem', // 21
    size_4_25rem: '4.25rem', // 22
    size_4_5rem: '4.5rem', // 23
    size_4_75rem: '4.75rem', // 24
    size_5rem: '5rem', // 25
    size_5_25rem: '5.25rem', // 26
    size_5_5rem: '5.5rem', // 27
    size_5_75rem: '5.75rem', // 28
    size_6rem: '6rem', // 29
    size_6_25rem: '6.25rem', // 37
    size_5_375rem: '5.375rem',//38
    size_3_125rem: '3.125rem',// 39
    size_45_75rem: '45.75rem'//40
};

// for border-radius
export const radii = {
    radius_0: '0',
    radius_0_063rem: '0.063rem',
    radius_0_125rem: '0.125rem',
    radius_0_188rem: '0.188rem',
    radius_0_25rem: '0.25rem',
    radius_0_313rem: '0.313rem',
    radius_0_375rem: '0.375rem',
    radius_0_438rem: '0.438rem',
    radius_0_5rem: '0.5rem',
    radius_0_563rem: '0.563rem',
    radius_0_625rem: '0.625rem',
}

export const space = {
    space_negative: '-0.125rem',
    space_1x_negative: '-0.25rem',
    space_2x_negative: '-0.375rem',
    space_3x_negative: '-0.5rem',
    space_4x_negative: '-0.75rem',
    space_5x_negative: '-1rem',
    space_auto: 'auto',
    space_6x_tiny: '0',
    space_5x_tiny: '0.25rem',
    space_4x_tiny: '0.375rem',
    space_3x_tiny: '0.5rem',
    space_2x_tiny: '0.625rem',
    space_1x_tiny: '0.75rem',
    space_tiny: '0.875rem',
    space_6x_small: '1rem',
    space_5x_small: '1.125rem',
    space_4x_small: '1.25rem',
    space_3x_small: '1.375rem',
    space_2x_small: '1.5rem',
    space_1x_small: '1.75rem',
    space_small: '2rem',
    space_normal: '2.25rem',
    space_medium: '2.5rem',
    space_big: '2.75rem',
    space_1x_big: '3rem',
    space_2x_big: '3.25rem',
    space_3x_big: '3.5rem',
    space_4x_big: '3.75rem',
    space_5x_big: '4rem',
    space_6x_big: '4.25rem',
    space_large: '4.5rem',
    space_1x_large: '4.75rem',
    space_2x_large: '5rem',
    space_3x_large: '5.25rem',
    space_4x_large: '5.5rem',
    space_5x_large: '5.75rem',
    space_6x_large: '6rem',
    space_huge: '6.25rem'
};

export const radius = 4;


export const zIndices = {
    zindexDropdown: 1000,
    zindexSticky: 1020,
    zindexFixed: 1030,
    zindexModalBackdrop: 1040,
    zindexModal: 1050,
    zindexPopover: 1060,
    zindexTooltip: 1070,
    zindexPlanHeader: 0,
    zindexPlanContent: -1
};

// variants definitions

export const typography = {
    H1: {
        fontSize: fontSizes.fontsize_small,
        fontWeight: fontWeights.fontweight_normal,
        lineHeight: lineHeights.lineheight_tiny
    },
    H2: {
        fontSize: fontSizes.fontsize_2x_small,
        fontWeight: fontWeights.fontweight_normal,
        lineHeight: lineHeights.lineheight_tiny
    },
    H3: {
        fontSize: fontSizes.fontsize_3x_small,
        fontWeight: fontWeights.fontweight_normal,
        lineHeight: lineHeights.lineheight_tiny
    },
    H4: {
        fontSize: fontSizes.fontsize_4x_small,
        fontWeight: fontWeights.fontweight_normal,
        lineHeight: lineHeights.lineheight_tiny
    },
    H5: {
        fontSize: fontSizes.fontsize_tiny,
        fontWeight: fontWeights.fontweight_normal,
        lineHeight: lineHeights.lineheight_tiny
    },
    H6: {
        fontSize: fontSizes.fontsize_2x_tiny,
        fontWeight: fontWeights.fontweight_normal,
        lineHeight: lineHeights.lineheight_tiny
    }
};

const opacity = 0.6;

export default {
    breakpoints,
    buttons,
    typography,
    borderCurved,
    colors,
    font,
    fontFamilies,
    fontSizes,
    fontWeights,
    iconMarginLeft,
    iconMarginRight,
    lineHeights,
    letterSpacings,
    radius,
    borderRounded,
    space,
    opacity,
    zIndices,
    typography,
    micro,
    tiny,
    small,
    mid,
    large,
    xLarge
};
