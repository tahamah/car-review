import { useEffect, useState } from 'react'

const useChartData = () => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        fetch('chartData.json')
            .then((res) => res.json())
            .then((data) => setChartData(data))
    }, [])
    return [chartData, setChartData]
}

export default useChartData
