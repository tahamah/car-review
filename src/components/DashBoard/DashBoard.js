import LineChart from '../LineChart/LineChart'
import StackedAreaChart from '../StackedAreaChart/StackedAreaChart'

const DashBoard = () => {
    return (
        <div className="md:flex justify-center gap-12">
            <div className="m-6 ">
                <LineChart></LineChart>
            </div>
            <div className="m-6">
                <StackedAreaChart></StackedAreaChart>
            </div>
        </div>
    )
}

export default DashBoard
