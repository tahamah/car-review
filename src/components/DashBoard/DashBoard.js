import StackedAreaChart from '../StackedAreaChart/StackedAreaChart'
import TwoLevelPieChart from '../TwoLevelPieChart/TwoLevelPieChart'

const DashBoard = () => {
    return (
        <div className="md:flex flex-wrap justify-center items-center gap-12">
            <div className="m-6 ">
                <StackedAreaChart />
                <h1
                    className="text-gray-500 text-3xl text-center
                 title-font font-medium pt-10"
                >
                    Stacked Area Chart
                </h1>
            </div>
            <div className="m-6">
                <TwoLevelPieChart />
                <h1
                    className="text-gray-500 text-3xl text-center
                 title-font font-medium mb-1"
                >
                    Two Level PieChart
                </h1>
            </div>
            <div className="m-6 ">
                <StackedAreaChart />
                <h1
                    className="text-gray-500 text-3xl text-center
                 title-font font-medium pt-10"
                >
                    Stacked Area Chart
                </h1>
            </div>
            <div className="m-6">
                <TwoLevelPieChart></TwoLevelPieChart>
                <h1
                    className="text-gray-500 text-3xl text-center
                 title-font font-medium mb-1"
                >
                    Two Level PieChart
                </h1>
            </div>
            <div className="m-6">
                <TwoLevelPieChart></TwoLevelPieChart>
                <h1
                    className="text-gray-500 text-3xl text-center
                 title-font font-medium mb-1"
                >
                    Two Level PieChart
                </h1>
            </div>
        </div>
    )
}

export default DashBoard
