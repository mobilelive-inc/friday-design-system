import styled from 'styled-components'
import css from '@styled-system/css';

export const Wrapper = styled.div(
    css({
      display: `flex`,
      flexFlow:`row`,
      flexDirection: `row`,
    })
  );
  export const MainWrapper = styled.div(
   css({
     border: `4px solid`,
     borderColor: "lightprimary",
     padding: '2rem',
     marginBottom: "2rem",
   
   })
 );
  export const ButtonWrapper = styled.div(
     css({
        display: `flex`,
        flexDirection: `column`,
        marginRight:`50px`,
        marginBottom:'50px'
     })

  )
  export const InlineWrapper = styled.div(
   css({
      display: `flex`,
      flexDirection: `row`,
      marginRight:`50px`,
   })

)
