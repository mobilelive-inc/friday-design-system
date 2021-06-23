import { lighten } from '../../utils/lighten';
import { colors } from '../properties/colors';

const buttonBorder = '2px solid transparent';
export const borderCurved = '10px';
export const borderRounded = '50px';
const padding = '1rem 2rem';
const getBorder = color => {
  return `2px solid ${color}`;
};

export const unVisitedStep = {
  primary: {
    borderColor: colors.primary,
    color: colors.primary,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.primary
    }
  },
  secondary: {
    borderColor: colors.secondary,
    color: colors.secondary,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.secondary
    }
  },
  success: {
    borderColor: colors.success,
    color: colors.success,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.success
    }
  },
  danger: {
    borderColor: colors.danger,
    color: colors.danger,
    '&:hover': {
      color: colors.white,
      backgroundColor: colors.danger
    }
  }
};

export const visitedStep = {
  primary: {
    backgroundColor: colors.primary,
    '&:hover': {
      color: colors.white
    }
  },
  secondary: {
    backgroundColor: colors.secondary,
    '&:hover': {
      color: colors.white
    }
  },
  success: {
    backgroundColor: colors.success,
    '&:hover': {
      color: colors.white
    }
  },
  danger: {
    backgroundColor: colors.danger,
    '&:hover': {
      color: colors.white
    }
  }
};

export const progressBar = {
  primary: {
    backgroundColor: colors.primary
  },
  secondary: {
    backgroundColor: colors.secondary
  },
  success: {
    backgroundColor: colors.success
  },
  danger: {
    backgroundColor: colors.danger
  }
};
