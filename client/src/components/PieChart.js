import React, {useEffect, useState} from "react";
import { Pie } from "react-chartjs-2";
import Card from 'react-bootstrap/Card';
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
          "#B24BF3",
          "#A020F0",
          "#9417E2",
          "#880ED4",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(0,0,0,1)",
          "rgba(0,0,0,1)",
          "rgba(0,0,0,1)",
          "rgba(0,0,0,1)",
          "rgba(0,0,0,1)",
          "rgba(0,0,0,1)",
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
      <Card style={{ width: 'auto' }}>
        <Card.Body>
          <h1 style={{ fontFamily: "monospace" }}>
          Course Categories 2022
          </h1>
          <Pie data={data} />
        </Card.Body>
       </Card>
    </div>
  );
}
export default PieChart;