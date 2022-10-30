import PieChart from "../components/PieChart";
import MotionHoc from "./MotionHoc";
import './graph.css'

const CalenderComponent = () => {
  return <div className='graphpie'>
    <PieChart/>
    </div>;
};

const Calender = MotionHoc(CalenderComponent);

export default Calender;
