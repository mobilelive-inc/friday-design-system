import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "..";
import GlobalStyle from "../theme/globalStyles";
import "./style.css";
import Icon from "../icon/Icon";
import { Tabs, TabsTitles, TabContent, Closebutton, Sronly } from "./css.js";
import PropTypes from "prop-types";

const Tab = (props) => {
  const closeAble = props.closeAble;

  const [visibleTab, setVisibleTab] = useState(props.data[0].id);
  var listTitles;

  // const remove = (props) => {
  //    const arrayCopy = props.data.filter((item) =>
  //       item.id !== props.data.id
  //     );
  //   setVisibleTab({data: arrayCopy});
  //  };

  if (closeAble) {
    listTitles = props.data.map((item) => (
      <div
        onClick={() => setVisibleTab(item.id)}
        className={
          visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"
        }
      >
        <li>{item.tabTitle}</li>
        <Closebutton onClick={() => setVisibleTab("")} tabIndex="1">
          <Icon className="icon-close" />
          <Sronly>Close</Sronly>
        </Closebutton>
      </div>
    ));
  } else {
    listTitles = props.data.map((item) => (
      <div>
        <li
          onClick={() => setVisibleTab(item.id)}
          className={
            visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"
          }
        >
          {item.tabTitle}
        </li>
      </div>
    ));
  }

  const listContent = props.data.map((item) => (
    <p style={visibleTab === item.id ? {} : { display: "none" }}>
      {item.tabContent}
    </p>
  ));

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Tabs>
        <TabsTitles>{listTitles}</TabsTitles>
        <TabContent>{listContent}</TabContent>
      </Tabs>
    </ThemeProvider>
  );
};

// Tab.propTypes = {
//   /** Data for tabs */
//   Data: PropTypes.string.isRequired,
//   /** closeable props if we want to need close tabs */
//   closeAble : PropTypes.string,
//   /** disabled props if we want to need disabled tabs */
//   disabled : PropTypes.string,
//   /** To manage theme*/
//   variant: PropTypes.string,
// };

export default Tab;
