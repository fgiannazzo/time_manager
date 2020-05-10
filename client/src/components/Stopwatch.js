import React, { Component } from 'react';
import './Stopwatch.css';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
      project: ''
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.saveTime = this.saveTime.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  startTimer() {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  }
  stopTimer() {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  }
  saveTime() {
    const { timerTime } = this.state;
    let hours = Math.floor(timerTime / 3600000);
    let minutes = Math.floor(timerTime / 60000) % 60;
    let seconds = Math.floor(timerTime / 1000) % 60;
    seconds > 30 && minutes++;
    if (hours >= 1 || minutes >= 1) {
      this.props.addRecord(
        `${hours} hours and ${minutes} minutes`,
        this.state.project
      );
    } else {
      alert('Time spent must be higher than 1 minute!');
    }
    this.resetTimer();
  }
  handleChange(e) {
    let { value } = e.target;
    this.setState({
      project: value
    });
  }
  render() {
    const { timerTime } = this.state;
    let seconds = ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ('0' + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <div className="Stopwatch">
        <div className="input-group mb-3">
          <select
            class="form-control"
            id="projectSelect"
            onChange={this.handleChange}
          >
            <option></option>
            {this.props.projects.map(p => (
              <option>{p.name}</option>
            ))}
          </select>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.addProject}
            >
              Add
            </button>
          </div>
        </div>

        <div className="Stopwatch-timer">
          <h1 className="display-4">
            {hours}:{minutes}:{seconds}
          </h1>
        </div>
        <div className="Stopwatch-controls">
          {this.state.timerOn === true && (
            <button
              className="btn btn-outline-secondary"
              onClick={this.resetTimer}
              disabled
            >
              Reset
            </button>
          )}
          {this.state.timerOn === false && (
            <button
              className="btn btn-outline-secondary"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          )}

          {this.state.timerOn === false && this.state.timerTime === 0 && (
            <button className="btn btn-outline-info" onClick={this.startTimer}>
              Start
            </button>
          )}
          {this.state.timerOn === true && (
            <button className="btn btn-outline-info" onClick={this.stopTimer}>
              Stop
            </button>
          )}
          {this.state.timerOn === false && this.state.timerTime > 0 && (
            <button className="btn btn-outline-info" onClick={this.startTimer}>
              Resume
            </button>
          )}
        </div>
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <div className="Stopwatch-submit">
            <button className="btn btn-info" onClick={this.saveTime}>
              Save
            </button>
          </div>
        )}
      </div>
    );
  }
}
