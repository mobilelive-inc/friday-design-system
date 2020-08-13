import React from 'react';
import PropTypes from 'prop-types';
// import { TooltipWrapper, ToolTip } from './css';
import {useSpring, animated} from 'react-spring';
import {
  Tooltip as BaseTooltip,
} from 'react-tippy';
import 'react-tippy/dist/tippy.css';
// import './css.css'

const Tooltip = ({
  position,
  arrow,
  arrowSize,
  animation,
  backgroundColor,
  color,
  children,
  delay,
  distance,
  hideDelay,
  labelText,
  tabIndex,
  theme,
  size,
  ...restProps
}) => {
  React.useEffect(() => {
    if(theme === 'light'){
      require('./css.css');
    }
  },[])
  return (
    <BaseTooltip
    title={labelText}
    position={position}
    arrow={arrow}
    arrowSize={arrowSize}
    delay={delay}
    distance={distance}
    hideDelay={hideDelay}
    size={size}
    interactive
    trigger="mouseenter focus"
    // trigger="click"
    tabIndex={tabIndex}
    // theme={theme}
    >
    {children}
  </BaseTooltip>
  )
}

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top','top-start','top-end','bottom','bottom-start','bottom-end',
  'left','left-start','left-end','right','right-start','right-end']),
  arrow: PropTypes.bool,
  arrowSize: PropTypes.oneOf(['small', 'regular', 'big']),
  animation: PropTypes.oneOf(['shift', 'perspective', 'fade', 'scale', 'none']),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  distance: PropTypes.number,
  labelText: PropTypes.string,
  delay: PropTypes.string,
  hideDelay: PropTypes.string,
  tabIndex: PropTypes.number,
  theme: PropTypes.oneOf(['light','dark','transparent'])
}
Tooltip.defaultProps={
  backgroundColor:'',
  color:'',
  position:'bottom',
  arrow: false,
  arrowSize: 'regular',
  theme: 'dark'
}

export default Tooltip;