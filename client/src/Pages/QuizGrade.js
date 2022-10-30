import LineChart from "../components/LineChart";
import MotionHoc from "./MotionHoc";
import './graph.css'

const TeamComponent = () => {
  return <div className='graphsize'>
    <LineChart/>
    </div>
};

const Team = MotionHoc(TeamComponent);

export default Team;
