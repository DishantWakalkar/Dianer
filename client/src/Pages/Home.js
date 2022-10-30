import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import ScatterChart from "../components/ScatterChart";
import MotionHoc from "./MotionHoc";
import '../App.css'

const HomeComponent = () => {
  return <div className='center'>
  <div className='line-chart'><LineChart/></div>
  <div className='pie-chart'><PieChart/></div>
  <div className='bar-chart'><BarChart/></div>
  <div className='scatter-chart'><ScatterChart/></div>
</div>;
};

const Home = MotionHoc(HomeComponent);

export default Home;
