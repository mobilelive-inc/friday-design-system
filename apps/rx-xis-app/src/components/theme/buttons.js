import { lighten } from '../utils/lighten';
import { colors } from './colors';

const buttonBorder = '2px solid transparent';
export const borderCurved = '10px';
export const borderRounded = '50px';
const padding = '1rem 2rem';
const getBorder = color => {
  return `2px solid ${color}`;
};
export const buttons = {
  primary: {
    color: colors.black,
    backgroundColor: colors.primary,
    padding,
    border: buttonBorder,
    '&:hover': {
      color: colors.white
    },
    '&:focus': {
      color: colors.white
    }
  },
  secondary: {
    color: colors.white,
    backgroundColor: colors.grayDark,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: lighten(colors.grayDark, -20)
    },
    '&:focus': {
      backgroundColor: lighten(colors.grayDark, -20)
    }
  },
  success: {
    color: colors.white,
    backgroundColor: colors.success,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: lighten(colors.success, -20)
    },
    '&:focus': {
      backgroundColor: lighten(colors.success, -20)
    }
  },
  danger: {
    color: colors.white,
    backgroundColor: colors.danger,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: lighten(colors.danger, -20)
    },
    '&:focus': {
      backgroundColor: lighten(colors.danger, -20)
    }
  },
  warning: {
    color: colors.black,
    backgroundColor: colors.warning,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: lighten(colors.warning, -5)
    },
    '&:focus': {
      backgroundColor: lighten(colors.warning, -5)
    }
  },
  info: {
    color: colors.black,
    backgroundColor: colors.info,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: lighten(colors.info, -20)
    },
    '&:focus': {
      backgroundColor: lighten(colors.info, -20)
    }
  },
  light: {
    color: colors.black,
    backgroundColor: colors.light,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: lighten(colors.light, -20)
    },
    '&:focus': {
      backgroundColor: lighten(colors.light, -20)
    }
  },
  dark: {
    color: colors.white,
    backgroundColor: colors.black,
    padding,
    border: buttonBorder,
    '&:hover': {
      color: colors.black,
      backgroundColor: colors.light
    },
    '&:focus': {
      color: colors.black,
      backgroundColor: colors.light
    }
  },
  disabled: {
    cursor: 'default',
    color: colors.white,
    backgroundColor: colors.grayDark,
    padding: padding,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.grayDark
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.grayDark
    }
  },
  outlinePrimary: {
    color: colors.primary,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.primary),
    '&:hover': {
      backgroundColor: colors.primary,
      color: colors.black
    },
    '&:focus': {
      backgroundColor: colors.primary,
      color: colors.black
    }
  },
  outlineSecondary: {
    color: colors.secondary,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.secondary),
    '&:hover': {
      backgroundColor: colors.secondary,
      color: colors.white
    },
    '&:focus': {
      backgroundColor: colors.secondary,
      color: colors.white
    }
  },
  outlineSuccess: {
    color: colors.success,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.success),
    '&:hover': {
      backgroundColor: colors.success,
      color: colors.white
    },
    '&:focus': {
      backgroundColor: colors.success,
      color: colors.white
    }
  },
  outlineDanger: {
    color: colors.danger,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.danger),
    '&:hover': {
      backgroundColor: colors.danger,
      color: colors.white
    },
    '&:focus': {
      backgroundColor: colors.danger,
      color: colors.white
    }
  },
  outlineInfo: {
    color: colors.info,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.info),
    '&:hover': {
      backgroundColor: colors.info,
      color: colors.white
    },
    '&:focus': {
      backgroundColor: colors.info,
      color: colors.white
    }
  },
  outlineWarning: {
    color: colors.warning,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.warning),
    '&:hover': {
      backgroundColor: colors.warning,
      color: colors.black
    },
    '&:focus': {
      backgroundColor: colors.warning,
      color: colors.black
    }
  },
  outlineLight: {
    color: colors.light,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.light),
    '&:hover': {
      backgroundColor: colors.light,
      color: colors.black
    },
    '&:focus': {
      backgroundColor: colors.light,
      color: colors.black
    }
  },
  outlineDark: {
    color: colors.black,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.black),
    '&:hover': {
      backgroundColor: colors.black,
      color: colors.white
    },
    '&:focus': {
      backgroundColor: colors.black,
      color: colors.white
    }
  },
  outlineDisabled: {
    color: colors.grayHover,
    backgroundColor: colors.white,
    padding,
    cursor: 'default',
    border: getBorder(colors.grayHover)
  },
  clearPrimary: {
    color: colors.primary,
    backgroundColor: colors.transparent,
    padding,
    border: 'none',
    '&:hover': {
      backgroundColor: colors.primary,
      color: colors.white
    },
    '&:focus': {
      backgroundColor: colors.primary,
      color: colors.white
    }
  },
  clearSecondary: {
    color: colors.secondary,
    backgroundColor: colors.transparent,
    padding,
    border: 'none',
    '&:hover': {
      backgroundColor: colors.secondary,
      color: colors.white
    },
    '&:focus': {
      backgroundColor: colors.secondary,
      color: colors.white
    }
  },
  clearSuccess: {
    color: colors.success,
    backgroundColor: colors.transparent,
    padding,
    border: 'none',
    '&:hover': {
      backgroundColor: colors.success,
      color: colors.white
    },
    '&:focus': {
      backgroundColor: colors.success,
      color: colors.white
    }
  },
  clearDanger: {
    color: colors.danger,
    backgroundColor: colors.transparent,
    padding,
    border: 'none',
    '&:hover': {
      backgroundColor: colors.danger,
      color: colors.white
    },
    '&:focus': {
      backgroundColor: colors.danger,
      color: colors.white
    }
  },
  clearWarning: {
    color: colors.warning,
    backgroundColor: colors.transparent,
    padding,
    border: 'none',
    '&:hover': {
      backgroundColor: colors.warning,
      color: colors.white
    },
    '&:focus': {
      backgroundColor: colors.warning,
      color: colors.white
    }
  },
  clearInfo: {
    color: colors.info,
    backgroundColor: colors.transparent,
    padding,
    border: 'none',
    '&:hover': {
      backgroundColor: colors.info,
      color: colors.white
    },
    '&:focus': {
      backgroundColor: colors.info,
      color: colors.white
    }
  },
  clearLight: {
    color: colors.grayHover,
    backgroundColor: colors.transparent,
    padding,
    border: 'none',
    '&:hover': {
      backgroundColor: colors.light,
      color: colors.white
    },
    '&:focus': {
      backgroundColor: colors.light,
      color: colors.white
    }
  },
  clearDark: {
    color: colors.black,
    backgroundColor: colors.transparent,
    padding,
    border: 'none',
    '&:hover': {
      backgroundColor: colors.grayLighter
    },
    '&:focus': {
      backgroundColor: colors.grayLighter
    }
  },
  clearDisabled: {
    color: colors.grayHover,
    backgroundColor: colors.transparent,
    padding,
    border: 'none',
    cursor: 'default'
  },
  iconBtn: {
    color: colors.black,
    backgroundColor: colors.white,
    padding: '0.5rem 0.5rem',
    border: buttonBorder
  },
  link: {
    color: colors.black,
    backgroundColor: colors.white,
    border: buttonBorder
  },
  filledGoogleRed: {
    color: colors.white,
    backgroundColor: colors.googleRed,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: colors.googleRedHover
    },
    '&:focus': {
      backgroundColor: colors.googleRedHover
    }
  },
  outlineGoogleRed: {
    color: colors.googleRed,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.googleRed),
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.googleRedHover
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.googleRedHover
    }
  },
  filledGoogleBlue: {
    color: colors.white,
    backgroundColor: colors.googleBlue,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: colors.googleBlueHover
    },
    '&:focus': {
      backgroundColor: colors.googleBlueHover
    }
  },
  outlineGoogleBlue: {
    color: colors.googleBlue,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.googleBlue),
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.googleBlueHover
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.googleBlueHover
    }
  },
  filledFacebook: {
    color: colors.white,
    backgroundColor: colors.facebook,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: colors.facebookHover
    },
    '&:focus': {
      backgroundColor: colors.facebookHover
    }
  },
  outlineFacebook: {
    color: colors.facebook,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.facebook),
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.facebookHover
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.facebookHover
    }
  },
  filledTwitter: {
    color: colors.white,
    backgroundColor: colors.twitter,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: colors.twitterHover
    },
    '&:focus': {
      backgroundColor: colors.twitterHover
    }
  },
  outlineTwitter: {
    color: colors.twitter,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.twitter),
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.twitterHover
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.twitterHover
    }
  },
  filledLinkedIn: {
    color: colors.white,
    backgroundColor: colors.linkedin,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: colors.linkedinHover
    },
    '&:focus': {
      backgroundColor: colors.linkedinHover
    }
  },
  outlineLinkedIn: {
    color: colors.linkedin,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.linkedin),
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.linkedinHover
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.linkedinHover
    }
  },
  filledInstagram: {
    color: colors.white,
    backgroundColor: colors.instagram,
    padding,
    border: buttonBorder,
    '&:hover': {
      backgroundColor: colors.instagramHover
    },
    '&:focus': {
      backgroundColor: colors.instagramHover
    }
  },
  outlineInstagram: {
    color: colors.instagram,
    backgroundColor: colors.white,
    padding,
    border: getBorder(colors.instagram),
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.instagramHover
    },
    '&:focus': {
      color: colors.white,
      backgroundColor: colors.instagramHover
    }
  }
};
