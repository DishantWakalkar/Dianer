import React from 'react'
import BarChart from './components/BarChart'
// import LineChart from './components/LineChart'
// import PieChart from './components/PieChart'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import "./App.css";

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
        <div className='container'>
          <Sidebar/>  
        </div>
    </div>
  )
}

export default App