import styled from 'styled-components';
import css from '@styled-system/css'
import { compose, border, layout, variant, space, color } from 'styled-system';

export const ToggleButton = styled(`i`)(
  css({
    paddingX: [1],
    paddingY: [2],
    fontSize: [5]
  })
)

export const AccordionWrapper = styled(`div`)(
  css({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 'auto',
    boxSizing: 'border-box',
    borderColor: 'borderGreyishColor',
    borderWidth: [1],
    borderStyle: 'solid',
    borderRadius: 3
  }),
  compose(border, layout, space, color)
);

export const Collapse = styled(`div`)(
  css({
    transition: 'all 0.4s ease-in-out',
    overflow: 'hidden',
    justifyContent: 'center',
    paddingX: [13],
    paddingY: [7],
    height: '100%',
    boxSizing: 'border-box'
  }),
  compose(space, color)
);

export const Header = styled(`div`)(
  css({
    width: '100%',
    paddingX: [7],
    paddingY: [10],
    fontWeight: [1],
    height: '50px',
    marginBottom: [0],
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
