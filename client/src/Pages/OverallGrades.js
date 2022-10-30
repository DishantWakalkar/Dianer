import BarChart from "../components/BarChart";
import MotionHoc from "./MotionHoc";
import './graph.css'

const ProjectsComponent = () => {
  return <div className='graphsize'>
    <BarChart/>
    </div>;
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;
