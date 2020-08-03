import React from 'react';
import { TooltipWrapper, TootlTipArrow, TooltipLabel } from './css';
import {useSpring, animated} from 'react-spring';

const Tooltip = () => {
  const styleProps = useSpring({opacity: 1, from: {opacity: 0}});
  const [tootipVisible, setTooltipVisible] = React.useState(false);
  return (
    <animated.div>
      <button onClick={() => setTooltipVisible(!tootipVisible)}>Tooltip</button>
      { tootipVisible && <TooltipWrapper position="right">
      <TootlTipArrow />
      <TooltipLabel>
              This is a tooltip
      </TooltipLabel>
  </TooltipWrapper>}
    </animated.div>
  )
}

export default Tooltip;