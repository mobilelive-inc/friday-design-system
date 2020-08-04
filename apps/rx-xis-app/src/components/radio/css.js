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
export const Input = styled.input.attrs({ type: 'radio' })(
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
    isFilled,bg,color, theme:{
      colors, borderCurved, borderRounded
    }, error, borderType
  } = props;
  // const bg = error ? colors.error : colors[props.bg];
  const styles = {
    boxSizing: 'border-box',
    p:"3px",
    width:"28px",
    height:"28px",
    position:"relative",
    border: `2px solid ${color} !important`,
    backgroundColor: `${colors.white} !important`,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    cursor: 'pointer',
    boxAlign: 'center',
    boxPack: 'center',
    outline: 0,
    transition: 'border-color 0.1s linear 0s, background-color 0.1s linear 0s',
  }
  if(borderType === "rounded"){
    styles.borderRadius = borderRounded;
  }
  else if(borderType === "curved"){
    styles.borderRadius = borderCurved
  }
  if(error){
    styles.border = `2px solid ${colors.error} !important`;
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
    color
  ),
);

const getInnerBoxProps = (props) => {
  const { borderType, theme:{
    borderCurved, borderRounded, colors
  }, color, error } = props;
  const styles = {
    backgroundColor: error ? colors.error: color,
    width: '18px',
    height: '18px',
    transition: 'all 0.2s ease-out'
  }
  if(borderType === 'rounded'){
    styles.borderRadius = borderRounded;
    styles.width = '14px';
    styles.height = '14px';
  }
  if(borderType === 'curved'){
    styles.borderRadius = '5px';
  }
  console.log("returnimg inner box styles ", styles);
  return styles;
}

export const InnerBox = styled('div')(
  props => getInnerBoxProps(props)
)

InputContainer.defaultProps = {
  variant: 'unchecked',
};

InputContainer.propTypes = {
  variant: PropTypes.oneOf(['unchecked', 'checked', 'disabled']),
};
