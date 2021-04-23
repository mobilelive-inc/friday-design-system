import styled from 'styled-components';
import css from '@styled-system/css';
import { compose, border, layout, variant, space, color } from 'styled-system';

export const ToggleButton = styled(`i`)(
  css({
    paddingX: 'space_5x_tiny',
    paddingY: 'space_4x_tiny',
    fontSize: 'fontsize_1x_tiny'
  })
);

export const AccordionWrapper = styled(`div`)(
  css({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 'auto',
    boxSizing: 'border-box',
    borderColor: 'borderGreyishColor',
    borderWidth: 'hover',
    borderStyle: 'solid',
    borderRadius: 'radius_0_063rem'
  }),
  compose(border, layout, space, color)
);

export const Collapse = styled(`div`)(
  css({
    transition: 'all 0.4s ease-in-out',
    overflow: 'hidden',
    justifyContent: 'center',
    paddingX: 'space_6x_small',
    paddingY: 'space_6x_small',
    height: '100%',
    boxSizing: 'border-box'
  }),
  compose(space, color)
);

export const Header = styled(`div`)(
  css({
    width: '100%',
    paddingX: 'space_6x_small',
    paddingY: 'space_3x_small',
    fontWeight: 'fontweight_small',
    height: '50px',
    marginBottom: 'space_6x_tiny',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'primary',
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: 'primaryHover'
    }
  }),
  compose(border, layout, space, color, variant({ scale: 'accordions' }))
);

export default AccordionWrapper;
