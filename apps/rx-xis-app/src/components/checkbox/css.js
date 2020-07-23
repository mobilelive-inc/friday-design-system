import styled from 'styled-components';
import {
  border,
  compose,
  color,
  flexbox,
  layout,
  space,
  typography,
  variant,
  position,
} from 'styled-system';
import PropTypes from 'prop-types';

export const Flex = styled('div')({
  display: 'flex',
  verticalAlign: 'middle',
});

// Hide checkbox visually but remain accessible to screen readers.
export const Input = styled.input.attrs({ type: 'checkbox' })(
  {
    boxSizing: 'border-box',
    opacity: 0,
    cursor: 'pointer',
    top:"0",
    bottom:"0",
    left:"0",
    right:"0",
    p:"0",
    overflow:"hidden",
    border:"0",
    width:"100%",
    height:"100%",
    position:"absolute"
  },
  compose(
    border,
    layout,
    position,
  ),
);


const getDerivedStyles = (props) => { 
  const {
    isFilled, theme:{
      colors, borderCurved, borderRounded
    }, error, borderType
  } = props;
  const bg = error ? colors.error : colors[props.bg];
  const styles = {
    boxSizing: 'border-box',
    p:"0",
    width:"28px",
    height:"28px",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    cursor: 'pointer',
    boxAlign: 'center',
    boxPack: 'center',
    outline: 0,
    transition: 'border-color 0.1s linear 0s, background-color 0.1s linear 0s',
  }
  if(isFilled){
    styles.backgroundColor = `${bg} !important`
  }
  else{
    styles.border = `2px solid ${bg} !important`
    styles.backgroundColor = `${colors.white} !important`
  }
  if(borderType === "rounded"){
    styles.borderRadius = borderRounded;
  }
  else if(borderType === "curved"){
    styles.borderRadius = borderCurved
  }
  return styles;
}

export const InputContainer = styled('div')(
  props => getDerivedStyles(props),

  compose(
    flexbox,
    position,
    border,
    layout,
    color,
    // variant({ scale: 'checkBoxes' }),
  ),
);

InputContainer.defaultProps = {
  variant: 'unchecked',
};

InputContainer.propTypes = {
  variant: PropTypes.oneOf(['unchecked', 'checked', 'disabled']),
};
