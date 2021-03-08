import styled from 'styled-components';
import { compose, color, layout, space, border, variant } from 'styled-system';
import { Flex } from '../checkbox/css';

export const ProgressWrapper = styled.div(
  props => props,
  {
    display: 'flex',
    width: '100%',
    height: '20px'
  },
  compose(color, layout, space, border),
  variant({ scale: 'stepperWrapper' })
);
export const ProgressStepper = styled.div(
  props => props,
  props => props,
  {
    width: '20%'
  },
  compose(color, layout, space, border),
  variant({ scale: 'stepper' })
);
