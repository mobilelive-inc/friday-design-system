import styled from 'styled-components'
import {
  compose, color, layout, space, border
} from 'styled-system';


const getDerivedProps = (props) => {
  const {
    borderType, theme: {
      borderCurved, borderRounded,
      colors : { black }
    },
    theme: { colors },
    withBorderBottomOnly,
    error
  } = props;
  const styles = {
    borderColor: error ? colors.error : black,
    boxSizing: 'border-box',
    cursor: 'pointer',
    padding: '10px',
    width: '100%',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none'
  }
  if(borderType === 'curved'){
    styles.borderRadius = borderCurved
  }
  if(borderType === 'rounded'){
    styles.borderRadius = borderRounded
  }
  if(withBorderBottomOnly){
    styles.borderColor = 'transparent';
    styles.borderBottom = `1px solid ${error ? colors.error : black}`
  }
  return styles;
}

export const BaseSelect = styled('select')(
  props => getDerivedProps(props),
  compose(color, layout, space, border)
)

export const SelectWrapper = styled.div`
  width: ${props => (props.width ? props.width: '100%') };
  position: absolute;
  ${
  props => props.leftIcon &&
    `& > select{
       padding-left: 40px
     }
    `};
`


export const LeftIconButton = styled.button`
  position: absolute;
  right: calc(100% - 30px);
  width: 20px;
  top: calc(100% - 50px);
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

export const RightIconButton = styled.button`
  position: absolute;
  left: calc(100% - 50px);
  width: 20px;
  top: calc(100% - 50px);
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

export const ChevronDownIcon = styled.span`
  position: absolute;
  left: calc(100% - 20px);
  width: 20px;
  top: calc(100% - 45px);
  font-size: 8px;
  z-index: 20;
  cursor: pointer;
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
  top: 40px;top: calc(100% - 50px);
  color: ${props => (props.isValid ? 'green': 'red')};
  font-size: 18px;
`;