import styled from 'styled-components';
import Link from '../link';

export const StyledLink = styled(Link)`
  left: 50%;
  transform: translate(-50%, -100%);
  transition: transform 0.5s;
  text-decoration: none;
  opacity: 0;
  &:focus {
    transform: translate(-50%, 0%);
    opacity: 0.9;
    top: ${props => props.top || 90};
  }
`;
