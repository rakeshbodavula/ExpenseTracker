import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxValue = Math.max(...dataPointValues)
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                label={dataPoint.label}
                maxValue={maxValue}
            ></ChartBar>)}
        </div>
    )
}

export default Chart;