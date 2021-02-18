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

export const fontSizes = [
  '0.625rem', // 0
  '0.75rem', // 1
  '0.875rem', // 2
  '1rem', // 3
  '1.125rem', // 4
  '1.25rem', // 5
  '1.375rem', // 6
  '1.5rem', // 7
  '1.75rem', // 8
  '2rem', // 9
  '2.25rem', // 10
  '2.5rem', // 11
  '2.75rem', // 12
  '3rem', // 13
  '3.25rem', // 14
  '3.5rem', // 15
  '3.75rem', // 16
  '4rem', // 17
  '4.25rem', // 18
  '4.5rem', // 19
  '4.75rem', // 20
  '5rem', // 21
  '5.25rem', // 22
  '5.5rem', // 23
  '5.75rem', // 24
  '6rem' // 25
];

export const fontWeights = [
  300, // 0
  400, // 1
  500, // 2
  600 // 3
];

export const lineHeights = [
  '0.875rem', // 0
  '1rem', // 1
  '1.125rem', // 2
  '1.2rem', // 3
  '1.25rem', // 4
  '1.5rem', // 5
  '1.75rem', // 6
  '2.25rem', // 7
  '2.50rem', // 8
  '3.5rem', // 9
  '4.5rem', // 10
  '3rem', // 11
  '2rem' // 12
];

export const letterSpacings = [
  1.6, // 0
  1.2, // 1
  -0.2, // 2
  1, // 3
  2.0 // 4
];

export const borderWidths = {
  read: '0', // 0
  hover: '1px', // 1
  unread: '4px' // 2
};

export const breakpoints = [
  '0', // 0
  '576px', // 1
  '768px', // 2
  '992px', // 3
  '1200px' // 4
];
export const mediaqueryBreakpoints = {
  xs: breakpoints[0],
  sm: breakpoints[1],
  md: breakpoints[2],
  lg: breakpoints[3],
  xl: breakpoints[4]
};
export const space = [
  '0', // 0
  '0.25rem', // 1
  '0.375rem', // 2
  '0.5rem', // 3
  '0.625rem', // 4
  '0.75rem', // 5
  '0.875rem', // 6
  '1rem', // 7
  '1.125rem', // 8
  '1.25rem', // 9
  '1.375rem', // 10
  '1.5rem', // 11
  '1.75rem', // 12
  '2rem', // 13
  '2.25rem', // 14
  '2.5rem', // 15
  '2.75rem', // 16
  '3rem', // 17
  '3.25rem', // 18
  '3.5rem', // 19
  '3.75rem', // 20
  '4rem', // 21
  '4.25rem', // 22
  '4.5rem', // 23
  '4.75rem', // 24
  '5rem', // 25
  '5.25rem', // 26
  '5.5rem', // 27
  '5.75rem', // 28
  '6rem', // 29
  'auto', // 30
  '-0.125rem', // 31
  '-0.25rem', // 32
  '-0.375rem', // 33
  '-0.5rem', // 34
  '-0.75rem', // 35
  '-1rem', // 36
  '6.25rem' // 37
];

export const radius = 4;

const zindexDropdown = 1000;
const zindexSticky = 1020;
const zindexFixed = 1030;
const zindexModalBackdrop = 1040;
const zindexModal = 1050;
const zindexPopover = 1060;
const zindexTooltip = 1070;
const zindexPlanHeader = 0;
const zindexPlanContent = -1;

export const zIndices = [
  zindexDropdown, // 0
  zindexSticky, // 1
  zindexFixed, // 2
  zindexModalBackdrop, // 3
  zindexModal, // 4
  zindexPopover, // 5
  zindexTooltip, // 6
  zindexPlanHeader, // 7
  zindexPlanContent // 8
];

// variants definitions

export const typography = {
  H1: {
    fontSize: fontSizes[11],
    fontWeight: fontWeights[2],
    lineHeight: lineHeights[3]
  },
  H2: {
    fontSize: fontSizes[9],
    fontWeight: fontWeights[2],
    lineHeight: lineHeights[3]
  },
  H3: {
    fontSize: fontSizes[8],
    fontWeight: fontWeights[2],
    lineHeight: lineHeights[3]
  },
  H4: {
    fontSize: fontSizes[7],
    fontWeight: fontWeights[2],
    lineHeight: lineHeights[3]
  },
  H5: {
    fontSize: fontSizes[5],
    fontWeight: fontWeights[2],
    lineHeight: lineHeights[3]
  },
  H6: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[2],
    lineHeight: lineHeights[3]
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
