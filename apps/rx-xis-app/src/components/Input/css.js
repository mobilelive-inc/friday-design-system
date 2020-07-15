import styled from 'styled-components';
import {
  compose,
  border,
  layout,
  variant,
  space,
  typography,
  color,
} from 'styled-system';
import { capitalizeFirstLetter } from '../../utils/utils';

const getDerivedProps = (props) => {
  const {
    theme: {
      colors: {
        red, black
      }, borderCurved, borderRounded,
    },
    error,
    borderType,
    withBottomBorderOnly
  } = props;
  // baseline styles
  
  const styles = {
    color: error ? red : black,
    width: '100%',
    boxSizing: 'border-box',
    padding: '1em 4em 0.2em 0',
    letterSpacing: '0.125em',
    lineHeight: '28px',
    fontSize: '1rem',
    fontWeight: 500,
  };
  // conditional styles
  if(!withBottomBorderOnly && borderType && borderType === 'curved'){
    styles.borderRadius = borderCurved
  }
  if(!withBottomBorderOnly && borderType && borderType === 'rounded'){
    styles.borderRadius = borderRounded
  }
  if(withBottomBorderOnly){
    styles.borderColor= 'transparent';
    styles.borderBottom = `0.125em solid ${error ? red : black}`
  }
  else{
    styles.border = `0.125em solid ${error ? red : black}`
  }
  return styles;
};

export const Input = styled.input(
  (props) => getDerivedProps(props),
  compose(border, layout, space, typography, color)
);
