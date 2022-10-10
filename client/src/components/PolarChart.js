import React, {useEffect, useState} from "react";
import Chart from "chart.js/auto";  
import { PolarArea } from "react-chartjs-2";

const PolarArea = () => {
  
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/getGrades").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])   
  

  const data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };

  // const data = {
  //   labels: backendData.map(a=>a.userid),
  //   datasets: [
  //     {
  //       borderColor: "rgb(0, 0, 0)",
  //       backgroundColor: "rgb(144,238,144)",
  //       data: backendData.map(d=>d.grade),
  //     },
  //   ],
  // };
  return (
    <div>
      <PolarArea data={data} />
    </div>
  );
};

export default BarChart;