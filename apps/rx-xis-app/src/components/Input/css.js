import styled from 'styled-components';

export const Label = styled.label`
  color: ${props => props.theme.colors.black};
  left: 0;
  top: -0.5em;
  cursor: text;
  font-weight: 300;
  opacity: 1;
  transition: all 0.2s;
  letter-spacing: -0.2px;
`;

export const Input = styled.input`
  color: ${props => (props.error ? props.theme.colors.red : props.theme.colors.black)};
  // border-color: transparent;
  border: 0.125em solid ${props => (props.error ? props.theme.colors.red : props.theme.colors.black)};
  width: 100%;
  box-sizing: border-box;
  padding: 1em 4em 0.2em 0;
  letter-spacing: 0.125em;
  line-height: 28px;
  font-size: 1rem;
  font-weight: 500;
`;