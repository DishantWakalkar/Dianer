import React from 'react'
import BarChart from './components/BarChart'
// import LineChart from './components/LineChart'
// import PieChart from './components/PieChart'
import Topbar from './components/topbar/Topbar'

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
    <div>
        {/* <BarChart/> */}
        {/* <Table/> */}
        <Topbar/>
    </div>
  )
}

export default App