import React, {useEffect, useState} from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
const PieChart = () => {
  
  
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/getcoursecatC").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])   

  const data = {
    labels: backendData.map(d=>d.name) ,
    datasets: [
      {
        type:"pie",
        data:backendData.map(a=>a.coursecount),
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
    // new Chart("myChart", {
    //   type: "pie",
    //   data: {
    //     labels: xValues,
    //     datasets: [{
    //       backgroundColor: barColors,
    //       data: yValues
    //     }]
    //   },
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontFamily: "monospace" }}>
        Course Categories 2022
      </h1>
      <Pie data={data} />
    </div>
  );
}
export default PieChart;