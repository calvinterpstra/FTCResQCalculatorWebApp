import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ResQForm from './ResQForm'
import TeamsTab from './TeamsTab'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const MainTabs = () => (
  <Tabs>
    <Tab label="Teams" >
      <TeamsTab/>
    </Tab>
    <Tab label="Info" >
      <div>
        <h2 style={styles.headline}> Info </h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="Unofficial Match Form">
      <div>
        <h2 style={styles.headline}> Unofficial Match Form </h2>
        <ResQForm/>
      </div>
    </Tab>
  </Tabs>
);

export default MainTabs;