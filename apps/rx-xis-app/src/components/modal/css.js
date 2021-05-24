import styled from 'styled-components';
import css from '@styled-system/css';

export const Section = styled.section(
  css({
    maxWidth: 'container_max_width',
    minWidth: 'container_min_width',
    margin: '0 auto'
  })
);
export const Wrapper = styled.div(
  css({
    display: `flex`,
    justifyContent: `center`,
    flexDirection: `column`,
    border: `4px solid`,
    borderColor: 'ModalBorderColor',
    padding: 'ModalContentPaddingY'
  })
);

export const Wrapperdiv = styled.div(
  css({
    padding: 'ModalHeadingPadding',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 25px 0px',
    boxSizing: 'order-box',
    display: 'block',
    fontSize: 'fontSizeBase',
    fontWeight: 'fontweight_normal',
    outlineStyle: ' none',
    outlineWidth: '0',
    pointerEvents: 'auto',
    textAlign: 'left',
    transform: 'none',
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
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'relative',
    border: 'none',
    fontSize: [24]
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
    height:'Modalbodyheight'
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
    padding:[16]
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