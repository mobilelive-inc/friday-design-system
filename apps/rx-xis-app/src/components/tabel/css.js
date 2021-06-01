import styled from 'styled-components';
import css from '@styled-system/css';

export const TableRow = styled('div')(
    css({
        display:'flex',
    })
  );
  export const RowData = styled('div')(
    css({
        flex:'1',
        padding:'0.2rem 0.4em',
        border: '1px solid #eeeeee',
    })
  );
  export const TableWrapper = styled('table')(
    css({
        margin: '1em',
        display: 'flex',
        flexDirection: 'column',
    })
  );
  export const TableHeader = styled.th(
      css({
        display:'flex',
        padding:'0.2rem 0.4em',
      })
  );

  export const HeaderContent = styled.div(
      css({
        display: 'flex',
        cursor: 'pointer',
        flex:'1',
      })
  );

  export const TableBody = styled.div(
      css({

      })
  )