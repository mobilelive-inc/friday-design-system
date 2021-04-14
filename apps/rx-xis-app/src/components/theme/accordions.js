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
  }
};
