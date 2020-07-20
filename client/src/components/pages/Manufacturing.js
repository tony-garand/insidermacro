import React from "react";
import Header from "../layout/Header";
import Tabs from "../layout/FeedTabs";

function Manufacturing(props) {
  return(
    <div>    
      <Header></Header>
      <div className="row content">
        <div className="col s8">
          <h3>Manufacturing</h3>
        </div>
        <div className="col s4">
          <h3>Feed</h3>
          <Tabs />
        </div>
      </div>
    </div>
  )
    
}

export default Manufacturing;