import { lighten } from '../../utils/lighten';
import { colors } from './colors'

const buttonBorder = '2px solid transparent';
const getBorder = (color) => {
  return `2px solid ${color}`
}
export const buttons = {
  primary: {
    color: colors.black,
    backgroundColor: colors.primary,
    padding: '1em 2em',
    border: buttonBorder,
    '&:hover': {
      color: colors.white
    }
  },
  secondary: {
    color: colors.white,
    backgroundColor: colors.grayDark,
    padding: '1em 2em',
    border: buttonBorder,
    '&:hover': {
      backgroundColor: lighten(colors.grayDark, -20)
    }
  },
  success: {
    color: colors.white,
    backgroundColor: colors.success,
    padding: '1em 2em',
    border: buttonBorder,
    '&:hover': {
      backgroundColor: lighten(colors.success, -20)
    }
  },
  danger: {
    color: colors.white,
    backgroundColor: colors.danger,
    padding: '1em 2em',
    border: buttonBorder,
    '&:hover': {
      backgroundColor: lighten(colors.danger, -20)
    }
  },
  warning: {
    color: colors.black,
    backgroundColor: colors.warning,
    padding: '1em 2em',
    border: buttonBorder,
    '&:hover': {
      backgroundColor: lighten(colors.warning, -5)
    }
  },
  info: {
    color: colors.black,
    backgroundColor: colors.info,
    padding: '1em 2em',
    border: buttonBorder,
    '&:hover': {
      backgroundColor: lighten(colors.info, -20)
    }
  },
  light: {
    color: colors.black,
    backgroundColor: colors.light,
    padding: '1em 2em',
    border: buttonBorder,
    '&:hover': {
      backgroundColor: lighten(colors.light, -20)
    }
  },
  outlinePrimary: {
    color: colors.primary,
    backgroundColor: colors.white,
    padding: '1em 2em',
    border: getBorder(colors.primary),
    '&:hover': {
      backgroundColor: colors.primary,
      color: colors.black
    }
  },
  outlineSecondary: {
    color: colors.secondary,
    backgroundColor: colors.white,
    padding: '1em 2em',
    border: getBorder(colors.secondary),
    '&:hover': {
      backgroundColor: colors.secondary,
      color: colors.white
    }
  },
  outlineSuccess: {
    color: colors.success,
    backgroundColor: colors.white,
    padding: '1em 2em',
    border: getBorder(colors.success),
    '&:hover': {
      backgroundColor: colors.success,
      color: colors.white
    }
  },
  outlineDanger: {
    color: colors.danger,
    backgroundColor: colors.white,
    padding: '1em 2em',
    border: getBorder(colors.danger),
    '&:hover': {
      backgroundColor: colors.danger,
      color: colors.white
    }
  },
  outlineInfo: {
    color: colors.info,
    backgroundColor: colors.white,
    padding: '1em 2em',
    border: getBorder(colors.info),
    '&:hover': {
      backgroundColor: colors.info,
      color: colors.white
    }
  },
  outlineWarning: {
    color: colors.warning,
    backgroundColor: colors.white,
    padding: '1em 2em',
    border: getBorder(colors.warning),
    '&:hover': {
      backgroundColor: colors.warning,
      color: colors.black
    }
  },
  outlineLight: {
    color: colors.light,
    backgroundColor: colors.white,
    padding: '1em 2em',
    border: getBorder(colors.light),
    '&:hover': {
      backgroundColor: colors.light,
      color: colors.black
    }
  },
  outlineDark: {
    color: colors.black,
    backgroundColor: colors.white,
    padding: '1em 2em',
    border: getBorder(colors.black),
    '&:hover': {
      backgroundColor: colors.black,
      color: colors.white
    }
  }
};