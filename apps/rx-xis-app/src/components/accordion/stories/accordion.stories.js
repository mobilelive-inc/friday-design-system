import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import Accordion, { AccordionHeader, AccordionCollapse } from '..';
import Option from '../../option';
import Text from '../../typography';
import Theme from '../../theme/defaultTheme';
import GlobalStyle from '../../theme/globalStyles';
import '../../icomoon_icons.css';
import { Flex, Box } from 'rebass/styled-components';
// import DeleteIcon from '../src/icons/delete.svg'
// import Favorite from '../src/icons/favorite.svg';
// import AddPhoto from '../src/icons/add_a_photo.svg';

export default {
  title: 'Accordion',
  component: Accordion
};

export const BasicAccordion = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Text variant="H5" mb={5} ml={2}>
      Accordion
    </Text>

    <Accordion onExpand={() => {}} onCollapse={() => {}}>
      <AccordionHeader title="Expanable" />
      <AccordionCollapse>
        <div>This is story</div>
      </AccordionCollapse>
    </Accordion>
  </ThemeProvider>
);
