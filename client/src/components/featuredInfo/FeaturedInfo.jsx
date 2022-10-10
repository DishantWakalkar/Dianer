// import { useState, useEffect } from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";



export default function FeaturedInfo() {
    // const [userData, setUserData] = useState([{}])
    
    // useEffect(() => {
    //       fetch("/getUser").then(
    //         response => {
    //           const users = response.data;
    //           const count = response.data.length
    //           setUserData({users,count})
    //         }
    //           )
    //     }, [])
    

    return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" >265</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Quizes</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">24</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Course Catergories</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}