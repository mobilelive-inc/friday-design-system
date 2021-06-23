import styled from 'styled-components';
import css from '@styled-system/css';
import { compose, border, layout, variant, space, color } from 'styled-system';

export const Progressbar = styled('div')(
  css({
    backgroundColor: 'BgProgressbar',
    height: 'ProgressbarHeight',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.5) inset',
    marginY: 'PbMargin;',
    borderRadius: 'ProgressbarRadius'
  }),
  props => props,
  compose(color, layout, space, border),
  variant({ scale: 'progress' })
);
export const Progressdone = styled.span(
  css({
    backgroundColor: 'SteperBroderColor',
    borderRadius: 'ProgressbarRadius',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'ProgressbarValue',
    position: 'relative',
    width: '0',
    opacity: '0',
    transition: '8s ease 0.3s',
    paddingLeft: 'statuspadding'
  }),
  props => props,
  compose(color, layout, space, border),
  variant({ scale: 'progressWrapper' })
);
