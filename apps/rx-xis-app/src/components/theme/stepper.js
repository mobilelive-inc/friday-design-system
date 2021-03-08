import { lighten } from '../utils/lighten';
import { colors } from './colors';

export const stepper = {
  primary: {
    opacity: 1,
    backgroundColor: colors.primary
  }
};

export const stepperWrapper = {
  primary: {
    opacity: 1,
    backgroundColor: lighten(colors.primary, -95)
  }
};
