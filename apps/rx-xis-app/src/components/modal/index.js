import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal  from 'react-modal';
import Box from '../box';
import {
  Header, CloseButton, CloseText, Footer
} from './css';
import {
  space, zIndices
} from '../theme/defaultTheme';

const customStyles = {
  overlay: {
    zIndex: zIndices[4],
    margin: '0',
    padding: '1rem',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'white',
    overflowY: 'scroll',
    opacity: 1,
    minWidth: '200px',
    maxWidth: '600px',
    width: '100%',
    margin: '2rem auto',
    // height: 'calc(100% - 4rem)',
    dispaly: 'flex',
    alignItems: 'center'
  },
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    borderRadius: '0',
    margin: '0',
    // padding: `${space[15]} ${space[7]}`,
  },
};


const Popover = ({
  header,
  footer,
  children,
  isOpen,
  onRequestClose,
  closeOnHeader,
  closeOnFooter,
  isBackButton,
  ...otherProps
}) => {
  return (
    <Modal
      data-testid="popup"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="responsiveModal"
      style={customStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}>
      <Box
        width={1}
        mx="auto"
        px={[0, '9.5em']}
        pb={[0, 0, 11]}
        pt={[0, 0, 15]}>
        <Header pr={[21, '7em']} pb={[13, 21]}>
          {header}
          {closeOnHeader && (
            <CloseButton
              onClick={onRequestClose}
              p="0"
              background="yellow"
              border="none"
              variant="none"
              position="absolute"
              right="0"
              mr={5}
              mt={5}>
              <span className="icon-clear_24px"></span>
            </CloseButton>
          )}
        </Header>
        <Box style={{padding:'15px'}}>{children}</Box>
        <Footer pt={[13, 21]}>
          {
            closeOnFooter && (
              <CloseButton
                onClick={onRequestClose}
                p="0"
                background="yellow"
                border="none"
                variant="none"
                position="absolute"
                ml={5}
                mr={5}>
                <span className="icon-clear_24px"></span>
                <CloseText>
                  Close
                </CloseText>
              </CloseButton>
            )
          }
        </Footer>
      </Box>
    </Modal>
  );
}

export default Popover;