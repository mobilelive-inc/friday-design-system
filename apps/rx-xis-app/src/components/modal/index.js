import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Icon from '../icon/Icon';
import { ThemeProvider } from 'styled-components';
import Theme from '../theme/defaultTheme';
import Modaltheme from '../theme/styles/modal';
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
    <ThemeProvider theme={Modaltheme}>
      <GlobalStyle />
      <Section>
        <Text variant="H1" mb={16} ml={16}>
          {' '}
          {props.title} Modal
        </Text>
        <Wrapper>
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
            <Wrapperdiv style={{ width: props.width }}>
              <Text variant="H3"> What is cupcake? This is a title.</Text>
              <Closebutton onClick={handleCloseModal}>
                <Icon className="icon-close" />
                <Sronly>Close Modal</Sronly>
              </Closebutton>
              <Text>
                standard cupcake uses the same basic ingredients as
                standard-sized cakes: butter, sugar, eggs, and flour. Nearly any
                recipe that is suitable for a layer cake can be used to bake
                cupcakes. The cake batter used for cupcakes may be flavored or
                have other ingredients stirred in, such as raisins, berries,
                nuts, or chocolate chips. standard cupcake uses the same basic
                ingredients as standard-sized cakes: butter, sugar, eggs, and
                flour. Nearly any recipe that is suitable for a layer cake can
                be used to bake cupcakes. The cake batter used for cupcakes may
                be flavored or have other ingredients stirred in, such as
                raisins, berries, nuts, or chocolate chips.
              </Text>
            </Wrapperdiv>
          </Modal>
        </Wrapper>
      </Section>
    </ThemeProvider>
  );
};

export default Modalcomp;
