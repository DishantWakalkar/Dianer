import React, {useEffect, useState} from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Card from 'react-bootstrap/Card';
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
      label: "Grade",
      backgroundColor: "SKYBLUE",
      borderColor: "#2085ec",
      data: backendData.map(a=>a.grade),
    },
    {
      label: "Grader",
      backgroundColor: "LIGHTGREEN",
      borderColor: "#02824b",
      data: backendData.map(a=>a.grader),
    },
  ],
};

  return (
    <div>
       <Card style={{ width: 'auto' }}>
        <Card.Body>
          <Line data={data} />
          <p style={{textAlign:'center', fontSize:'14px'}}>UserID</p> 
        </Card.Body>
       </Card>
      
    </div>

  );
};

export default LineChart;