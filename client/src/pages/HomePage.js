import React, { Component } from 'react';
import HomePageCard from '../components/HomePageCard';
import Stopwatch from '../components/Stopwatch';
import History from '../components/History';
import axios from 'axios';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      projects: []
    };
    this.addRecord = this.addRecord.bind(this);
    this.addProject = this.addProject.bind(this);
  }
  componentDidMount() {
    try {
      axios.get('/api/v1/projects/').then(res => {
        console.log(res.data.data.data);
        this.setState({
          projects: res.data.data.data
        });
      });
    } catch (err) {
      console.log(err);
    }
  }
  addRecord(timeSpentString, project) {
    const now = new Date();
    const newDate = now.toDateString();
    const newTime = now.toLocaleTimeString();
    let newRecord = {
      date: newDate,
      time: newTime,
      timeSpent: timeSpentString,
      project: project
    };
    this.setState(st => ({
      records: [...st.records, newRecord]
    }));
  }
  addProject() {}
  render() {
    return (
      <div className="HomePage ">
        <h4 className="my-4">Log Time</h4>
        <div className="row">
          <HomePageCard title="Timer">
            <Stopwatch
              addRecord={this.addRecord}
              projects={this.state.projects}
              addProject={this.addProject}
            />
          </HomePageCard>
          <HomePageCard size="col-md-6 col-lg-8" title="History">
            <History records={this.state.records} />
          </HomePageCard>
        </div>
      </div>
    );
  }
}
