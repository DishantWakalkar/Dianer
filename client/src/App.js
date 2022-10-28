import React, {Component, useEffect, useState} from 'react'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import ScatterChart from './components/ScatterChart';
import './App.css'
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <div className='line-chart'><LineChart/></div>
        <div className='pie-chart'><PieChart/></div>
        <div className='bar-chart'><BarChart/></div>
        <div className='scatter-chart'><ScatterChart/></div>
      </div>
    </>
    );
}
  
export default App;