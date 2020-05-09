import React, { Component } from 'react';
import './HistoryItem.css';

export default class HistoryItem extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.date}</th>
        <td>{this.props.time}</td>
        <td>{this.props.timeSpent}</td>
        <td>{this.props.project}</td>
      </tr>
    );
  }
}
