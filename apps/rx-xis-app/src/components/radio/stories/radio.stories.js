import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import  Radio from "..";
import Text from '../../typography';
import  Theme from '../../theme/defaultTheme'
import GlobalStyle from '../../theme/globalStyles';
import '../../icomoon_icons.css';
import {
  Flex, Box
} from 'rebass/styled-components'
// import DeleteIcon from '../src/icons/delete.svg'
// import Favorite from '../src/icons/favorite.svg';
// import AddPhoto from '../src/icons/add_a_photo.svg';

export default {
  title: 'Radio',
  component: Radio,
};

export const Radios = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Text variant="H5" ml={10}>Radios</Text>
    <Flex>
      <Box m={10}>
      <Radio name="Radio" value="Radio" color="black" variant={"unchecked"}/>
      </Box>
      <Box m={10} ml={21}>
      <Radio name="Radio" value="Radio" color="black" variant={"checked"}/>
      </Box>
    </Flex>
    <Flex>
      <Box m={10}>
      <Radio name="Radio" value="Radio" color="black" variant={"unchecked"} borderType="rounded"/>
      </Box>
      <Box m={10} ml={21}>
      <Radio name="Radio" value="Radio" ml="20px" color="black" variant={"checked"} borderType="rounded"/>
      </Box>
    </Flex>
    <Flex>
      <Box m={10}>
      <Radio name="Radio" value="Radio" label="Radio" color="black" variant={"unchecked"}/>
      </Box>
      <Box m={10}>
      <Radio name="Radio" value="Radio" label="Radio" color="black" variant={"checked"}/>
      </Box>
    </Flex>
    <Flex>
      <Box m={10}>
      <Radio name="Radio" value="Radio" label="Radio" color="black" variant={"unchecked"} borderType="rounded"/>
      </Box>
      <Box m={10}>
      <Radio name="Radio" value="Radio" label="Radio" color="black" variant={"checked"} borderType="rounded"/>
      </Box>
    </Flex>
    <Flex>
      <Box m={10}>
      <Radio name="Radio" value="Radio" label="Radio" color="black" variant={"unchecked"} error/>
      </Box>
      <Box m={10}>
      <Radio name="Radio" value="Radio" label="Radio" color="black" variant={"checked"} error/>
      </Box>
    </Flex>
    <Flex>
      <Box m={10}>
      <Radio name="Radio" value="Radio" label="Radio" color="black" variant={"unchecked"} error borderType="rounded"/>
      </Box>
      <Box m={10}>
      <Radio name="Radio" value="Radio" label="Radio" color="black" variant={"checked"} error borderType="rounded"/>
      </Box>
    </Flex>
  </ThemeProvider>
);





