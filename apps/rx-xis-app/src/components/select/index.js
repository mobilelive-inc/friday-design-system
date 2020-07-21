/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BaseSelect, SelectWrapper, RightIconButton, ChevronDownIcon
} from './css';
import Text from '../typography';



const Select = (props) => {
  const {
    children,
    width,
    id,
    name,
    value,
    onRightIconButtonClick,
    rightIcon,
    chevron,
    onChange,
    ...restProps
  } = props;
  return (
    <SelectWrapper width={width}>
      <BaseSelect
        {...restProps}
        id={id}
        name={name}
        value={value}
        onChange={onChange}>
        {children}
      </BaseSelect>
      <ChevronDownIcon className={chevron}/>
      {
        rightIcon && (
          <RightIconButton onClick={onRightIconButtonClick}>
            <span className={rightIcon}/>
          </RightIconButton>
        )
      }
      <Text
        position="absolute"
        as="p"
        color="red"
        fontSize="10px"
        lineHeight="1px"
        pl={3}
        pt={0}>This is error message</Text>
    </SelectWrapper>
  )
}

export default Select;