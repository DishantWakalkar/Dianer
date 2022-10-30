import MotionHoc from "./MotionHoc";
import ScatterChart from "../components/ScatterChart";
import './graph.css'

const DocumentsComponent = () => {
  return <div className='graphsize'>
  <ScatterChart/>
  <p className="graphlabel">Course Completed</p>
  </div>;
};

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
