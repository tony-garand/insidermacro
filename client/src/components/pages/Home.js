import React from "react";
import Header from "../layout/Header";
import Tabs from "../layout/FeedTabs";
import BarChart from "../data/BarChart";
import Circles from "../data/Circles";
import LineChart from "../data/LineChart";

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