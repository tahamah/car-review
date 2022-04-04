import StackedAreaChart from '../StackedAreaChart/StackedAreaChart'
import TwoLevelPieChart from '../TwoLevelPieChart/TwoLevelPieChart'

const DashBoard = () => {
    return (
        <div className="md:flex justify-center items-center gap-12">
            <div className="m-6 ">
                <StackedAreaChart></StackedAreaChart>
            </div>
            <div className="m-6">
                <TwoLevelPieChart></TwoLevelPieChart>
            </div>
        </div>
    )
}

export default DashBoard
