import * as React from 'react';
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import { userrows } from './MakeData.js'
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
const UserList4 = () => {
  const [data, setData] = useState(userrows);

  const handelDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userName', headerName: 'UserName', width: 100 },
    { field: 'firstName', headerName: 'First name', width: 100 },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    { field: 'fullName', headerName: 'Full name', description: 'This column ', sortable: false, width: 120, },
    { field: 'age', headerName: 'Age', type: 'number', width: 100, },
    { field: 'email', headerName: 'Email', type: 'Email', width: 110 },
    { field: 'Status', headerName: 'Status', type: 'active', width: 100 },
    { field: 'transaction', headerName: 'Transaction', type: 'text', width: 120 },
    {
      field: 'action', headerName: 'Action', type: 'text', width: 150,
      renderCell: (paramas) => {
        return (
          <>
            {/* <Link> */}
            <button className="userListEdit">Edit</button>
            {/* </Link> */}
            <button className="userListDelete" onClick={() => handelDelete(paramas.row.id)}>DELETE</button>
            {/* <DeleteIcon className='userIconDelete' /> */}
          </>
        )
      }
    },
  ];

  return (
    <div className='tableContainer'>
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnSelector
        />
      </div>

    </div>
  )
}

export default UserList4