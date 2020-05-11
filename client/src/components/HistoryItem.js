import React, { Component } from 'react';
import './HistoryItem.css';
import edit from './../img/edit.svg';
import del from './../img/delete.svg';

export default class HistoryItem extends Component {
  constructor(props) {
    super(props);
    this.delRecord = this.delRecord.bind(this);
    this.editRecord = this.editRecord.bind(this);
  }
  delRecord() {
    this.props.delRecord(this.props.id);
  }
  editRecord() {
    this.props.editRecord(this.props.id);
  }
  render() {
    return (
      <tr>
        <th scope="row">{this.props.date}</th>
        <td>{this.props.time}</td>
        <td>{this.props.timeSpent}</td>
        <td>{this.props.project}</td>
        <td>
          <div
            className="btn-group HistoryItem-controls"
            role="group"
            aria-label="recordControls"
          >
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={this.editRecord}
            >
              <img className="HistoryItem-icon" src={edit} alt="edit icon" />
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={this.delRecord}
            >
              <img className="HistoryItem-icon" src={del} alt="edit icon" />
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
