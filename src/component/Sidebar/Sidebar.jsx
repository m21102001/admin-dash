import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material'
import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTital">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarlistitem active">
                <LineStyle className='sidebarIcon' />
                Home
              </li>
            </Link>
            <li className="sidebarlistitem">
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTital">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/user">
              <li className="sidebarlistitem active">
                <LineStyle className='sidebarIcon' />
                User
              </li>
            </Link>
            <li className="sidebarlistitem">
              <Timeline className='sidebarIcon' />
              Product
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className='sidebarIcon' />
              Transaction
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTital">Notifaction</h3>
          <ul className="sidebarList">
            <li className="sidebarlistitem active">
              <LineStyle className='sidebarIcon' />
              Mail
            </li>
            <li className="sidebarlistitem">
              <Timeline className='sidebarIcon' />
              Feedback
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className='sidebarIcon' />
              Message
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTital">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarlistitem active">
              <LineStyle className='sidebarIcon' />
              Manger
            </li>
            <li className="sidebarlistitem">
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Sidebar