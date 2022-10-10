import React, {useEffect, useState} from "react";
import Chart from "chart.js/auto";  
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  
  
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
    labels: backendData.map(a=>a.userid),
    datasets: [
      {
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(144,238,144)",
        data: backendData.map(d=>d.grade),
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;