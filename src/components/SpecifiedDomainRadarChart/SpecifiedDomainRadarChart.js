import {
    Radar,
    RadarChart,
    PolarGrid,
    Legend,
    PolarAngleAxis,
    PolarRadiusAxis,
    Tooltip,
} from 'recharts'
import useChartData from '../../hooks/useChartData'
export default function SpecifiedDomainRadarChart() {
    const [chartData] = useChartData()
    return (
        <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={chartData}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Tooltip />
            <Radar
                name="revenue"
                dataKey="revenue"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={6}
            />
            <Radar
                name="investment"
                dataKey="investment"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.4}
            />
            <Legend />
        </RadarChart>
    )
}
