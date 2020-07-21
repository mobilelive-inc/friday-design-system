import styled from 'styled-components'
import { compose, color, layout, space, border } from 'styled-system';

export const BaseSelect = styled('select')(
  {
    boxSizing: 'border-box',
    cursor: 'pointer',
  },
  compose(color, layout, space, border)
)