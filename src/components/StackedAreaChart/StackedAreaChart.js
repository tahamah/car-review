import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import useChartData from '../../hooks/useChartData'

export default function StackedAreaChart() {
    const [chartData] = useChartData()
    return (
        <AreaChart
            width={370}
            height={250}
            data={chartData}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="investment"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
            />
            <Area
                type="monotone"
                dataKey="revenue"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
            />
            <Area
                type="monotone"
                dataKey="sell"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
            />
        </AreaChart>
    )
}
