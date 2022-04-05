import React from 'react'
import { Pie, PieChart, Tooltip } from 'recharts'
import useChartData from '../../hooks/useChartData'

export default function TwoLevelPieChart() {
    const [chartData] = useChartData()
    return (
        <PieChart width={370} height={400}>
            <Tooltip />
            <Pie
                data={chartData}
                dataKey="investment"
                cx={200}
                cy={200}
                outerRadius={55}
                fill="#8884d8"
            />
            <Pie
                data={chartData}
                dataKey="sell"
                cx={200}
                cy={200}
                innerRadius={70}
                outerRadius={90}
                fill="#fdcb6e"
                label
            />
        </PieChart>
    )
}
