import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Stepper from './../index';
import { Flex } from 'rebass/styled-components';
import Theme from '../../theme/defaultTheme';
import GlobalStyle from '../../theme/globalStyles';
import '../../icomoon_icons.css';

export default {
  title: 'Stepper',
  component: Stepper
};

export const Selects = () => {
  const [step, setStep] = useState(1);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Steper />
      <>
        {step === 1 && (
          <Flex>
            <Text> Step One</Text>
          </Flex>
        )}
        {step === 2 && (
          <Flex>
            <Text> Step Two</Text>
          </Flex>
        )}
      </>

      <View></View>
    </ThemeProvider>
  );
};
