import React, { useState } from 'react';
import { Box } from 'rebass/styled-components';
import  Button from "../../src/components/Button";
import Span from "../../src/components/span/span";
import Input from '../../src/components/Input';
import Text from '../../src/components/typography';

const FormOne = () => {
  const [ email , setEmail ]  = useState('');
  const [emailErrorMessage, setEmailErrorMessage ] = useState(false);
  const [ fName , setFname ]  = useState('');
  const [fnameErrorMessage, setFnameErrorMessage ] = useState(false);
  const [lname, setLname] = useState('');
  const [lnameErrorMessage, setLnameErrorMessage ] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage ] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('')
  
  const validate = () => {
    let isValid = true;
    if(email === ''){
      setEmailErrorMessage('Email is required')
      isValid = false;
    }
    if(fName === ''){
      setFnameErrorMessage('First name is required');
      isValid = false;
    }
    if(lname === ''){
      setLnameErrorMessage('Last name is required');
      isValid = false;
    }
    if(password === ''){
      setPasswordErrorMessage('Password is required');
      isValid = false;
    }
    return isValid;
  }

  const onSubmit = () => {
    if(validate()){
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setEmail('');
        setFname('');
        setLname('');
        setPassword('');
        setSubmissionMessage("Sign up was successfull");
      }, 3000)
    }
  }

  return (
    <form>
      <Box>
        <Input
          type="text"
          value={fName}
          placeholder="First Name"
          label="First Name *"
          rightIcon={fName !== '' ? 'icon-clear_24px':''}
          rightIconClick={() => {setFname("")}}
          leftIcon="icon-owering-people-with-creativity"
          error={fnameErrorMessage !== ''}
          errorMessage={fnameErrorMessage}
          onChange = {(e) => {setFname(e.target.value); setFnameErrorMessage('')}}
          borderType="curved"
          id="Default"/>
      </Box>
      <Box>
        <Input
        mt={10}
          type="text"
          value={lname}
          placeholder="Last Name"
          label="Last Name *"
          rightIcon={lname !== '' ? 'icon-clear_24px':''}
          rightIconClick={() => {setLname("")}}
          leftIcon="icon-owering-people-with-creativity"
          error={lnameErrorMessage !== ''}
          errorMessage={lnameErrorMessage}
          onChange = {(e) => {setLname(e.target.value); setLnameErrorMessage('')}}
          borderType="curved"
          id="Default"/>
      </Box>
      <Box mt={10}>
        <Input
          type="email"
          value={email}
          placeholder="Enter"
          label="Email *"
          rightIcon={email !== '' ? 'icon-clear_24px':''}
          rightIconClick={() => {setEmail("")}}
          leftIcon="icon-email_24px"
          error={emailErrorMessage !== ''}
          errorMessage={emailErrorMessage}
          onChange = {(e) => {setEmail(e.target.value); setEmailErrorMessage('')}}
          borderType="curved"
          id="Default"/>
      </Box>
      <Box mt={10}>
        <Input
          type="password"
          value={password}
          placeholder="Password (8 Characters long)"
          label="Password *"
          rightIcon={password !== '' ? 'icon-clear_24px':''}
          rightIconClick={() => {setPassword("")}}
          leftIcon="icon-lock_outline_24px"
          error={passwordErrorMessage !== ''}
          errorMessage={passwordErrorMessage}
          onChange = {(e) => {setPassword(e.target.value); setPasswordErrorMessage('')}}
          borderType="curved"
          id="Default"/>
      </Box>
      {
        submissionMessage && (
          <Text mt={10}>
            <span
              style={{
                color:'green', marginRight:'10px'
              }} className="icon-check_circle_24px"/>
            {submissionMessage}
          </Text>
        )
      }
      <Box mt={10}>
        <Button
          variant="primary"
          type="button"
          borderType="curved"
          withIcon
          disabled={submitting}
          onClick={onSubmit}>
          {/* <Spinner /> */}
          {
            submitting ? 'Please Wait...' : 'Signup'
          }
        </Button>
      </Box>
    </form>
  )
}

export default FormOne;