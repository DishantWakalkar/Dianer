import React, {Component, useEffect, useState} from 'react'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import ScatterChart from './components/ScatterChart';
import './App.css'
import Navbar from './components/Navbar';

function App() {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/getGrades").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  return (
    <>
      <Navbar />
      <div className='center'>
        <div style={{ width: "800px", height:"80%", padding:"10px"}}><LineChart/></div>
        <div style={{ width: "500px",padding:"10px"}}><PieChart/></div>
        <div style={{ width: "800px", height:"80%",padding:"10px"}}><BarChart/></div>
        <div style={{ width: "800px", height:"80%",padding:"10px"}}><ScatterChart/></div>
      </div>
    </>
    );
}
  
export default App;