import styled from 'styled-components';
import { compose, color, layout, space, border, variant } from 'styled-system';
import css from '@styled-system/css';

export const ProgressWrapper = styled('div')(
  css({
    display: 'flex',
    width: 'stepperOverallWidth',
    height: 'stepperOverallHeight'
  }),
  props => props,
  compose(color, layout, space, border),
  variant({ scale: 'stepperWrapper' })
);
export const ProgressStepper = styled('div')(
  css({
    width: '0%',
    transition: 'width 0.6s ease'
  }),
  props => props,
  compose(color, layout, space, border),
  variant({ scale: 'stepper' })
);
