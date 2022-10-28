import React, {useEffect, useState} from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
const LineChart = () => {
  
  
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
  labels: backendData.map(d=>d.userid),
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(54, 162, 235, 1)",
      data: backendData.map(a=>a.grade),
    },
  ],
};

  return (
    <div>
      <Line data={data} />
    </div>

  );
};

export default LineChart;