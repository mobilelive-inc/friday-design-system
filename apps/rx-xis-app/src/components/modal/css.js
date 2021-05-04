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
    borderColor: 'primaryLighter',
    padding: 'globalSpacer'
  })
);

export const Wrapperdiv = styled.div(
  css({
    padding: 'globalSpacer',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 25px 0px',
    boxSizing: 'order-box',
    display: 'block',
    fontSize: 'fontSizeBase',
    fontWeight: 'fontweight_normal',
    height: '170px',
    width: '894px',
    outlineStyle: ' none',
    outlineWidth: '0',
    pointerEvents: 'auto',
    textAlign: 'left',
    transform: 'none'
  })
);
export const Modalhead = styled.h5(
  css({
    color: 'grayDarker',
    display: 'block',
    fontSize: [4],
    fontWeight: [3],
    height: [11],
    lineHeight: [11],
    marginBlockEnd: [7],
    marginBlockStart: [0],
    marginBottom: [7],
    marginInlineEnd: [0],
    marginInlineStart: [0],
    marginTop: [0],
    pointerEvents: 'auto',
    textAlign: 'left'
  })
);
export const Closebutton = styled.button(
  css({
    alignItems: 'flex-start',
    appearance: ' auto',
    backgroundAttachment: 'scroll',
    backgroundClip: 'border-box',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'relative',
    top: '-25%',
    left: '95%',
    border: 'none',
    fontSize: [11],
    fontWeight: [1]
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
export const Description = styled.div(
  css({
    color: 'grayDarker',
    display: 'block',
    fontSize: [3],
    fontWeight: [1],
    lineHeight: [5],
    pointerEvents: 'auto',
    textAlign: 'left'
  })
);
