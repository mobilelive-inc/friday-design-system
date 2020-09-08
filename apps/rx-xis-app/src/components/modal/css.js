import styled from 'styled-components';
import { compose, position, space } from 'styled-system';
import Button from '../button';

const CloseBaseButton = styled.button(
  compose(
    position,
    space,
  ),
);

export const Header = styled.div`
  position: relative;
`;

export const CloseButton = styled(CloseBaseButton).attrs({
  'data-testid': 'close-button',
})`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const CloseText = styled.p`
  display: inline;
  margin-left: 3px;
  line-height: 2em;
  // right: 2.5em;
`;

export const Footer = styled.div.attrs({
  'data-testid': 'footer',
})`
  text-align: left;
`;

export const FooterCloseButton = styled(Button)`
  max-width: 22em;
`;

export const Content = styled.div`
  
`;