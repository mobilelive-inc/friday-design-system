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
  compose(border, layout, space, color, variant({ scale: 'accordions' }))
);

export const Collapse = styled.div`
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
`;

export const Header = styled(`div`)(
  {
    paddingLeft: '15px',
    paddingRight: '20px',
    paddingTop: '12px',
    paddingBottom: '12px',
    marginBottom: '0px',
    justifyContent: 'space-between',
    flex: 1,
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
  compose(border, space, color, variant({ scale: 'accordions' }))
);

export default AccordionWrapper;
