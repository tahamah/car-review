import React from 'react'
import { Pie, PieChart, Tooltip } from 'recharts'
import useChartData from '../../hooks/useChartData'

export default function TwoLevelPieChart() {
    const [chartData] = useChartData()
    return (
        <PieChart width={400} height={400}>
            <Tooltip />
            <Pie
                data={chartData}
                dataKey="sell"
                cx={200}
                cy={200}
                outerRadius={60}
                fill="#8884d8"
            />
            <Pie
                data={chartData}
                dataKey="revenue"
                cx={200}
                cy={200}
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
            />
        </PieChart>
    )
}
