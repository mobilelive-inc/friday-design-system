import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyles';
import tabelTheme from './../theme/styles/tabel';
import {
    TabelRow,
    RowData,
    TableWrapper,
    TabelHeader,
    HeaderContent,
    TabelBody
  } from './css';

  const Row = ({id, title, priority, type, complete}) => (
     <TabelRow>
        <RowData>{id}</RowData>
        <RowData>{title}</RowData>
        <RowData>{priority}</RowData>
        <RowData>{type}</RowData>    
        <RowData>{complete}</RowData>  
      </TabelRow> 
  );
  
  const Table = () => {
      const [data, setData] = useState( 
          [
          {id: 403, title: 'Task 403', priority: 'High', type: 'Improvement', complete: 100}, 
          {id: 532, title: 'Task 532', priority: 'Medium', type: 'Improvement', complete: 30}, 
          {id: 240, title: 'Task 240', priority: 'High', type: 'Story', complete: 66},
          ]
      )
     
      const rows = data.map( (rowData) => <Row {...rowData} />);
  
      return (
        <ThemeProvider theme={tabelTheme}>
          <GlobalStyle />
          <TableWrapper>
              <TabelHeader>
                <HeaderContent>ID</HeaderContent>
                <HeaderContent>Title</HeaderContent>
                <HeaderContent>Priority</HeaderContent>
                <HeaderContent>Issue Type</HeaderContent>
                <HeaderContent>% Complete</HeaderContent>
            </TabelHeader>
            <TabelBody>
            {rows}
            </TabelBody>
        </TableWrapper>
       </ThemeProvider>
      );
      
    }
  
  export default  Table