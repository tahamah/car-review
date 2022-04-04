import { CartesianGrid, Line, Tooltip, XAxis, YAxis } from 'recharts'
import useChartData from '../../hooks/useChartData'

const LineChart = () => {
    const [chartData] = useChartData()
    console.log(chartData)

    return (
        <div>
            {/* <LineChart
                width={500}
                height={250}
                data={chartData}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
            </LineChart> */}
        </div>
    )
}

export default LineChart
