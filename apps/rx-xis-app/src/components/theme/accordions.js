import { lighten } from '../utils/lighten';
import { colors } from './colors';

const buttonBorder = '2px solid transparent';
export const borderCurved = '10px';
export const borderRounded = '50px';
const padding = '1rem 2rem';
const getBorder = color => {
  return `2px solid ${color}`;
};

export const accordions = {
  primary: {
    backgroundColor: colors.primary,
    '&:hover': {
      backgroundColor: lighten(colors.primary, 10)
    }
  },
  secondary: {
    backgroundColor: colors.secondary,
    '&:hover': {
      backgroundColor: lighten(colors.secondary, 10)
    }
  },
  success: {
    backgroundColor: colors.success,
    '&:hover': {
      backgroundColor: lighten(colors.success, 10)
    }
  },
  danger: {
    backgroundColor: colors.danger,
    '&:hover': {
      backgroundColor: lighten(colors.danger, 10)
    }
  }
};
