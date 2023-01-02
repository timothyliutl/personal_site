import React from 'react'
import { Chart as ChartJS, ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale, Title } from 'chart.js';
import {Doughnut} from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';

// Page that will hold charts to view spotify data

interface Data{
totalListening: Object,
type: string
}

const Charts = (props: Data) =>{

    const getRandomColor = (input: Object) =>{
        let returnArray1 = []
        let returnArray2 = []
        for(let i = 0; i<Object.keys(input).length; i++){
            var nums = [Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255)]


            returnArray1[i] = `rgba(${nums[0]}, ${nums[1]}, ${nums[2]}, 0.2)`;
            returnArray2[i] = `rgba(${nums[0]}, ${nums[1]}, ${nums[2]}, 1)`;
        }
        return [returnArray1, returnArray2]
        
    }

    var colors = getRandomColor(props.totalListening)

    ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

    const options = {
        responsive: true,
        maintainAspectRatio:false,
        plugins: {
          title: {
            display: false,
            text: 'Plays by Artist',
          },
        },
      };

    const data = {
        labels: Object.keys(props.totalListening),
        datasets: [
          {
            label: 'Plays by Genre',
            data: Object.values(props.totalListening),
            backgroundColor: colors[0],
          },
          
        ],
      };

      const labels = Object.keys(props.totalListening)


    const barData = {
        labels: labels,
        datasets: [
          {
            label: "Plays by Artist",
            data: Object.values(props.totalListening),
            borderWidth: 1,
            backgroundColor: colors[0],
            borderColor: colors[1]
          },
          
        ],
    }
    if (props.type === 'doughnut'){
    return(
        <div style={{width: '99%',position: "relative", margin: "auto"}}>
            <Doughnut height={'400px'} data={data} options={{responsive:true, maintainAspectRatio:false}}></Doughnut>
        </div>
        )
    }
    if(props.type === 'bar'){
            return(<div style={{position: "relative", width: '99%'}}>
                <Bar height={'250px'} data={barData} options={options}></Bar>
            </div>)
        }
    return(<div></div>)
    

   
}
export default Charts