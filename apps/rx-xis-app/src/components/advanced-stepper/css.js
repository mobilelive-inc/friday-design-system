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
    width: '37px',
    height: '37px',
    backgroundColor: 'white',
    borderColor: 'orange',
    color: 'orange',
    borderWidth: 2,
    borderRadius: 29,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    opacity: '1 !important',
    '&:hover': {
      color: 'white',
      backgroundColor: 'orange'
    }
  }),
  props => props
);

export const VistedStep = styled(`div`)(
  css({
    width: '40px',
    height: '40px',
    backgroundColor: 'orange',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    opacity: '1 !important',
    cursor: 'pointer',
    '&:hover': {
      color: 'white'
    }
  }),
  props => props
);

export const ProgressBar = styled(`div`)(
  css({
    flex: 1,
    height: '3px',
    backgroundColor: 'orange',
    marginLeft: '2px',
    marginRight: '2px',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: '5px',
    transform: 'translateY(-50%)',
    zIndex: -1,
    opacity: '0.8 !important'
  })
);
