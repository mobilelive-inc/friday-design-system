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
import { capitalizeFirstLetter } from '../utils/utils';

const getDerivedProps = (props) => {
  const {
    theme: {
      colors: {
        red, black, white, grayDark, grayLight
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
    height: '2.25rem',
    boxSizing: 'border-box',
    padding: '1rem 1rem',
    letterSpacing: '0.125em',
    lineHeight: '28px',
    fontSize: '1rem',
    fontWeight: 500,
    backgroundColor: 'transparent',
    '::placeholder':{
      color: grayDark,
      opacity: 1,
    },
    '&:disabled':{
      backgroundColor: grayLight,
      border: 'none'
    }
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
    styles.borderBottom = `1px solid ${error ? red : black}`
  }
  else{
    styles.border = `1px solid ${error ? red : black}`
  }
  return styles;
};

export const Input = styled.input(
  (props) => getDerivedProps(props),
  compose(border, layout, space, typography, color)
);

// const getWrapperStyles = (props) => {
//   console.log("props are ", props)
//   const styles = {
//     height: 'auto',
//   }
//   if(props.rightIcon){
//     styles.position = 'relative'
//   }
//   if(props.leftIcon){
//     styles.position = 'relative'
//     styles['&input'] = {
//       paddingLeft: "40px"
//     }
//   }
//   console.log("returning styles ", styles)
//   return styles
// }

// export const InputWrapper = styled('div')(
//   props => getWrapperStyles(props)
// )

export const InputWrapper = styled.div`
  height: 'auto';
  width: ${props => (props.width ? props.width : '100%')};
  display: ${props => (props.display ? props.display : 'block')};
  ${
  props => props.rightIcon &&
  `position:relative;
  `};
  ${
  props => props.leftIcon &&
  `position:relative;
   
   & > input{
     padding-left: 40px
   }
  `};
`;

export const RightIconButton = styled.button`
  position: absolute;
  left: calc(100% - 30px);
  width: 20px;
  top: calc(100% - 25px);
  font-size: 16px;
  z-index: 20;
  cursor: pointer;
  text-decoration: none;
  cursor:pointer;
  background-color: transparent !important;
  padding: 0;
  border: none;
  box-shadow: none;
`

export const LeftIconButton = styled.button`
  position: absolute;
  right: calc(100% - 30px);
  width: 20px;
  top: calc(100% - 25px);
  font-size: 16px;
  z-index: 20;
  cursor: pointer;
  text-decoration: none;
  cursor:pointer;
  background-color: transparent !important;
  padding: 0;
  border: none;
  box-shadow: none;
`
export const LeftIcon = styled.span`
  position: absolute;
  right: calc(100% - 30px);
  width: 20px;
  top: calc(100% - 25px);
  font-size: 16px;
  z-index: 20;
  text-decoration: none;
  cursor:pointer;
  background-color: transparent !important;
  padding: 0;
  border: none;
  box-shadow: none;
`
export const ValidationIcon = styled.span`
  position: absolute;
  left: calc(100% + 10px);
  width: 20px;
  top: 40px;top: calc(100% - 25px);
  color: ${props => (props.isValid ? 'green': 'red')};
  font-size: 18px;
`;