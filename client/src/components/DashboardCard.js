import React, { Component } from 'react';
import './DashboardCard.css';

export default class DashboardCard extends Component {
  static defaultProps = {
    size: 'col-md-6 col-lg-4'
  };
  render() {
    return (
      <div className={this.props.size}>
        <div className="DashboardCard-card card">
          <div className="card-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
