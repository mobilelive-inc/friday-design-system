import styled from 'styled-components';
import { compose, layout, space, typography } from 'styled-system';

const getDerivedStyles = spanProps => {
  const styles = {};
  if (!spanProps) return styles;
  if (spanProps.iconMarginLeft) {
    styles.marginLeft = spanProps.theme.iconMarginLeft;
  }
  if (spanProps.iconMarginRight) {
    styles.marginRight = spanProps.theme.iconMarginRight;
  }
  return styles;
};

const Span = styled('div')(
  props => getDerivedStyles(props),
  compose(typography, space, layout)
);

export default Span;
