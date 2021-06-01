import { lighten } from '../../utils/lighten';
import { colors } from '../properties/colors';
const buttonBorder = '2px solid transparent';
export const borderCurved = '10px';
export const borderRounded = '50px';
const padding = '1rem 2rem';
const getBorder = color => {
  return `2px solid ${color}`;
};

export const table = {
  primary: {
    color: colors.black,
    backgroundColor: colors.primary,
    // '&:hover': {
    //   color: colors.white
    // },
    // '&:focus': {
    //   color: colors.white
    // }
  },
  secondary: {
    color: colors.white,
    backgroundColor: colors.secondary,
    '&:hover': {
      backgroundColor: colors.secondaryHover
    },
    '&:focus': {
      backgroundColor: colors.secondaryHover
    }
  },
  success: {
    color: colors.white,
    backgroundColor: colors.success,
    '&:hover': {
      backgroundColor: colors.successHover
    },
    '&:focus': {
      backgroundColor: colors.successHover
    }
  },
  danger: {
    color: colors.white,
    backgroundColor: colors.danger,
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
    cursor: 'default',
    border: getBorder(colors.grayHover)
  },
  clearPrimary: {
    color: colors.primary,
    backgroundColor: colors.transparent,
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
    cursor: 'default'
  },
  iconBtn: {
    color: colors.black,
    backgroundColor: colors.white,
    padding: '0.5rem 0.5rem',
  },
  link: {
    color: colors.black,
    backgroundColor: colors.white,
  },
  filledGoogleRed: {
    color: colors.white,
    backgroundColor: colors.googleRed,
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
