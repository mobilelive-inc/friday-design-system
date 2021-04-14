import React, { useState, useEffect } from 'react';
import { AccordionWrapper, Collapse, Header } from './css';
import { Text } from '../typography';
import Icon from './../icon/Icon';
import PropTypes from 'prop-types';

const Accordion = ({ isVisible, children, onExpand, onCollapse }) => {
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
            setIsOpen: setIsOpen
          });
        }
        return child;
      })
    );
  }, [isOpen]);

  return <AccordionWrapper>{childrenWithProps}</AccordionWrapper>;
};

const AccordionHeader = ({ isVisible, title, isOpen, setIsOpen }) => {
  return (
    <Header
      onClick={() => {
        if (!isVisible) {
          setIsOpen(!isOpen);
        } else {
          setIsOpen(true);
        }
      }}>
      <Text bold color="white">
        {title}
      </Text>
      <Icon role="button" className="icon-arrowdropdown" />
    </Header>
  );
};

const AccordionCollapse = ({ isOpen, children }) => {
  return isOpen ? <Collapse open={isOpen}>{children}</Collapse> : null;
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
  onCollapse: PropTypes.func
};

AccordionHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default Accordion;
export { AccordionCollapse, AccordionHeader };
