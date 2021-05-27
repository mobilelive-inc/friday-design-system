import React, { useState, useEffect } from 'react';
import Box from '../box';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import advancedStepper from './../theme/styles/advancedStepper';
import GlobalStyle from './../theme/globalStyles';
import {
  VistedStep,
  UnVisitedStep,
  ProgressBar,
  StepperContainer,
  StepItemContainer,
  AnnouncementText
} from './css';
import { Text } from './../typography';
import Icon from './../icon/Icon';

const AdvancedStepper = ({
  total = 3,
  value = 1,
  hideName = true,
  dataList = [],
  ...props
}) => {
  const [currentStep, setCurrentStep] = useState(value);
  const [steps, setSteps] = useState([]);
  const [visitedCount, setVisitedCount] = useState(1);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // setProgressWidth((value / total) * 100);
    if (value >= visitedCount) {
      setVisitedCount(value);
    }
    setCurrentStep(value);
  }, [total, value]);

  useEffect(() => {
    setStatus('You are now on step ' + value);
  }, [value]);

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
        <AnnouncementText aria-live="assertive" aria-label={status} />
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
                    <VistedStep
                      {...props}
                      aria-label={
                        item.name
                          ? 'Step ' +
                            item.number +
                            ' is Current Step' +
                            item.name
                          : 'Step ' + item.number + ' is Current Step'
                      }>
                      <Text>{item.number}</Text>
                    </VistedStep>
                    {hideName && (
                      <Text aria-label={item.name} bold>
                        {item.name}
                      </Text>
                    )}
                  </StepItemContainer>
                ) : (
                  <Box>
                    {item.isVisited === true ? (
                      <StepItemContainer alignment={alignValue}>
                        <VistedStep
                          {...props}
                          aria-label={
                            item.name
                              ? 'Step ' +
                                item.number +
                                ' is Visited Step' +
                                item.name
                              : 'Step ' + item.number + ' is Visited Step'
                          }
                          onClick={() => {
                            setCurrentStep(item.number);
                          }}>
                          <Icon className="font--size--lg icon-check ng-star-inserted" />
                        </VistedStep>
                        {hideName && (
                          <Text aria-label={item.name}>{item.name}</Text>
                        )}
                      </StepItemContainer>
                    ) : (
                      <StepItemContainer alignment={alignValue}>
                        <UnVisitedStep
                          {...props}
                          aria-label={
                            item.name
                              ? 'Step ' +
                                item.number +
                                ' is un visited step' +
                                item.name
                              : 'Step ' + item.number + ' is un visited step'
                          }>
                          <Text>{item.number}</Text>
                        </UnVisitedStep>
                        {hideName && (
                          <Text aria-label={item.name}>{item.name}</Text>
                        )}
                      </StepItemContainer>
                    )}
                  </Box>
                )}
              </Box>
            );
          })}
          <ProgressBar {...props} />
        </StepperContainer>
      </Box>
    </ThemeProvider>
  );
};

AdvancedStepper.defaultProps = {
  total: 3,
  value: 1,
  hideName: true,
  dataList: []
};

AdvancedStepper.propTypes = {
  /** number of total steps */
  total: PropTypes.number,
  /** current step in stepper */
  value: PropTypes.number,
  /** want to show/hide name with every step */
  hideName: PropTypes.bool,
  /** if names are visible than provide array of string to set these */
  dataList: PropTypes.array
};

export default AdvancedStepper;
