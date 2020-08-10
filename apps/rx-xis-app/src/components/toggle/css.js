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
  width: 3.5em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  border: ${props => props => {
    const {isError, toggleStatus, toggledOnBorder, toggledOffBorder,
      theme:{colors:{error}}
      } = props;
      if(isError){
        return `1px solid ${error}`;
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
    height: 1.5em;
    width: 1.5em;
    border-radius:50px;
    left: ${props => props.size === 'lg' ? '0.25rem': '-0.25rem'};
    bottom: ${props => props.size === 'lg' ? '0.20rem': '-0.30rem'};
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
  margin-left: 3.6em;
  position: absolute;
  top: 1em;
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
  width: 2.75em;
  height: 3em;
`;

export const ToggleLable = styled.label`
  margin-left: 40px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.error ? props.theme.colors.error: props.theme.colors.black};
  cursor: pointer;
`

HiddenCheckbox.propTypes = {
  checked: PropTypes.bool,
};

HiddenCheckbox.defaultProps = {
  checked: false,
};
