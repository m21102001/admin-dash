import React from 'react'
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';


export const Sidenav = () => {
  return (
    <div>
      <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <HomeOutlinedIcon />
            </NavIcon>
            <NavText>
              Home
            </NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <TrendingUpOutlinedIcon />
            </NavIcon>
            <NavText>
              Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
              <NavIcon>
                <StackedLineChartOutlinedIcon />
              </NavIcon>
              <NavText>
                Line Chart
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavIcon>
                <StackedLineChartOutlinedIcon />
              </NavIcon>
              <NavText>
                Bar Chart
              </NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>


    </div>
  )
}
