import styled from 'styled-components';
import css from '@styled-system/css';

export const Wrapper = styled('div')(
  css({
    display: `flex`,
    justifyContent: `center`,
    flexDirection: `column`,
    border: '4px solid',
    borderColor: 'primary',
    padding: 'space_6x_small',
    marginBottom: 'space_6x_small'
  })
);

export const Progresbar = styled('div')(
  css({
    backgroundColor: 'lightprimary',
    height: 'size_1rem',
    width: 'size_20pc',
    position: 'relative',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.5) inset'
  })
);
export const Value = styled('span')(
  css({
    display: 'inline-block',
    height: 'size_100pc',
    position: 'relative',
    transition: 'width 0.6s ease',
    backgroundColor: 'primary'
  })
);

export const ButtonContainer = styled('div')(
  css({
    paddingTop: 'space_1x_big'
  })
);
