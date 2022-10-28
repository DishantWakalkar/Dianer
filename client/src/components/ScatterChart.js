import React, {useState,useEffect} from "react";
import Chart from "chart.js/auto";
import { Scatter } from "react-chartjs-2";

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
      label: 'Attendence Log',
      data: backendData,
      backgroundColor: 'rgba(75, 192, 192, 1)'
    }],
  };
  return (
    <div>
      <Scatter data={data} />
    </div>
  );
};

export default ScatterChart;