import styled from 'styled-components';
import { compose, border, layout, variant, space, color } from 'styled-system';

export const AccordionWrapper = styled(`div`)(
  {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 'auto',
    boxSizing: 'border-box',
    borderColor: '#dfdfdf',
    borderWidth: '0.5px',
    borderStyle: 'solid',
    borderRadius: 3
  },
  compose(border, layout, space, color)
);

export const Collapse = styled(`div`)(
  {
    transition: 'all 0.4s ease-in-out',
    overflow: 'hidden',
    justifyContent: 'center',
    padding: '10px',
    boxSizing: 'border-box'
  },
  compose(space, color)
);

export const Header = styled(`div`)(
  {
    paddingLeft: '15px',
    paddingRight: '20px',
    paddingTop: '12px',
    height: '50px',
    paddingBottom: '12px',
    marginBottom: '0px',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#dfdfdf',
    borderWidth: '0.5px',
    borderStyle: 'solid',
    alignItems: 'center',
    backgroundColor: '#F48245',
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: '#e0773f'
    }
  },
  compose(border, layout, space, color)
);

export default AccordionWrapper;
