import MotionHoc from "./MotionHoc";
import ScatterChart from "../components/ScatterChart";

const DocumentsComponent = () => {
  return <div className='scatter-chart'>
  <ScatterChart/>
  </div>;
};

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
