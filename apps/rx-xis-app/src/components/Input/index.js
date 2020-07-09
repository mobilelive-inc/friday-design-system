import React from 'react';
import PropTypes from 'prop-types';
import {
  Label, Input as BaseInput
} from './css';
import { Text } from '../typography';

const Input = (props) => {
  const {
    id,placeholder, value, type,label, onChange, onBlur, showErrorMessage, errorMessage
  } = props;
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <BaseInput
        id={id}
        placeholder={placeholder}
        value={value}
        error={errorMessage}
        type={type}
        onChange={onChange}
        onBlur={onBlur}/>
      {
        showErrorMessage && errorMessage && (
          <Text display="block">{errorMessage}</Text>
        )
      }
    </>
    
  )
}

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  showErrorMessage: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

Input.defaultProps = {
  type: 'text',
  value: "",
  showErrorMessage: true,
  errorMessage: "",
  onChange: ()=>{},
  onBlur: ()=>{}
}

export default Input;