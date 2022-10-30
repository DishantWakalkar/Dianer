import LineChart from "../components/LineChart";
import MotionHoc from "./MotionHoc";
import '../App.css'

const TeamComponent = () => {
  return <div className='line-chart'>
    <LineChart/>
    </div>
};

const Team = MotionHoc(TeamComponent);

export default Team;
