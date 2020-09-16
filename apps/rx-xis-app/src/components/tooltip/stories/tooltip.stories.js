import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import Tooltip from '..';
import { TooltipWrapper } from '../css';
import { Wrapper, InnerWrap } from './css';
import Text from '../../typography';
import Input from '../../Input';
import Button from '../../Button';
import Theme from '../../theme/defaultTheme';
import GlobalStyle from '../../theme/globalStyles';
import '../../icomoon_icons.css';
import { Flex, Box, Image } from 'rebass/styled-components';
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
    <Text variant="H5" ml={10} mb={20}>
      Tooltips
    </Text>
    <Wrapper>
      <InnerWrap className="topLeft">
        <Tooltip
          labelText="Start"
          arrow
          size="big"
          position="top-start"
          distance={30}
        >
          <Button variant="primary">Top Start</Button>
        </Tooltip>
      </InnerWrap>
      <InnerWrap className="topCenter">
        <Tooltip labelText="Top" arrow size="big" position="top" distance={30}>
          <Button variant="primary">Top</Button>
        </Tooltip>
      </InnerWrap>
      <InnerWrap className="topRight">
        <Tooltip
          labelText="End"
          arrow
          size="big"
          position="top-end"
          distance={30}
        >
          <Button variant="primary">Top End</Button>
        </Tooltip>
      </InnerWrap>
      <InnerWrap className="leftTop">
        <Tooltip
          labelText="this start tooltip"
          arrow
          size="big"
          position="left-start"
        >
          <Button variant="primary">Left Start</Button>
        </Tooltip>
      </InnerWrap>
      <InnerWrap className="leftCenter">
        <Tooltip labelText="left" arrow size="big" position="left">
          <Button variant="primary">Left</Button>
        </Tooltip>
      </InnerWrap>
      <InnerWrap className="leftBottom">
        <Tooltip labelText="End" arrow size="big" position="left-end">
          <Button variant="primary">Left End</Button>
        </Tooltip>
      </InnerWrap>
      <InnerWrap className="rightTop">
        <Tooltip labelText="Start" arrow size="big" position="right-start">
          <Button variant="primary">Right Start</Button>
        </Tooltip>
      </InnerWrap>
      <InnerWrap className="rightCenter">
        <Tooltip labelText="Right" arrow size="big" position="right">
          <Button variant="primary">Right</Button>
        </Tooltip>
      </InnerWrap>
      <InnerWrap className="rightBottom">
        <Tooltip labelText="End" arrow size="big" position="right-end">
          <Button variant="primary">Right End</Button>
        </Tooltip>
      </InnerWrap>
      <InnerWrap className="bottomLeft">
        <Tooltip
          labelText="Left"
          arrow
          size="big"
          distance={30}
          position="bottom-start"
        >
          <Button variant="primary">Bottom Start</Button>
        </Tooltip>
      </InnerWrap>
      <InnerWrap className="bottomCenter">
        <Tooltip
          labelText="Bottom"
          arrow
          size="big"
          distance={30}
          position="bottom"
        >
          <Button variant="primary">Bottom</Button>
        </Tooltip>
      </InnerWrap>
      <InnerWrap className="bottomRight">
        <Tooltip
          labelText="End"
          arrow
          size="big"
          distance={30}
          position="bottom-end"
        >
          <Button variant="primary">Bottom End</Button>
        </Tooltip>
      </InnerWrap>
    </Wrapper>
  </ThemeProvider>
);

export const Usage = () => (
  <ThemeProvider theme={Theme}>
    <Flex p={20}>
      <Box width={1 / 3}>
        <Text>
          This is Tooltip title
          <Tooltip
            labelText="Click for details"
            arrow
            size="small"
            position="bottom-end"
          >
            <span
              className="icon-info_24px"
              style={{ marginLeft: '5px', color: '#F48245' }}
            />
          </Tooltip>
        </Text>
      </Box>
      <Box width={1 / 3}>
        <Tooltip
          labelText="Tooltip on some text"
          arrow
          size="small"
          position="top-start"
        >
          <Text>This is Tooltip title</Text>
        </Tooltip>
      </Box>
      <Box width={1 / 3}>
        <Tooltip
          labelText="Some more info"
          arrow
          size="small"
          position="bottom"
        >
          <span
            className="icon-info_24px"
            style={{ fontSize: '18px', color: '#2874A4' }}
          />
        </Tooltip>
      </Box>
    </Flex>
    <Flex p={20}>
      <Box width={1 / 3}>
        <Tooltip
          labelText="You can search anything"
          size="big"
          position="top-start"
        >
          <Input
            width="100%"
            type="text"
            value=""
            placeholder=""
            label="Search"
            id="search"
            leftIcon="icon-search_24px"
          />
        </Tooltip>
      </Box>
      <Box width={1 / 3} textAlign="center" ml={25}>
        <Tooltip labelText="Doe's Profile" arrow distance={60} position="top">
          <Image src={require('./assets/avatar1.svg')} mr={3} />
        </Tooltip>
        <Tooltip labelText="Jane's Profile" arrow distance={60} position="top">
          <Image src={require('./assets/avatar2.svg')} />
        </Tooltip>
        <Tooltip labelText="Joe's Profile" arrow distance={60} position="top">
          <Image src={require('./assets/avatar3.svg')} ml={3} />
        </Tooltip>
      </Box>
    </Flex>
  </ThemeProvider>
);
