import React from 'react'
import {MainWrapper} from 'css';
import {styled} from 'styled-components'
import { Theme } from '..'
import GlobalStyle from '../theme/globalStyles'
import Text from '../typography'
import cards from './cards'
import cardimage from '../../assets/img-01.png'

const Card = () => {
    return (
        // <ThemeProvider theme={Theme}>
        //     <GlobalStyle />
        //     {/* <Text variant={H5} >Card</Text>
        //      <MainWrapper>
        //       <cards title={Default}  cardimage={cardimage}/>
        //      </MainWrapper> */}
        // </ThemeProvider>
        <div>
            <h1>hi im form Card</h1>
        </div>
    )
}

export default Card
