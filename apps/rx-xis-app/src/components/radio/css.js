import styled from 'styled-components';
import Box from '../box';

export const Flex = styled('div')`
  display: flex;
  vertical-align: middle;
  height: 3em;
  width: 3em;
  min-height: 3em;
  min-width: 3em;
  border: 2px solid ${props => props.theme.colors.black};
  line-height: 0;
  align-items: center;
  justify-content: center;
  margin-top: 0.125em;
  margin-right: 1em;
  cursor: pointer;
  transition: border-color 0.1s linear 0s, background-color 0.1s linear 0s;
  border-radius: 0;
`;

export const RadioBoxContainer = styled(Box)`
  vertical-align: middle;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled('p')`
  overflow-wrap: break-word;
  font-size: 1rem;
  line-height: 1.75rem;
  letter-spacing: -0.2px;
  color: ${props => props.theme.colors.charcoal};
`;