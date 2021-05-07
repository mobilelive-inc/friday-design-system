import styled from 'styled-components';
import { compose, color, layout, space, border, variant } from 'styled-system';
import css from '@styled-system/css';

export const StepperContainer = styled(`div`)(
  css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative'
  })
);

export const UnVisitedStep = styled(`div`)(
  css({
    width: 'stepperItemWidth',
    height: 'stepperItemHeight',
    backgroundColor: 'white',
    borderColor: 'stepperThemeColor',
    color: 'stepperThemeColor',
    borderWidth: 2,
    borderRadius: 'stepperItemRadius',
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    opacity: '1 !important',
    marginBottom: '5px',
    '&:hover': {
      color: 'white',
      backgroundColor: 'stepperThemeColor'
    }
  }),
  props => props,
  compose(border, layout, space, color, variant({ scale: 'advancedStepper' }))
);

export const VistedStep = styled(`div`)(
  css({
    width: 'stepperItemWidth',
    height: 'stepperItemHeight',
    backgroundColor: 'stepperThemeColor',
    borderRadius: 'stepperItemRadius',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    opacity: '1 !important',
    cursor: 'pointer',
    marginBottom: '5px',
    '&:hover': {
      color: 'white'
    }
  }),
  props => props,
  compose(border, layout, space, color, variant({ scale: 'advancedStepper' }))
);

export const ProgressBar = styled(`div`)(
  css({
    flex: 1,
    height: '3px',
    backgroundColor: 'stepperThemeColor',
    marginLeft: '2px',
    marginRight: '2px',
    position: 'absolute',
    top: 'stepperProgressBarAlignmentFromTop',
    left: 0,
    right: '5px',
    transform: 'translateY(-50%)',
    zIndex: -1,
    opacity: '0.8 !important'
  })
);

export const StepItemContainer = styled(`div`)(
  css({
    display: 'flex',
    flexDirection: 'column'
  }),
  {
    alignItems: props => props.alignment || 'start'
  }
);
