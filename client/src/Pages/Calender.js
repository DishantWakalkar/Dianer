
import PieChart from "../components/PieChart";
import MotionHoc from "./MotionHoc";
const CalenderComponent = () => {
  return <div className='pie-chart'>
    <PieChart/>
    </div>;
};

const Calender = MotionHoc(CalenderComponent);

export default Calender;
