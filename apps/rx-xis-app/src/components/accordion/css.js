import styled from 'styled-components';
import css from '@styled-system/css';
import { compose, border, layout, variant, space, color } from 'styled-system';

export const ToggleButton = styled(`i`)(
  css({
    paddingX: 'collapseHeadingIconPaddingX',
    paddingY: 'collapseHeadingIconPaddingY',
    fontSize: 'collapseHeadingIconFontSize'
  })
);

export const AccordionWrapper = styled(`div`)(
  css({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 'auto',
    boxSizing: 'border-box',
    borderColor: 'collapseBorderColor',
    borderWidth: 'collapseBorderWidth',
    borderStyle: 'solid',
    borderRadius: 'collapseBordeRadius'
  }),
  compose(border, layout, space, color)
);

export const Collapse = styled(`div`)(
  css({
    transition: 'all 0.4s ease-in-out',
    overflow: 'hidden',
    justifyContent: 'center',
    paddingX: 'collapseContentPaddingX',
    paddingY: 'collapseContentPaddingY',
    height: '100%',
    boxSizing: 'border-box'
  }),
  compose(space, color)
);

export const Header = styled(`div`)(
  css({
    width: '100%',
    paddingX: 'collapseHeadingPaddingX',
    paddingY: 'collapseHeadingPaddingY',
    fontWeight: 'fontweight_small',
    height: '50px',
    marginBottom: 'space_6x_tiny',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'collapseHeaderBackground',
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: 'collapseHeaderBackgroundHover'
    }
  }),
  compose(border, layout, space, color, variant({ scale: 'accordions' }))
);

export default AccordionWrapper;
