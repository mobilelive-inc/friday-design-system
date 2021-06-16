import React,{useState}from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '..';
import GlobalStyle from '../theme/globalStyles';
import './style.css';
import Icon from '../icon/Icon';
import {Tabs ,TabsTitles,TabContent,Closebutton,Sronly} from'./css.js'

   const Tab = (props) =>{
     const [disabled, setDisabled] = useState(true);
    // ('#the_div_id *').prop('disabled',true);

    const closeAble = props.closeAble;
    
    const [visibleTab, setVisibleTab] = useState(props.data[0].id)
    var listTitles;

    if(closeAble){
        listTitles = props.data.map((item) => 
        (
          <div onClick={() => setVisibleTab(item.id)} className={visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"}>
            <li
            >{item.tabTitle}</li>
            <Closebutton onClick={() => setVisibleTab('')} tabIndex='1'>
                <Icon className="icon-close" />
                <Sronly>Close Modal</Sronly>
            </Closebutton>
          </div>
          )
        )
    }
    else{ 
        listTitles = props.data.map((item) => 
        (
          <div>
            <li onClick={() => setVisibleTab(item.id)} className={visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"}
            >{item.tabTitle}</li>
          </div>
          )
        ) 
    }
      
                                     
    const listContent = props.data.map((item) => 
        <p style={visibleTab === item.id ? {} : {display: 'none'}}>{item.tabContent}</p>
    )
    
    return(
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Tabs>
            <TabsTitles>
                {listTitles}
            </TabsTitles>
            <TabContent> 
                {listContent}
            </TabContent>
            </Tabs>
        </ThemeProvider>
      )
  }

export default Tab
  
