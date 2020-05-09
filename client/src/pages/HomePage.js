import React, { Component } from 'react';
import HomePageCard from '../components/HomePageCard';
import Stopwatch from '../components/Stopwatch';
import History from '../components/History';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
    this.addRecord = this.addRecord.bind(this);
  }
  addRecord(timeSpentString) {
    const now = new Date();
    const newDate = now.toDateString();
    const newTime = now.toLocaleTimeString();
    let newRecord = {
      date: newDate,
      time: newTime,
      timeSpent: timeSpentString,
      project: 'Studies'
    };
    this.setState(st => ({
      records: [...st.records, newRecord]
    }));
  }
  render() {
    return (
      <div className="HomePage ">
        <h4 className="my-4">Log Time</h4>
        <div className="row">
          <HomePageCard title="Timer">
            <Stopwatch addRecord={this.addRecord} />
          </HomePageCard>
          <HomePageCard size="col-md-6 col-lg-8" title="History">
            <History records={this.state.records} />
          </HomePageCard>
        </div>
      </div>
    );
  }
}
