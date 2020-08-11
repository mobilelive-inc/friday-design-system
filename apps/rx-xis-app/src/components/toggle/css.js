import styled from 'styled-components';
import PropTypes from 'prop-types';
import Box  from '../box';
import Text from '../typography';

export const HiddenCheckbox = styled.input.attrs(props => ({
  type: 'checkbox',
  checked: props.checked,
}))`
  opacity: 0;
  width: 1px;
  height: 1px;
  &:focus {
    + .toggle-box {
      outline: auto;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`
// 
export const InnerBox = styled(Box)`
  position: absolute;
  cursor: pointer;
  height: ${props => props.size === 'lg' ? '2rem': '1rem'};
  width: ${props => props.theme.space[19]};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: ${props => props.theme.borderRounded};
  border: ${props => props => {
    const {isError, toggleStatus, toggledOnBorder, toggledOffBorder,
      theme:{colors:{error}}
      } = props;
      if(isError){
        return `2px solid ${error}`;
      }
      else{
        return toggleStatus ? toggledOnBorder: toggledOffBorder
      }
  }};
  background-color: ${props => props.toggledOffBgColor};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  ${props =>
    props.toggleStatus ? `background-color: ${props.toggledOnBgColor};` : ``} &:before {
    position: absolute;
    content: '';
    height: ${props => props.theme.space[11]};
    width: ${props => props.theme.space[11]};
    border-radius:50px;
    left: ${props => props.size === 'lg' ? '0.15rem': '-0.25rem'};
    bottom: ${props => props.size === 'lg' ? '0.15rem': '-0.30rem'};
    background-color: ${(props) =>{
        const {isError, toggleStatus, switchOnColor, switchOffColor,
        theme:{colors:{error}}
        } = props;
        if(isError){
          return error;
        }
        else{
          return toggleStatus ? switchOnColor: switchOffColor
        }
    }};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    ${props =>
      props.toggleStatus && props.size === 'lg'
        ? `-webkit-transform: translateX(1.4rem);
           -ms-transform: translateX(1.4rem);
           transform: translateX(1.4rem);`
        : ''};
        ${props =>
          props.toggleStatus && props.size === 'sm'
            ? `-webkit-transform: translateX(2.4rem);
               -ms-transform: translateX(2.4rem);
               transform: translateX(2.4rem);`
            : ''};
      
  }
`;
export const CheckIconContainer = styled(Box)`
  margin-left: ${props => props.theme.space[19]};
  position: absolute;
  top: ${props => props.theme.space[7]};
  opacity: 0;
  transition-timing-function: ease-in;
  transition: 0.2s;
  ${props =>
    props.toggleStatus
      ? `transition-timing-function: 
         ease-in;transition: 0.2s;
         opacity: 1;`
      : ''};
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: ${props => props.theme.space[16]};
  height: ${props => props.theme.space[17]};
`;

export const ToggleLable = styled.label`
  margin-left: ${props => props.theme.space[15]};
  font-size: ${props => props.theme.space[7]};
  font-weight: ${props => props.theme.fontWeights[3]};
  color: ${props => props.error ? props.theme.colors.error: props.theme.colors.black};
  cursor: pointer;
`

HiddenCheckbox.propTypes = {
  checked: PropTypes.bool,
};

HiddenCheckbox.defaultProps = {
  checked: false,
};
