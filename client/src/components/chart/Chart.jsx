import React, {useState,useEffect} from "react";
import "./chart.css";
import {LineChart,Line,XAxis,CartesianGrid,Tooltip,ResponsiveContainer,} from "recharts";

export default function Chart({grid}) {
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

  return (
    <div className="chart">
      <h3 className="chartTitle">User Grades</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={backendData.data}>
          <XAxis dataKey={backendData.map(a=>a.userid)} stroke="#5550bd" />
          <Line type="monotone" dataKey={backendData.map(a=>a.grade)} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}