import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm.jsx";
import WidgetLg from "../../components/widgetLg/WidgetLg.jsx";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      {/* <Chart data={data} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div> */}
    </div>
  );
}