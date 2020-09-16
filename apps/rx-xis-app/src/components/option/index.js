import React from 'react';

const Option = ({
  value, children
}) => {
  return (
    <>
      <option value={value}>
        {children}
      </option>
    </>
  )
}

export default Option;