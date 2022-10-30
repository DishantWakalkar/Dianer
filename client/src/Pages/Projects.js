import BarChart from "../components/BarChart";
import MotionHoc from "./MotionHoc";

const ProjectsComponent = () => {
  return <div className='bar-chart'>
    <BarChart/>
    </div>;
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;
