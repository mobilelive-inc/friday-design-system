/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BaseSelect, SelectWrapper, RightIconButton, LeftIconButton, ChevronDownIcon, ValidationIcon
} from './css';
import Text from '../typography';
import Option from '../option';



const Select = (props) => {
  const {
    children,
    width,
    id,
    name,
    value,
    placeholder,
    onRightIconButtonClick,
    rightIcon,
    errorMessage,
    leftIcon,
    onLeftIconClick,
    borderType,
    withBorderBottomOnly,
    validationIcon,
    isValid,
    chevron,
    onChange,
    ...restProps
  } = props;
  return (
    <>
    <SelectWrapper width={width} leftIcon={leftIcon}>
      {
        leftIcon && (
          <LeftIconButton onClick={onLeftIconClick}>
            <span className={leftIcon}/>
          </LeftIconButton>
        )
      }
      <BaseSelect
        {...restProps}
        id={id}
        name={name}
        value={value}
        error={errorMessage}
        borderType={borderType}
        withBorderBottomOnly={withBorderBottomOnly}
        onChange={onChange}>
        {placeholder && <Option>{placeholder}</Option>}
        {children}
      </BaseSelect>
      {
        chevron && <ChevronDownIcon className={chevron}/>
      }
      {
        rightIcon && (
          <RightIconButton onClick={onRightIconButtonClick}>
            <span className={rightIcon}/>
          </RightIconButton>
        )
      }
      {
        validationIcon && (
          <ValidationIcon className={validationIcon} isValid={isValid}/>
        )
      }
    </SelectWrapper>
    {
        errorMessage && (
          <Text
            position="absolute"
            as="p"
            color={errorMessage ? "error":"black"}
            fontSize="10px"
            lineHeight="1px"
            pl={3}
            mt={17}
            pt={0}>{errorMessage}</Text>
        )
      }
    </>
  )
}

export default Select;