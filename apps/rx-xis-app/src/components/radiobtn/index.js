import React,{useState} from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '..'
import Radio from '../radio'
import GlobalStyle from '../theme/globalStyles'
import Text from '../typography'
import {Wrapper} from './css.js'


const Basicbtn = ({value}) =>{
    const [fruit, setfruit] = useState(fruit);
    return(
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Text>pic your favorite fruit{value} </Text>
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
          <Text>your favriote{fruit}</Text>
        </ThemeProvider>
    )
}

const RadioBtn = () => {
    
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Wrapper >
             <Basicbtn value="value"/>
             <Basicbtn  value="ng Modal" />
             <Basicbtn  value="Reactive Froms"/>
             </Wrapper>
        </ThemeProvider>
       
    )
}

export default RadioBtn
