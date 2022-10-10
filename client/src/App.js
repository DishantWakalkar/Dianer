import React from 'react'
// import BarChart from './components/BarChart'
// import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Chart from './components/chart/Chart'
import Home from './pages/home/Home'
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";


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
        <Topbar />
      <div className="container">
        <Sidebar/>
        <Home />
        {/* <PieChart/> */}
        <Chart/>
        {/* <UserList /> */}
        {/* <User /> */}
        {/* <NewUser /> */}
        {/* <ProductList /> */}
        {/* <Product /> */}
        {/* <NewProduct /> */}
      </div>
    </div>
    );
}

export default App;