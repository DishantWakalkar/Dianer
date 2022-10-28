import React, {useEffect, useState} from 'react'
// import BarChart from './components/BarChart'
import LineChart from './components/LineChart'
// import PieChart from './components/PieChart'

function App() {

  const [backendData, setBackendData] = useState([{}])

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
    <div>
        <LineChart/>
    </div>
    );
}

export default App;