import React from "react";
import LineChart from "../visualizations/LineChart";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default () => (
  <Tabs>
    <TabList>
      <Tab>My Charts</Tab>
      <Tab>Saved Charts</Tab>
      <Tab>Create New Chart</Tab>
    </TabList>
    <TabPanel>
      <LineChart />
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
        <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
);