import React, {useState,useEffect} from "react";
import Chart from "chart.js/auto";
import { Scatter } from "react-chartjs-2";
import Card from 'react-bootstrap/Card';

const ScatterChart = () => {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/getattendlog").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  const data = {
    datasets: [{
      label: 'Course Completed',
      data: backendData,
      backgroundColor: 'rgba(75, 192, 192, 1)'
    }],
  };
  return (
    <div>
      <Card style={{ width: 'auto' }}>
      <p style={{textAlign:'left', fontSize:'16px', margin:'350px 0px 0px -19px', position:"absolute", transform:'rotate(-90deg)'}}>CourseID</p>
        <Card.Body>
          <Scatter data={data}/>
          <p style={{textAlign:'center', fontSize:'16px', marginTop:'10px'}}>UserID</p>
        </Card.Body>
       </Card>
    </div>
  );
};

export default ScatterChart;