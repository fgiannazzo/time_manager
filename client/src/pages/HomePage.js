import React, { Component } from 'react';
import HomePageCard from '../components/HomePageCard';
import Stopwatch from '../components/Stopwatch';
import History from '../components/History';
import axios from 'axios';
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import ProjectModal from '../components/ProjectModal';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      projects: [],
      modalVisible: false
    };
    this.addRecord = this.addRecord.bind(this);
    this.addProject = this.addProject.bind(this);
    this.refreshHistory = this.refreshHistory.bind(this);
    this.refreshProjects = this.refreshProjects.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  refreshHistory() {
    try {
      axios
        .get('/node/api/v1/timelogs/?sort=-date', {
          withCredentials: true
        })
        .then(res => {
          this.setState({
            records: res.data.data.data
          });
        });
    } catch (err) {
      console.log(err);
    }
  }
  refreshProjects() {
    try {
      axios
        .get('/node/api/v1/projects/', {
          withCredentials: true
        })
        .then(res => {
          this.setState({
            projects: res.data.data.data
          });
        });
      this.refreshHistory();
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.refreshProjects();
  }
  addRecord(timeSpentString, timeSpentInt, projectId) {
    const now = new Date();
    const newDate = now.toDateString();
    const newTime = now.toLocaleTimeString();
    let newRecord = {
      dateString: newDate,
      timeOfDay: newTime,
      timeSpentString: timeSpentString,
      timeSpentInt: timeSpentInt,
      project: projectId
    };
    try {
      axios
        .post('/node/api/v1/timelogs/', newRecord, {
          withCredentials: true
        })
        .then(res => {
          if (res.status === 201) {
            this.refreshHistory();
          } else {
            alert('Error adding new record!');
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  toggleModal() {
    this.setState(st => ({
      modalVisible: !st.modalVisible
    }));
  }

  addProject(projectName) {
    const newProject = {
      name: projectName,
      user: this.props.userId
    };
    try {
      axios
        .post('/node/api/v1/projects/', newProject, {
          withCredentials: true
        })
        .then(res => {
          if (res.status === 201) {
            this.refreshProjects();
            this.toggleModal();
          } else {
            alert('Error adding new project!');
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="HomePage ">
        <h4 className="my-4">Log Time</h4>
        <div className="row">
          <HomePageCard size="col-md-12 col-lg-4" title="Timer">
            <Stopwatch
              addRecord={this.addRecord}
              projects={this.state.projects}
              toggleModal={this.toggleModal}
            />
          </HomePageCard>
          <HomePageCard
            size="col-md-12 col-lg-8 ml-mt-auto mt-lg-0"
            title="History"
          >
            <History records={this.state.records} />
          </HomePageCard>
        </div>
        <ProjectModal
          toggleModal={this.toggleModal}
          addProject={this.addProject}
          show={this.state.modalVisible}
        />
      </div>
    );
  }
}
