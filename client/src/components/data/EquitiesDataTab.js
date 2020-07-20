import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Following</Tab>
      <Tab>Macro</Tab>
      <Tab>Events</Tab>
      <Tab>Trending</Tab>
    </TabList>
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
        <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
        <h2>Any content 4</h2>
    </TabPanel>
  </Tabs>
);