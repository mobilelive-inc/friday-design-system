import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyles';
import tableTheme from '../theme/styles/table';
import {
    TableRow,
    RowData,
    TableWrapper,
    TableHeader,
    HeaderContent,
    TableBody
  } from './css';

  const Row = ({id, title, priority, type, complete}) => (
     <TableRow>
        <RowData>{id}</RowData>
        <RowData>{title}</RowData>
        <RowData>{priority}</RowData>
        <RowData>{type}</RowData>    
        <RowData>{complete}</RowData>  
      </TableRow> 
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
        <ThemeProvider theme={tableTheme}>
          <GlobalStyle />
          <TableWrapper variant="primary">
              <TableHeader  >
                <HeaderContent>ID</HeaderContent>
                <HeaderContent>Title</HeaderContent>
                <HeaderContent>Priority</HeaderContent>
                <HeaderContent>Issue Type</HeaderContent>
                <HeaderContent>% Complete</HeaderContent>
            </TableHeader>
            <TableBody>
            {rows}
            </TableBody>
        </TableWrapper>
       </ThemeProvider>
      );
      
    }
  
  export default  Table