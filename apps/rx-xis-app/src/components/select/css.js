import styled from 'styled-components'
import { compose, color, layout, space, border } from 'styled-system';


const getDerivedProps = (props) => {
  return {
    boxSizing: 'border-box',
    cursor: 'pointer',
    padding: '10px',
    width: '100%',
    // border: 'none',
    // borderBottom: '1px solid black',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none'
  }
}

export const BaseSelect = styled('select')(
  props => getDerivedProps(props),
  compose(color, layout, space, border)
)

export const SelectWrapper = styled.div`
  width: ${props => (props.width ? props.width: '100%') };
  position: absolute;
`

export const LeftIcon = styled.span`
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