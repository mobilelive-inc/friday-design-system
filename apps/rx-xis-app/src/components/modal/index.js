import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Icon from '../icon/Icon';
import { ThemeProvider } from 'styled-components';
import Theme from '../theme/defaultTheme';
import {
  Wrapper,
  Closebutton,
  Wrapperdiv,
  Description,
  Modalhead,
  Sronly,
  Section
} from './css';
import Text from '../typography';
import GlobalStyle from '../theme/globalStyles';
import Button from '../Button';

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

const Modalcomp = props => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Section>
        <Text variant="H1" mb={10} ml={8}>
          {' '}
          Modal
        </Text>
        <Wrapper>
          {/* <Button onClick={handleOpenModal}>Open Modal</Button> */}
          <Button variant="outlinePrimary" onClick={handleOpenModal}>
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
            <Wrapperdiv>
              <Modalhead> What is cupcake? This is a title.</Modalhead>
              <Closebutton onClick={handleCloseModal}>
                <Icon className="icon-close" />
                <Sronly>Close Modal</Sronly>
              </Closebutton>
              <Description>
                standard cupcake uses the same basic ingredients as
                standard-sized cakes: butter, sugar, eggs, and flour. Nearly any
                recipe that is suitable for a layer cake can be used to bake
                cupcakes. The cake batter used for cupcakes may be flavored or
                have other ingredients stirred in, such as raisins, berries,
                nuts, or chocolate chips.
              </Description>
            </Wrapperdiv>
          </Modal>
        </Wrapper>
      </Section>
    </ThemeProvider>
  );
};

export default Modalcomp;
