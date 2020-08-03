import styled from 'styled-components';


export const TooltipWrapper = styled.div`
  // position: absolute;
  left: 0px;
  top: 0px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 12px;
  display: inline-block;
  margin-left: ${(props) => {
    if(props.position === 'right'){
      return "calc(100% - 96%)"
    }
  }};
  margin-top: ${(props) => {
    if(props.position === 'right'){
      return "9px"
    }
  }};
  margin-right: ${(props) => {
    if(props.position === 'left'){
      return "calc(100% - 96%)"
    }
  }};
`;

export const TootlTipArrow = styled.div`
  top: 50%;
  left: auto;
  margin-left: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
`;

export const TooltipLabel = styled.div`
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 4px;
`;