import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css'

const Chart = ({tital ,data ,dataKey1 ,grid}) => {

  return (
    <div className='chart'>
      <h3 className="chartTital">{tital}</h3>
      <ResponsiveContainer width="100%" aspect={3 / 1} >
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#5550bd' />
          <YAxis  stroke='#5550bd' />
          <Line type="monotone" dataKey={'Active user'} stroke='#5550bd' />
          <Tooltip/>
        {grid && <CartesianGrid strokeDasharray="3 3" stroke='#5550bd' />}
        <Legend />
        </LineChart>
        {/* <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
         */}
      </ResponsiveContainer>
    </div>
  )
}

export default Chart