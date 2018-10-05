import React from 'react'
import randomColor from 'randomcolor'
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from 'recharts';

const processData = (data) => {
  let arr = []
  const len = data.length
  const colors = randomColor({hue: 'red', count: len})
  for (let i = 0; i < len; i++) {
    arr.push({name: data[i].answer, value: data[i].votes, fill: colors[i]})
  }
  return arr
}

const Chart = ({ data }) => (
<ResponsiveContainer width='100%' height="100%">
  <PieChart>
    <Pie data={processData(data)} dataKey="value" nameKey="name" cx="50%" cy="50%" />
    <Legend verticalAlign="top" iconType='circle'/>
    <Tooltip/>
  </PieChart>
</ResponsiveContainer>
)
export default Chart