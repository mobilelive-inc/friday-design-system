import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/globalStyles";
import tableTheme from "../theme/styles/table";
import {
  TableRow,
  RowData,
  TableWrapper,
  TableHeader,
  HeaderContent,
  TableBody,
} from "./css";

const Row = ({ id, title, priority, type, complete }) => (
  <TableRow>
    <RowData>{id}</RowData>
    <RowData>{title}</RowData>
    <RowData>{priority}</RowData>
    <RowData>{type}</RowData>
    <RowData>{complete}</RowData>
  </TableRow>
);
const TabelHeaderRow = ({
  columnone,
  columntwo,
  columnthree,
  columnfour,
  columnfive,
}) => {
   return(
  <ThemeProvider theme={tableTheme}>
    <GlobalStyle />
  
      <HeaderContent>{columnone}</HeaderContent>
      <HeaderContent>{columntwo}</HeaderContent>
      <HeaderContent>{columnthree}</HeaderContent>
      <HeaderContent>{columnfour}</HeaderContent>
      <HeaderContent>{columnfive}</HeaderContent>
  
  </ThemeProvider>
);
}

const Table = ({ tabelcolor, tabelbackgroundcolor,  textcolor,
  backgroundcolor, }) => {
  const [data, setData] = useState([
    {
      id: 403,
      title: "Task 403",
      priority: "High",
      type: "Improvement",
      complete: 100,
    },
    {
      id: 532,
      title: "Task 532",
      priority: "Medium",
      type: "Improvement",
      complete: 30,
    },
    {
      id: 240,
      title: "Task 240",
      priority: "High",
      type: "Story",
      complete: 66,
    },
  ]);
  const [headerdata, setHeaderdata] = useState([
    {
      columnone: "Id",
      columntwo: "Title",
      columnthree: "Priority",
      columnfour: "Type",
      columnfive: "Complete",
    },
  ]);

  const rows = data.map((rowData) => <Row {...rowData} />);
  const headerow = headerdata.map((headerData) => (
    <TabelHeaderRow {...headerData} />
  ));

  return (
    <ThemeProvider theme={tableTheme}>
      <GlobalStyle />
      <TableWrapper style={{ color: tabelcolor, backgroundColor: tabelbackgroundcolor }}>
      <TableHeader style={{ color: textcolor, backgroundColor: backgroundcolor }}>
        {headerow}
        </TableHeader>
        <TableBody>{rows}</TableBody>
      </TableWrapper>
    </ThemeProvider>
  );
};

export default Table;
