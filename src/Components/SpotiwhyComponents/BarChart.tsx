import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


interface Data {
    totalListening: Object
}

const BarChart = (props: Data) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );


    const getRandomColor = (input: Object) => {
        let returnArray1 = []
        let returnArray2 = []
        for (let i = 0; i < Object.keys(input).length; i++) {
            var nums = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]


            returnArray1[i] = `rgba(${nums[0]}, ${nums[1]}, ${nums[2]}, 0.2)`;
            returnArray2[i] = `rgba(${nums[0]}, ${nums[1]}, ${nums[2]}, 1)`;
        }
        return [returnArray1, returnArray2]

    }
    var colors = getRandomColor(props.totalListening)

    const data = {
        labels: Object.keys(props.totalListening),
        datasets: [
            {
                label: 'Plays by Artist',
                data: Object.values(props.totalListening),
                borderWidth: 1,
                backgroundColor: colors[0],
                borderColor: colors[1]
            }
        ]

    }

    return (
        <div style={{width: '100%', justifyContent: 'center'}}>
            <Bar data={data}>

            </Bar>
        </div>
    )

}

export default BarChart