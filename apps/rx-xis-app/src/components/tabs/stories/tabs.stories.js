import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Tab from '..';
import { ContainerDiv } from '../../container/css';
import GlobalStyle from '../../theme/globalStyles';
import tabsTheme from '../../theme/styles/tabs';

export default {
  title: 'Tabs',
  component: Tab,
};
export const Default_Tab = () => {
  const tabsdata = [
    {
      id: '1',
      tabTitle: 'Custom Header 1',
      tabContent:
        'consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. ',
    },
    { id: '2', tabTitle: 'Header Text 2', tabContent: 'Tab Content 2' },
    {
      id: '3',
      tabTitle: 'Header Text 3',
      tabContent:
        'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
    },
  ];

  return (
    <ThemeProvider theme={tabsTheme}>
      <GlobalStyle />
      <ContainerDiv>
        <Tab data={tabsdata} />
      </ContainerDiv>
    </ThemeProvider>
  );
};
export const CloseAble_Tab = () => {
  const tabsdata = [
    {
      id: '1',
      tabTitle: 'Custom Header 1',
      tabContent:
        'consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. ',
    },
    { id: '2', tabTitle: 'Header Text 2', tabContent: 'Tab Content 2' },
    {
      id: '3',
      tabTitle: 'Header Text 3',
      tabContent:
        'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
    },
  ];

  return (
    <ThemeProvider theme={tabsTheme}>
      <GlobalStyle />
      <ContainerDiv>
        <Tab data={tabsdata} closeAble />
      </ContainerDiv>
    </ThemeProvider>
  );
};
export const DisAbled_Tab = () => {

  const disable = {
    pointerEvents: 'none'
  }
  const tabsdata = [
    {
      id: '1',
      tabTitle: 'Custom Header 1',
      tabContent:
        'consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. ',
    },
    { id: '2', tabTitle: 'Header Text 2', tabContent: 'Tab Content 2' },
    {
      id: '3',
      tabTitle: 'Header Text 3',
      tabContent:
        'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
    },
  ];

  return (
    <ThemeProvider theme={tabsTheme}>
      <GlobalStyle />
      <ContainerDiv>
        <Tab data={tabsdata} disabled={disable} />
      </ContainerDiv>
    </ThemeProvider>
  );
};
