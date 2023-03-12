import React from 'react'
import './UserList.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Delete } from '@mui/icons-material';

function createData(id, user, email, status, transaction, action) {
  return { id, user, email, status, transaction, action };
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 'Approved', '$120.00'),
  createData('Frozen yoghurt', 159, 6.0, 'Approved', '$120.00'),
  createData('Frozen yoghurt', 159, 6.0, 'Approved', '$120.00'),
  createData('Frozen yoghurt', 159, 6.0, 'Approved', '$120.00'),
  createData('Frozen yoghurt', 159, 6.0, 'Approved', '$120.00'),
  createData('Frozen yoghurt', 159, 6.0, 'Approved', '$120.00'),
  createData('Frozen yoghurt', 159, 6.0, 'Approved', '$120.00'),        
];

const UserList3 = () => {
  return (
    <TableContainer className='tableContainer' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='data'>id</TableCell>
            <TableCell className='data' align="center">user</TableCell>
            <TableCell className='data' align="center">email</TableCell>
            <TableCell className='data' align="center">Status</TableCell>
            <TableCell className='data' align="center">Transaction</TableCell>
            <TableCell className='data' align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.user}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.transaction}</TableCell>
              <TableCell align="center"><Delete/></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserList3