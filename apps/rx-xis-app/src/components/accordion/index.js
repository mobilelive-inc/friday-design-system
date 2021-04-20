import React, { useState, useEffect } from 'react';
import { AccordionWrapper, Collapse, Header, ToggleButton } from './css';
import { Text } from '../typography';
import Icon from './../icon/Icon';
import PropTypes from 'prop-types';
import GlobalStyle from './../theme/globalStyles';
import Theme from './../theme/defaultTheme';
import { ThemeProvider } from 'styled-components';

const Accordion = ({ isVisible, children, onExpand, onCollapse, variant, ...props }) => {
  const [isOpen, setIsOpen] = useState(isVisible || false);
  const [childrenWithProps, setChildrenWithProps] = useState(children);

  useEffect(() => {
    if (isOpen === true) {
      onExpand();
    } else {
      onCollapse();
    }
    setChildrenWithProps(
      React.Children.map(children, child => {
        // checking isValidElement is the safe way and avoids a typescript error too
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isVisible: isVisible,
            isOpen: isOpen,
            setIsOpen: setIsOpen,
            variant: variant
          });
        }
        return child;
      })
    );

  }, [isOpen]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <AccordionWrapper {...props}>
        {childrenWithProps}
      </AccordionWrapper>
    </ThemeProvider>
  )
};

const AccordionHeader = ({ isVisible, title, isOpen, setIsOpen, ...props }) => {
  return (
    <Header
      {...props}
      onClick={() => {
        if (!isVisible) {
          setIsOpen(!isOpen);
        } else {
          setIsOpen(true);
        }
      }}>
      <Text bold color="white" aria-label={title}>
        {title}
      </Text>
      <ToggleButton
        role="button"
        aria-label={`toggle Accordion`}
        className="icon-arrowdropdown"
      />
    </Header>
  );
};

const AccordionCollapse = ({ isOpen, children, ...props }) => {
  return isOpen ? (
    <Collapse {...props} open={isOpen}>
      {children}
    </Collapse>
  ) : null;
};

Accordion.defaultProps = {
  isVisible: false
};

Accordion.propTypes = {
  /** If you want to open the collapse view all the view */
  isVisible: PropTypes.bool,
  /** Callback when view is expanded */
  onExpand: PropTypes.func,
  /** Callback when view is collapsed */
  onCollapse: PropTypes.func,
  /** For add padding to main component */
  p: PropTypes.number,
  /** For add top padding to main component */
  pt: PropTypes.number,
  /** For add bottom padding to main component */
  pb: PropTypes.number,
  /** For add left padding to main component */
  pl: PropTypes.number,
  /** For add right padding to main component */
  pr: PropTypes.number,
  /** For add left & right padding to main component */
  px: PropTypes.number,
  /** For add top & bottom padding to main component */
  py: PropTypes.number,
  /** For add margin to main component */
  m: PropTypes.number,
  /** For add top margin to main component */
  mt: PropTypes.number,
  /** For add bottom margin to main component */
  mb: PropTypes.number,
  /** For add left margin to main component */
  ml: PropTypes.number,
  /** For add right margin to main component */
  mr: PropTypes.number,
  /** For add left & right margin to main component */
  mx: PropTypes.number,
  /** For add top & bottom margin to main component */
  my: PropTypes.number,
  /** For giving width to main component */
  width: PropTypes.number,
  /** For giving height to main component */
  height: PropTypes.number
};

AccordionHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default Accordion;
export { AccordionCollapse, AccordionHeader };
