import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Stepper from './../index';
import Text from './../../typography';
import Button from './../../Button';
import Box from './../../box';
import { Flex } from 'rebass/styled-components';
import Theme from '../../theme/styles/stepper';
import defaultTheme from '../../theme/defaultTheme';
import GlobalStyle from '../../theme/globalStyles';
import '../../icomoon_icons.css';

export default {
  title: 'Stepper',
  component: Stepper
};

export const BasicStepper = () => {
  const [step, setStep] = useState(1);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Text>Primary Theme</Text>
      <Stepper variant="primary" value={step} total={3} />
      <Text>Secondary Theme</Text>
      <Stepper variant="secondary" value={step} total={3} />
      <Text>Light Theme</Text>
      <Stepper variant="light" value={step} total={3} />
      <Text>Dark Theme</Text>
      <Stepper variant="dark" value={step} total={3} />
      <Text>Hidden Counter</Text>
      <Stepper
        variant="primary"
        value={step}
        total={3}
        isCountVisible={false}
      />
      <Flex mt={3}>
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
        {step === 3 && (
          <Flex>
            <Text> Step Three</Text>
          </Flex>
        )}
      </Flex>
      <ThemeProvider theme={defaultTheme}>
        <Flex>
          <Button
            disabled={step === 1}
            variant={step === 1 ? 'disabled' : 'primary'}
            onClick={() => {
              if (step > 1) {
                setStep(step - 1);
              }
            }}>
            Previous
          </Button>
          <Button
            disabled={step === 3}
            variant={step === 3 ? 'disabled' : 'secondary'}
            onClick={() => {
              if (step < 3) {
                setStep(step + 1);
              }
            }}>
            Next
          </Button>
        </Flex>
      </ThemeProvider>
    </ThemeProvider>
  );
};
