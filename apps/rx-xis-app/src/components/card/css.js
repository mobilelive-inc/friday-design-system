import { NONAME } from 'dns';
import styled from 'styled-components';

export const MainWrapper = styled.div (
    css({
        padding:[7],
        border:'4px solid',
        borderColor:'lightprimary',
        marginBottom:[7],
        color:[black],
    })
)
export const Figure = styled.figure (
    css({
      margin:'0 !important',
    })
)
export const Image = styled.img(
    css({
        height:'auto',
        display:'block',
        maxWidth:'100%',
        verticalAlign:'middle',
        borderStyle:'none',
        
        })
)