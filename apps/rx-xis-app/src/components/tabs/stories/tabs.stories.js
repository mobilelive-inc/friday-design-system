import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Tab from "..";
import { Theme } from "../..";
import { ContainerDiv } from "../../container/css";
import GlobalStyle from "../../theme/globalStyles";

export default {
  title: "Tabs",
  component: Tab,
};
export const Default_Tab = () => {
  const data = [
    {
      id: "1",
      tabTitle: "Custom Header 1",
      tabContent:
        "consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. ",
    },
    { id: "2", tabTitle: "Header Text 2", tabContent: "Tab Content 2" },
    {
      id: "3",
      tabTitle: " Header Text 3",
      tabContent:
        "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
    },
  ];

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ContainerDiv>
        <Tab data={data} />
      </ContainerDiv>
    </ThemeProvider>
  );
};
export const CloseAble_Tab = () => {
  const data = [
    {
      id: "1",
      tabTitle: "Custom Header 1",
      tabContent:
        "consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. ",
    },
    { id: "2", tabTitle: "Header Text 2", tabContent: "Tab Content 2" },
    {
      id: "3",
      tabTitle: " Header Text 3",
      tabContent:
        "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
    },
  ];

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ContainerDiv>
        <Tab data={data} closeAble />
      </ContainerDiv>
    </ThemeProvider>
  );
};
export const DisAbled_Tab = () => {
  // const [disabled, setDisabled] = useState(true);
  const disable = {
    pointerEvents:'none'
}
  const data = [
    {
      id: "1",
      tabTitle: "Custom Header 1",
      tabContent:
        "consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. ",
    },
    { id: "2", tabTitle: "Header Text 2", tabContent: "Tab Content 2" },
    {
      id: "3",
      tabTitle: " Header Text 3",
      tabContent:
        "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
    },
  ];

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ContainerDiv>
        <Tab data={data} disabled={disable}/>
      </ContainerDiv>
    </ThemeProvider>
  );
};
