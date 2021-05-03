import styled from 'styled-components';
import { compose, color, layout, space, border, variant } from 'styled-system';
import css from '@styled-system/css';

export const unVisitedStep = styled(`div`)(
  css({
    width: '50',
    height: '50',
    backgroundColor: 'orange'
  }),
  props => props
);

export const vistedStep = styled(`div`)(
  css({
    width: '50',
    height: '50',
    backgroundColor: 'orange'
  }),
  props => props
);

export const current;
