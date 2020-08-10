import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import  Tooltip from "..";
import { TooltipWrapper } from '../css';
import { Wrapper , InnerWrap} from './css';
import Text from '../../typography';
import Input from '../../Input';
import Button from '../../Button';
import  Theme from '../../theme/defaultTheme'
import GlobalStyle from '../../theme/globalStyles';
import '../../icomoon_icons.css';
import {
  Flex, Box, Image
} from 'rebass/styled-components'
// import DeleteIcon from '../src/icons/delete.svg'
// import Favorite from '../src/icons/favorite.svg';
// import AddPhoto from '../src/icons/add_a_photo.svg';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

export const Tooltips = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Text variant="H5" ml={10} mb={20}>Tooltips</Text>
    <Wrapper>
      <InnerWrap className="topLeft">
      <TooltipWrapper>
            <Button variant="primary">Top Start</Button>
            <Tooltip text="This is tooltip" position="top-start" withArrow mb="2rem"/>
        </TooltipWrapper>
      </InnerWrap>
      <InnerWrap className="topCenter">
      <TooltipWrapper>
            <Button variant="primary">Top</Button>
            <Tooltip text="This is tooltip" position="top" withArrow mb="2rem"/>
        </TooltipWrapper>
      </InnerWrap>
      <InnerWrap className="topRight">
      <TooltipWrapper>
            <Button variant="primary">Top Right</Button>
            <Tooltip text="This is tooltip" position="top-end" withArrow mb="2rem"/>
        </TooltipWrapper>
      </InnerWrap>
      <InnerWrap className="leftTop">
      <TooltipWrapper>
            <Button variant="primary">Left Top</Button>
            <Tooltip text="This is tooltip" position="left-end" withArrow/>
        </TooltipWrapper>
      </InnerWrap>
      <InnerWrap className="leftCenter">
      <TooltipWrapper>
            <Button variant="primary">Left Center</Button>
            <Tooltip text="This is tooltip" position="left" withArrow/>
        </TooltipWrapper>
      </InnerWrap>
      <InnerWrap className="leftBottom">
      <TooltipWrapper>
            <Button variant="primary">Left Bottom</Button>
            <Tooltip text="This is tooltip" position="left-start" withArrow/>
        </TooltipWrapper>
      </InnerWrap>
      <InnerWrap className="rightTop">
      <TooltipWrapper>
            <Button variant="primary">Right Top</Button>
            <Tooltip text="This is tooltip" position="right-end" withArrow/>
        </TooltipWrapper>
      </InnerWrap>
      <InnerWrap className="rightCenter">
      <TooltipWrapper>
            <Button variant="primary">Right center</Button>
            <Tooltip text="This is tooltip" position="right" withArrow/>
        </TooltipWrapper>
      </InnerWrap>
      <InnerWrap className="rightBottom">
      <TooltipWrapper>
            <Button variant="primary">Right Bottom</Button>
            <Tooltip text="This is tooltip" position="right-start" withArrow/>
        </TooltipWrapper>
      </InnerWrap>
      <InnerWrap className="bottomLeft">
      <TooltipWrapper>
            <Button variant="primary">Bottom Right</Button>
            <Tooltip text="This is tooltip" position="bottom-start" withArrow mt="2rem"/>
        </TooltipWrapper>
      </InnerWrap>
      <InnerWrap className="bottomCenter">
      <TooltipWrapper>
            <Button variant="primary">Bottom Center</Button>
            <Tooltip text="This is tooltip" position="bottom" withArrow mt="2rem"/>
        </TooltipWrapper>
      </InnerWrap>
      <InnerWrap className="bottomRight">
      <TooltipWrapper>
            <Button variant="primary">Bottom Center</Button>
            <Tooltip text="This is tooltip" position="bottom-end" withArrow mt="2rem"/>
        </TooltipWrapper>
      </InnerWrap>
    </Wrapper>
  </ThemeProvider>
);

export const Usage = () => (
  <ThemeProvider theme={Theme}>
    <Flex p={20}>
      <Box width={1/3}>
        <Text>
          This is Tooltip title
          <TooltipWrapper>
            <span className="icon-info_24px" style={{marginLeft:'5px', color:'#F48245'}}/>
            <Tooltip text="This is tooltip" position="top" withArrow curved/>
          </TooltipWrapper>
        </Text>
      </Box>
      <Box width={1/3}>
        <TooltipWrapper>
        <Text style={{textDecoration:'underline'}}>
          This is Tooltip title
        </Text>
        <Tooltip text="This is tooltip" position="top-start" withArrow curved/>
        </TooltipWrapper>
      </Box>
      <Box width={1/3}>
        <TooltipWrapper>
        <span className="icon-info_24px" style={{fontSize:'18px', color:'#2874A4'}}/>
        <Tooltip text="This is tooltip" position="top" withArrow curved/>
        </TooltipWrapper>
      </Box>
    </Flex>
    <Flex p={20}>
    <Box width={1/3}>
      <TooltipWrapper>
      <Input
          width="70%"
          type="text"
          value=""
          placeholder=""
          label="Search"
          id="search"
          leftIcon="icon-search_24px"/>
          <Tooltip text="Search some stuff" position="top-start" withArrow curved mb="0.5rem"/>
      </TooltipWrapper>
      </Box>
      <Box width={1/3} textAlign="center">
      <Image src={require('./assets/avatar1.svg')} mr={3}/>
        <TooltipWrapper>
          <Image src={require('./assets/avatar2.svg')}/>
          <Tooltip text="Jane Doe's profile" position="top" withArrow curved mb="4rem"/>
        </TooltipWrapper>
        <TooltipWrapper>
          <Image src={require('./assets/avatar3.svg')} ml={3}/>
          <Tooltip text="John Doe's Profile" position="top" withArrow curved mb="4rem"/>
        </TooltipWrapper>
      </Box>
    </Flex>
  </ThemeProvider>
);





