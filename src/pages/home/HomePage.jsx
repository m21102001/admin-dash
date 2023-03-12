import React from 'react'
import Chart from '../../component/chart/Chart'
import Featureinfo from '../../component/featureinfo/Featureinfo'
import "./Home.css"
import { userData } from '../../dummy'
import Wedgitsm from '../../component/wedgitSm/Wedgitsm'
import Wedgitlg from '../../component/wedgitLg/Wedgitlg'
const HomePage = () => {
  return (
    <div className='home'>
      <Featureinfo />
      <Chart data={userData} tital="user Analytics" grid dataKey="Active User"/>
      <div className='homewedgit'>
      <Wedgitsm className='wedgitsm'/>
      <Wedgitlg className='wedgitlg'/>
      </div>
    </div>
  )
}

export default HomePage