import styled from 'styled-components';
import { compose, color, layout, space, border, variant } from 'styled-system';
import css from '@styled-system/css';
import { colors } from './../theme/properties/colors';
import { mediaqueryBreakpoints } from '../theme/defaultTheme';

export const ContainerDiv = styled(`div`)(
  css({
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    border: 'solid',
    borderWidth: '5px',
    borderColor: colors.primaryLighter
  })
);
export const Div = styled.div(
  css({
    width:'100%',
    padding:'0 15px',
    margin:'0 auto',
    maxWidth:'1170px',
    minWidth:'960px'
  })
  );
