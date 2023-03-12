import React from 'react'
import './User.css'
import UserList4 from '../userList/UserList4'
import UserList from '../userList/UserList';
import UserList2 from '../userList/UserList2';
import UserList3 from '../userList/UserList3';
const User = () => {
  return (
    <div className='user'>
        
        <h2 className='userListPage'>User List Page</h2>
          <UserList4/>
          <UserList />
          <UserList2/>
          <UserList3/>
    </div>
  )
}

export default User