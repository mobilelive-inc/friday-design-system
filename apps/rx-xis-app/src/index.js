import React from 'react';
// import {
//   Button, index, Innput
// } from '../build'
import { ThemeProvider } from 'styled-components';
import {
  Flex, Box
} from 'rebass/styled-components';
import Button from './components/Button'
// import Button from '../../../build';
import { Text } from './components/typography';
import Span from './components/span/span';
import Input from './components/Input';
import theme from './components/theme/defaultTheme';
import "./components/icomons_styles.scss"

function App(){
  return(
    <ThemeProvider theme={theme}>
      <Text variant="H3" m={[5]}>Buttons</Text>
      <Text variant="H5" m={[5]}>Solid buttons with block border</Text>
      <Button
        width="10%" m="10px">Primary</Button>
      <Button
        variant="secondary"
        width="10%" m="10px">Secondary</Button>
      <Button
        variant="success"
        width="10%" m="10px">Success</Button>
      <Button
        variant="danger"
        width="10%" m="10px">Danger</Button>
      <Button
        variant="warning"
        width="10%" m="10px">Warning</Button>
      <Button
        variant="info"
        width="10%" m="10px">Info</Button>
      <Button
        variant="light"
        width="10%" m="10px">Light</Button>
      <Text variant="H5" m={[5]}>Outline buttons with block border</Text>
      <Button
        variant="outlinePrimary"
        width="10%" m="10px">Primary</Button>
      <Button
        variant="outlineSecondary"
        width="10%" m="10px">Secondary</Button>
      <Button
        variant="outlineSuccess"
        width="10%" m="10px">Success</Button>
      <Button
        variant="outlineDanger"
        width="10%" m="10px">Danger</Button>
      <Button
        variant="outlineInfo"
        width="10%" m="10px">Info</Button>
      <Button
        variant="outlineLight"
        width="10%" m="10px">Light</Button>
      <Button
        variant="outlineDark"
        width="10%" m="10px">Dark</Button>
      <br></br>
      <Text variant="H5" m={[5]}>Curved Buttons</Text>
      <Button
        variant="outlinePrimary"
        borderRadius="10px"
        width="10%" m="10px">Primary</Button>
      <Button
        variant="outlineSecondary"
        borderRadius="10px"
        width="10%" m="10px">Secondary</Button>
      <Button
        variant="outlineSuccess"
        borderRadius="10px"
        width="10%" m="10px">Success</Button>
      <Button
        variant="outlineDanger"
        borderRadius="10px"
        width="10%" m="10px">Danger</Button>
      <Button
        variant="outlineInfo"
        borderRadius="10px"
        width="10%" m="10px">Info</Button>
      <Button
        variant="outlineLight"
        borderRadius="10px"
        width="10%" m="10px">Light</Button>
      <Button
        variant="outlineDark"
        borderRadius="10px"
        width="10%" m="10px">Dark</Button>
      <br></br>
      <Text variant="H5" m={[5]}>Rounded Buttons</Text>
      <Button
        variant="primary"
        borderRadius="50px"
        width="10%" m="10px">Primary</Button>
      <Button
        variant="secondary"
        borderRadius="50px"
        width="10%" m="10px">Secondary</Button>
      <Button
        variant="success"
        borderRadius="50px"
        width="10%" m="10px">Success</Button>
      <Button
        variant="danger"
        borderRadius="50px"
        width="10%" m="10px">Danger</Button>
      <Button
        variant="info"
        borderRadius="50px"
        width="10%" m="10px">Info</Button>
      <Button
        variant="light"
        borderRadius="50px"
        width="10%" m="10px">Light</Button>
      <Text variant="H5" m={[5]}>Buttons With Icons</Text>
      <Flex>
        <Box width="10%" mr={10}>
          <Button
            variant="outlinePrimary"
            m="10px" withIcon display="flex">
            <Span mr="10px" className="icon-accuracy"/>
            Primary
          </Button>
        </Box>
        <Box width="10%" mr={10}>
          <Button
            variant="outlineSecondary"
            m="10px" withIcon display="flex">
            <Span mr="10px" className="icon-cloud-architecture"/>
            Secondary
          </Button>
        </Box>
        <Box width="10%" mr={10}>
          <Button
            variant="outlineSuccess"
            m="10px" withIcon display="flex">
            <Span mr="10px" className="icon-accuracy"/>
            Success
          </Button>
        </Box>
        <Box width="10%" mr={10}>
          <Button
            variant="outlineDanger"
            m="10px" withIcon display="flex">
            <Span iconMarginRight className="icon-cloud-architecture"/>
            Dangerours
          </Button>
        </Box>
      </Flex>
      <Text variant="H5" m={[5]}>Buttons With Icons on both sides</Text>
      <Flex>
        <Box width="10%" mr={10}>
          <Button
            variant="outlinePrimary"
            m="10px" withIcon display="flex">
            {/* <Span mr="10px" className="icon-accuracy"/> */}
            <Span leftAlign className="icon-favorite_24px"/>
            Primary
          </Button>
        </Box>
        <Box width="10%" mr={10}>
          <Button
            variant="outlineSecondary"
            m={[10]} withIcon display="flex">
            <Span mr="10px" className="icon-cloud-architecture"/>
            Secondary
            <Span ml="10px" className="icon-favorite_24px"/>
          </Button>
        </Box>
        <Box width="10%" mr={10}>
          <Button
            variant="outlineSuccess"
            m="10px" withIcon display="flex">
            <Span mr="10px" className="icon-accuracy"/>
            Success
            <Span ml="10px" className="icon-check_circle_outline_24px"/>
          </Button>
        </Box>
        <Box width="10%" mr={10}>
          <Button
            variant="outlineDanger"
            m="10px" withIcon display="flex">
            <Span iconMarginRight className="icon-cloud-architecture"/>
            Dangerous
            <Span ml="10px" className="icon-favorite_24px"/>
          </Button>
        </Box>
      </Flex>
      <Text variant="H5" m={[5]}>Icon Only Buttons</Text>
      <Flex>
        <Box  mr={10}>
          <Button
            variant="iconBtn"
            backgroundColor="black"
            color="white"
            withIcon
            m="10px"
            width="40px">
            <Span className="icon-info_24px" />
          </Button>
        </Box>
        <Box mr={10}>
          <Button
            variant="iconBtn"
            border="2px solid black"
            withIcon
            m="10px"
            borderRadius={[10]}
            width="40px">
            <Span className="icon-delete_24px" />
          </Button>
        </Box>
        <Box mr={10}>
          <Button
            variant="iconBtn"
            withIcon
            m="10px"
            width="40px">
            <Span className="icon-delete_24px" />
          </Button>
        </Box>
      </Flex>
      <Text variant="H5" m={[5]}>Buttons as tooltips</Text>
      <Flex>
        <Box  ml={12}>
          <Button
            variant="link"
            width="8%" m="10px" withIcon display="flex">
            <Span mr="10px" className="icon-info_24px" />
            Tooltip
          </Button>
        </Box>
        <Box  ml={12}>
          <Button
            variant="link"
            width="8%" m="10px" withIcon display="flex">
            <Span className="icon-delete_24px" />
            Delete
          </Button>
        </Box>
        <Input
          type="text"
          value=""
          placeholder="Email"
          label="Email"
          id="email"
          showErrorMessage
          errorMessage="you have got errors"/>
      </Flex>
    </ThemeProvider>
  )
}

export default App;