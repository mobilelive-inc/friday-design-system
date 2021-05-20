import styled from 'styled-components';
import { compose, color, layout, space, border, variant } from 'styled-system';
import css from '@styled-system/css';
import { colors } from './../theme/properties/colors';

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
