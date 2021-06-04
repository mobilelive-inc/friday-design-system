import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Icon from '../icon/Icon';
import { ThemeProvider } from 'styled-components';
import Theme, { buttons } from '../theme/defaultTheme';
import Modaltheme from '../theme/styles/modal';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Closebutton,
  Wrapperdiv,
  Description,
  Modalhead,
  Sronly,
  Section,
  Modalbody,
  Option,
  Textarea,
  Modalfooter,
  Buttoncontianer,
} from './css';
import Text from '../typography';
import GlobalStyle from '../theme/globalStyles';
import Button from '../Button';
import Radio from '../radio';
import Checkbox from '../checkbox';
import Box from '../box';
import Input from '../Input';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none'
  }
};
Modal.setAppElement('#root');

export const ScrollModal = props => {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIschecked] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return(
    <ThemeProvider theme={Modaltheme}>
      <GlobalStyle />
      <Section>
        <Text variant="H1" mb={16}>
          {' '}
          {props.title} Modal
        </Text>
          <Button
            variant="outlinePrimary"
            width={170}
            onClick={handleOpenModal}>
            Open Modal
          </Button>
          <Modal
            isOpen={showModal}
            style={customStyles}
            contentLabel="Modal"
            onRequestClose={handleCloseModal}
            tabIndex="-1"
            aria-modal="true"
            role="dialog"
            aria-modal="true"
            aria-labelledby="Modal is open">
            <Wrapperdiv style={{ width: props.width}}>
            <Modalhead mb={16}>
              <Text variant="H4">{props.heading}</Text>
              <Closebutton onClick={handleCloseModal} tabIndex='1'>
                <Icon className="icon-close" />
                <Sronly>Close Modal</Sronly>
              </Closebutton>
              </Modalhead>
              <Modalbody>
              <Text variant='H4' mb={16}>
                {props.firsttext}
              </Text>
              <Text mb={10}>{props.firstheading}</Text>
              <Option>
                  <Checkbox 
                    id="option"
                    name="Option"
                    value="Option1"
                    label={props.option1}
                    backgroundColor="black"
                    color="black"
                    variant="unchecked"
                    lineHight="5"
                    onChange={() => {
                      setIschecked(!isChecked);
                    }}
                  />
                   <Checkbox 
                    id="option"
                    name="Option"
                    value="Option2"
                    label={props.option2}
                    backgroundColor="black"
                    color="black"
                    variant="unchecked"
                    onChange={() => {
                      setIschecked(!isChecked);
                    }}
                  />
                   <Checkbox 
                    id="option"
                    name="Option"
                    value="Option3"
                    label={props.option3}
                    backgroundColor="black"
                    color="black"
                    variant="unchecked"
                    onChange={() => {
                      setIschecked(!isChecked);
                    }}
                  />
              </Option>
              <Text variant='H4' my={10}>
               {props.secondtitle}
              </Text>
              <Text>{props.secondtext}</Text>
              <Text my={16}>Email</Text>
              <Box m={10} width="497px">
                <Input
                  type="Email"
                  value=""
                  placeholder="Text"
                  id="bottombordered"
                  withBottomBorderOnly
                />
              </Box>
              <Text my={16}>Add a comment</Text>
              <Box m={10} width="497px">
              <Input
                  type="Text"
                  value=""
                  placeholder="Text"
                  id="bottombordered"
                  withBottomBorderOnly
                />
              {/* <Textarea>
                Please comment here...
              </Textarea> */}
              </Box>
              </Modalbody>
              <Modalfooter>
                <Checkbox
                 id="option"
                 name="Option"
                 value="option1"
                 backgroundColor="black"
                 color="black"
                 errorMessage=""
                 label="I have read and continue with application."
                 isFilled={false}
                 variant="checked"
                 onChange={() => {
                   setIschecked(!isChecked);
                 }}
                 />
                <Buttoncontianer>
                  <Button variant='secondary' m={10}>Save</Button>
                  <Button variant='secondary' m={10}>Cancel</Button>
                </Buttoncontianer>
              </Modalfooter>
            </Wrapperdiv>
          </Modal>
      </Section>

    </ThemeProvider>
  )
}

const Modalcomp = props => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <ThemeProvider theme={Modaltheme}>
      <GlobalStyle />
      <Section>
        <Text variant="H1" mb={16}>
            {' '}
            {props.title} Modal
          </Text>
          <Button
            variant="outlinePrimary"
            width={170}
            onClick={handleOpenModal}>
            Open Modal
          </Button>
          <Modal
            isOpen={showModal}
            style={customStyles}
            contentLabel="Modal"
            onRequestClose={handleCloseModal}
            tabIndex="-1"
            aria-modal="true"
            role="dialog"
            aria-modal="true"
            aria-labelledby="Modal is open">
            <Wrapperdiv style={{ width: props.width, height: props.height }}>
              <Modalhead mb={16}>
              <Text variant="H3">{props.heading}</Text>
                <Closebutton onClick={handleCloseModal} tabIndex='1'>
                  <Icon className="icon-close" />
                  <Sronly>Close Modal</Sronly>
                </Closebutton>
              </Modalhead>
              
              <Text>{props.text}</Text>
            </Wrapperdiv>
          </Modal>
      </Section>
    </ThemeProvider>
  );
};


Modalcomp.propTypes = {
  /** add title prop for adding title to modal */
  title: PropTypes.string,
  /** add text prop for subheading  to modal */
  text: PropTypes.string,
  /** add width props to the for small large or extra small modal */
  width:PropTypes.number,
   /** add height props to the for small large a=or extra small modal */
  height:PropTypes.number,
  /** For add padding to main component */
  p: PropTypes.number,
  /** For add top padding to main component */
  pt: PropTypes.number,
  /** For add bottom padding to main component */
  pb: PropTypes.number,
  /** For add left padding to main component */
  pl: PropTypes.number,
  /** For add right padding to main component */
  pr: PropTypes.number,
  /** For add left & right padding to main component */
  px: PropTypes.number,
  /** For add top & bottom padding to main component */
  py: PropTypes.number,
  /** For add margin to main component */
  m: PropTypes.number,
  /** For add top margin to main component */
  mt: PropTypes.number,
  /** For add bottom margin to main component */
  mb: PropTypes.number,
  /** For add left margin to main component */
  ml: PropTypes.number,
  /** For add right margin to main component */
  mr: PropTypes.number,
  /** For add left & right margin to main component */
  mx: PropTypes.number,
  /** For add top & bottom margin to main component */
  my: PropTypes.number,
};

export default Modalcomp;
