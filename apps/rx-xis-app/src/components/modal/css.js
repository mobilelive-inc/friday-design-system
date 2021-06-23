import styled from 'styled-components';
import css from '@styled-system/css';
// import { compose, border, layout, sizes, space, color } from 'styled-system';
export const Section = styled.section(
  css({
    maxWidth: 'container_max_width',
    minWidth: 'container_min_width',
    marginBottom:'SectionMarginBottom',
  }),
);

export const Wrapperdiv = styled.div(
  css({
    padding: 'ModalHeadingPadding',
    backgroundColor: 'white',
    boxShadow: 'ModalShadows',
    boxSizing: 'order-box',
    display: 'block',
    fontSize: 'fontSizeBase',
    fontWeight: 'fontweight_normal',
    outlineStyle: ' none',
    outlineWidth: '0',
    pointerEvents: 'auto',
    textAlign: 'left',
    transform: 'none',
    width:'Md'
  })
);
export const Modalhead = styled.div(
  css({
    display:'flex',
    justifyContent:'space-between',
    verticalAlign:'baseline',
  })
)
export const Closebutton = styled.button(
  css({
    alignItems: 'flex-start',
    appearance: ' auto',
    backgroundAttachment: 'scroll',
    backgroundClip: 'border-box',
    backgroundColor: 'ModalButtonBg',
    position: 'relative',
    border: 'none',
    fontSize: 'ModalButtonFontSize',
  })
);
export const Sronly = styled.span(
  css({
    border: '0 !important',
    clip: 'rect(1px, 1px, 1px, 1px) !important',
    height: '1px !important',
    margin: '-1px !important',
    overflow: 'hidden !important',
    padding: '0 !important',
    position: 'absolute !important',
    width: '1px !important',
    whiteSpace: 'nowrap !important'
  })
);
export const Modalbody = styled.div(
  css({
    flex:'1 1 auto',
    overflowY:'auto',
    overflow:'scroll',
    height:'Modalbodyheight',
  })
);
export const Option = styled.div(
  css({
    
  })
);
export const Textarea = styled.textarea(
  css({
    minWidth:'Modalwidth',
    minHeight:'Modalhight',
    maxWidth:'Modalwidth',
    padding:'ModalHeadingPaddingX'
  })
);
export const Modalfooter = styled.div(
  css({
    
  })
);
export const Buttoncontianer = styled.div(
  css({
    display:"flex",
  })
);