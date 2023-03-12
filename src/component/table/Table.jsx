import * as React from 'react';
import './Table.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(customer, date, amount, status) {
  return { customer, date, amount, status };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 'Approved'),
  createData('Ice cream sandwich', 237, 9.0, 'Panding'),
  createData('Eclair', 262, 16.0, 'Decline'),
  createData('Cupcake', 305, 3.7, 'Panding'),
  createData('Gingerbread', 356, 16.0, 'Approved'),
  createData('Gingerbread', 356, 16.0, 'Decline'),
  createData('Gingerbread', 356, 16.0, 'Decline'),
  createData('Gingerbread', 356, 16.0, 'Approved'),
  createData('Gingerbread', 356, 16.0, 'Panding'),
  createData('Gingerbread', 356, 16.0, 'Approved'),
  createData('Gingerbread', 356, 16.0, 'Panding'),
  createData('Gingerbread', 356, 16.0, 'Approved'),
  createData('Gingerbread', 356, 16.0, 'Panding'),
  createData('Gingerbread', 356, 16.0, 'Approved'),
];


const Table1 = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='data'>Customer</TableCell>
            <TableCell className='data' align="center">Date</TableCell>
            <TableCell className='data' align="center">Amount</TableCell>
            <TableCell className='data' align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.customer}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customer}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Table1