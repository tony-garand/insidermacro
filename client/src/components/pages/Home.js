import React from "react";
import Header from "../layout/Header";
import Tabs from "../layout/FeedTabs";
import BarChart from "../visualizations/BarChart";
import Circles from "../visualizations/Circles";
import LineChart from "../visualizations/LineChart";
import StockChart from "../visualizations/StockChart";
import ReactChart from "../visualizations/ReactChart";
import SyncChart from "../visualizations/SyncChart";
import RadialBar from "../visualizations/RadialBar";
import SunburstChart from "../visualizations/SunburstChart";
import MultiBarChart from "../visualizations/MultiBarChart";

function Home(props) {
  return(
    <div>    
      <Header></Header>
      <div className="row content">
        <div className="col s7">
          <h3>Real Time Financial Markets</h3>
          <BarChart />
          <br/>
          <br/>
          <br/>
          <br/>
          <LineChart />
          <br/>
          <br/>
          <br/>
          <br/>
          <ReactChart />
          <br/>
          <br/>
          <br/>
          <br/>
          <SyncChart />
          <br/>
          <br/>
          <br/>
          <br/>
          <MultiBarChart />
        </div>
        <div className="col s1"></div>
        <div className="col s4">
          <h3>Feed</h3>
          <Tabs />
        </div>
      </div>
    </div>
  )
    
}

export default Home;