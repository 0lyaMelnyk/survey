import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function MarksTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Не можу оцінити</TableCell>
            <TableCell align="right">Зовсім не погоджуюсь</TableCell>
            <TableCell align="right">Переважно не погоджуюсь</TableCell>
            <TableCell align="right">Частково погоджуюсь, частково не погоджуюсь</TableCell>
            <TableCell align="right">Переважно погоджуюсь</TableCell>
            <TableCell align="right">Повністю погоджуюсь</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
