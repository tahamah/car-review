import React from 'react'
import { Pie, PieChart, Tooltip } from 'recharts'
import useChartData from '../../hooks/useChartData'

export default function ThreeLevelPieChart() {
    const [chartData] = useChartData()
    return (
        <PieChart width={370} height={370}>
            <Tooltip />
            <Pie
                data={chartData}
                dataKey="sell"
                cx={200}
                cy={200}
                outerRadius={50}
                fill="#8884d8"
            />
            <Pie
                data={chartData}
                dataKey="investment"
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#fdcb6e"
            />
            <Pie
                data={chartData}
                dataKey="revenue"
                cx={200}
                cy={200}
                innerRadius={90}
                outerRadius={110}
                fill="#82ca9d"
                label
            />
        </PieChart>
    )
}
