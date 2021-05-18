import styled from 'styled-components';
import css from '@styled-system/css';
import { compose, border, layout, variant, space, color } from 'styled-system';

export const Wrapper = styled(`div`)(
  {
    minHeight: '45px',
    background: 'white',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: '1px',
    borderBottom: 'solid',
    borderBottomColor: '#dee2e6'
  },
  css({})
);

const getDerivedStates = props => {
  const { isSelected, disabled } = props;
  const styles = {
    borderBottomWidth: '10px',
    borderBottom: 'solid',
    borderBottomColor: 'orange'
  };
  if (!isSelected) {
    styles.borderBottomWidth = '0px';
    styles.borderBottom = 'solid';
    styles.borderBottomColor = 'transparent';
  }
  if (disabled) {
    styles.cursor = 'default!important';
  }
  return styles;
};

export const TabStyles = styled(`div`)(
  props => getDerivedStates(props),
  {
    display: 'flex',
    height: '45px',
    flexDirection: 'row',
    background: 'white',
    paddingLeft: '15px',
    paddingRight: '15px',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5px',
    marginRight: '5px',
    cursor: 'pointer'
  },
  css({})
);

export const Flex = styled(`div`)({
  display: 'flex',
  height: '45px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const getDerivedPanelProps = props => {
  const { isVisible } = props;
  const styles = {
    display: 'block'
  };
  if (isVisible) {
    styles.display = 'block';
  } else {
    styles.display = 'none';
  }
  return styles;
};

export const TabPanelStyles = styled(`div`)(
  props => getDerivedPanelProps(props),
  {
    padding: '10px'
  }
);
