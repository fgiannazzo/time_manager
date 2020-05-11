import React, { Component } from 'react';
import HistoryItem from './HistoryItem';
import './History.css';

export default class History extends Component {
  render() {
    let records = this.props.records;
    return (
      <div className="History-container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time of Day</th>
              <th scope="col">Time Spent</th>
              <th scope="col">Project</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {records.map(i => (
              <HistoryItem
                date={i.dateString}
                time={i.timeOfDay}
                timeSpent={i.timeSpentString}
                project={i.project.name}
                id={i._id}
                key={i._id}
                delRecord={this.props.delRecord}
                editRecord={this.props.editRecord}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
