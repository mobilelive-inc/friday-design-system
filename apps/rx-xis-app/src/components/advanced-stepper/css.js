import styled from 'styled-components';
import { compose, color, layout, space, border, variant } from 'styled-system';
import css from '@styled-system/css';

export const UnVisitedStep = styled(`div`)(
  css({
    width: '38px',
    height: '38px',
    backgroundColor: 'white',
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    opacity: '1 !important'
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
    opacity: '1 !important'
  }),
  props => props
);

export const ProgressBar = styled(`div`)(
  css({
    flex: 1,
    height: '5px',
    backgroundColor: 'orange',
    marginLeft: '2px',
    marginRight: '2px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: -1,
    width: '100%',
    opacity: '0.8 !important'
  })
);
