import React from 'react'
import ChartBar from './ChartBar'
import './Chart.scss'

function Chart(props) {

    
const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className='chart'>

    {props.dataPoints.map((datapoint, index)=>{
        return (

            <ChartBar key={index} value={datapoint.value} maxValue={totalMaximum} label={datapoint.label}/>


        )
    })}


    </div>
  )
}

export default Chart