import React from 'react';
import {
  Flex , Box
} from 'rebass/styled-components';
import { ThemeProvider } from 'styled-components';
import FormOne from './FormOne';
import theme from '../../src/components/theme/defaultTheme';
import GlobalStyle from '../../src/components/theme/globalStyles';
import "../../src/components/icomoon_icons.css";

const KitchenSinkDemo = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Flex>
        <Box width={1/3} m={20}>
          <FormOne />
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default KitchenSinkDemo;