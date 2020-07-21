import React from 'react';
import { BaseSelect } from './css';


const Select = (props) => {
  const { children, ...restProps } = props;
  return (
    <BaseSelect {...restProps}>
      {children}
    </BaseSelect>
  )
}

export default Select;