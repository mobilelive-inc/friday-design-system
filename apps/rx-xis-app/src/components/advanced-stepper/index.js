import React, { useState, useEffect } from 'react';
import Box from '../box';
import { ThemeProvider } from 'styled-components';
import stepperTheme from './../theme/defaultTheme';
import GlobalStyle from './../theme/globalStyles';
import { VistedStep, UnVisitedStep, ProgressBar } from './css';
import PropTypes from 'prop-types';
import { Text } from './../typography';

const AdvancedStepper = ({ total = 3, value, isCountVisible }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    // setProgressWidth((value / total) * 100);
  }, [total, value]);

  useEffect(() => {
    initializedSteps();
  }, []);

  const initializedSteps = () => {
    let array = [];
    for (let i = 0; i < total; i++) {
      array.push({
        number: i + 1,
        isVisited: false,
        isCurrentStep: i === 0 ? true : false
      });
    }
    setSteps(array);
  };

  return (
    <ThemeProvider theme={stepperTheme}>
      <GlobalStyle />
      <Box width="100%">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
          <ProgressBar />
          {steps.map((item, index) => {
            console.log('Item: ', item);
            return (
              <div>
                {item.isCurrentStep === true ? (
                  <VistedStep>
                    <Text>{item.number}</Text>
                  </VistedStep>
                ) : (
                  <div>
                    {item.isVisited === true ? (
                      <VistedStep>
                        <span className="font--size--lg icon-check ng-star-inserted" />
                      </VistedStep>
                    ) : (
                      <UnVisitedStep>
                        <Text>{item.number}</Text>
                      </UnVisitedStep>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default AdvancedStepper;
