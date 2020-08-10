import React from 'react';
import PropTypes from 'prop-types';
import { TooltipWrapper, ToolTip } from './css';
import {useSpring, animated} from 'react-spring';

const Tooltip = ({
  position,
  withArrow,
  curved,
  backgroundColor,
  color,
  text,
  ...restProps
}) => {
  return (
      <ToolTip
      data-arrow={withArrow}
      withArrow = {!withArrow}
      data-position={position}
      tabindex="1"
      backgroundColor={backgroundColor}
      color={color}
      data-tooltip
      tabindex="1"
      curved={curved}
      // mb={mb}
      // marginBottom={marginBottom}
      {...restProps}
      >
      {text}
      </ToolTip
    >
  )
}

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top','top-left','top-right','bottom','bottom-left','bottom-right',
  'left','left-start','left-end','right','right-start','right-end']),
  withArrow: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  mb:"1rem"
}
ToolTip.defaultProps={
  backgroundColor:'black',
  color:'white',
  position:'bottom',
  withArrow: true
}

export default Tooltip;