import React, { useState, useEffect } from 'react';
import Box from '../box';
import { ThemeProvider } from 'styled-components';
import advancedStepper from './../theme/styles/advancedStepper';
import GlobalStyle from './../theme/globalStyles';
import {
  VistedStep,
  UnVisitedStep,
  ProgressBar,
  StepperContainer,
  StepItemContainer
} from './css';
import PropTypes from 'prop-types';
import { Text } from './../typography';
import Icon from './../icon/Icon';

const AdvancedStepper = ({
  total = 3,
  value = 1,
  hideName = true,
  dataList = []
}) => {
  const [currentStep, setCurrentStep] = useState(value);
  const [steps, setSteps] = useState([]);
  const [visitedCount, setVisitedCount] = useState(1);

  useEffect(() => {
    // setProgressWidth((value / total) * 100);
    if (value >= visitedCount) {
      setVisitedCount(value);
    }
    setCurrentStep(value);
  }, [total, value]);

  useEffect(() => {
    initializedSteps();
  }, []);

  useEffect(() => {
    initializedSteps();
  }, [currentStep]);

  useEffect(() => {
    initializedSteps();
  }, [visitedCount]);

  const initializedSteps = () => {
    let array = [];
    for (let i = 1; i <= total; i++) {
      array.push({
        number: i,
        isVisited: i <= visitedCount ? true : false,
        isCurrentStep: i === currentStep ? true : false,
        name: dataList[i - 1]
      });
    }
    setSteps(array);
  };

  return (
    <ThemeProvider theme={advancedStepper}>
      <GlobalStyle />
      <Box width="100%">
        <StepperContainer>
          {steps.map((item, index) => {
            let alignValue = 'start';
            switch (index) {
              case 0:
                {
                  alignValue = 'start';
                }
                break;
              case steps.length - 1:
                {
                  alignValue = 'flex-end';
                }
                break;
              default:
                alignValue = 'center';
            }
            return (
              <Box>
                {item.isCurrentStep === true ? (
                  <StepItemContainer alignment={alignValue}>
                    <VistedStep>
                      <Text>{item.number}</Text>
                    </VistedStep>
                    {hideName && <Text bold>{item.name}</Text>}
                  </StepItemContainer>
                ) : (
                  <Box>
                    {item.isVisited === true ? (
                      <StepItemContainer alignment={alignValue}>
                        <VistedStep
                          onClick={() => {
                            setCurrentStep(item.number);
                          }}>
                          <Icon className="font--size--lg icon-check ng-star-inserted" />
                        </VistedStep>
                        {hideName && <Text>{item.name}</Text>}
                      </StepItemContainer>
                    ) : (
                      <StepItemContainer alignment={alignValue}>
                        <UnVisitedStep>
                          <Text>{item.number}</Text>
                        </UnVisitedStep>
                        {hideName && <Text>{item.name}</Text>}
                      </StepItemContainer>
                    )}
                  </Box>
                )}
              </Box>
            );
          })}
          <ProgressBar />
        </StepperContainer>
      </Box>
    </ThemeProvider>
  );
};

export default AdvancedStepper;
