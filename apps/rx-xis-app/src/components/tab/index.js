import React, { useState, useEffect } from 'react';
import { Wrapper, TabStyles, TabPanelStyles, Flex } from './css';
import Text from '../typography';
import Icon from '../icon/Icon';

export const Tabs = ({
  value = 0,
  onChange,
  children,
  withRightIcon,
  withLeftIcon,
  onlyIcon
}) => {
  const [selectedIndex, setSelectedIndex] = useState(value);
  const [childrenWithProps, setChildrenWithProps] = useState(children);

  useEffect(() => {
    onChange(selectedIndex);
    setChildrenWithProps(
      React.Children.map(children, (child, index) => {
        // checking isValidElement is the safe way and avoids a typescript error too
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isSelected: index === selectedIndex ? true : false,
            index: index,
            setSelectedIndex: setSelectedIndex,
            withRightIcon,
            withLeftIcon,
            onlyIcon
          });
        }
        return child;
      })
    );
  }, [selectedIndex]);

  return <Wrapper>{childrenWithProps}</Wrapper>;
};

export const Tab = props => {
  const {
    title,
    isSelected = false,
    index,
    setSelectedIndex,
    disabled,
    onlyIcon,
    withLeftIcon,
    withRightIcon
  } = props;
  return (
    <TabStyles
      {...props}
      onClick={() => {
        if (!disabled) {
          setSelectedIndex(index);
        }
      }}>
      {onlyIcon ? (
        <Icon
          color={isSelected ? 'orange' : disabled ? 'lightgrey' : 'gray'}
          className="icon-arrowdropdown"
        />
      ) : (
        <Flex>
          {withLeftIcon && (
            <Icon
              color={isSelected ? 'orange' : disabled ? 'lightgrey' : 'gray'}
              className="icon-arrowdropdown"
            />
          )}
          <Text
            color={isSelected ? 'orange' : disabled ? 'lightgrey' : 'gray'}
            fontWeight="600"
            mr={8}
            ml={8}
            fontSize="fontSizeBase">
            {title}
          </Text>
          {withRightIcon && (
            <Icon
              color={isSelected ? 'orange' : disabled ? 'lightgrey' : 'gray'}
              className="icon-arrowdropdown"
            />
          )}
        </Flex>
      )}
    </TabStyles>
  );
};

export const TabPanel = props => {
  const { value = 0, index = 0, children } = props;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (value === index) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [value, index]);

  return <TabPanelStyles isVisible={isVisible}>{children}</TabPanelStyles>;
};
