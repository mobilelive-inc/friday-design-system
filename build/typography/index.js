import styled from 'styled-components';
import PropTypes from 'prop-types';
import { compose, color, typography, layout, space, border, variant } from 'styled-system';
import { Text as RebassText } from 'rebass/styled-components';
export const Text = /*#__PURE__*/styled(RebassText).withConfig({
  displayName: "typography__Text",
  componentId: "sc-1l1tlnp-0"
})(compose(border, color, typography, layout, space, variant({
  scale: 'typography'
})));
Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};