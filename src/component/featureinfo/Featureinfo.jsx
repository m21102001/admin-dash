import React from 'react'
import './Featureinfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
const Featureinfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Total Users</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$44,278</span>
                <span className="featureMoneyRate">
                    + 5%<ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featureSub">Last week</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Total profit</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$4,415</span>
                <span className="featureMoneyRate">
                    -0.75%<ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featureSub">Last 6 days</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Total Expenses</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$2,415</span>
                <span className="featureMoneyRate">
                    +0.9%<ArrowUpward className='featuredIcon negative'/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Total Cost</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$2,415</span>
                <span className="featureMoneyRate">
                    +0.6%<ArrowUpward className='featuredIcon '/>
                </span>
            </div>
            <span className="featureSub">Last year</span>
        </div>
    </div>
  )
}

export default Featureinfo