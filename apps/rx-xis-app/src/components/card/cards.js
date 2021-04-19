import React from 'react'
import {Wrapper, Figure, Image} from 'css'
import Text from '../typography'

const cards = (props) => {
    return (
        <Wrapper>
            <Text variant={H5}>{props.title}</Text>
            <Figure>
                <Image src={props.cardImage}></Image>
            </Figure>
        </Wrapper>
    )
}

export default cards
