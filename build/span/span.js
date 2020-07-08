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

const Span = /*#__PURE__*/styled('div').withConfig({
  displayName: "span__Span",
  componentId: "sc-173pz2m-0"
})(props => getDerivedStyles(props), compose(typography, space, layout));
export default Span;