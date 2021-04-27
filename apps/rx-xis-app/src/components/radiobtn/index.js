import React,{useState} from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '..'
import Radio from '../radio'
import GlobalStyle from '../theme/globalStyles'
import Text from '../typography'
import {Wrapper,ButtonWrapper,InlineWrapper,MainWrapper} from './css.js'


const Basicbtn = ({value}) =>{
    const [fruit, setfruit] = useState(fruit);
    return(
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <ButtonWrapper>
            <Text>pic your favorite fruit {value}</Text>
            <Radio
            name="apple"
            value="apple"
            label="Apple"
            backgroundColor="primary"
            color="black"
            borderType="rounded"
            variant={fruit === 'apple' ? 'checked' : 'unchecked'}
            onChange={() => {
              setfruit('apple');
            }}
          />
           <Radio
            name="mango"
            value="mango"
            label="Mango"
            backgroundColor="primary"
            color="black"
            borderType="rounded"
            variant={fruit === 'mango' ? 'checked' : 'unchecked'}
            onChange={() => {
              setfruit('mango');
            }}
          />
           <Radio
            name="orange"
            value="orange"
            label="Orange"
            backgroundColor="primary"
            color="black"
            borderType="rounded"
            variant={fruit === 'orange' ? 'checked' : 'unchecked'}
            onChange={() => {
              setfruit('orange');
            }}
          />
          <Text color='primary'>your favriote : {fruit}</Text>
          </ButtonWrapper>
        </ThemeProvider>
    )    
}

const InlineButton = ({value}) =>{
  const [fruit, setfruit] = useState(fruit);
  return(
      <ThemeProvider theme={Theme}>
          <GlobalStyle />
              <Text>pic your favorite fruit {value}</Text>
              <InlineWrapper>
              <Radio
              name="apple"
              value="apple"
              label="Apple"
              backgroundColor="primary"
              color="black"
              borderType="rounded"
              variant={fruit === 'apple' ? 'checked' : 'unchecked'}
              onChange={() => {
                setfruit('apple');
              }}
            />
            <Radio
              name="mango"
              value="mango"
              label="Mango"
              backgroundColor="primary"
              color="black"
              borderType="rounded"
              variant={fruit === 'mango' ? 'checked' : 'unchecked'}
              onChange={() => {
                setfruit('mango');
              }}
            />
            <Radio
              name="orange"
              value="orange"
              label="Orange"
              backgroundColor="primary"
              color="black"
              borderType="rounded"
              variant={fruit === 'orange' ? 'checked' : 'unchecked'}
              onChange={() => {
                setfruit('orange');
              }}
            />
             </InlineWrapper>
            <Text color='primary'>{fruit}</Text>
       
      </ThemeProvider>
  )    
}

const RadioBtn = () => {
    
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Text variant='H1' mb={7}>Radio Button</Text>
            <MainWrapper>
              <Wrapper >
              <Text>Basic</Text>
              <Basicbtn value="value"/>
              <Basicbtn  value="ng Modal" />
              <Basicbtn  value="Reactive Froms"/>
              </Wrapper>
              <Text variant='H3'>Inline</Text>
              <InlineButton  />
             </MainWrapper>
        </ThemeProvider>
       
    )
}

export default RadioBtn
